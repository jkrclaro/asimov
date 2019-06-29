import os

from src import etsy


def main():
    etsy.api_key = os.environ.get('ETSY_API_KEY')
    etsy.secret_key = os.environ.get('ETSY_SECRET_KEY')
    etsy.callback_uri = 'http://camel.localhost:3000'

    scopes = ('email_r', 'listings_r', 'listings_w', 'listings_d')
    response = etsy.request_token(scopes)
    decoded_url = etsy.decode_url(response.text)
    url = etsy.parse_login_url(decoded_url)
    print(url)


if __name__ == '__main__':
    main()
