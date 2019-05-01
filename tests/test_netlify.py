import os
import unittest
from dotenv import find_dotenv, load_dotenv

from webprechaun.libs.netlify import Netlify


load_dotenv(find_dotenv())


class TestNetlify(unittest.TestCase):

    def setUp(self):
        self.netlify = Netlify(os.environ['NETLIFY_ACCESS_TOKEN'])

    def test_create_site(self):
        self.netlify.create_site('webprechaun-1')
        assert True

    def test_get_sites(self):
        self.netlify.get_sites()
        assert True


if __name__ == '__main__':
    unittest.main()
