import string
import random
from datetime import datetime

from sqlalchemy import Column, DateTime, Integer, event
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class BaseModel(object):
    """Timestamping mixin"""
    id = Column(Integer, primary_key=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    created_at._creation_order = 9997
    updated_at = Column(DateTime, default=datetime.utcnow)
    updated_at._creation_order = 9998

    @staticmethod
    def _updated_at(mapper, connection, target):
        target.updated_at = datetime.utcnow()

    @classmethod
    def __declare_last__(cls):
        event.listen(cls, 'before_update', cls._updated_at)


def generate_uid() -> str:
    uid = ''.join(
        random.SystemRandom().choice(string.ascii_letters + string.digits)
        for _ in range(14)
    )
    return uid
