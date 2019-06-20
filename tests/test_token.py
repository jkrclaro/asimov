import unittest

import responses

from src.libs import token

from .constants import EMAIL


class Unit(unittest.TestCase):

    def test_generate_and_confirmation_of_confirmation_token(self):
        confirmation_token = token.generate(EMAIL)
        assert len(confirmation_token) == 75

        email = token.confirm(confirmation_token)
        assert EMAIL == email

if __name__ == '__main__':
    unittest.main()
