import os

basedir = os.path.abspath(os.path.dirname(__file__))
media = os.path.join(os.getcwd(), 'media')


class Config(object):
    SQLALCHEMY_TRACK_MODIFICATIONS = True


class Production(Config):
    DASHBOARD_URL = 'http://channelry.com'
    SQLALCHEMY_DATABASE_URI = os.environ.get('SQLALCHEMY_DATABASE_URI')
    SECRET_KEY = os.environ.get('SECRET_KEY')


class Development(Config):
    SEND_FILE_MAX_AGE_DEFAULT = 0
    UPLOADED_PHOTOS_DEST = media
    DASHBOARD_URL = 'http://channelry.localhost:3000'
    SQLALCHEMY_DATABASE_URI = 'postgresql://john:12345@localhost:5432/postgres'
    SECRET_KEY = '12345'


class Testing(Config):
    TESTING = True
    WTF_CSRF_ENABLED = False
    SECRET_KEY = '12345'
    SQLALCHEMY_DATABASE_URI = 'sqlite://'
