import os
import tempfile

import pytest
from flask import Flask

from selfcarte.selfcarte import create_app
from selfcarte.selfcarte.models import db
from selfcarte.selfcarte.models.auth import User, Account
from selfcarte.selfcarte.models.auth import (
    Product,
    Inventory,
    InventoryWhenSold,
    Listing,
    Menu,
    Platform
)


def create_and_test(model, data):
    new_model = model(**data)
    db.session.add(new_model)
    db.session.commit()
    for key, value in data.items():
        assert getattr(new_model, key) == value


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


def test_product(app: Flask):
    with app.app_context():
        data = {
            'title': 'Macbook Pro',
            'url': 'https://www.apple.com/ie/shop/buy-mac/macbook-pro',
            'caption': '2.4GHz Quad-Core Processor with '
                       'Turbo Boost up to 4.1GHz '
                       '256GB Storage Touch Bar and Touch ID',
            'description': '2.4GHz quad-core '
                           '8th‑generation Intel Core i5 processor, '
                           'Turbo Boost up to 4.1GHz \n'
                           'Retina display with True Tone \n'
                           'Touch Bar and Touch ID \n'
                           'Intel Iris Plus Graphics 655 \n'
                           '8GB 2133MHz LPDDR3 memory \n'
                           '256GB SSD storage \n'
                           'Four Thunderbolt 3 ports \n'
                           'Backlit Keyboard - British',
            'account_id': 1
        }
        create_and_test(Product, data)


def test_inventory(app: Flask):
    with app.app_context():
        data = {
            'sku': 'macbook-pro-1',
            'price': 50,
            'quantity': 25,
            'is_active': True,
            'product_id': 1,
            'when_sold_id': 1
        }
        create_and_test(Inventory, data)


def test_inventory_when_sold(app: Flask):
    with app.app_context():
        data = {
            'name': 'When sold'
        }
        create_and_test(InventoryWhenSold, data)


def test_listing(app: Flask):
    with app.app_context():
        data = {
            'inventory_id': 1,
            'channel_id': 1
        }
        create_and_test(Listing, data)


def test_menu(app: Flask):
    with app.app_context():
        data = {
            'platform_id': 1,
            'account_id': 1,
        }
        create_and_test(Menu, data)


def test_platform(app: Flask):
    with app.app_context():
        data = {
            'name': 'Etsy'
        }
        create_and_test(Platform, data)

