from flask_wtf import FlaskForm
from wtforms import StringField


category_choices = [
    ('accessory', 'Accessory')
]


class CreateProductForm(FlaskForm):
    title = StringField('Title', render_kw={'placeholder': 'Blue t-shirt'})
