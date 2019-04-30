from webprechaun import create_app
from webprechaun.models import db


if __name__ == '__main__':
    db.create_all(app=create_app())
