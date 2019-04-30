import base64
import hashlib

import bcrypt
from sqlalchemy import func

from . import db


class User(db.Model):
    __tablename__ = 'users'
    __table_args__ = {'extend_existing': True}
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255), unique=True)
    username = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(255))
    created_at = db.Column(db.DateTime, server_default=func.sysdate())
    updated_at = db.Column(db.DateTime, server_default=func.sysdate())

    def __init__(self, email, username, password):
        self.email = email.lower()
        self.username = username.lower()
        self.password = self._password_hash(password).decode('utf8')

    def _password_hash(self, password):
        return bcrypt.hashpw(self._base64_encode(password), bcrypt.gensalt())

    def _password_match(self, password):
        password_encoded = self.password.encode('utf8')
        return bcrypt.checkpw(self._base64_encode(password), password_encoded)

    def _base64_encode(self, password):
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
