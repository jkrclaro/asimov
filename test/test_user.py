import unittest

from webprecon.models.users import User


class TestUserModel(unittest.TestCase):

    def test_password_hash(self):
        user = User('foobar@gmail.com', 'foobar', 'basketball')
        self.assertEqual(len(user.password), 60)

    def test_password_matches(self):
        user = User('foobar@gmail.com', 'foobar', 'basketball')
        self.assertEqual(user._password_match('basketball'), True)

if __name__ == '__main__':
    unittest.main()
