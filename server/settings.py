import os
import sys
import logging
from distutils.util import strtobool

from django.contrib.messages import constants as messages

from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Django
SITE_ID = 1
DEBUG = bool(strtobool(os.environ.get('DEBUG', 'True')))
SECRET_KEY = os.environ.get('SECRET_KEY', 'secret-key-dev')
STATICFILES_DIRS = (
    os.path.join(BASE_DIR, 'static'),
)
STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
ROOT_URLCONF = 'server.urls'
WSGI_APPLICATION = 'server.wsgi.application'
LOGIN_URL = '/login'
LOGIN_REDIRECT_URL = '/'
AUTH_USER_MODEL = 'claro.User'
MAX_UPLOAD_SIZE = 524288000

# Messages
MESSAGE_TAGS = {
    messages.DEBUG: 'alert-info',
    messages.INFO: 'alert-info',
    messages.SUCCESS: 'alert-success',
    messages.WARNING: 'alert-warning',
    messages.ERROR: 'alert-danger',
}

if DEBUG:
    ALLOWED_HOSTS = ('claro.localhost',)
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
        }
    }
    MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
    MEDIA_URL = '/media/'
else:
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
    ALLOWED_HOSTS = ('www.claro.com', 'claro.com')
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql',
            'NAME': os.environ['RDS_DATABASE'],
            'USER': os.environ['RDS_USERNAME'],
            'PASSWORD': os.environ['RDS_PASSWORD'],
            'HOST': os.environ['RDS_HOST'],
            'PORT': 5432
        }
    }
    # Used by storage
    STATICFILES_STORAGE = 'claro.storage.Static'
    STATICFILES_LOCATION = 'static'
    MEDIAFILES_LOCATION = 'media'
    DEFAULT_FILE_STORAGE = 'claro.storage.Media'

# Internationalization
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'Europe/Dublin'
USE_I18N = True
USE_L10N = True
USE_TZ = True


INSTALLED_APPS = (
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.sites',
    'debug_toolbar',
    'server.claro',
    'server.sidefone',
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
        'DIRS': [os.path.join(BASE_DIR, 'claro/templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': (
                'django.contrib.auth.context_processors.auth',
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
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
)

AWS_S3_OBJECT_PARAMETERS = {
    'CacheControl': 'max-age=0',
}

INTERNAL_IPS = ('127.0.0.1',)

logging.basicConfig(stream=sys.stdout, level=logging.INFO)