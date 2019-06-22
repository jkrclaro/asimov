from flask_wtf import RecaptchaField
from wtforms import Form, StringField, PasswordField, SubmitField
from wtforms.validators import (
    Email,
    InputRequired,
    EqualTo,
    Length
)
from wtforms.fields.html5 import EmailField


class SignupForm(Form):
    email = EmailField(
        'Email',
        validators=[
            InputRequired(message='Please enter a valid email.'),
            Email(message='Please enter a valid email.')
        ]
    )
    password = PasswordField(
        'Password',
        validators=[
            InputRequired(message='Please enter a password.'),
            Length(min=8, message='Your password must be at least 8 characters.'),
            EqualTo(
                'confirm_password',
                message='Re-enter your password confirmation so it matches your password.'
            )
        ]
    )
    name = StringField('Full name')
    confirm_password = PasswordField('Confirm password')
    recaptcha = RecaptchaField()


class LoginForm(Form):
    email = EmailField(
        'Email',
        validators=[
            InputRequired(message='Please enter a valid email.'),
            Email(message='Please enter a valid email.')
        ]
    )
    password = PasswordField(
        'Password',
        validators=[
            InputRequired(message='Please enter a password.'),
            Length(min=8, message='Your password must be at least 8 characters.'),
        ]
    )
    recaptcha = RecaptchaField()
