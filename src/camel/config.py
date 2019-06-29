import os

basedir = os.path.abspath(os.path.dirname(__file__))
media = os.path.join(os.getcwd(), 'media')


class Config(object):
    # flask
    SECRET_KEY = os.environ.get('SECRET_KEY', 'dev-secret-key')
    PASSWORD_SALT = os.environ.get('PASSWORD_SALT', 'dev-password-salt')

    SQLALCHEMY_TRACK_MODIFICATIONS = True
    SQLALCHEMY_DATABASE_URI = os.environ.get('SQLALCHEMY_DATABASE_URI', 'postgresql://developer:12345@database:5432/postgres')

    MAILGUN_API_KEY = os.environ.get('MAILGUN_API_KEY', 'key-747887c03c9d13477fe01a82f2ebcbdb')

    RECAPTCHA_SITE_KEY = os.environ.get('RECAPTCHA_SITE_KEY', '6LcsS6sUAAAAAAizvn3pLskUbL02e5u2AWQ55Gff')
    RECAPTCHA_SECRET_KEY = os.environ.get('RECAPTCHA_SECRET_KEY', '6LcsS6sUAAAAABmbCKxQzCQj1QM3HU2QNQxs9hZq')

    ETSY_API_KEY = os.environ.get('ETSY_API_KEY', 'tqoskxgptlbrc4l9nocxbks9')
    ETSY_SECRET_KEY = os.environ.get('ETSY_SECRET_KEY', '9nu3b32vl7')


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
