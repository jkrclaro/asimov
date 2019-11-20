from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import InputRequired


class VariantBaseForm(FlaskForm):
    title = StringField(
        'Title',
        render_kw={'placeholder': 'Peppermint'},
        validators=[
            InputRequired(message='Please enter a valid variant title.'),
        ]
    )
