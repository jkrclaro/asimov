from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


def get_or_create(session, model, **kwargs):
    """
    >> user = get_or_create(session, User, email=email)
    """
    instance = session.query(model).filter_by(**kwargs).first()
    if instance:
        return instance
    else:
        instance = model(**kwargs)
        session.add(instance)
        session.commit()
        return instance
