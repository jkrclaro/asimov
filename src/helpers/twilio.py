from flask import current_app
from flask import _app_ctx_stack as stack

from twilio.rest import Client


class Twilio:

    def __init__(self, app=None):
        self.app = app
        if app:
            self.init_app(app)

    def init_app(self, app):
        app.teardown_appcontext(self.teardown)

    @property
    def client(self):
        ctx = stack.top
        if ctx is not None:
            if not hasattr(ctx, 'twilio_client'):
                username = current_app.config.get('TWILIO_AUTH_SID')
                account_sid = current_app.config.get('TWILIO_ACCOUNT_SID')
                if username is None:
                    username = account_sid
                elif account_sid is None:
                    account_sid = username
                password = current_app.config['TWILIO_AUTH_TOKEN']
                ctx.twilio_client = Client(
                    username=username,
                    password=password,
                    account_sid=account_sid
                )
            return ctx.twilio_client

    def teardown(self, exception):
        context = stack.top
        if hasattr(context, 'twilio_client'):
            del context.twilio_client


def get_phones(client: Client) -> list:
    """

    :param client:
    :return:
    """
    return [
        {'number': phone.phone_number, 'platform': 'twilio'}
        for phone in client.incoming_phone_numbers.list()
    ]


def get_contacts(client: Client) -> dict:
    """

    :param client:
    :return:
    """
    messages = client.messages.list()
    contacts = {}

    for message in messages:
        number = message.to
        if number not in contacts.keys():
            contacts[number] = {
                'last_message': message.body,
                'last_message_date_sent': message.date_sent,
            }

    return contacts
