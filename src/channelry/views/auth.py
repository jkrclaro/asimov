from flask import (
    Blueprint,
    request,
    redirect,
    render_template,
    url_for,
    current_app,
    session,
    flash
)
from marshmallow import ValidationError
from flask_login import login_user, logout_user, login_required, current_user

from src import mailgun, token, google_recaptcha
from src.channelry.models import db
from src.channelry.models.auth import User
from src.channelry.forms.auth import (
    SignupForm,
    LoginForm,
    ForgotPasswordForm,
    ResetPasswordForm
)


auth_bp = Blueprint('auth', __name__)


def jsonify_validation_error(validation_error: ValidationError):
    """Convert validation error messages to be parsable in the Dashboard.

    :param validation_error: ValidationError raised by marshmallow
    """
    message = {}
    for field, reason in validation_error.messages.items():
        message[field] = reason
    return message


def validate_recaptcha():
    recaptcha = {'site_key': google_recaptcha.site_key}
    if request.method == 'POST':
        recaptcha_response = request.form.get('g-recaptcha-response')
        if recaptcha_response:
            data = {
                'response': recaptcha_response,
                'remoteip': request.remote_addr
            }
            recaptcha['recaptcha'] = google_recaptcha.verify(data)
        else:
            recaptcha['recaptcha'] = 'Please complete the CAPTCHA.'
    return recaptcha


def send_email(
    email: str,
    endpoint: str,
    email_template: str,
    subject: str,
    with_token: bool=True,
    name: str='',
) -> None:
    """Send email in to_emails with expiring links via tokens.

    :param email: Email to be sent to.
    :param endpoint: Primary URI for recipient to go to.
    :param email_template: Email template to be rendered.
    :param subject: Title of email.
    :param with_token: Add a token query string in endpoint.
    :param name: Name of recipient.
    """
    if with_token:
        url = url_for(endpoint, t=[token.encrypt(email)], _external=True)
    else:
        url = url_for(endpoint, _external=True)

    html = render_template(email_template, url=url, email=email)
    to_emails = [f'{name} {email}' if name else email]
    mailgun.send_email(subject, to_emails, html=html)


@auth_bp.route('/signup', methods=['GET', 'POST'])
def signup():
    if current_user.is_authenticated:
        return redirect(url_for('dashboard.index'))
    recaptcha = validate_recaptcha()
    form = SignupForm()
    if form.validate_on_submit() and not recaptcha.get('recaptcha'):
        email = form.email.data
        password = form.password.data
        name = form.name.data
        user = User(email, password, name)
        user_exist = User.query.filter_by(email=email).first()
        if user_exist:
            form.email.errors = ['Email is already taken']
        else:
            db.session.add(user)
            db.session.commit()
            endpoint = 'auth.activate'
            email_template = 'auth/email/email_confirm.html'
            subject = 'Confirm Channelry your email address!'
            send_email(email, endpoint, email_template, subject, name=name)
            login_user(user)
            return redirect(url_for('dashboard.index'))
    return render_template('auth/signup.html', form=form, **recaptcha)


@auth_bp.route('/login', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for('dashboard.index'))
    recaptcha = {}
    if session.get('attempt'):
        recaptcha = {'site_key': google_recaptcha.site_key}
        g_recaptcha_response = request.form.get('g-recaptcha-response')
        if request.method == 'POST':
            if not g_recaptcha_response:
                recaptcha['recaptcha'] = 'Please complete the CAPTCHA ' \
                                        'to complete your login.'
            else:
                data = {
                    'response': g_recaptcha_response,
                    'remoteip': request.remote_addr
                }
                recaptcha['recaptcha'] = google_recaptcha.verify(data)
    form = LoginForm(request.form)
    if form.validate_on_submit() and not recaptcha.get('recaptcha'):
        email = form.email.data
        password = form.password.data
        user = User.query.filter_by(email=email).first()
        if not user or not user.password_match(password):
            form.email.errors = ['Wrong email or password']
            session['attempt'] = True
            recaptcha = {'site_key': google_recaptcha.site_key}
        else:
            session.pop('attempt', None)
            login_user(user)
            return redirect(url_for('dashboard.index'))

    return render_template('auth/login.html', form=form, **recaptcha)


@auth_bp.route('/logout')
@login_required
def logout():
    logout_user()
    session.pop('resend_confirm_email', None)
    return redirect(url_for('home.index'))


@auth_bp.route('/confirm_email', methods=['GET', 'POST'])
def activate():
    logout_user()
    template = 'auth/confirm_email.html'
    encrypted_token = request.args.get('t')
    if encrypted_token:
        data = token.decrypt(encrypted_token, max_age=86400)
    else:
        message = "We couldn't find your email confirmation. Try sending another from your account settings."
        return render_template(template, message=message)

    form = LoginForm()
    form.email.render_kw = {'readonly': True}
    form.email.data = data.get('email')
    if form.validate_on_submit():
        email = form.email.data
        password = form.password.data
        user = User.query.filter_by(email=email).first()
        if not user.password_match(password):
            form.password.errors = ['Wrong password.']
        else:
            user.is_confirmed = True
            db.session.add(user)
            db.session.commit()
            login_user(user)
            return redirect(url_for('dashboard.index'))
    return render_template(template, form=form, message=message)


@auth_bp.route('/resend_confirm_email')
@login_required
def resend_confirm_email():
    # TODO: Should be a post
    email = current_user.email
    endpoint = 'auth.activate'
    email_template = 'auth/email/email_confirm.html'
    subject = 'Confirm Channelry your email address!'
    name = current_user.name
    send_email(email, endpoint, email_template, subject, name=name)
    session['resend_confirm_email'] = True
    return redirect(url_for('dashboard.index'))


@auth_bp.route('/forgot', methods=['GET', 'POST'])
def forgot():
    template = 'auth/forgot.html'
    recaptcha = validate_recaptcha()
    form = ForgotPasswordForm()
    if form.validate_on_submit() and not recaptcha.get('recaptcha'):
        email = form.email.data
        endpoint = 'auth.reset'
        email_template = 'auth/email/reset.html'
        subject = 'Reset your Channelry password'
        send_email(email, endpoint, email_template, subject)
        return render_template(template)
    return render_template(template, form=form, **recaptcha)


@auth_bp.route('/reset', methods=['GET', 'POST'])
def reset():
    logout_user()

    template = 'auth/reset.html'
    reset_token = request.args.get('t', '')
    if not reset_token and not token.decrypt(reset_token):
        message = 'No password reset token detected.'
        return render_template('auth/reset.html')

    form = ResetPasswordForm()
    if form.validate_on_submit():
        try:
            email = token.decrypt(request.form.get('reset_token'))
        except:
            message = 'Reset token is invalid or expired.'
            return render_template(template, message=message)
        endpoint = 'auth.forgot'
        email_template = 'auth/email/reset_success.html'
        subject = 'Your Channelry password has been changed'
        send_email(email, endpoint, email_template, subject, with_token=False)

        user = User.query.filter_by(email=email).first()
        login_user(user)
        flash('Successfully changed your Channelry password', 'success')
        return redirect(url_for('dashboard.index'))

    return render_template(template, form=form, reset_token=reset_token)


@auth_bp.route('/settings')
def settings():
    return render_template('auth/settings.html')


@auth_bp.route('/billing')
def billing():
    return render_template('auth/billing.html')
