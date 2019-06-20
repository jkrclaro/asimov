import unittest

from src.channelry.models.account import User


class TestUserModel(unittest.TestCase):

    def setUp(self):
        self.email = 'john@johndoedomainorigin.com'
        self.password = 'johndoe12345'
        self.name = 'John Doe'

    def test_password_hash(self):
        user = User(self.email, self.password, self.name)
        assert len(user.password) == 60

    def test_password_match(self):
        user = User(self.email, self.password, self.name)
        assert user.password_match('johndoe12345')


if __name__ == '__main__':
    unittest.main()
