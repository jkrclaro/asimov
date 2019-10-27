import os
import logging
from dotenv import find_dotenv, load_dotenv

from src.staticfile import create_app

logging.getLogger().setLevel(logging.INFO)
load_dotenv(find_dotenv('env/development.env'))

config = os.getenv('FLASK_ENV', 'development')
app = create_app(config)