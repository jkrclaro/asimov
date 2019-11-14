from flask import (
    Blueprint,
    render_template,
    current_app,
    redirect,
    url_for,
    jsonify,
    abort
)
from flask_login import login_required

from twilio.rest import Client
from twilio.base.exceptions import TwilioException, TwilioRestException

sms_bp = Blueprint('sms', __name__)


@sms_bp.route('/send/<sender>/<receiver>')
@login_required
def send(sender: str, receiver: str):
    account_sid = current_app.config['TWILIO_ACCOUNT_SID']
    auth_token = current_app.config['TWILIO_AUTH_TOKEN']
    client = Client(account_sid, auth_token)

    message = 'Nunc pharetra iaculis lacus eu tempus. Sed sit amet tempor mi.'

    try:
        client.messages.create(body=message, from_=sender, to=receiver)
        response = {'message': f'Sent SMS to {receiver}'}
    except (TwilioException, TwilioRestException):
        response = {'message': 'Something went wrong!'}

    return jsonify(**response)
