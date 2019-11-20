import os

basedir = os.path.abspath(os.path.dirname(__file__))
media = os.path.join(os.getcwd(), 'media')


class Config(object):
    # flask
    SECRET_KEY = os.environ.get('SECRET_KEY', 'dev-secret-key')
    PASSWORD_SALT = os.environ.get('PASSWORD_SALT', 'dev-password-salt')

    SQLALCHEMY_TRACK_MODIFICATIONS = True
    SQLALCHEMY_DATABASE_URI = os.environ.get('SQLALCHEMY_DATABASE_URI', 'postgresql://developer:12345@database:5432/postgres')

    MAILGUN_API_KEY = os.environ.get('MAILGUN_API_KEY', 'fdbf8fa4841910a4ad722160df88d418-f877bd7a-31ac7f0e')

    RECAPTCHA_SITE_KEY = os.environ.get('RECAPTCHA_SITE_KEY', '6LfspLAUAAAAAE5esh-S6WTsSo29geQl_GqZJaT8')
    RECAPTCHA_SECRET_KEY = os.environ.get('RECAPTCHA_SECRET_KEY', '6LfspLAUAAAAAJ9Xmfl5xeTFH5gL7D7VhWhvsI4H')

    ETSY_API_KEY = os.environ.get('ETSY_API_KEY', 'tqoskxgptlbrc4l9nocxbks9')
    ETSY_SECRET_KEY = os.environ.get('ETSY_SECRET_KEY', '9nu3b32vl7')

    AWS_ACCESS_KEY_ID = os.environ.get('AWS_ACCESS_KEY_ID')
    AWS_SECRET_ACCESS_KEY = os.environ.get('AWS_SECRET_ACCESS_KEY')

    TWILIO_ACCOUNT_SID = os.environ.get('TWILIO_ACCOUNT_SID')
    TWILIO_AUTH_TOKEN = os.environ.get('TWILIO_AUTH_TOKEN')


class Production(Config):
    RECAPTCHA_USE_SSL = True


class Development(Config):
    SEND_FILE_MAX_AGE_DEFAULT = 0
    UPLOADED_PHOTOS_DEST = media


class Testing(Config):
    TESTING = True
    WTF_CSRF_ENABLED = False
    SECRET_KEY = '12345'
    SQLALCHEMY_DATABASE_URI = 'sqlite://'
