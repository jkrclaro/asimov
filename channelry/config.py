import os

basedir = os.path.abspath(os.path.dirname(__file__))
media = os.path.join(os.getcwd(), 'media')


class Config(object):
    SQLALCHEMY_TRACK_MODIFICATIONS = True


class Production(Config):
    DASHBOARD_URL = 'http://dashboard.channelry.com'
    SQLALCHEMY_DATABASE_URI = os.environ.get('SQLALCHEMY_DATABASE_URI')
    SECRET_KEY = os.environ.get('SECRET_KEY')


class Development(Config):
    SEND_FILE_MAX_AGE_DEFAULT = 0
    UPLOADED_PHOTOS_DEST = media
    DASHBOARD_URL = 'http://dashboard.localhost:3000'
    SQLALCHEMY_DATABASE_URI = 'postgresql://developer:12345@database:5432/postgres'
    SECRET_KEY = '12345'

    # Mailgun
    MAILGUN_API_KEY = 'key-747887c03c9d13477fe01a82f2ebcbdb'
    MAILGUN_USERNAME = 'postmaster@sandbox6900f04341ef4849ac5c665795230600.mailgun.org'
    MAILGUN_PASSWORD = '473734ed81785d759d9a2d69a2ac8d96-87cdd773-26e39dd2'


class Testing(Config):
    TESTING = True
    WTF_CSRF_ENABLED = False
    SECRET_KEY = '12345'
    SQLALCHEMY_DATABASE_URI = 'sqlite://'

    # Mailgun
    MAILGUN_API_KEY = 'key-747887c03c9d13477fe01a82f2ebcbdb'
    MAILGUN_USERNAME = 'postmaster@sandbox6900f04341ef4849ac5c665795230600.mailgun.org'
    MAILGUN_PASSWORD = '473734ed81785d759d9a2d69a2ac8d96-87cdd773-26e39dd2'
