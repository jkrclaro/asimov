from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import InputRequired


class MerchantBaseForm(FlaskForm):
    name = StringField(
        'Name',
        render_kw={'placeholder': 'Thomas Edison'},
        validators=[
            InputRequired(message='Please enter a valid first name.'),
        ]
    )
    address = StringField(
        'Address',
        validators=[
            InputRequired(message='Please enter a valid address.'),
        ]
    )
    apartment = StringField(
        'Apartment / Suite / Etc (optional)'
    )
    city = StringField(
        'City',
        validators=[
            InputRequired(message='Please enter a valid city.'),
        ]
    )
    zip_code = StringField(
        'Zipcode / Postcode',
        validators=[
            InputRequired(message='Please enter a valid zipcode or postcode.'),
        ]
    )
    country = StringField(
        'Country / Region',
        validators=[
            InputRequired(message='Please enter a valid country.'),
        ]
    )
    county = StringField(
        'County',
        validators=[
            InputRequired(message='Please enter a valid county.'),
        ]
    )
    phone_number = StringField(
        'Phone number',
        validators=[
            InputRequired(message='Please enter a valid phone number.'),
        ]
    )
    website = StringField(
        'Website (optional)',
    )

