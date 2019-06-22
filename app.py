import os
import logging
from dotenv import find_dotenv, load_dotenv

from src.channelry import create_app

logging.getLogger().setLevel(logging.INFO)
load_dotenv(find_dotenv())

config = os.getenv('FLASK_ENV', 'development')
app = create_app(config)
