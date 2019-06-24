from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField
from wtforms.validators import (
    Email,
    Regexp,
    Length
)
from wtforms.fields.html5 import EmailField


class ChangeProfileForm(FlaskForm):
    email = EmailField(
        'Email',
        validators=[
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


class ChangePasswordForm(FlaskForm):
    old_password = PasswordField(
        'Old password',
        validators=[
            Length(
                min=8,
                message='Your password must be at least 8 characters.'
            )
        ]
    )
    new_password = PasswordField(
        'New password',
        validators=[
            Length(
                min=8,
                message='Your password must be at least 8 characters.'
            )
        ]
    )