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


def test_should_fail_signup_when_it_is_empty(client):
    response = client.post(
        '/signup',
        data=json.dumps({}),
        content_type='application/json'
    )

    assert response.status_code == 400, response.json


def test_should_pass_signup_when_it_is_valid(client):
    response = client.post(
        '/signup',
        data=json.dumps({
            'email': 'johndoe@gmail.com',
            'name': 'John Doe',
            'password': 'johndoe12345',
            'confirm_password': 'johndoe12345'
        }),
        content_type='application/json'
    )

    assert response.status_code == 200, response.json


def test_should_fail_signup_when_email_exists_already(client):
    client.post(
        '/signup',
        data=json.dumps({
            'email': 'johndoe@gmail.com',
            'name': 'John Doe',
            'password': 'johndoe12345',
            'confirm_password': 'johndoe12345'
        }),
        content_type='application/json'
    )
    response = client.post(
        '/signup',
        data=json.dumps({
            'email': 'johndoe@gmail.com',
            'name': 'John Doe',
            'password': 'johndoe12345',
            'confirm_password': 'johndoe12345'
        }),
        content_type='application/json'
    )

    assert response.status_code == 409, response.json


def test_should_fail_signup_when_password_and_confirm_password_does_not_match(client):
    response = client.post(
        '/signup',
        data=json.dumps({
            'email': 'johndoe@gmail.com',
            'name': 'John Doe',
            'password': 'johndoe',
            'confirm_password': 'foobar'
        }),
        content_type='application/json'
    )

    assert response.status_code == 400, response.json


def test_should_pass_signup_when_no_name_is_provided(client):
    response = client.post(
        '/signup',
        data=json.dumps({
            'email': 'johndoe@gmail.com',
            'password': 'johndoe12345',
            'confirm_password': 'johndoe12345'
        }),
        content_type='application/json'
    )

    assert response.status_code == 200, response.json


def test_should_fail_signup_when_email_is_not_provided(client):
    response = client.post(
        '/signup',
        data=json.dumps({
            'password': 'johndoe12345',
            'confirm_password': 'johndoe12345'
        }),
        content_type='application/json'
    )

    assert response.status_code == 400, response.json


def test_should_fail_signup_when_email_is_invalid(client):
    response = client.post(
        '/signup',
        data=json.dumps({
            'email': 'johnjoe',
            'password': 'johndoe12345',
            'confirm_password': 'johndoe12345'
        }),
        content_type='application/json'
    )

    assert response.status_code == 400, response.json
