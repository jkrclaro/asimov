import os, logging
import unittest
from dotenv import find_dotenv, load_dotenv

from webprechaun.libs.netlify import Netlify


load_dotenv(find_dotenv())


class TestNetlify(unittest.TestCase):

    def setUp(self):
        self.netlify = Netlify(os.environ['NETLIFY_ACCESS_TOKEN'])

    def test_create_site(self):
        response = self.netlify.create_site('webprechaun-1')
        assert 200 == 200

    def test_get_sites(self):
        response = self.netlify.get_sites()
        assert 200 == 200

    def test_deploy_site(self):
        site_id = self.netlify.get_site_id('webprechaun-1')
        response = self.netlify.deploy_site(site_id)
        assert 200 == 200

if __name__ == '__main__':
    unittest.main()
