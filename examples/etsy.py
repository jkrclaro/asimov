import os

from src import etsy


def main():
    etsy.api_key = os.environ.get('ETSY_API_KEY', 'tqoskxgptlbrc4l9nocxbks9')
    etsy.secret_key = os.environ.get('ETSY_SECRET_KEY', '9nu3b32vl7')
    etsy.callback_uri = 'oob'

    scopes = ('email_r', 'listings_r', 'listings_w', 'listings_d')
    login_url = etsy.authenticate(scopes)
    print(login_url)


if __name__ == '__main__':
    main()
