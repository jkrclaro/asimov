from flask_wtf import FlaskForm
from wtforms import (
    StringField,
    IntegerField,
    BooleanField,
    SubmitField, TextAreaField
)
from wtforms.ext.sqlalchemy.fields import (
    QuerySelectMultipleField,
    QuerySelectField
)

from src.server.models.account import Menu, Product


class SMSForm(FlaskForm):
    receiver = StringField('To')
    message = TextAreaField('Message')
    submit = SubmitField('Send')
    # sender = QuerySelectMultipleField(
    #     'Sender',
    #     query_factory=lambda: Menu.query.all()
    # )
