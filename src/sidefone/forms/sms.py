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

from src.sidefone.models.account import Menu, Product


class SMSForm(FlaskForm):
    sender = StringField('Sender')
    receiver = StringField('Receiver')
    message = TextAreaField('Message')
    submit = SubmitField('Send')
    # sender = QuerySelectMultipleField(
    #     'Sender',
    #     query_factory=lambda: Menu.query.all()
    # )
