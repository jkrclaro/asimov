import unittest

from webprechaun.libs.netlify import Netlify


class TestNetlify(unittest.TestCase):

    def setUp(self):
        self.netlify = Netlify('12345')

    def test_create_site(self):
        assert True


if __name__ == '__main__':
    unittest.main()
