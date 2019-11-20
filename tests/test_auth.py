import os
import tempfile

import pytest

<<<<<<< HEAD
from src.warkphone import create_app
from src.warkphone.models import db
from src.warkphone.models.auth import User
=======
from src.sidefone import create_app
from src.sidefone.models import db
from src.sidefone.models.auth import User
>>>>>>> Add speech-bubble CSS


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
