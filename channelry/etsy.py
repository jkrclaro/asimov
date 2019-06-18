import urllib.parse

import requests
from requests_oauthlib import OAuth1


class Etsy:

    def __init__(self, api_key: str, secret_key: str, callback_uri: str='oob'):
        self.api_key = api_key
        self.secret_key = secret_key
        self.callback_uri = callback_uri

    def request_token(self, scopes: list):
        """Perform OAuth authentication to get login URL.

        Get the login URL by via
        >>> etsy = Etsy('apikey', 'secretkey')
        >>> scopes = ('email_r')
        >>> response = etsy.request_token(scopes)
        >>> print(response.text)

        :param scopes: Permission scopes to be enabled.
        """
        scopes = '&'.join(scopes)
        oauth = OAuth1(
            self.api_key,
            client_secret=self.secret_key,
            callback_uri=self.callback_uri
        )
        return requests.post(
            f'https://openapi.etsy.com/v2/oauth/request_token?scope={scopes}',
            auth=oauth
        )

    def decode_url(self, url: str):
        """Decode an encoded URL.

        Etsy returns an encoded URL after requesting the token so this decodes
        the encoded URL to make easily readable.

        :param url: Encoded url.
        """
        return urllib.parse.unquote(url)

    def parse_login_url(self, text: str):
        """Parse login URL from URL.

        Etsy returns a long string that contains the login URL so this filters
        out the unnecessary texts inside that text.

        :param text: Long string that contains a URL.
        """
        return text.replace('login_url=', '')

    def parse_oauth_token_and_secret(self, url: str):
        """Parse OAuth Token and Secret from URL.

        After a user allows access to our app, parse their token and secret

        :param url: URL used to perform OAuth authentication.
        """
        oauth = {}

        parsed = urllib.parse.urlparse(url)
        for querystring in parsed.query.split('&'):
            key, value = querystring.split('=')
            if key in ('oauth_token', 'oauth_token_secret',):
                oauth[key] = value

        return oauth


if __name__ == '__main__':
    import os
    etsy = Etsy(
        os.environ['ETSY_API_KEY'], 
        os.environ['ETSY_SECRET_KEY'],
        'http://channelry.localhost:3000'
    )
    scopes = ('email_r', 'listings_r', 'listings_w', 'listings_d')
    response = etsy.request_token(scopes)
    decoded_url = etsy.decode_url(response.text)
    url = etsy.parse_login_url(decoded_url)
    print(url)
