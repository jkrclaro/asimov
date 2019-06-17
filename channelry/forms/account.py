from wtforms import Form, StringField, PasswordField, validators


class SignupForm(Form):
    email = StringField('Email', [validators.Length(min=3, max=320)])
    full_name = StringField('Full name', [validators.Length(min=1, max=200)])
    password = PasswordField('Password', [
        validators.DataRequired(),
        validators.EqualTo('confirm', message='Passwords must match')
    ])
    confirm = PasswordField('Confirm password')