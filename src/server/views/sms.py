from flask import (
    Blueprint,
    render_template,
    current_app,
    flash,
    g,
    request
)

import telnyx

from src import helpers
from ..forms import SMSForm
from src.server import twilio


sms_bp = Blueprint('sms', __name__, url_prefix='/sms')


@sms_bp.route('/<number>', methods=['GET'])
def get_chats(number):
    chats = twilio.client.messages.list(to=number)

    form = SMSForm()

    if form.validate_on_submit():
        sender = g.current_phone['number']
        receiver = form.receiver.data
        message = form.message.data

        try:
            current_app.twilio.messages.create(
                body=message, from_=sender, to=receiver
            )
            message, category = f"Successfully sent your " \
                                f"message to {receiver}", 'success'
        except (TwilioException, TwilioRestException) as error:
            message, category = error.msg, 'danger'
        flash(message, category)

    return render_template('sms/chats.html', number=number, chats=chats, form=form)


@sms_bp.route('/create', methods=['GET', 'POST'])
def create():
    form = SMSForm()

    if form.validate_on_submit():
        payload = request.form.to_dict()
        message = 'Unknown communications platform. SMS not sent.'
        category = 'danger'

        if payload['platform'] == 'telnyx':
            sms = helpers.telnyx.sms_build(payload)
            message, category = helpers.telnyx.sms_send(telnyx, sms)
        elif payload['platform'] == 'twilio':
            sms = helpers.twilio.sms_build(payload)
            message, category = helpers.twilio.sms_send(twilio.client, sms)

        flash(message, category)

    return render_template('sms/create.html', form=form)
