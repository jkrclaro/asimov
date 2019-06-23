import os
import bcrypt

from flask import Flask
from flask_mail import Mail
from flask_marshmallow import Marshmallow
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from flask_login import LoginManager

from src import mailgun, token, google_recaptcha

mail = Mail()
marshmallow = Marshmallow()
cors = CORS()
jwtmanager = JWTManager()
login_manager = LoginManager()


def create_app(config: str):
    app = Flask(__name__)
    app.config.from_object(f'src.channelry.config.{config.title()}')

    mail.init_app(app)
    marshmallow.init_app(app)
    cors.init_app(app)
    jwtmanager.init_app(app)
    login_manager.login_view = 'auth.login'
    login_manager.login_message_category = 'danger'
    login_manager.init_app(app)

    mailgun.api_key = app.config.get('MAILGUN_API_KEY')
    token.salt = bcrypt.gensalt()
    token.secret_key = app.config.get('SECRET_KEY')
    google_recaptcha.site_key = app.config.get('RECAPTCHA_SITE_KEY')
    google_recaptcha.secret_key = app.config.get('RECAPTCHA_SECRET_KEY')

    from .models import db
    db.init_app(app)

    from .models.auth import User

    @login_manager.user_loader
    def load_user(user_id):
        return User.query.get(int(user_id))

    from .views.auth import auth_bp
    from .views.home import home_bp
    from .views.dashboard import dashboard_bp
    app.register_blueprint(auth_bp)
    app.register_blueprint(home_bp)
    app.register_blueprint(dashboard_bp)

    return app
