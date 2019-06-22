import urllib

import requests
from requests_oauthlib import OAuth1

etsy_url = 'https://openapi.etsy.com/v2/oauth'
api_key = ''
secret_key = ''
callback_uri = 'oob'


def request_token(scopes: list):
    """Perform OAuth authentication to get login URL.

    Get the login URL by via
    >>> etsy = Etsy('apikey', 'secretkey')
    >>> scopes = ('email_r')
    >>> response = etsy.request_token(scopes)
    >>> print(response.text)

    :param scopes: Permission scopes to be enabled.
    """
    scopes = '&'.join(scopes)
    auth = OAuth1(api_key, client_secret=secret_key, callback_uri=callback_uri)
    return requests.post(f'{etsy_url}/request_token?scope={scopes}', auth=auth)


def decode_url(url: str):
    """Decode an encoded URL.

    Etsy returns an encoded URL after requesting the token so this decodes
    the encoded URL to make easily readable.

    :param url: Encoded url.
    """
    return urllib.parse.unquote(url)


def parse_login_url(text: str):
    """Parse login URL from URL.

    Etsy returns a long string that contains the login URL so this filters
    out the unnecessary texts inside that text.

    :param text: Long string that contains a URL.
    """
    return text.replace('login_url=', '')


def parse_oauth_token_and_secret(url: str):
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
