from flask_wtf import FlaskForm
from wtforms import (
    StringField,
    IntegerField,
    SelectField,
    widgets,
    BooleanField,
    SubmitField
)
from wtforms.validators import InputRequired
from wtforms.ext.sqlalchemy.fields import QuerySelectMultipleField

from src.camel.models.dashboard import Channel


category_choices = [
    ('accessories', 'Accessories')
]
renewal_choices = [
    ('automatic', 'Automatic'),
    ('manual', 'Manual')
]

kind_choices = [
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


class CreateProductEtsyForm(FlaskForm):
    # Listing
    title = StringField(
        'Title',
        render_kw={'placeholder': 'Blue t-shirt'},
        validators=[
            InputRequired(message='Please enter a valid email.'),
        ]
    )
    unique_id = StringField('Unique ID')
    category = SelectField('Category', choices=category_choices)
    kind = SelectField('Type', choices=kind_choices)
    description = StringField('Description', widget=widgets.TextArea())
    renewal = SelectField('Renewal', choices=renewal_choices)

    # Channels
    channels = QuerySelectMultipleField(
        'Channels',
        query_factory=lambda: Channel.query.all()
    )

    # Inventory
    price = IntegerField('Price')
    available = IntegerField('Available')
    sku = StringField('SKU')

    # Shipping
    shipping_origin = SelectField(
        'Shipping origin',
        choices=shipping_origin_choices
    )
    processing_time = SelectField(
        'Processing time',
        choices=processing_time_choices
    )

    shipping_carrier = SelectField(
        'Shipping carier',
        choices=shipping_carrier_choices
    )
    delivery_time_range_start = SelectField(
        'Delivery time start',
        choices=delivery_time_choices
    )
    delivery_time_range_end = SelectField(
        'Delivery time end',
        choices=delivery_time_choices
    )
    what_you_will_charge_ = SelectField(
        "What you'll charge",
        choices=what_you_will_charge_choices
    )


class InventorySKUForm(FlaskForm):
    sku = StringField('SKU')
    is_active = BooleanField('Active')
    price = IntegerField('Price')
    available = IntegerField('Available')
    incoming = IntegerField('Incoming')
    submit = SubmitField('Add SKU')
    when_sold = SelectField(
        'When sold...',
        choices=[
            ('Stop selling', 'Stop selling')
        ]
    )
