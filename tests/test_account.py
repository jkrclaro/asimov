import os
import unittest
import tempfile
import json

import pytest

from channelry import create_app
from channelry.models import db
from channelry.models.account import User

app = create_app('testing')
EMAIL = 'john@doe.com'
FULLNAME = 'John Doe'
PASSWORD = 'johndoe12345'


class TestAccount(unittest.TestCase):

    def setUp(self):
        basedir = os.path.abspath(os.path.dirname(__file__))
        self.testdb = os.path.join(basedir, 'test.db')
        self.remove_testdb_if_exists()
        self.app = app
        self.app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{self.testdb}'
        self.client = self.app.test_client()
        with self.app.app_context():
            db.create_all(app=self.app)

    def tearDown(self):
        self.remove_testdb_if_exists()

    def remove_testdb_if_exists(self):
        if os.path.exists(self.testdb):
            os.remove(self.testdb)

    def test_signup_and_login(self):
        response = self.client.post(
            '/signup',
            data=json.dumps({
                'email': EMAIL,
                'fullname': FULLNAME,
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
            content_type='application/json'
        )
        assert response.status_code == 200, response.json

    def test_signup_confirm_does_not_match_password(self):
        response = self.client.post(
            '/signup',
            data=json.dumps({
                'email': EMAIL,
                'fullname': FULLNAME,
                'password': PASSWORD,
                'confirm': 'iamawrongincorrectpassword'
            }),
            content_type='application/json'
        )
        assert response.status_code == 400, response.json


class TestUserModel(unittest.TestCase):

    def test_password_hash(self):
        user = User(EMAIL, PASSWORD, FULLNAME)
        assert len(user.password) == 60

    def test_password_match(self):
        user = User(EMAIL, PASSWORD, FULLNAME)
        assert user.password_match('johndoe12345')

if __name__ == '__main__':
    unittest.main()
