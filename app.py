import os
import logging
from dotenv import find_dotenv, load_dotenv

<<<<<<< HEAD
from src.warkphone import create_app
=======
from src.sidefone import create_app
>>>>>>> Add speech-bubble CSS

logging.getLogger().setLevel(logging.INFO)
load_dotenv(find_dotenv('env/development.env'))

config = os.getenv('FLASK_ENV', 'development')
app = create_app(config)