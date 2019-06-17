import os
import logging

from flask import Flask
from flask_mail import Mail
from flask_marshmallow import Marshmallow
from flask_cors import CORS

mail = Mail()
marshmallow = Marshmallow()
cors = CORS()


def create_app():
    app = Flask(__name__)
    if os.getenv('FLASK_ENV', None):
        config = 'channelry.config.Development'
    else:
        config = 'channelry.config.Production'
    app.config.from_object(config)

    mail.init_app(app)
    marshmallow.init_app(app)
    cors.init_app(app)

    from .models import db
    db.init_app(app)

    from .models.account import User

    from .views.account import account_bp
    from .views.home import home_blueprint
    app.register_blueprint(account_bp)
    app.register_blueprint(home_blueprint)

    return app
