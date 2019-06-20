import unittest

import responses

from libs import token

EMAIL = 'john@doe.com'


class TestToken(unittest.TestCase):

    def test_generate_and_confirmation_of_confirmation_token(self):
        confirmation_token = token.generate(EMAIL)
        assert len(confirmation_token) == len('ImpvaG5AZG9lLmNvbSI.XQl8SA.G_s2YhgEAo2oVmlybw0AUoL45Sg')

        email = token.confirm(confirmation_token)
        assert EMAIL == email

if __name__ == '__main__':
    unittest.main()
