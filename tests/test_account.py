import os
import unittest
import tempfile
import json

import pytest

# unit
from src.channelry.models.account import User

# integration
from src.channelry.models import db
from src.channelry import create_app
from src.channelry.forms.account import SignupForm


app = create_app('testing')


class Unit(unittest.TestCase):

    def setUp(self):
        self.email = 'john@doe.com'
        self.password = 'johndoe12345'
        self.name = 'John Doe'

    def test_password_hash(self):
        user = User(self.email, self.password, self.name)
        assert len(user.password) == 60

    def test_password_match(self):
        user = User(self.email, self.password, self.name)
        assert user.password_match('johndoe12345')


class Integration(unittest.TestCase):

    def setUp(self):
        self.email = 'john@johndoedomainorigin.com'
        self.name = 'John Doe'
        self.password = 'johndoe12345'
        self.headers = {'content_type': 'application/json'}
        self.signup_data = {
            'email': self.email,
            'name': self.name,
            'password': self.password,
            'confirm': self.password
        }
        self.app = app
        self.client = self.app.test_client()
        with self.app.app_context():
            db.create_all(app=self.app)

    def test_signup_form_is_empty(self):
        response = self.client.post('/signup', **self.headers)
        assert response.status_code == 400, response.json

    def test_signup_form_is_valid(self):
        data = json.dumps(self.signup_data)
        response = self.client.post('/signup', data=data, **self.headers)
        assert response.status_code == 200, response.json
        assert response.json == {'email': self.email}

    def test_signup_form_email_already_exists(self):
        data = json.dumps(self.signup_data)
        self.client.post('/signup', data=data, **self.headers)
        response = self.client.post('/signup', data=data, **self.headers)
        assert response.status_code == 409, response.json
        assert response.json == {'email': 'Email is already taken'}

    def tearDown(self):
        print('tearing down...')


class Functional(unittest.TestCase):

    def test_signup(self):
        assert True


if __name__ == '__main__':
    unittest.main()
