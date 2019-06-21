from wtforms import Form, StringField, PasswordField
from wtforms.validators import (
    DataRequired,
    Email,
    DataRequired,
    Length,
    EqualTo
)
from wtforms.fields.html5 import EmailField


class SignupForm(Form):
    email = EmailField(
        'Email',
        validators=[
            DataRequired(message='Please enter an email'),
            Email(message='Please enter a valid email')
        ]
    )
    name = StringField('Full name')
    password = PasswordField(
        'Password',
        validators=[
            DataRequired(),
            EqualTo('confirm', message='Please re-enter password and confirm password as they did not match')
        ]
    )
    confirm = PasswordField('Confirm password')


class LoginForm(Form):
    email = StringField('Email', validators=[Length(min=3, max=320)])
    password = PasswordField('Password', validators=[DataRequired()])
