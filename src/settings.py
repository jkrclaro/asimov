import os
import sys
import logging
from distutils.util import strtobool

from django.contrib.messages import constants as messages

import stripe

from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Django
SITE_ID = 1
DEBUG = bool(strtobool(os.environ['DEBUG']))
SECRET_KEY = os.environ['SECRET_KEY']
STATICFILES_DIRS = (
    os.path.join(BASE_DIR, 'static'),
)
STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
ROOT_URLCONF = 'src.urls'
WSGI_APPLICATION = 'src.wsgi.application'
LOGIN_URL = '/login'
LOGIN_REDIRECT_URL = '/'
AUTH_USER_MODEL = 'pxdcast.User'
MAX_UPLOAD_SIZE = 524288000

# Messages
MESSAGE_TAGS = {
    messages.DEBUG: 'alert-info',
    messages.INFO: 'alert-info',
    messages.SUCCESS: 'alert-success',
    messages.WARNING: 'alert-warning',
    messages.ERROR: 'alert-danger',
}

# Email
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_PORT = 587
EMAIL_HOST_USER = os.environ.get('MAILGUN_USERNAME')
EMAIL_HOST_PASSWORD = os.environ.get('MAILGUN_PASSWORD')
EMAIL_USE_TLS = True
DEFAULT_FROM_EMAIL = EMAIL_HOST_USER
MAILGUN_API_KEY = os.environ.get('MAILGUN_API_KEY')

# AWS
AWS_S3_REGION_NAME = 'eu-west-1'
AWS_ACCESS_KEY_ID = os.environ['AWS_ACCESS_KEY_ID']
AWS_SECRET_ACCESS_KEY = os.environ['AWS_SECRET_ACCESS_KEY']
AWS_STORAGE_BUCKET_NAME = 'pxdcast.com'

if DEBUG:
    ALLOWED_HOSTS = ('pxdcast.localhost',)
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
        }
    }
    MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
    MEDIA_URL = '/media/'
    EMAIL_HOST = 'smtp.mailgun.org'
else:
    EMAIL_HOST = 'smtp.eu.mailgun.org'
    SECURE_HSTS_SECONDS = 1
    SECURE_HSTS_INCLUDE_SUBDOMAINS = True
    SECURE_CONTENT_TYPE_NOSNIFF = True
    SECURE_BROWSER_XSS_FILTER = True
    SECURE_SSL_REDIRECT = True
    SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')
    SESSION_COOKIE_SECURE = True
    CSRF_COOKIE_SECURE = True
    X_FRAME_OPTIONS = 'DENY'
    SECURE_HSTS_PRELOAD = True
    ALLOWED_HOSTS = ('www.pxdcast.com', 'pxdcast.com')
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql',
            'NAME': os.environ['POSTGRESQL_DATABASE'],
            'USER': os.environ['POSTGRESQL_USERNAME'],
            'PASSWORD': os.environ['POSTGRESQL_PASSWORD'],
            'HOST': os.environ['POSTGRESQL_HOST'],
            'PORT': 5432
        }
    }
    # Used by storage
    STATICFILES_STORAGE = 'src.storage.Static'
    STATICFILES_LOCATION = 'static'
    MEDIAFILES_LOCATION = 'media'
    DEFAULT_FILE_STORAGE = 'src.storage.Media'

    DOMAIN = f'https://s3-{AWS_S3_REGION_NAME}.amazonaws.com'
    MEDIA_URL = f'{DOMAIN}/{AWS_STORAGE_BUCKET_NAME}/{MEDIAFILES_LOCATION}/'

# Internationalization
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'Europe/Dublin'
USE_I18N = True
USE_L10N = True
USE_TZ = True

# Stripe
STRIPE_PUBLIC_KEY = os.environ['STRIPE_PUBLIC_KEY']
STRIPE_SECRET_KEY = os.environ['STRIPE_SECRET_KEY']
stripe.api_key = STRIPE_SECRET_KEY


INSTALLED_APPS = (
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.sites',
    'debug_toolbar',
    'src.pxdcast',
    'storages',
    'social_django',
    'widget_tweaks',
)

MIDDLEWARE = (
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'debug_toolbar.middleware.DebugToolbarMiddleware',
)

TEMPLATES = (
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'src/templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': (
                'django.contrib.auth.context_processors.auth',
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'social_django.context_processors.backends',
                'social_django.context_processors.login_redirect',
            ),
        },
    },
)

PASSWORD_VALIDATION = 'django.contrib.auth.password_validation'
AUTH_PASSWORD_VALIDATORS = (
    {
        'NAME': f'{PASSWORD_VALIDATION}.UserAttributeSimilarityValidator'
    },
    {
        'NAME': f'{PASSWORD_VALIDATION}.MinimumLengthValidator'
    },
    {
        'NAME': f'{PASSWORD_VALIDATION}.CommonPasswordValidator'
    },
    {
        'NAME': f'{PASSWORD_VALIDATION}.NumericPasswordValidator'
    },
)

AUTHENTICATION_BACKENDS = (
    'django.contrib.auth.backends.ModelBackend',
    'src.pxdcast.backends.EmailAuth',
    'social_core.backends.twitter.TwitterOAuth',
    'social_core.backends.facebook.FacebookOAuth2',
    'social_core.backends.linkedin.LinkedinOAuth2',
    'social_core.backends.instagram.InstagramOAuth2'
)

AWS_S3_OBJECT_PARAMETERS = {
    'CacheControl': 'max-age=0',
}

SOCIAL_AUTH_PIPELINE = (
    'social_core.pipeline.social_auth.social_details',
    'social_core.pipeline.social_auth.social_uid',
    'social_core.pipeline.social_auth.social_user',
    'social_core.pipeline.user.get_username'
)

INTERNAL_IPS = ('127.0.0.1',)

logging.basicConfig(stream=sys.stdout, level=logging.INFO)