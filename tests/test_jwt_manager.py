import unittest

from webprecon.libs.jwt_manager import JWTManager


class TestJWTManager(unittest.TestCase):

    def setUp(self):
        self.MESSAGE = {'email': 'test@gmail.com'}
        self.jwt_manager = JWTManager('12345')
        self.access_token = self.jwt_manager.create_access_token(self.MESSAGE)

    def test_create_access_token(self):
        assert len(self.access_token) == 139


    def test_decode(self):
        assert self.jwt_manager.decode_token(self.access_token) == self.MESSAGE

if __name__ == '__main__':
    unittest.main()