from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import (
    Email,
    InputRequired,
    Regexp
)
from wtforms.fields.html5 import EmailField


class EditProfileForm(FlaskForm):
    email = EmailField(
        'Email',
        validators=[
            InputRequired(message='Please enter a valid email.'),
            Email(message='Please enter a valid email.')
        ]
    )
    name = StringField(
        'Full name',
        validators=[
            Regexp(
                regex=r"^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*",
                message='Please enter a valid name.'
            )
        ]
    )