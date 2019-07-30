from flask_wtf import FlaskForm
from wtforms import (
    StringField,
    IntegerField,
    BooleanField,
    SubmitField
)
from wtforms.ext.sqlalchemy.fields import (
    QuerySelectMultipleField,
    QuerySelectField
)

from src.selfcarte.models.merchant import Menu, Product, Inventory


class MenuCreateForm(FlaskForm):
    title = StringField('Title')
    is_active = BooleanField('Active')
    inventories = QuerySelectMultipleField(
        'Inventories',
        query_factory=lambda: Inventory.query.all()
    )
