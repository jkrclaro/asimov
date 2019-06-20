import os

basedir = os.path.abspath(os.path.dirname(__file__))
media = os.path.join(os.getcwd(), 'media')


class Config(object):
    # flask
    SECRET_KEY = os.environ.get('SECRET_KEY', 'dev-secret-key')
    PASSWORD_SALT = os.environ.get('PASSWORD_SALT', 'dev-password-salt')

    # sqlalchemy
    SQLALCHEMY_TRACK_MODIFICATIONS = True
    SQLALCHEMY_DATABASE_URI = os.environ.get('SQLALCHEMY_DATABASE_URI', 'postgresql://developer:12345@database:5432/postgres')

    # mailgun
    MAILGUN_API_KEY = os.environ.get('MAILGUN_API_KEY', 'key-747887c03c9d13477fe01a82f2ebcbdb')


class Production(Config):
    DASHBOARD_URL = 'http://dashboard.channelry.com'


class Development(Config):
    SEND_FILE_MAX_AGE_DEFAULT = 0
    UPLOADED_PHOTOS_DEST = media
    DASHBOARD_URL = 'http://dashboard.localhost:3000'


class Testing(Config):
    TESTING = True
    WTF_CSRF_ENABLED = False
    SECRET_KEY = '12345'
    SQLALCHEMY_DATABASE_URI = 'sqlite://'
    DASHBOARD_URL = 'http://dashboard.localhost:3000'
