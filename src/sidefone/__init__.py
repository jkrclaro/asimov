import babel
from flask import Flask, render_template, current_app, g
from flask_login import LoginManager
from flask_migrate import Migrate

from twilio.rest import Client as TwilioClient

from src import mailgun, token, google_recaptcha

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
    app.config.from_object(f'src.sidefone.config.{config.title()}')

    login_manager.login_view = 'auth.login'
    login_manager.login_message_category = 'danger'
    login_manager.init_app(app)

    mailgun.api_key = app.config.get('MAILGUN_API_KEY')
    token.salt = app.config.get('PASSWORD_SALT')
    token.secret_key = app.config.get('SECRET_KEY')
    google_recaptcha.site_key = app.config.get('RECAPTCHA_SITE_KEY')
    google_recaptcha.secret_key = app.config.get('RECAPTCHA_SECRET_KEY')

    from .models import db
    db.init_app(app)
    migrate.init_app(app, db)

    from .models.auth import User
    @login_manager.user_loader
    def load_user(user_id: int):
        return User.query.get(int(user_id))

    @app.before_first_request
    def create_db():
        db.create_all(app=app)

    @app.before_request
    def get_numbers():
        account_sid = current_app.config['TWILIO_ACCOUNT_SID']
        auth_token = current_app.config['TWILIO_AUTH_TOKEN']
        twilio_client = TwilioClient(account_sid, auth_token)
        twilio_numbers = [
            twilio_number.phone_number
            for twilio_number in twilio_client.incoming_phone_numbers.list()
        ]

        g.numbers = twilio_numbers

    @app.context_processor
    def inject_numbers():
        return dict(numbers=g.numbers)

    from .views.auth import auth_bp
    from .views.profile import profile_bp
    from .views.dashboard import dashboard_bp
    from .views.account import account_bp
    from .views.sms import sms_bp
    blueprints = (auth_bp, profile_bp, dashboard_bp, account_bp, sms_bp)
    for blueprint in blueprints:
        app.register_blueprint(blueprint)

    app.register_error_handler(404, error_404_page)
    app.register_error_handler(500, error_500_page)

    app.jinja_env.filters['datetime'] = format_datetime

    return app
