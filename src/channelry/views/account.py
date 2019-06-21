from flask import (
    Blueprint,
    request,
    redirect,
    render_template,
    url_for
)
from marshmallow import ValidationError
from flask_login import login_user, logout_user, login_required

from src.libs import mailgun, token
from src.channelry.models import db
from src.channelry.models.account import User
from src.channelry.forms.account import SignupForm, LoginForm


account_bp = Blueprint('account', __name__)


def jsonify_validation_error(validation_error: ValidationError):
    """Convert validation error messages to be parsable in the Dashboard.

    :param validation_error: ValidationError raised by marshmallow
    """
    message = {}
    for field, reason in validation_error.messages.items():
        message[field] = reason
    return message


def send_email_confirmation(email: str, name: str=''):
    """Send email in to_emails with expiring links via tokens.

    :param email: Email to be sent to.
    :param name: Name of recipient.
    """
    data = {'email': email}
    generated_token = token.generate(data)
    url = f'/email/confirm?token={generated_token}'
    template = 'account/email/confirm_email.html'
    html = render_template(template, confirmation_url=url)

    subject = 'Confirm your Channelry email address!'
    to_emails = [f'{name} {email}' if name else email]
    mailgun.send_email(subject, to_emails, html=html)


@account_bp.route('/signup', methods=['GET', 'POST'])
def signup():
    form = SignupForm(request.form)
    if request.method == 'POST' and form.validate():
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
    return render_template('account/signup.html', form=form)


@account_bp.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm(request.form)
    if request.method == 'POST' and form.validate():
        email = form.email.data
        password = form.password.data

        user = User.query.filter_by(email=email).first()
        if not user or not user.password_match(password):
            form.email.errors = ['Wrong email or password']
        else:
            login_user(user)
            return redirect(url_for('dashboard.index'))
    return render_template('account/login.html', form=form)


@account_bp.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('home.index'))
