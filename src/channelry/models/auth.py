import base64
import hashlib

import bcrypt
from flask_login import UserMixin

from . import db


class User(db.Model, UserMixin):
    __tablename__ = 'users'
    __table_args__ = {'extend_existing': True}
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255), unique=True)
    password = db.Column(db.String(255))
    is_confirmed = db.Column(db.Boolean, default=False)
    is_staff = db.Column(db.Boolean, default=False)
    account = db.relationship('Account', uselist=False, back_populates='user')
    profile = db.relationship('Profile', uselist=False, back_populates='user')
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), server_onupdate=db.func.now())

    def __init__(
        self,
        email: str,
        password: str,
        is_confirmed: bool = False,
        is_staff: bool = False
    ):
        """SQLAlchemy model for User.

        :param email: Email of user.
        :param password: Plaintext password of user.
        :param name: First and last name of user.
        :param is_confirmed: If email is verified.
        """
        self.email = email.lower()
        self.password = self.password_hash(password).decode('utf8')
        self.is_confirmed = is_confirmed
        self.is_staff = is_staff

    def __repr__(self):
        return '<User(' \
               'email={email},' \
               'password={password},' \
               'is_confirmed={is_confirmed},' \
               'is_staff={is_staff}' \
               ')>'.format(
                email=self.email,
                password=self.password,
                is_confirmed=self.is_confirmed,
                is_staff=self.is_staff
                )

    def password_hash(self, password):
        return bcrypt.hashpw(self.base64_encode(password), bcrypt.gensalt())

    def password_match(self, password):
        password_encoded = self.password.encode('utf8')
        return bcrypt.checkpw(self.base64_encode(password), password_encoded)

    def base64_encode(self, password):
        """Generate a base64 encoded password.

        Cryptographic functions only work on bytes strings (or arrays in fact),
        therefore the provided password must be encoded to utf8.

        The bcrypt algorithm only handles passwords up to 72 characters,
        any characters beyond that are ignored.  To work around this,
        a common approach is to hash a password with a cryptographic hash
        (such as sha256) and then base64 encode it to prevent NULL byte
        problems before hashing the result with bcrypt.
        """
        password_encoded = password.encode('utf8')
        password_sha256 = hashlib.sha256(password_encoded).digest()
        return base64.b64encode(password_sha256)


class Profile(db.Model):
    __tablename__ = 'profiles'
    __table_args__ = {'extend_existing': True}
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user = db.relationship('User', back_populates='profile')
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), server_onupdate=db.func.now())

    def __init__(self, user_id: int, name: str = ''):
        self.user_id = user_id
        self.name = name

    def __repr__(self):
        return '<Profile(' \
               'name={name},' \
               'user_id={user_id}' \
               ')>'.format(
                name=self.name,
                user_id=self.user_id
                )


class Account(db.Model):
    __tablename__ = 'accounts'
    __table_args__ = {'extend_existing': True}
    id = db.Column(db.Integer, primary_key=True)
    address = db.Column(db.String(255))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user = db.relationship('User', back_populates='account')
    products = db.relationship('Product', backref='accounts')
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), server_onupdate=db.func.now())

    def __init__(self, user_id: int, address: str = ''):
        self.user_id = user_id
        self.address = address

    def __repr__(self):
        return '<Account(' \
               'address={address},' \
               'user_id={user_id}' \
               ')>'.format(
                address=self.address,
                user_id=self.user_id
                )
