import os

from flask_sqlalchemy import SQLAlchemy
from dotenv import find_dotenv, load_dotenv

from src.channelry import create_app
from src.channelry.models import db

from src.channelry import create_app


def main():
    config = os.environ.get('FLASK_ENV', 'development')
    dotenvfile = '.env' if config == 'development' else f'{config}.env'
    print(f'Env file: {dotenvfile}')
    load_dotenv(find_dotenv(dotenvfile))
    print(f'Database is: {os.environ["SQLALCHEMY_DATABASE_URI"]}')
    app = create_app(config)
    app.config['SQLALCHEMY_DATABASE_URI'] = app.config['SQLALCHEMY_DATABASE_URI'].replace('database', 'localhost')
    with app.app_context():
        created = db.create_all(app=app)
        print(f'Database created')


if __name__ == '__main__':
    main()
