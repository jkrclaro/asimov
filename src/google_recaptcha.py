import requests

site_key = ''
secret_key = ''
verify_server = 'https://www.google.com/recaptcha/api/siteverify'


def verify(data: dict) -> bool:
    data['secret_key'] = secret_key
    response = requests.post(verify_server, data=data, verify=True)
    is_robot = response.json().get('success', False)
    return is_robot
