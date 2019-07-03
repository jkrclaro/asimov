import os
import tempfile

import pytest
from flask import Flask

from src.camel import create_app
from src.camel.models import db
from src.camel.models.auth import User, Account
from src.camel.models.dashboard import Channel, Platform


@pytest.fixture
def app():
    app = create_app('testing')
    db_fd, app.config['DATABASE'] = tempfile.mkstemp()

    with app.app_context():
        db.create_all(app=app)
        user = User('john@doe.com', 'johndoe12345')
        db.session.add(user)
        db.session.commit()
        account = Account(1)
        db.session.add(account)
        db.session.commit()
        db.session.add(Platform('etsy'))
        db.session.commit()

    yield app

    os.close(db_fd)
    os.unlink(app.config['DATABASE'])


def test_platforms_initial(app: Flask):
    with app.app_context():
        platforms = Platform.query.all()
        assert len(platforms) == 1


def test_channel_model_create(app: Flask):
    with app.app_context():
        user = User.query.get(1)
        platform_etsy = Platform.query.filter_by(name='etsy').first()
        channel = Channel(platform_etsy.id, user.account.id)
        db.session.add(channel)
        db.session.commit()
        print(channel)
