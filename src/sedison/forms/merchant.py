from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import InputRequired


class MerchantBaseForm(FlaskForm):
    first_name = StringField(
        'First name',
        render_kw={'placeholder': 'Thomas'},
        validators=[
            InputRequired(message='Please enter a valid first name.'),
        ]
    )
    last_name = StringField(
        'Last name',
        render_kw={'placeholder': 'Edison'},
        validators=[
            InputRequired(message='Please enter a valid last name.'),
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
        'Business / Personal website (optional)',
    )

