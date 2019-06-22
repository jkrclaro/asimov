import pytest

from src import token


def test_should_pass_when_encrypted_token_is_valid():
    data = {'email': 'john@doe.com'}
    encrypted_token = token.encrypt(data)
    decrypted_data = token.decrypt(encrypted_token)
    assert decrypted_data.get('email') == 'john@doe.com'


def test_should_fail_when_encrypted_token_is_expired():
    data = {'email': 'john@doe.com'}
    encrypted_token = token.encrypt(data)

    with pytest.raises(token.SignatureExpired):
        token.decrypt(encrypted_token, max_age=-1)


def test_should_pass_when_encrypted_token_is_decrypted():
    data = {'email': 'john@doe.com'}
    encrypted_token = token.encrypt(data)

    decrypted_data = token.decrypt(encrypted_token)
    assert data.get('email') == decrypted_data.get('email')
