import requests


class Etsy:

    def __init__(self, api_key: str, secret_key: str):
        self.api_key = api_key
        self.secret_key = secret_key

    def get_listings(self):
        url = f'https://openapi.etsy.com/v2/listings/active?api_key={self.api_key}'
        return requests.get(url)
