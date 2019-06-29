import os
import json
import tempfile

import pytest
from flask import Flask

from src.camel import create_app
from src.camel.models import db
from src.camel.models.auth import User, Account
from src.camel.models.product import Product


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


def test_product_model_create(app: Flask):
    with app.app_context():
        user = User.query.get(1)
        title = 'Blue T-Shirt'
        account_id = user.account.id
        product = Product(title, account_id)
        db.session.add(product)
        db.session.commit()
        assert user.account.id == product.account_id
