import os
import tempfile

import pytest

from src.selfcarte import create_app
from src.selfcarte.models import db
from src.selfcarte.models.auth import User


@pytest.fixture
def client():
    app = create_app('testing')
    db_fd, app.config['DATABASE'] = tempfile.mkstemp()
    client = app.test_client()

    with app.app_context():
        db.create_all(app=app)
        user = User('foo@bar.com', 'foobar123456789')
        db.session.add(user)
        db.session.commit()

    yield client

    os.close(db_fd)
    os.unlink(app.config['DATABASE'])
