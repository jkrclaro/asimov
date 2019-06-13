import os
import io
import logging
import unittest

import responses

from src.netprechaun.netlify import Netlify


class TestNetlify(unittest.TestCase):

    def setUp(self):
        self.access_token = '12345'
        self.netlify = Netlify(self.access_token)
        self.authorization = f'Bearer {self.access_token}'
        self.site_name = 'test'
        self.site_id = 'test-12345'

    @responses.activate
    def test_create_site(self):
        url = 'https://api.netlify.com/api/v1/sites'
        responses.add(responses.POST, url)
        response = self.netlify.create_site(self.site_name)

        assert 'name=test' == response.request.body
        assert self.authorization == response.request.headers['Authorization']

    @responses.activate
    def test_get_sites(self):
        url = 'https://api.netlify.com/api/v1/sites'
        responses.add(responses.GET, url)
        response = self.netlify.get_sites()

        assert self.authorization == response.request.headers['Authorization']

    @responses.activate
    def test_get_site_id(self):
        url = 'https://api.netlify.com/api/v1/sites'
        sites = [{'name': self.site_name, 'id': self.site_id}]
        responses.add(responses.GET, url, json=sites)

        assert sites[0]['id'] == self.netlify.get_site_id('test')

    @responses.activate
    def test_deploy_site_via_zip_file(self):
        url = f'https://api.netlify.com/api/v1/sites/{self.site_id}/deploys'
        responses.add(responses.POST, url)
        zip_file = io.BufferedReader(io.BytesIO(b'1'))
        response = self.netlify.deploy_site(self.site_id, zip_file=zip_file)

        assert zip_file == response.request.body
        assert self.authorization == response.request.headers['Authorization']

if __name__ == '__main__':
    unittest.main()
