import json
import logging

from flask import (
    Blueprint, jsonify, request, current_app, render_template, redirect,
    url_for, Response
)
from marshmallow import ValidationError

import sqlalchemy

from ..jwtmanager import JWTManager
from ..models import db, get_or_create
from ..models.account import User
from ..forms.account import SignupForm
from ..schemas.account import UserSchema


account_bp = Blueprint('account', __name__)


@account_bp.route('/signup', methods=('GET'))
def signup():
    form = SignupForm(request.form)
    return render_template('account/signup.html', form=form)


@account_bp.route('/signup/action', methods=('POST'))
def signup_action():
    try:
        schema = UserSchema(strict=True)
        data, _ = schema.load(request.json)
        return redirect(url_for('home.index'))
    except ValidationError as validation_error:
        return jsonify(validation_error.messages), 400


@account_bp.route('/login', methods=['POST'])
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
        iss='channelry.com',
        user={'username': user.username},
        accessToken=jwt_manager.create_access_token(message),
        refreshToken=jwt_manager.create_refresh_token(message)
    )

    return data, 200


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
