import urllib

import requests
from requests_oauthlib import OAuth1

base_url = 'https://openapi.etsy.com/v2/oauth'
api_key = ''
secret_key = ''
callback_uri = 'oob'


def authenticate(scopes: tuple) -> str:
    """Perform OAuth authentication to get login URL.

    :param scopes: Permission scopes to be enabled.
    """
    scopes = '&'.join(scopes)
    auth = OAuth1(api_key, client_secret=secret_key, callback_uri=callback_uri)
    url = f'{base_url}/request_token?scope={scopes}'
    response = requests.post(url, auth=auth)
    login_url_unquoted = urllib.parse.unquote(response.text)
    login_url = login_url_unquoted.replace('login_url=', '')
    return login_url
