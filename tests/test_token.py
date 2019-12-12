from src import token


def test_should_pass_when_encrypted_token_is_valid():
    email = 'john@doe.com'
    token_encrypted = token.encrypt(email)
    token_decrypted = token.decrypt(token_encrypted)
    assert token_decrypted == email
