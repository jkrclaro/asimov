import urllib

import requests
from requests_oauthlib import OAuth1

base_url = 'https://openapi.etsy.com/v2'
api_key = ''
secret_key = ''
callback_uri = 'oob'
headers = {'Content-type': 'application/x-www-form-urlencoded'}


def authenticate(scopes: tuple) -> dict:
    """Perform OAuth authentication to get login URL.

    :param scopes: Permission scopes to be enabled.
    """
    scopes = '&'.join(scopes)
    oauth = OAuth1(api_key, secret_key, callback_uri=callback_uri)
    url = f'{base_url}/oauth/request_token?scope={scopes}'
    response = requests.post(url, auth=oauth)
    login_url_unquoted = urllib.parse.unquote(response.text)
    data = {}
    for querystrings in login_url_unquoted.split('&'):
        key = querystrings.split('=')[0]
        value = querystrings.split('=')[1]
        if key == 'oauth_token_secret':
            data[key] = value
    data['login_url'] = login_url_unquoted.replace('login_url=', '')
    return data


def get_access_token(data: dict, request_token: str, request_token_secret: str):
    url = f'{base_url}/oauth/access_token'
    oauth = OAuth1(api_key, secret_key, request_token, request_token_secret)
    response = requests.post(url, auth=oauth, data=data)
    return response


def get_user_details(oauth_token: str, oauth_token_secret: str):
    url = f'{base_url}/users/__SELF__'
    oauth = OAuth1(api_key, secret_key, oauth_token, oauth_token_secret)
    response = requests.get(url, auth=oauth)
    return response


def find_all_user_shops(
    user_id: str,
    oauth_token: str,
    oauth_token_secret: str
):
    url = f'{base_url}/users/{user_id}/shops'
    oauth = OAuth1(api_key, secret_key, oauth_token, oauth_token_secret)
    response = requests.get(url, auth=oauth)
    return response
