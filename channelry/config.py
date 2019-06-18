import os

basedir = os.path.abspath(os.path.dirname(__file__))
media = os.path.join(os.getcwd(), 'media')


class Config(object):
    # flask
    SECRET_KEY = os.environ['SECRET_KEY']

    # sqlalchemy
    SQLALCHEMY_TRACK_MODIFICATIONS = True
    SQLALCHEMY_DATABASE_URI = os.environ['SQLALCHEMY_DATABASE_URI']

    # flask-mail
    MAIL_SERVER = 'smtp.gmail.com'
    MAIL_PORT = 587
    MAIL_USE_TLS = True
    MAIL_USE_SSL = False
    MAIL_USERNAME = os.environ['MAIL_USERNAME']
    MAIL_PASSWORD = os.environ['MAIL_PASSWORD']
    MAIL_DEFAULT_SENDER = f"Channelry '{MAIL_USERNAME}'"


class Production(Config):
    pass


class Development(Config):
    SEND_FILE_MAX_AGE_DEFAULT = 0
    UPLOADED_PHOTOS_DEST = media


class Testing(Config):
    TESTING = True
    WTF_CSRF_ENABLED = False
