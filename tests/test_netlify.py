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

    def test_deploy_site_via_zip_file(self):
        site_id = self.netlify.get_site_id('webprechaun-1')
        try:
            with open(f'{site_id}.zip', 'rb') as zip_file:
                response = self.netlify.deploy_site(site_id, zip_file)
        except FileNotFoundError as file_not_found:
            logging.error(file_not_found)
            status = {'status': 'error', 'reason': file_not_found}
        assert 200 == 200

if __name__ == '__main__':
    unittest.main()
