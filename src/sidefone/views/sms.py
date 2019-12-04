from flask import (
    Blueprint,
    render_template,
    current_app,
    flash,
    g
)

from twilio.rest import Client
from twilio.base.exceptions import TwilioException, TwilioRestException

from ..forms import SMSForm


sms_bp = Blueprint('sms', __name__, url_prefix='/sms')


@sms_bp.route('/')
def index():
    account_sid = current_app.config['TWILIO_ACCOUNT_SID']
    auth_token = current_app.config['TWILIO_AUTH_TOKEN']
    client = Client(account_sid, auth_token)

    messages = client.messages.list()
    chats = {}

    for message in messages:
        number = message.to
        if number not in chats.keys():
            chats[number] = {
                'last_message': message.body,
                'last_message_date_sent': message.date_sent,
            }

    return render_template('sms/index.html', chats=chats)


@sms_bp.route('/<number>', methods=['GET'])
def get_chats(number):
    account_sid = current_app.config['TWILIO_ACCOUNT_SID']
    auth_token = current_app.config['TWILIO_AUTH_TOKEN']
    client = Client(account_sid, auth_token)

    chats = client.messages.list(to=number)

    form = SMSForm()

    if form.validate_on_submit():
        sender = g.phones[0]['number']
        receiver = form.receiver.data
        message = form.message.data

        try:
            client.messages.create(body=message, from_=sender, to=receiver)
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
        account_sid = current_app.config['TWILIO_ACCOUNT_SID']
        auth_token = current_app.config['TWILIO_AUTH_TOKEN']
        client = Client(account_sid, auth_token)

        sender = g.phones[0]['number']
        receiver = form.receiver.data
        message = form.message.data

        try:
            client.messages.create(body=message, from_=sender, to=receiver)
            message, category = f"Successfully sent your " \
                                f"message to {receiver}", 'success'
        except (TwilioException, TwilioRestException) as error:
            message, category = error.msg, 'danger'
        flash(message, category)

    return render_template('sms/create.html', form=form)
