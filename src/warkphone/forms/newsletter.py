from flask_wtf import FlaskForm
from wtforms import StringField


class NewsletterForm(FlaskForm):
    email = StringField('Email')
