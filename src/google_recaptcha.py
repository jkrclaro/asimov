import requests

site_key = ''
secret_key = ''
verify_server = 'https://www.google.com/recaptcha/api/siteverify'


def verify(data: dict) -> bool:
    """Send reCaptcha response to verify server URL.

    JSON is negated because the server returns True if the verification fails.
    """
    data['secret_key'] = secret_key
    response = requests.post(verify_server, data=data, verify=True)
    success = not response.json().get('success', False)
    return success
