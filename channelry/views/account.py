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

from libs import mailgun, token, dashboard
from channelry.models import db
from channelry.models.account import User
from channelry.schemas.account import (
    SignupSchema,
    LoginSchema,
    ProfileEditSchema
)


account_bp = Blueprint('account', __name__)


def jsonify_validation_error(validation_error: ValidationError):
    """Convert validation error messages to be parsable in the Dashboard.

    :param validation_error: ValidationError raised by marshmallow
    """
    message = {}
    for field, reason in validation_error.messages.items():
        message = {'field': field, 'reason': reason[0]}
    return message


def send_confirmation_email(email: str, name: str=''):
    to_email = f'{name} {email}' if name else email
    confirmation_token = token.generate_confirmation_token(email)
    uri = f'email/confirm?confirmation_token={confirmation_token}'
    confirmation_url = f'{dashboard.url()}/{uri}'
    html = render_template(
        'account/email/confirm_email.html',
        confirmation_url=confirmation_url
    )
    mailgun.send_email(
        'Confirm your Channelry email address!',
        [to_email],
        html=html,
    )


@account_bp.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'GET':
        return dashboard.go('signup')

    try:
        schema = SignupSchema(strict=True)
        email = request.json.get('email')
        name = request.json.get('name')
        password = request.json.get('password')
        confirm = request.json.get('confirm')
        data, _ = schema.load({
            'email': email,
            'name': name,
            'password': password,
            'confirm': confirm
        })

        user = User(email, password, name)
        user_exist = User.query.filter_by(email=email).first()
        if user_exist:
            return jsonify(field='email', reason='Email is already taken'), 400
        else:
            db.session.add(user)
            db.session.commit()

            send_confirmation_email(email, name=name)

        return jsonify(email=email)

    except ValidationError as validation_error:
        return jsonify(jsonify_validation_error(validation_error)), 400


@account_bp.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'GET':
        return dashboard.go('login')

    try:
        schema = LoginSchema(strict=True)
        email = request.json.get('email')
        password = request.json.get('password')
        confirm_email = request.json.get('confirmEmail')
        data, _ = schema.load({
            'email': email,
            'password': password
        })

        user = User.query.filter_by(email=email).first()
        if user and user.password_match(password):
            if confirm_email:
                current_app.logger.debug(f'Confirming email {email}')
                user.is_confirmed = True
                db.session.add(user)
                db.session.commit()

            access_token = create_access_token(identity=email)
            refresh_token = create_refresh_token(identity=email)
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
    try:
        confirmation_token = request.json.get('confirmation_token')
        current_app.logger.debug(f'Confirmation token: {confirmation_token}')
        email = token.confirm_conformation_token(confirmation_token)
    except:
        current_app.logger.debug('Invalid confirmatiok token')
        return jsonify(message='Confirmation link is invalid or expired')

    current_app.logger.debug(f'Decrypted email: {email}')
    user = User.query.filter_by(email=email).first()

    if not user or user.is_confirmed:
        current_app.logger.debug('User does not exist or already confirmed')
        return jsonify(message='Confirmation link is invalid or expired')
    else:
        current_app.logger.debug(f'Confirmed email: {email}')
        db.session.add(user)
        db.session.commit()
        return jsonify(email=email)


@account_bp.route('/email/resend', methods=['POST'])
@jwt_required
def resend_email():
    email = get_jwt_identity()
    send_confirmation_email(email)
    return jsonify(email=email)


@account_bp.route('/refresh', methods=['POST'])
@jwt_refresh_token_required
def refresh():
    email = get_jwt_identity()
    return jsonify(accessToken=create_access_token(identity=email))


@account_bp.route('/profile/details', methods=['POST'])
@jwt_required
def profile_details():
    email = get_jwt_identity()
    user = User.query.filter_by(email=email).first()
    return jsonify(
        email=user.email,
        name=user.name,
        isConfirmed=user.is_confirmed
    )


@account_bp.route('/profile/details/edit', methods=['POST'])
@jwt_required
def edit_profile_details():
    email = get_jwt_identity()
    model = request.json.get('model')
    new_email = request.json.get('email')
    current_app.logger.debug(new_email)
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

    user = User.query.filter_by(email=email).first()
    if user:
        if new_name:
            current_app.logger.debug('Updating profile name')
            user.name = new_name
        if new_email:
            current_app.logger.debug('Updating profile email')
            user.email = new_email
            user.is_confirmed = False
            send_confirmation_email(new_email)

        if current_password and new_password and confirm_password:
            if not user.password_match(current_password):
                return jsonify(
                    field='currentpassword',
                    reason='Please provide current password'
                ), 400
            elif new_password:
                current_app.logger.debug('Updating password')
                user.password = new_password

        current_app.logger.debug('Adding user...')
        db.session.add(user)
        current_app.logger.debug('Saving user...')
        db.session.commit()
        current_app.logger.debug(user)

    return jsonify(
        email=user.email,
        name=user.name,
        password=user.password,
        isConfirmed=user.is_confirmed
    )


@account_bp.route('/account/details', methods=['POST'])
@jwt_required
def account_details():
    return jsonify(name='Underarmour')
