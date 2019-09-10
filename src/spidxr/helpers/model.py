from flask import abort

from src.spidxr.models import db


def get_or_404(model: db.Model, options: dict) -> db.Model:
    model_retrieved = model.\
        query.\
        filter_by(**options).\
        first()

    if not model_retrieved:
        abort(404)

    return model_retrieved
