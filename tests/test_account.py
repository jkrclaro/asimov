import os
import json
import tempfile

import pytest

from src.channelry import create_app
from src.channelry.models import db


@pytest.fixture
def client():
    app = create_app('testing')
    db_fd, app.config['DATABASE'] = tempfile.mkstemp()
    client = app.test_client()

    with app.app_context():
        db.create_all(app=app)

    yield client

    os.close(db_fd)
    os.unlink(app.config['DATABASE'])


def test_signup_when_is_empty(client):
    response = client.post(
        '/signup',
        data=json.dumps({}),
        content_type='application/json'
    )

    assert response.status_code == 400, response.json


def test_signup_when_is_valid(client):
    response = client.post(
        '/signup',
        data=json.dumps({
            'email': 'johndoe@gmail.com',
            'name': 'John Doe',
            'password': 'johndoe12345',
            'confirm': 'johndoe12345'
        }),
        content_type='application/json'
    )

    assert response.status_code == 200, response.json


def test_signup_when_email_exists_already(client):
    client.post(
        '/signup',
        data=json.dumps({
            'email': 'johndoe@gmail.com',
            'name': 'John Doe',
            'password': 'johndoe12345',
            'confirm': 'johndoe12345'
        }),
        content_type='application/json'
    )
    response = client.post(
        '/signup',
        data=json.dumps({
            'email': 'johndoe@gmail.com',
            'name': 'John Doe',
            'password': 'johndoe12345',
            'confirm': 'johndoe12345'
        }),
        content_type='application/json'
    )

    assert response.status_code == 409, response.json
    assert response.json == {'email': 'Email is already taken'}


def test_signup_when_password_and_confirm_does_not_match(client):
    response = client.post(
        '/signup',
        data=json.dumps({
            'email': 'johndoe@gmail.com',
            'name': 'John Doe',
            'password': 'johndoe',
            'confirm': 'foobar'
        }),
        content_type='application/json'
    )

    assert response.status_code == 400, response.json
    assert response.json == {
        'password': ['Please re-enter password and confirm password as they did not match']
    }


def test_signup_when_name_is_optional(client):
    response = client.post(
        '/signup',
        data=json.dumps({
            'email': 'johndoe@gmail.com',
            'password': 'johndoe12345',
            'confirm': 'johndoe12345'
        }),
        content_type='application/json'
    )

    assert response.status_code == 200, response.json


def test_signup_when_email_is_required(client):
    response = client.post(
        '/signup',
        data=json.dumps({
            'password': 'johndoe12345',
            'confirm': 'johndoe12345'
        }),
        content_type='application/json'
    )

    assert response.status_code == 400, response.json
    assert response.json == {'email': ['Please enter an email']}


def test_signup_when_email_is_invalid(client):
    response = client.post(
        '/signup',
        data=json.dumps({
            'email': 'johnjoe',
            'password': 'johndoe12345',
            'confirm': 'johndoe12345'
        }),
        content_type='application/json'
    )

    assert response.status_code == 400, response.json
    assert response.json == {'email': ['Please enter a valid email']}
