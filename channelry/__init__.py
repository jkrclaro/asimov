import os

from flask import Flask
from flask_mail import Mail
from flask_marshmallow import Marshmallow
from flask_cors import CORS
from flask_jwt_extended import JWTManager

mail = Mail()
marshmallow = Marshmallow()
cors = CORS()
jwtmanager = JWTManager()


def create_app(config: str):
    app = Flask(__name__)
    app.config.from_object(f'channelry.config.{config.title()}')

    mail.init_app(app)
    marshmallow.init_app(app)
    cors.init_app(app)
    jwtmanager.init_app(app)

    from .models import db
    db.init_app(app)

    from .models.account import User

    from .views.account import account_bp
    from .views.home import home_blueprint
    app.register_blueprint(account_bp)
    app.register_blueprint(home_blueprint)

    return app
