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
    name = StringField('Name:', render_kw={'placeholder': 'Blue t-shirt'})
    caption = StringField(
        'Caption:',
        description='A short one-line description of the product.',
        render_kw={'placeholder': 'Comfortable blue cotton t-shirt'}
    )
    description = StringField('Description:', widget=TextArea())
    url = StringField(
        'URL:',
        description='The URL of the webpage for the product.',
        render_kw={'placeholder': 'example.com/blue-shirt'}
    )
    attributes = StringField(
        'Attributes:',
        description='A comma-separated list of attributes that define the '
                    'SKUs for this product (e.g. color, size, gender).',
        render_kw={'placeholder': 'size, style, color'}
    )
    active = BooleanField(
        'Active:',
        description='This item is available for purchase.'
    )
    product_id = IntegerField(
        'ID:',
        description="If an ID isn't provided, we'll generate one for you."
    )
