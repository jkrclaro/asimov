import responses

from src import etsy

etsy.api_key = 'api-key'
etsy.secret_key = 'secret-key'


@responses.activate
def test_request_token():
    url = 'https://openapi.etsy.com/v2/oauth/request_token?' \
            'scope=email_r&' \
            'listings_r&' \
            'listings_w&' \
            'listings_d'
    body = 'login_url=https%3A%2F%2Fwww.etsy.com%2Foauth%2Fsignin%3F' \
        'oauth_consumer_key%3Dapikey%26' \
        'oauth_token%3Dtestoauthtoken%26' \
        'service%3Dv2_prod%26' \
        'oauth_token=testoauthtoken%26' \
        'oauth_token_secret=testoauthtokensecret%26' \
        'oauth_callback_confirmed=true%26' \
        'oauth_consumer_key=apikey%26' \
        'oauth_callback=oob'
    responses.add(responses.POST, url, body=body)
    scopes = ('email_r', 'listings_r', 'listings_w', 'listings_d',)
    login_url = etsy.authenticate(scopes)
    assert login_url == 'https://www.etsy.com/oauth/signin?' \
        'oauth_consumer_key=apikey&' \
        'oauth_token=testoauthtoken&' \
        'service=v2_prod&' \
        'oauth_token=testoauthtoken&' \
        'oauth_token_secret=testoauthtokensecret&' \
        'oauth_callback_confirmed=true&' \
        'oauth_consumer_key=apikey&' \
        'oauth_callback=oob'
