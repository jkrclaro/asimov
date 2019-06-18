import os

basedir = os.path.abspath(os.path.dirname(__file__))
media = os.path.join(os.getcwd(), 'media')


class Config(object):
    # sqlalchemy
    SQLALCHEMY_TRACK_MODIFICATIONS = True


class Production(Config):
    DASHBOARD_URL = 'http://channelry.com'
    pass


class Development(Config):
    SEND_FILE_MAX_AGE_DEFAULT = 0
    UPLOADED_PHOTOS_DEST = media
    DASHBOARD_URL = 'http://channelry.localhost:3000'


class Testing(Config):
    TESTING = True
    WTF_CSRF_ENABLED = False
    SECRET_KEY = '12345'
