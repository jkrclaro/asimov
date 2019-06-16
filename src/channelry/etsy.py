import requests


class Etsy:

    def __init__(self, api_key: str=''):
        self.api_key = api_key
        self.url = f'https://openapi.etsy.com/v2/listings/active?api_key={api_key}'

    
