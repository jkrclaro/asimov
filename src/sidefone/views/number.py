from flask import (
    Blueprint,
    render_template,
    current_app,
    redirect,
    url_for,
    session
)


number_bp = Blueprint('number', __name__, url_prefix='/numbers')


@number_bp.route('/add')
def add():
    numbers = []
    return render_template('number/add.html', numbers=numbers)


@number_bp.route('/select/<number>')
def select(number):
    for phone in session['phones']:
        if phone['number'] == number:
            session['current_phone'] = phone

    return redirect(url_for('dashboard.index'))
