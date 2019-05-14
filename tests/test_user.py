import unittest

from pxdcast.models.users import User


class TestUserModel(unittest.TestCase):

    def setUp(self):
        self.user1 = User('foobar@gmail.com', 'foobar', 'basketball')

    def test_password_hash(self):
        self.assertEqual(len(self.user1.password), 60)

    def test_password_match(self):
        self.assertEqual(self.user1._password_match('basketball'), True)


if __name__ == '__main__':
    unittest.main()
