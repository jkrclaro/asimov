from flask_wtf import FlaskForm
from wtforms import (StringField, SubmitField, TextAreaField, HiddenField)


class SMSForm(FlaskForm):
    sender = HiddenField('Sender')
    platform = HiddenField('Platform')
    receiver = StringField('To')
    message = TextAreaField('Message')
    submit = SubmitField('Send')
