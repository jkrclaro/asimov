from flask import (
    Blueprint,
    render_template,
    current_app,
    redirect,
    url_for,
    session
)

from src import helpers
from src.server import twilio


number_bp = Blueprint('number', __name__, url_prefix='/numbers')


@number_bp.route('/add')
def add():
    numbers = []
    return render_template('number/add.html', numbers=numbers)


@number_bp.route('/select/<number>')
def select(number):
    for index, other_phone in enumerate(session['other_phones']):
        if other_phone['number'] == number:
            previous_phone = None
            if 'number' in session['current_phone'].keys():
                previous_phone = session['current_phone'].copy()

            session['current_phone'] = {
                'number': number,
                'platform': other_phone['platform'],
            }

            if other_phone['platform'] == 'twilio':
                twilio_chats = helpers.twilio.get_contacts(twilio.client)
                session['current_phone']['chats'] = twilio_chats
            else:
                session['current_phone']['chats'] = {}

            session['other_phones'].pop(index)

            if previous_phone:
                session['other_phones'].insert(0, previous_phone)

    return redirect(url_for('dashboard.index'))
