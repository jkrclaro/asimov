from flask_wtf import FlaskForm
from wtforms import (
    StringField,
    IntegerField,
    widgets,
    BooleanField,
    SubmitField
)
from wtforms.validators import InputRequired
from wtforms.ext.sqlalchemy.fields import (
    QuerySelectMultipleField,
    QuerySelectField
)
from flask_login import current_user

from src.camel.models.dashboard import Channel, Product, InventoryWhenSold


category_choices = [
    ('accessories', 'Accessories')
]
renewal_choices = [
    ('automatic', 'Automatic'),
    ('manual', 'Manual')
]
type_choices = [
    ('physical', 'Physical'),
    ('digital', 'Digital')
]

shipping_origin_choices = [
    ('ireland', 'Ireland')
]

processing_time_choices = [
    ('1', '1 business day')
]

shipping_carrier_choices = [
    ('other', 'Other')
]

delivery_time_choices = [
    ('1', '1')
]

what_you_will_charge_choices = [
    ('fixed', 'Fixed cost'),
    ('free', 'Free delivery')
]


class ProductCreateForm(FlaskForm):
    # Listing
    title = StringField(
        'Title',
        render_kw={'placeholder': 'Blue t-shirt'},
        validators=[
            InputRequired(message='Please enter a valid email.'),
        ]
    )
    uid = StringField(
        'ID',
        description="If an ID isn't provided, we'll generate one for you."
    )
    caption = StringField(
        'Caption',
        description='A short one-line description of the product.'
    )
    url = StringField(
        'URL',
        description='The URL of the webpage for the product.'
    )
    description = StringField('Description', widget=widgets.TextArea())


class InventoryBaseForm(FlaskForm):
    sku = StringField(
        'SKU',
        description="If a SKU isn't provided, we'll generate one for you."
    )
    is_active = BooleanField('Active')
    price = IntegerField('Price')
    available = IntegerField('Available')
    submit = SubmitField('Add SKU')
    when_sold = QuerySelectField(
        'When sold...',
        query_factory=lambda: InventoryWhenSold.query.all()
    )
    channels = QuerySelectMultipleField(
        'Channels',
        query_factory=lambda: Channel.query.all()
    )


class InventoryEditForm(InventoryBaseForm):
    pass


class InventoryCreateForm(InventoryBaseForm):
    product = QuerySelectField(
        'Product',
        query_factory=lambda: Product.query.all()
    )

