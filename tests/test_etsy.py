import unittest

import responses
from channelry.etsy import Etsy


DECODED_URL = 'login_url=https://www.etsy.com/oauth/signin?oauth_consumer_key=apikey&oauth_token=testoauthtoken&service=v2_prod&oauth_token=testoauthtoken&oauth_token_secret=testoauthtokensecret&oauth_callback_confirmed=true&oauth_consumer_key=apikey&oauth_callback=oob'


class TestEtsy(unittest.TestCase):

    def setUp(self):
        self.etsy = Etsy('apikey', 'secretkey', 'oob')

    @responses.activate
    def test_request_login_url(self):
        url = 'https://openapi.etsy.com/v2/oauth/request_token?scope=email_r&listings_r&listings_w&listings_d'
        responses.add(responses.POST, url)
        scopes = ('email_r', 'listings_r', 'listings_w', 'listings_d')
        response = self.etsy.request_token(scopes)
        assert response.url == url

    def test_decode_url(self):
        url = 'login_url=https%3A%2F%2Fwww.etsy.com%2Foauth%2Fsignin%3Foauth_consumer_key%3Dapikey%26oauth_token%3Dtestoauthtoken%26service%3Dv2_prod&oauth_token=testoauthtoken&oauth_token_secret=testoauthtokensecret&oauth_callback_confirmed=true&oauth_consumer_key=apikey&oauth_callback=oob'
        decoded_url = self.etsy.decode_url(url)
        assert decoded_url == DECODED_URL

    def test_login_url(self):
        login_url = self.etsy.parse_login_url(DECODED_URL)
        assert login_url == 'https://www.etsy.com/oauth/signin?oauth_consumer_key=apikey&oauth_token=testoauthtoken&service=v2_prod&oauth_token=testoauthtoken&oauth_token_secret=testoauthtokensecret&oauth_callback_confirmed=true&oauth_consumer_key=apikey&oauth_callback=oob'

        oauth = self.etsy.parse_oauth_token_and_secret(login_url)
        assert oauth['oauth_token'] == 'testoauthtoken'
        assert oauth['oauth_token_secret'] == 'testoauthtokensecret'
