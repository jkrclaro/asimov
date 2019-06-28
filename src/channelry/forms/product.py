from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import InputRequired


class CreateProductForm(FlaskForm):
    title = StringField(
        'Title',
        render_kw={'placeholder': 'Blue t-shirt'},
        validators=[
            InputRequired(message='Please enter a valid email.'),
        ]
    )
