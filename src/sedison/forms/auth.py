from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, BooleanField
from wtforms.validators import (
    Email,
    InputRequired,
    EqualTo,
    Length,
    Regexp
)
from wtforms.fields.html5 import EmailField


class SignupForm(FlaskForm):
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
            Length(
                min=8,
                message='Your password must be at least 8 characters.'
            ),
            EqualTo(
                'confirm_password',
                message='Re-enter your password confirmation so it matches your password.'
            )
        ]
    )
    name = StringField(
        'Name of shop',
        validators=[
            Regexp(
                regex=r"^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*",
                message='Please enter a valid name.'
            )
        ]
    )
    confirm_password = PasswordField('Confirm password')


class LoginForm(FlaskForm):
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
    remember = BooleanField('Remember')


class ConfirmForm(FlaskForm):
    email = EmailField(
        'Email',
        validators=[
            InputRequired(message='Please enter a valid email.'),
            Email(message='Please enter a valid email.')
        ],
        render_kw={'readonly': True}
    )
    password = PasswordField(
        'Password',
        validators=[
            InputRequired(message='Please enter a password.'),
            Length(min=8, message='Your password must be at least 8 characters.'),
        ]
    )


class ForgotPasswordForm(FlaskForm):
    email = EmailField(
        'Email',
        validators=[
            InputRequired(message='Please enter a valid email.'),
            Email(message='Please enter a valid email.')
        ]
    )


class ResetPasswordForm(FlaskForm):
    password = PasswordField(
        'Password',
        validators=[
            InputRequired(message='Please enter a password.'),
            Length(
                min=8,
                message='Your password must be at least 8 characters.'
            ),
            EqualTo(
                'confirm_password',
                message='Re-enter your password confirmation so it matches your password.'
            )
        ]
    )
    confirm_password = PasswordField('Confirm password')
