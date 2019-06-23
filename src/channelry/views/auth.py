from flask import (
    Blueprint,
    request,
    redirect,
    render_template,
    url_for,
    current_app,
    session
)
from marshmallow import ValidationError
from flask_login import login_user, logout_user, login_required

from src import mailgun, token, google_recaptcha
from src.channelry.models import db
from src.channelry.models.auth import User
from src.channelry.forms.auth import SignupForm, LoginForm


auth_bp = Blueprint('auth', __name__)


def jsonify_validation_error(validation_error: ValidationError):
    """Convert validation error messages to be parsable in the Dashboard.

    :param validation_error: ValidationError raised by marshmallow
    """
    message = {}
    for field, reason in validation_error.messages.items():
        message[field] = reason
    return message


def send_email_confirmation(email: str, name: str='') -> None:
    """Send email in to_emails with expiring links via tokens.

    :param email: Email to be sent to.
    :param name: Name of recipient.
    """
    template = 'auth/confirm_email_template.html'
    data = {'email': email}
    encrypted_token = token.encrypt(data)
    endpoint = 'auth.activate'
    url = url_for(endpoint, t=[encrypted_token], _external=True)
    current_app.logger.debug(url)
    current_app.logger.debug('HEYO!')
    html = render_template(template, url=url)

    subject = 'Confirm your Channelry email address!'
    to_emails = [f'{name} {email}' if name else email]
    mailgun.send_email(subject, to_emails, html=html)


@auth_bp.route('/signup', methods=['GET', 'POST'])
def signup():
    recaptcha = {'site_key': google_recaptcha.site_key}
    if request.method == 'POST':
        data = {
            'response': request.form.get('g-recaptcha-response'),
            'remoteip': request.remote_addr
        }
        recaptcha['recaptcha'] = google_recaptcha.verify(data, 'registration')
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
            send_email_confirmation(email, name=name)
            login_user(user)
            return redirect(url_for('dashboard.index'))
    return render_template('auth/signup.html', form=form, **recaptcha)


@auth_bp.route('/login', methods=['GET', 'POST'])
def login():
    recaptcha = {}
    if request.method == 'POST':
        recaptcha = {'site_key': google_recaptcha.site_key}
        if session.get('attempt') == 2:
            data = {
                'response': request.form.get('g-recaptcha-response'),
                'remoteip': request.remote_addr
            }
            recaptcha['recaptcha'] = google_recaptcha.verify(data, 'login')
    form = LoginForm(request.form)
    if form.validate_on_submit():
        email = form.email.data
        password = form.password.data
        user = User.query.filter_by(email=email).first()
        if not user or not user.password_match(password):
            form.email.errors = ['Wrong email or password']
            session['attempt'] = 2 if session.get('attempt') else 1
        else:
            session.pop('attempt', None)
            login_user(user)
            return redirect(url_for('dashboard.index'))
    current_app.logger.debug(recaptcha)
    return render_template('auth/login.html', form=form, **recaptcha)


@auth_bp.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('home.index'))


@auth_bp.route('/confirm_email', methods=['GET', 'POST'])
def activate():
    logout_user()
    template = 'auth/confirm_email.html'
    message = "We couldn't find your email confirmation. Try sending another from your account settings."
    try:
        encrypted_token = request.args.get('t')
        data = token.decrypt(encrypted_token, max_age=86400)
    except (
            token.SignatureExpired,
            token.BadTimeSignature,
            token.BadSignature,
            token.BadPayload,
            token.BadHeader,
            token.BadData,
    ):
        message = 'Confirmation link is invalid or expired.'
        return render_template(template, message=message)
    except TypeError:
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


@auth_bp.route('/settings')
def settings():
    return render_template('auth/settings.html')


@auth_bp.route('/billing')
def billing():
    return render_template('auth/billing.html')
