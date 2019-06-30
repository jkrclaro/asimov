from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SelectField
from wtforms.validators import InputRequired


class CreateProductForm(FlaskForm):
    title = StringField(
        'Title',
        render_kw={'placeholder': 'Blue t-shirt'},
        validators=[
            InputRequired(message='Please enter a valid email.'),
        ]
    )
    quantity = IntegerField('Quantity')
    channels = SelectField('Channels', choices=[])
