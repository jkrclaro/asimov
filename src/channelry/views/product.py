from flask import Blueprint, render_template, flash, redirect, url_for, current_app
from flask_login import login_required

from src.channelry.models import db
from src.channelry.models.product import Product
from src.channelry.forms.product import CreateProductForm


product_bp = Blueprint('product', __name__)


@product_bp.route('/products')
@login_required
def index():
    return render_template('product/index.html')


@product_bp.route('/products/create', methods=['GET', 'POST'])
@login_required
def create():
    form = CreateProductForm()
    if form.validate_on_submit():
        title = form.title.data
        product = Product(title)
        db.session.add(product)
        db.session.commit()
        flash(f'Successfully added {title}', 'success')
        return redirect(url_for('dashboard.index'))
    else:
        current_app.logger.debug(form.errors)
    return render_template('product/create.html', form=form)
