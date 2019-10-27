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

from src.staticfile.models.merchant import Menu, Product


class InventoryBaseForm(FlaskForm):
    sku = StringField(
        'SKU',
        description="If a SKU isn't provided, we'll generate one for you."
    )
    is_active = BooleanField('Active')
    price = IntegerField('Price')
    quantity = IntegerField('Quantity')
    submit = SubmitField('Add SKU')
    menus = QuerySelectMultipleField(
        'Menus',
        query_factory=lambda: Menu.query.all()
    )


class InventoryCreateForm(InventoryBaseForm):
    product = QuerySelectField(
        'Product',
        query_factory=lambda: Product.query.all()
    )
