import os
import unittest
import tempfile
import json

import pytest
from flask import request
from werkzeug import ImmutableMultiDict

from channelry import create_app
from channelry.models import db
from channelry.forms.account import SignupForm


@pytest.fixture
def client():
    app = create_app()
    db_fd, app.config['DATABASE'] = tempfile.mkstemp()
    app.config['TESTING'] = True
    client = app.test_client()

    db.create_all(app=app)

    yield client

    os.close(db_fd)
    os.unlink(app.config['DATABASE'])


def test_got(client):
    response = client.post(
        '/signup/action',
        data=json.dumps({
            'email': 'john@doe.com',
            'password': 'johndoe12345',
            'confirm': 'johndoe12345'
        }),
        content_type='application/json'
    )
    assert 302 == response.status_code


if __name__ == '__main__':
    unittest.main()
