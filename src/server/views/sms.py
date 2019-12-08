from flask import (
    Blueprint,
    render_template,
    current_app,
    flash,
    g
)

from twilio.base.exceptions import TwilioException, TwilioRestException

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
        sender = form.sender.data
        recipient = form.receiver.data
        message = form.message.data
        platform = form.platform.data
        message_success = f"Successfully sent your message to {recipient}"

        if platform == 'telnyx':
            message = 'Successfully sent message using Telnyx'
            category = 'success'
        elif platform == 'twilio':
            try:
                data = {
                    'from_': sender,
                    'to': recipient,
                    'body': message
                }
                current_app.twilio.create(**data)
                message, category = message_success, 'success'
            except (TwilioException, TwilioRestException) as error:
                message, category = error.msg, 'danger'
        else:
            message = 'Unknown communications platform. Message not sent.'
            category = 'danger'

        flash(message, category)

    return render_template('sms/create.html', form=form)
