import os
import tempfile

import pytest
from flask import Flask

from src.camel import create_app
from src.camel.models import db
from src.camel.models.auth import User, Account
from src.camel.models.dashboard import Product, ProductEtsy, Inventory


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


def test_product_and_inventory_model_create(app: Flask):
    with app.app_context():
        user = User.query.get(1)
        product = Product(user.account.id)
        db.session.add(product)
        db.session.commit()
        assert product.account_id == user.account.id, 'Product account ID ' \
                                                      'did not match User ' \
                                                      'account ID!'
        assert len(product.uid) == 18, 'Length of product UID is not 18!'

        product2 = Product(user.account.id, 'test-product')
        assert product2.uid == 'test-product', 'Custom UID is not test-product!'
        db.session.add(product2)
        db.session.commit()

        data_product_etsy = {
            'title': 'Black Leather Sandals, Women Sandals, Greek Sandals, '
                     'Leather Shoes, Summer Shoes, Gift for Her, '
                     'Made from 100% Genuine Leather.',
            'category': 'Sandals',
            'renewal': 'Manual',
            'type': 'Physical',
            'description': 'Test description'
        }
        product_etsy = ProductEtsy(**data_product_etsy)
        db.session.add(product_etsy)
        db.session.commit()
        for key, value in data_product_etsy.items():
            assert getattr(product_etsy, key) == value, 'Product did not ' \
                                                        'match expected value!'

        data_inventory = {'product_id': product.id}
        inventory = Inventory(**data_inventory)
        db.session.add(inventory)
        db.session.commit()
        assert len(inventory.sku) == 18, 'Length of inventory SKU is not 18!'
        assert inventory.price == 0
        assert inventory.available == 0
        assert inventory.incoming == 0
        assert inventory.when_sold == 'Stop selling'
        assert inventory.is_active is False
        assert inventory.product_id == product.id

        data_inventory2 = {
            'product_id': product.id,
            'available': 30,
            'when_sold': 'Stop selling',
            'incoming': 15,
            'sku': 'test-inventory-sku',
            'price': 20,
            'is_active': True
        }
        inventory2 = Inventory(**data_inventory2)
        db.session.add(inventory2)
        db.session.commit()
        for key, value in data_inventory2.items():
            assert getattr(inventory2, key) == value, 'Inventory did not ' \
                                                      'match expected value!'
