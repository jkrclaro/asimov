import os
import logging

from flask import Flask
from flask_mail import Mail
from flask_marshmallow import Marshmallow
from flask_cors import CORS
from flask_talisman import Talisman

mail = Mail()
marshmallow = Marshmallow()
cors = CORS()
talisman = Talisman()


def create_app():
    app = Flask(__name__)
    if os.getenv('FLASK_ENV', None):
        config = 'pxdcast.config.Development'
        logging_level = logging.DEBUG
    else:
        config = 'pxdcast.config.Production'
        logging_level = logging.INFO
        talisman.init_app(app)

    app.logger.setLevel(logging_level)
    app.config.from_object(config)

    mail.init_app(app)
    marshmallow.init_app(app)
    cors.init_app(app)

    from .models import db
    db.init_app(app)

    from .views.users import users_blueprint
    from .views.home import home_blueprint
    app.register_blueprint(users_blueprint)
    app.register_blueprint(home_blueprint)

    return app
