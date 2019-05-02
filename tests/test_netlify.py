import os, logging
import unittest
from dotenv import find_dotenv, load_dotenv

from webprechaun.netlify import Netlify


load_dotenv(find_dotenv())


class TestNetlify(unittest.TestCase):

    def setUp(self):
        self.netlify = Netlify(os.environ['NETLIFY_ACCESS_TOKEN'])
        self.test_site = 'webprechaun-1'
        self.test_site_id = '9e196094-68e0-4c0b-b7ec-1096902bc766'

    def test_create_site(self):
        response = self.netlify.create_site(self.test_site)
        assert dict == type(response)

    def test_get_sites(self):
        response = self.netlify.get_sites()
        assert list == type(response)

    def test_get_site_id(self):
        response = self.netlify.get_site_id(self.test_site)
        assert self.test_site_id == response

    def test_deploy_site_via_zip_file(self):
        site_id = self.netlify.get_site_id(self.test_site)
        try:
            with open(f'{site_id}.zip', 'rb') as zip_file:
                response = self.netlify.deploy_site(site_id, zip_file=zip_file)
        except FileNotFoundError as file_not_found:
            logging.error(file_not_found)
        assert dict == type(response)

if __name__ == '__main__':
    unittest.main()
