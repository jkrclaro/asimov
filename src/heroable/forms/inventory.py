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

from src.heroable.models.dashboard import Channel, Product, InventoryWhenSold


class InventoryBaseForm(FlaskForm):
    sku = StringField(
        'SKU',
        description="If a SKU isn't provided, we'll generate one for you."
    )
    is_active = BooleanField('Active')
    price = IntegerField('Price')
    quantity = IntegerField('Available')
    submit = SubmitField('Add SKU')
    when_sold = QuerySelectField(
        'When sold...',
        query_factory=lambda: InventoryWhenSold.query.all()
    )
    channels = QuerySelectMultipleField(
        'Channels',
        query_factory=lambda: Channel.query.all()
    )


class InventoryCreateForm(InventoryBaseForm):
    product = QuerySelectField(
        'Product',
        query_factory=lambda: Product.query.all()
    )
