import logging
from dotenv import find_dotenv, load_dotenv

from webprechaun import create_app

logging.getLogger().setLevel(logging.INFO)

load_dotenv(find_dotenv())
app = create_app()


if __name__ == '__main__':
    app.run()
