import logging

from flask import Blueprint, jsonify, request, current_app

import sqlalchemy

from webprechaun.jwtmanager import JWTManager
from webprechaun.models import db
from webprechaun.models.users import User


users_blueprint = Blueprint('user', __name__, url_prefix='/users')


@users_blueprint.route('/signup', methods=['POST'])
def signup():
    username = request.json.get('username', None)
    email = request.json.get('email', None)
    password = request.json.get('password', None)
    if not username:
        error = {'field': 'username', 'reason': 'Username is required'}
        return jsonify(message=error), 400
    if not email:
        error = {'field': 'email', 'reason': 'Email is required'}
        return jsonify(message=error), 400
    if not password:
        error = {'field': 'password', 'reason': 'Password is required'}
        return jsonify(message=error), 400
    else:
        if len(password) <= 7:
            error = {'field': 'password', 'reason': 'Password must be at least 8 characters'}
            return jsonify(message=error), 400

    user = User(email=email, password=password, username=username)
    db.session.add(user)

    try:
        db.session.commit()
    except sqlalchemy.exc.IntegrityError as error:
        db.session.rollback()
        if User.query.filter_by(email=email).first():
            error = {'field': 'email', 'reason': 'Email is already taken'}
            return jsonify(message=error), 400
        else:
            error = {'field': 'username', 'reason': 'Username is already taken'}
            return jsonify(message=error), 400

    return jsonify({}), 200


@users_blueprint.route('/login', methods=['POST'])
def login():
    email = request.json.get('email', None)
    password = request.json.get('password', None)
    if not email:
        return jsonify(message='Email is required'), 400
    if not password:
        return jsonify(message='Password is required'), 400

    user = User.query.filter_by(email=email).first()
    if not user or not user._password_match(password):
        return jsonify(message='Email or password is incorrect'), 400

    message = {'email': email}
    jwt_manager = JWTManager(current_app.config['SECRET_KEY'])

    data = jsonify(
        iss='webprechaun.com',
        user={'username': user.username},
        accessToken=jwt_manager.create_access_token(message),
        refreshToken=jwt_manager.create_refresh_token(message)
    )

    return data, 200


@users_blueprint.route('/refresh', methods=['POST'])
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
