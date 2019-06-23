from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField, IntegerField
from wtforms.widgets import TextArea
from wtforms.validators import (
    Email,
    InputRequired,
    EqualTo,
    Length
)
from wtforms.fields.html5 import EmailField


class InventoryCreateForm(FlaskForm):
    name = StringField('Name')
    description = StringField('Description', widget=TextArea())
    url = StringField('URL')
    attributes = StringField('Attributes')
    active = BooleanField('Active')
    product_id = IntegerField('ID')
