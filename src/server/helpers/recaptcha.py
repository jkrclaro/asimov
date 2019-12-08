from flask import request

from src import google_recaptcha


def validate_recaptcha():
    recaptcha = {'site_key': google_recaptcha.site_key}
    if request.method == 'POST':
        recaptcha_response = request.form.get('g-recaptcha-response')
        if recaptcha_response:
            data = {
                'response': recaptcha_response,
                'remoteip': request.remote_addr
            }
            recaptcha['recaptcha'] = google_recaptcha.verify(data)
        else:
            recaptcha['recaptcha'] = 'Please complete the CAPTCHA.'

    return recaptcha
