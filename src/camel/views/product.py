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
from src.camel.models.product import Product
from src.camel.forms.product import CreateProductForm


product_bp = Blueprint('product', __name__)


@product_bp.route('/products')
@login_required
def index():
    products = Product.query.filter_by(account_id=current_user.account.id)
    return render_template('product/index.html', products=products)


@product_bp.route('/products/create', methods=['GET', 'POST'])
@login_required
def create():
    form = CreateProductForm()
    if form.validate_on_submit():
        title = form.title.data
        account_id = current_user.account.id
        product = Product(title, account_id)
        db.session.add(product)
        db.session.commit()
        flash(f'Successfully added {title}', 'success')
        return redirect(url_for('product.index'))
    return render_template('product/create.html', form=form)
