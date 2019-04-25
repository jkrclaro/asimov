from webprecon.lib.bouncer import Bouncer

MESSAGE = {'email': 'test@gmail.com'}
SECRET_KEY = '12345'


def test_create_access_token():
    bouncer = Bouncer(SECRET_KEY)
    access_token = bouncer.create_access_token(MESSAGE)
    assert len(access_token) == 139


def test_decode():
    bouncer = Bouncer(SECRET_KEY)
    access_token = bouncer.create_access_token(MESSAGE)
    message = bouncer.decode_token(access_token)
    assert message == MESSAGE
