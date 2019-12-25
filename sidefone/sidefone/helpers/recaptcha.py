import requests

from flask import request

site_key = ''
secret_key = ''
verify_server = 'https://www.google.com/recaptcha/api/siteverify'


def verify(data: dict) -> bool:
    """Send reCaptcha response to verify server URL.

    JSON is negated because the server returns True if the verification fails.

    :param data: Contains `response` of CAPTCHA and `remote_ip` of host
    """
    data['secret_key'] = secret_key
    response = requests.post(verify_server, data=data, verify=True)
    recaptcha = response.json().get('success', False)
    return recaptcha


def validate():
    recaptcha = {'site_key': site_key}
    if request.method == 'POST':
        recaptcha_response = request.form.get('g-recaptcha-response')
        if recaptcha_response:
            data = {
                'response': recaptcha_response,
                'remoteip': request.remote_addr
            }
            recaptcha['recaptcha'] = verify(data)
        else:
            recaptcha['recaptcha'] = 'Please complete the CAPTCHA.'

    return recaptcha
