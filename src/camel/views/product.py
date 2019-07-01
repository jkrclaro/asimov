from flask import (
    Blueprint,
    render_template,
    flash,
    redirect,
    url_for,
    current_app,
)
from flask_login import login_required, current_user

from src.camel.models import db
from src.camel.models.dashboard import Product
from src.camel.forms.product import CreateProductEtsyForm


product_bp = Blueprint('product', __name__)


@product_bp.route('/products')
@login_required
def index():
    products = Product.query.filter_by(account_id=current_user.account.id)
    return render_template('product/index.html', products=products)


@product_bp.route('/products/create', methods=['GET', 'POST'])
@login_required
def create():
    form = CreateProductEtsyForm()
    form.title.data = 'Blue T-Shirt'
    form.description.data = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt imperdiet justo ac lobortis. Etiam eu purus metus. Aenean a sed.'
    form.price.data = 60
    form.quantity.data = 10
    form.sku.data = 'blue-tshirt'
    if form.validate_on_submit():
        title = form.title.data
        account_id = current_user.account.id
        category = form.category.data
        renewal = form.renewal.data
        type = form.type.data
        description = form.description.data
        product = Product(title, account_id, category, renewal, type, description)
        db.session.add(product)
        db.session.commit()
        flash(f'Successfully added {title}', 'success')
        return redirect(url_for('product.index'))
    return render_template('product/create.html', form=form)
