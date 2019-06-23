import requests

site_key = ''
secret_key = ''
verify_server = 'https://www.google.com/recaptcha/api/siteverify'


def verify(data: dict, title: str) -> bool:
    """Send reCaptcha response to verify server URL.

    JSON is negated because the server returns True if the verification fails.

    :param data: Contains `response` of CAPTCHA and `remote_ip` of host
    :param title: Title to be added in end if no CAPTCHA is provided
    """
    data['secret_key'] = secret_key
    if data.get('response'):
        response = requests.post(verify_server, data=data, verify=True)
        recaptcha = response.json().get('success', False)
    else:
        recaptcha = f'Please complete the CAPTCHA to complete your {title}.'
    return recaptcha
