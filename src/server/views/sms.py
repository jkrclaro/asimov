from flask import (
    Blueprint,
    render_template,
    flash,
    request,
    current_app,
)

import telnyx

from src import helpers
from ..forms import SMSForm
from src.server import twilio


sms_bp = Blueprint('sms', __name__, url_prefix='/sms')


@sms_bp.route('/<number>', methods=['GET'])
def get_chats(number):
    form = SMSForm()
    chats = twilio.client.messages.list(to=number)

    if form.validate_on_submit():
        payload = request.form.to_dict()

        sms = helpers.twilio.sms_build(payload)
        message, category = helpers.twilio.sms_send(twilio.client, sms)
        flash(message, category)

    context = {'number': number, 'chats': chats, 'form': form}
    return render_template('sms/chats.html', **context)


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
