import unittest

import responses
from channelry.etsy import Etsy


class TestEtsy(unittest.TestCase):

    def setUp(self):
        self.etsy = Etsy('apikey', 'secretkey')

    @responses.activate
    def test_request_login_url(self):
        url = 'https://openapi.etsy.com/v2/oauth/request_token?scope=email_r&listings_r&listings_w&listings_d'
        responses.add(responses.POST, url)
        scopes = ('email_r', 'listings_r', 'listings_w', 'listings_d')
        response = self.etsy.request_token(scopes)
        assert response.url == url
