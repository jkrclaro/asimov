from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SelectField, FileField


category_choices = [
    ('accessory', 'Accessory')
]


class InventoryCreateForm(FlaskForm):
    title = StringField('Title', render_kw={'placeholder': 'Blue t-shirt'})
    quantity = IntegerField('Quantity')
    category = SelectField('Category', choices=category_choices)
    photo = FileField('Photo')
