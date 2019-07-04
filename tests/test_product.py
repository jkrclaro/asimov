import os
import tempfile

import pytest
from flask import Flask

from src.camel import create_app
from src.camel.models import db
from src.camel.models.auth import User, Account
from src.camel.models.dashboard import Product


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

    yield app

    os.close(db_fd)
    os.unlink(app.config['DATABASE'])


def test_product_model(app: Flask):
    with app.app_context():
        user = User.query.get(1)

        data_product = {
            'account_id': user.account.id,
            'title': 'AIR 1 MID - High-top trainers',
            'url': 'https://www.zalando.ie/jordan-air-jordan-1-mid-high-top-'
                   'trainers-joc12n001-g11.html',
            'caption': '',
            'description': '',
            'uid': '1234567890'
        }
        product = Product(**data_product)
        db.session.add(product)
        db.session.commit()
        assert product.account_id == user.account.id, 'Product account ID ' \
                                                      'did not match User ' \
                                                      'account ID!'
        assert product.uid == '1234567890'

        product.uid = 'air-1-mid-high-top-trainers'
        db.session.add(product)
        db.session.commit()
        assert product.uid == 'air-1-mid-high-top-trainers'

        product.uid = ''
        db.session.add(product)
        db.session.commit()
        assert len(product.uid) == 22, 'Length of product UID when set to ' \
                                       'empty string is not 22!'

        product.uid = None
        db.session.add(product)
        db.session.commit()
        assert len(product.uid) == 22, 'Length of product UID when set to ' \
                                       'a NoneType is not 22!'
