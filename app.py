import logging
from dotenv import find_dotenv, load_dotenv

from channelry import create_app

logging.getLogger().setLevel(logging.INFO)

load_dotenv(find_dotenv())
app = create_app('development')


if __name__ == '__main__':
    app.run()
