from flask import (
    Blueprint,
    render_template,
    current_app,
    redirect,
    url_for,
    jsonify,
    abort,
    flash
)
from flask_login import login_required

from twilio.rest import Client
from twilio.base.exceptions import TwilioException, TwilioRestException

from ..forms import SMSForm


sms_bp = Blueprint('sms', __name__, url_prefix='/sms')


@sms_bp.route('/')
@login_required
def index():
    return render_template('sms/index.html')


@sms_bp.route('/create', methods=['GET', 'POST'])
@login_required
def create():
    form = SMSForm()

    if form.validate_on_submit():
        account_sid = current_app.config['TWILIO_ACCOUNT_SID']
        auth_token = current_app.config['TWILIO_AUTH_TOKEN']
        client = Client(account_sid, auth_token)

        sender = form.sender.data
        receiver = form.receiver.data
        message = form.message.data

        try:
            client.messages.create(body=message, from_=sender, to=receiver)
            message, category = f"Successfully sent your " \
                                f"message to {receiver}", 'success'
        except (TwilioException, TwilioRestException):
            message, category = 'Sorry but something went wrong ' \
                                'and your message was not sent. ' \
                                'Please try again later', 'danger'
        flash(message, category)

    return render_template('sms/create.html', form=form)
