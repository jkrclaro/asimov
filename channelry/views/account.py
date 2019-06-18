import logging

import bcrypt
from flask import (
    Blueprint,
    jsonify,
    request,
    current_app,
    redirect,
    render_template
)
from flask_jwt_extended import (
    JWTManager,
    create_access_token,
)
from marshmallow import ValidationError

from ..jwtmanager import JWTManager
from ..models import db
from ..models.account import User
from ..schemas.account import SignupSchema, LoginSchema
from ..mailgun import Mailgun


account_bp = Blueprint('account', __name__)


def jsonify_validation_error(validation_error: ValidationError):
    """Convert validation error messages to be parsable in the Dashboard.

    :param validation_error: ValidationError raised by marshmallow
    """
    message = {}
    for field, reason in validation_error.messages.items():
        message = {'field': field, 'reason': reason[0]}
    return message


@account_bp.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'GET':
        return redirect(f'{current_app.config["DASHBOARD_URL"]}/signup')

    try:
        schema = SignupSchema(strict=True)
        email = request.json.get('email')
        fullname = request.json.get('fullname')
        password = request.json.get('password')
        confirm = request.json.get('confirm')
        data, _ = schema.load({
            'email': email,
            'fullname': fullname,
            'password': password,
            'confirm': confirm
        })

        user = User(email, password, fullname)
        user_exist = User.query.filter_by(email=email).first()
        if user_exist:
            return jsonify(field='email', reason='Email is already taken'), 400
        else:
            db.session.add(user)
            db.session.commit()

            html = render_template(
                'account/email/confirm_account.html',
                confirm_url='http://channelry.localhost:3000/email/confirm'
            )
            mailgun = Mailgun(current_app.config['MAILGUN_API_KEY'])
            mailgun.send_email(
                'Confirm your Channelry email address!',
                [f'{fullname} {email}'],
                html=html,
            )

        return jsonify(message=f'{email} created'), 200

    except ValidationError as validation_error:
        return jsonify(jsonify_validation_error(validation_error)), 400


@account_bp.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'GET':
        return redirect(f'{current_app.config["DASHBOARD_URL"]}/login')

    try:
        schema = LoginSchema(strict=True)
        email = request.json.get('email')
        password = request.json.get('password')
        data, _ = schema.load({
            'email': email,
            'password': password
        })

        user = User.query.filter_by(email=email).first()
        if user and user.password_match(password):
            access_token = create_access_token(identity=email)
            return jsonify(access_token=access_token), 200
        else:
            return jsonify(message='Email or password is incorrect'), 400

    except ValidationError as validation_error:
        return jsonify(validation_error.messages), 400


@account_bp.route('/refresh', methods=['POST'])
def refresh():
    logging.info(request.headers.get('refreshToken'))
    refresh_token = request.headers.get('refreshToken', None)
    if not refresh_token:
        return jsonify(message='No refresh token, login again'), 401

    jwt_manager = JWTManager(current_app.config['SECRET_KEY'])
    message = jwt_manager.decode_token(refresh_token)
    # TODO: If decoding of token fails, then return proper error status code

    data = jsonify(accessToken=jwt_manager.create_access_token(message))
    return data, 200
