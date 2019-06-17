import json
import logging

from flask import (
    Blueprint, jsonify, request, current_app, render_template, redirect,
    url_for
)

import sqlalchemy

from ..jwtmanager import JWTManager
from ..models import db
from ..models.account import User
from ..forms.account import SignupForm


account_bp = Blueprint('account', __name__)


@account_bp.route('/signup', methods=['GET', 'POST'])
def signup():
    form = SignupForm(request.form)
    if request.method == 'POST' and form.validate():
        user = User(
            form.email.data,
            form.password.data,
            form.full_name.data
        )
        db.session.add(user)
        db.session.commit()

        return redirect(url_for('home.index'))
    return render_template('account/signup.html', form=form)


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
