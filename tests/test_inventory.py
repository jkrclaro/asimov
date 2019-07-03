import os
import tempfile

import pytest
from flask import Flask

from src.camel import create_app
from src.camel.models import db
from src.camel.models.auth import User, Account
from src.camel.models.dashboard import Product, Inventory


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
        product = Product(user.account.id)
        db.session.add(product)
        db.session.commit()
        assert product.account_id == user.account.id, 'Product account ID did not match User account ID!'
        assert len(product.uid) == 18, 'Length of product UID is not 18!'

        product2 = Product(user.account.id, 'test-product')
        assert product2.uid == 'test-product', 'Custom UID is not test-product!'

        inventory = Inventory
