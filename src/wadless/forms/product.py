from flask_wtf import FlaskForm
from wtforms import StringField, widgets
from wtforms.validators import InputRequired


class ProductBaseForm(FlaskForm):
    title = StringField(
        'Title',
        render_kw={'placeholder': 'Tea'},
        validators=[
            InputRequired(message='Please enter a valid product title.'),
        ]
    )
    uid = StringField(
        'ID',
        description="If an ID isn't provided, we'll generate one for you."
    )
    caption = StringField(
        'Caption',
        description='A short one-line description of the product.'
    )
    url = StringField(
        'URL',
        description='The URL of the webpage for the product.'
    )
    description = StringField('Description', widget=widgets.TextArea())
