import os
import unittest
import tempfile
import json

import pytest

from src.channelry import create_app
from src.channelry.models import db
from src.channelry.models.account import User
from src.libs import token

from .constants import EMAIL, NAME, PASSWORD

app = create_app('testing')


class Integration(unittest.TestCase):

    def setUp(self):
        self.app = app
        self.client = self.app.test_client()
        with self.app.app_context():
            db.create_all(app=self.app)

    def test_signup(self):
        response = self.client.post(
            '/signup',
            data=json.dumps({
                'email': EMAIL,
                'name': NAME,
                'password': PASSWORD,
                'confirm': PASSWORD
            }),
            content_type='application/json'
        )
        assert response.status_code == 200, response.json

        response = self.client.post(
            '/login',
            data=json.dumps({
                'email': EMAIL,
                'password': PASSWORD
            }),
            content_type='application/json',
            headers={'Authorization': 'token'}
        )
        assert response.status_code == 200, response.json

        authorization = f"Bearer {response.json['accessToken']}"
        response = self.client.post(
            '/profile/details',
            content_type='application/json',
            headers={'Authorization': authorization}
        )
        assert response.status_code == 200, response.json
        assert response.json['isConfirmed'] is False

        response = self.client.post(
            '/login',
            data=json.dumps({
                'email': EMAIL,
                'password': PASSWORD,
                'isConfirmEmail': True
            }),
            content_type='application/json'
        )
        assert response.status_code == 200, response.json

        headers = {'Authorization': f"Bearer {response.json['accessToken']}"}
        response = self.client.post(
            '/profile/details',
            content_type='application/json',
            headers=headers
        )
        assert response.status_code == 200, response.json
        assert response.json['isConfirmed'] is True

        response = self.client.post(
            '/profile/details/edit',
            data=json.dumps({
                'email': 'danielday@lewis12345432.com',
                'name': 'Daniel Day-Lewis',
                'currentpassword': PASSWORD,
                'newpassword': 'danieldaylewis123',
                'confirmpassword': 'danieldaylewis123'
            }),
            content_type='application/json',
            headers=headers
        )
        assert response.status_code == 200, response.json

    def test_signup_confirm_does_not_match_password(self):
        response = self.client.post(
            '/signup',
            data=json.dumps({
                'email': EMAIL,
                'name': NAME,
                'password': PASSWORD,
                'confirm': 'iamawrongincorrectpassword'
            }),
            content_type='application/json'
        )
        assert response.status_code == 400, response.json

    def test_confirm_email(self):
        confirmation_token = token.generate(EMAIL)
        response = self.client.post(
            '/email/confirm',
            data=json.dumps({'token': confirmation_token}),
            content_type='application/json'
        )
        assert response.status_code == 410, response.json


class Unit(unittest.TestCase):

    def test_password_hash(self):
        user = User(EMAIL, PASSWORD, NAME)
        assert len(user.password) == 60

    def test_password_match(self):
        user = User(EMAIL, PASSWORD, NAME)
        assert user.password_match('johndoe12345')


if __name__ == '__main__':
    unittest.main()
