import logging
from dotenv import find_dotenv, load_dotenv

from webprecon import create_app

logging.getLogger().setLevel(logging.INFO)

load_dotenv(find_dotenv())
application = create_app()


if __name__ == '__main__':
    application.run()
