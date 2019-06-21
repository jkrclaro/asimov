import datetime

import bcrypt
from flask import (
    Blueprint,
    jsonify,
    request,
    current_app,
    redirect,
    render_template,
    url_for
)
from flask_jwt_extended import (
    JWTManager,
    create_access_token,
    jwt_required,
    get_jwt_identity,
    create_refresh_token,
    jwt_refresh_token_required
)
from marshmallow import ValidationError

from src.libs import mailgun, token, dashboard
from src.channelry.models import db
from src.channelry.models.account import User
from src.channelry.schemas.account import (
    SignupSchema,
    LoginSchema,
    ProfileEditSchema
)
from src.channelry.forms.account import SignupForm, LoginForm


account_bp = Blueprint('account', __name__)


def jsonify_validation_error(validation_error: ValidationError):
    """Convert validation error messages to be parsable in the Dashboard.

    :param validation_error: ValidationError raised by marshmallow
    """
    message = {}
    for field, reason in validation_error.messages.items():
        message = {'field': field, 'reason': reason[0]}
    return message


def send_email_confirmation(generated_token: dict, email: str, name: str=''):
    """Send email in to_emails with expiring links via tokens.

    :param generated_token: Expiring token with encrypted data.  
    :param email: Email to be sent to.
    :param name: Name of recipient.
    """
    url = f'{dashboard.url()}/email/confirm?token={generated_token}'
    template = 'account/email/confirm_email.html'
    html = render_template(template, confirmation_url=url)

    subject = 'Confirm your Channelry email address!'
    to_emails = [f'{name} {email}' if name else email]
    mailgun.send_email(subject, to_emails, html=html)


@account_bp.route('/signup')
def signup_get():
    return render_template('account/signup.html')


@account_bp.route('/signup', methods=['POST'])
def signup():
    email = request.json.get('email', '')
    name = request.json.get('name', '')
    password = request.json.get('password', '')
    confirm_password = request.json.get('confirm_password', '')
    data = {
        'email': email,
        'name': name,
        'password': password,
        'confirm_password': confirm_password
    }

    try:
        schema = SignupSchema(strict=True)
        schema.load(data)
    except ValidationError as validation_error:
        error = jsonify_validation_error(validation_error)
        current_app.logger.debug(validation_error)
        return jsonify(error), 400

    user = User(email, password, name)
    user_exist = User.query.filter_by(email=email).first()
    if user_exist:
        return jsonify(email='Email is already taken'), 409
    else:
        db.session.add(user)
        db.session.commit()

        # TODO: Send email
        return jsonify(email=email)


@account_bp.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'GET':
        form = LoginForm()
        return render_template('account/login.html', form=form)

    try:
        schema = LoginSchema(strict=True)
        email = request.json.get('email')
        password = request.json.get('password')
        is_confirm_email = request.json.get('isConfirmEmail')
        new_email = request.json.get('newEmail')
        data, _ = schema.load({
            'email': email,
            'password': password
        })

        user = User.query.filter_by(email=email).first()
        if user and user.password_match(password):
            if is_confirm_email or new_email:
                if is_confirm_email:
                    user.is_confirmed = True
                if new_email:
                    user.email = new_email
                db.session.add(user)
                db.session.commit()

            access_token = create_access_token(identity=user.id)
            refresh_token = create_refresh_token(identity=user.id)
            return jsonify({
                'accessToken': access_token,
                'refreshToken': refresh_token
            })
        else:
            return jsonify(message='Email or password is incorrect'), 400

    except ValidationError as validation_error:
        return jsonify(jsonify_validation_error(validation_error)), 400


@account_bp.route('/email/confirm', methods=['POST'])
def confirm_email():
    """Confirm that confirmation token is valid."""
    try:
        confirmation_token = request.json.get('confirmationToken')
        current_app.logger.debug(f'Confirmation token: {confirmation_token}')
        payload = token.confirm(confirmation_token)
    except:
        payload = None

    if not payload:
        current_app.logger.debug('Invalid confirmation token')
        return jsonify(message='Confirmation link is invalid or expired'), 410
    else:
        current_app.logger.debug(f'Decrypted payload: {payload}')
        return jsonify(payload)


@account_bp.route('/email/resend', methods=['POST'])
@jwt_required
def resend_email():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    if user:
        generated_token = token.generate({'email': user.email})
        send_email_confirmation(generated_token, user.email, name=user.name)
    return jsonify(email=user.email)


@account_bp.route('/refresh', methods=['POST'])
@jwt_refresh_token_required
def refresh():
    user_id = get_jwt_identity()
    return jsonify(accessToken=create_access_token(identity=user_id))


@account_bp.route('/profile/details', methods=['POST'])
@jwt_required
def profile_details():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    return jsonify(
        email=user.email,
        name=user.name,
        isConfirmed=user.is_confirmed
    )


@account_bp.route('/profile/details/edit', methods=['POST'])
@jwt_required
def edit_profile_details():
    user_id = get_jwt_identity()
    model = request.json.get('model')
    new_email = request.json.get('email')
    new_name = request.json.get('name')
    current_password = request.json.get('currentpassword')
    new_password = request.json.get('newpassword')
    confirm_password = request.json.get('confirmpassword')

    try:
        schema = ProfileEditSchema(strict=True)
        schema.only = ('email', 'name')
        data, _ = schema.load({
            'email': new_email,
            'name': new_name,
            'currentpassword': current_password,
            'confirmpassword': confirm_password,
            'newpassword': new_password,
        })
    except ValidationError as validation_error:
        current_app.logger.debug(validation_error)
        return jsonify(jsonify_validation_error(validation_error)), 400

    user = User.query.get(user_id)
    new_details = {}
    if user:
        if new_name:
            current_app.logger.debug('Updating profile name')
            user.name = new_name
            new_details['name'] = new_name

        if current_password and new_password and confirm_password:
            if not user.password_match(current_password):
                return jsonify(
                    field='currentpassword',
                    reason='Please provide current password'
                ), 400
            elif new_password:
                current_app.logger.debug('Updating password')
                user.password = new_password

        db.session.add(user)
        db.session.commit()

        if new_email and user.email != new_email:
            current_app.logger.debug('Updating profile email')
            payload = {'newEmail': new_email, 'email': user.email}
            generated_token = token.generate(payload)
            send_email_confirmation(generated_token, new_email, name=user.name)

    current_app.logger.debug(new_details)
    return jsonify(new_details)


@account_bp.route('/account/details', methods=['POST'])
@jwt_required
def account_details():
    return jsonify(name='Underarmour')

@account_bp.route('/forgot', methods=['GET'])
def forgot():
    # TODO: Finish this
    return render_template('account/forgot', form=None)
