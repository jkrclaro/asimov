import os
import tempfile

import pytest
from flask import Flask

<<<<<<< HEAD
from src.warkphone import create_app
from src.warkphone.models import db
from src.warkphone.models.auth import User, Profile
from src.warkphone.models.merchant import (
=======
from src.sidefone import create_app
from src.sidefone.models import db
from src.sidefone.models.auth import User, Profile
<<<<<<< HEAD
from src.sidefone.models.merchant import (
>>>>>>> Add speech-bubble CSS
=======
from src.sidefone.models.account import (
>>>>>>> Remove unused
    Product,
    Inventory,
    Listing,
    Menu,
)


# def create_and_test(model, data):
#     new_model = model(**data)
#     db.session.add(new_model)
#     db.session.commit()
#     for key, value in data.items():
#         assert getattr(new_model, key) == value


# @pytest.fixture
# def app():
#     app = create_app('testing')
#     db_fd, app.config['DATABASE'] = tempfile.mkstemp()
#
#     with app.app_context():
#         db.create_all(app=app)
#         user = User('john@doe.com', 'johndoe12345')
#         db.session.add(user)
#         db.session.commit()
#         account = Profile(name='Nike', user_id=user.id)
#         db.session.add(account)
#         db.session.commit()
#
#     yield app
#
#     os.close(db_fd)
#     os.unlink(app.config['DATABASE'])
#
#
# def test_product(app: Flask):
#     with app.app_context():
#         data = {
#             'title': 'Macbook Pro',
#             'description': '2.4GHz quad-core '
#                            '8th‑generation Intel Core i5 processor, '
#                            'Turbo Boost up to 4.1GHz \n'
#                            'Retina display with True Tone \n'
#                            'Touch Bar and Touch ID \n'
#                            'Intel Iris Plus Graphics 655 \n'
#                            '8GB 2133MHz LPDDR3 memory \n'
#                            '256GB SSD storage \n'
#                            'Four Thunderbolt 3 ports \n'
#                            'Backlit Keyboard - British',
#             'merchant_id': 1
#         }
#         create_and_test(Product, data)
#
#
# def test_inventory(app: Flask):
#     with app.app_context():
#         data = {
#             'sku': 'macbook-pro-1',
#             'price': 50,
#             'quantity': 25,
#             'is_active': True,
#             'product_id': 1,
#             'when_sold_id': 1
#         }
#         create_and_test(Inventory, data)
#
#
# def test_listing(app: Flask):
#     with app.app_context():
#         data = {
#             'inventory_id': 1,
#             'channel_id': 1
#         }
#         create_and_test(Listing, data)
#
#
# def test_menu(app: Flask):
#     with app.app_context():
#         data = {
#             'platform_id': 1,
#             'account_id': 1,
#         }
#         create_and_test(Menu, data)

