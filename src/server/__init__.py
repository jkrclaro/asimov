import babel
from flask import Flask, render_template, current_app, session
from flask_login import LoginManager
from flask_migrate import Migrate

import telnyx
from twilio.rest import Client as TwilioClient

from src import helpers
from src.helpers import mailgun, token, recaptcha

login_manager = LoginManager()
migrate = Migrate()


def format_datetime(value):
    return babel.dates.format_datetime(value, 'dd/MM/YYYY, HH:mm', locale='en')


def error_404_page(error):
    return render_template('error/404.html'), 404


def error_500_page(error):
    return render_template('error/500.html'), 500


def create_app(config: str):
    app = Flask(__name__)
    app.config.from_object(f'src.server.config.{config.title()}')

    login_manager.login_view = 'auth.login'
    login_manager.login_message_category = 'danger'
    login_manager.init_app(app)

    mailgun.api_key = app.config.get('MAILGUN_API_KEY')
    token.salt = app.config.get('PASSWORD_SALT')
    token.secret_key = app.config.get('SECRET_KEY')
    recaptcha.site_key = app.config.get('RECAPTCHA_SITE_KEY')
    recaptcha.secret_key = app.config.get('RECAPTCHA_SECRET_KEY')

    telnyx.api_key = app.config.get('TELNYX_API_KEY')

    twilio = TwilioClient(
        app.config.get('TWILIO_ACCOUNT_SID'),
        app.config.get('TWILIO_AUTH_TOKEN')
    )

    from .models import db
    db.init_app(app)
    migrate.init_app(app, db)

    from .models.auth import User
    @login_manager.user_loader
    def load_user(user_id: int):
        return User.query.get(int(user_id))

    @app.before_request
    def create_db():
        db.create_all(app=app)

    @app.before_request
    def get_phones():
        if 'phones' not in session.keys():
            twilios = helpers.twilio.get_phones(twilio)
            telnyxs = helpers.telnyx.get_phones(telnyx)
            session['phones'] = twilios + telnyxs

    @app.before_request
    def get_contacts():
        if 'contacts' not in session.keys():
            session['contacts'] = helpers.twilio.get_contacts(twilio)

    @app.context_processor
    def inject_numbers():
        if 'current_phone' in session.keys():
            current_phone = session['current_phone']
        else:
            current_phone = session['phones'][0]

        context = {
            'phones': session['phones'],
            'contacts': session['contacts'],
            'current_phone': current_phone
        }
        return dict(**context)

    from .views.auth import auth_bp
    from .views.profile import profile_bp
    from .views.dashboard import dashboard_bp
    from .views.account import account_bp
    from .views.sms import sms_bp
    from .views.number import number_bp
    for blueprint in (
        auth_bp,
        profile_bp,
        dashboard_bp,
        account_bp,
        sms_bp,
        number_bp
    ):
        app.register_blueprint(blueprint)

    app.register_error_handler(404, error_404_page)
    app.register_error_handler(500, error_500_page)

    app.jinja_env.filters['datetime'] = format_datetime

    return app
