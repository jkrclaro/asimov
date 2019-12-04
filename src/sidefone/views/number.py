from flask import (
    Blueprint,
    render_template,
    current_app,
    flash,
    g
)

from twilio.rest import Client
from twilio.base.exceptions import TwilioException, TwilioRestException


number_bp = Blueprint('number', __name__, url_prefix='/numbers')


@number_bp.route('/add')
def add():
    numbers = []
    return render_template('number/add.html', numbers=numbers)
