from flask_sqlalchemy import SQLAlchemy

from channelry import create_app
from channelry.models import db


if __name__ == '__main__':
    print('Creating database...')
    db.create_all(app=create_app())
    print(f'Database status: {db}')
