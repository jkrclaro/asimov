from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SelectField, widgets, FileField
from wtforms.validators import InputRequired

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


class CreateProductEtsyForm(FlaskForm):
    # Listing
    title = StringField(
        'Title',
        render_kw={'placeholder': 'Blue t-shirt'},
        validators=[
            InputRequired(message='Please enter a valid email.'),
        ]
    )
    category = SelectField('Category', choices=category_choices)
    type = SelectField('Type', choices=type_choices)
    description = StringField('Description', widget=widgets.TextArea())
    renewal = SelectField('Renewal', choices=renewal_choices)

    # Inventory
    price = IntegerField('Price')
    quantity = IntegerField('Quantity')
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

