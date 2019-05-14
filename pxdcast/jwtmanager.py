import datetime

import jwt
from flask import request, jsonify



class JWTManager:

    def __init__(
        self, 
        secret_key: str, 
        algorithm: str='HS256',
        access_token_expiration: int=1,
        refresh_token_expiration: int=7
    ):
        """The primary class for JWTManager.
        
            :param secret_key: Unique key.
            :param algorithm: Encryption algorithm to be used.
            :param access_token_expiration: Days until access token expires
            :param refresh_token_expiration: Days until refresh token expires
        """
        self.secret_key = secret_key
        self.algorithm = algorithm
        self.access_token_expiration = access_token_expiration
        self.refresh_token_expiration = refresh_token_expiration

    def create_json_web_token(self, message: dict, expiration: int) -> dict:
        """Create a JSON Web Token.

            :param message: Message to be encoded
            :param expiration: How many days until encoding expires.
            :return: JSON Web Token
        """
        today = datetime.datetime.now()
        message['exp'] = today + datetime.timedelta(days=expiration)
        token = jwt.encode(
            message,
            self.secret_key,
            algorithm=self.algorithm
        )
        decoded_token = token.decode('ascii')
        return decoded_token

    def create_access_token(self, message: dict) -> dict:
        """Create an access token.

            :param message: Message to be encoded.
        """
        return self.create_json_web_token(message, self.access_token_expiration)

    def create_refresh_token(self, message: dict) -> dict:
        """Create a refresh token.

            :param message: Message to be encoded.
        """
        return self.create_json_web_token(message, self.refresh_token_expiration)

    def decode_token(self, encoded: dict) -> dict:
        """Decode a JSON Web Token to get its message.

            :param encoded: Token encoded by the JWTManager class.
        """
        return jwt.decode(encoded, self.secret_key, algorithms=[self.algorithm])


def access_token_required(fn):
    """Check if Authorization in header exists."""

    def wrapper(*args, **kwargs):
        if not request.headers.get('Authorization'):
            return jsonify(msg='Access token is missing'), 401
        else:
            return fn()
    return wrapper
