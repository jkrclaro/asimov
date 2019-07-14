from flask import (
    Blueprint,
    render_template,
    flash,
    redirect,
    url_for,
    current_app,
)
from flask_login import login_required, current_user

from src.webtail.helpers.flash import flash_form_errors
from src.webtail.helpers.model import get_or_404
from src.webtail.models import db
from src.webtail.models.dashboard import Product
from src.webtail.forms import ProductCreateForm, InventoryBaseForm


product_bp = Blueprint('product', __name__, url_prefix='/products')


@product_bp.route('/', methods=['GET', 'POST'])
@login_required
def index():
    form = ProductCreateForm()
    if form.validate_on_submit():
        title = form.title.data
        data_product = {
            'account_id': current_user.account.id,
            'title': title,
            'url': form.url.data,
            'caption': form.caption.data,
            'description': form.description.data,
            'uid': form.uid.data,
        }
        product = Product(**data_product)
        db.session.add(product)
        db.session.commit()
        flash(f'Successfully added {title}', 'success')
        return redirect(url_for('product.index'))
    else:
        flash_form_errors(form.errors)

    products = Product.query.filter_by(account_id=current_user.account.id).all()
    return render_template('product/index.html', products=products, form=form)


@product_bp.route('/<uid>', methods=['GET', 'POST'])
@login_required
def retrieve(uid: str):
    options = {'account_id': current_user.account.id, 'uid': uid}
    product = get_or_404(Product, options)

    form = ProductCreateForm(obj=product)
    if form.validate_on_submit():
        product.title = form.title.data
        product.url = form.url.data
        product.caption = form.caption.data
        product.description = form.description.data
        product.uid = form.uid.data
        db.session.add(product)
        db.session.commit()
        flash('Successfully updated product', 'success')
        return redirect(url_for('product.retrieve', uid=product.uid))
    else:
        flash_form_errors(form.errors)

    context = {
        'form': form,
        'form_inventory': InventoryBaseForm(),
        'product': product
    }
    return render_template('product/retrieve.html', **context)


@product_bp.route('/create', methods=['GET', 'POST'])
@login_required
def create():
    form = ProductCreateForm()
    if form.validate_on_submit():
        title = form.title.data
        data_product = {
            'account_id': current_user.account.id,
            'title': title,
            'url': form.url.data,
            'caption': form.caption.data,
            'description': form.description.data,
            'uid': form.uid.data,
        }
        product = Product(**data_product)
        db.session.add(product)
        db.session.commit()
        flash(f'Successfully added {title}', 'success')
        return redirect(url_for('product.index'))
    else:
        flash_form_errors(form.errors)
    return render_template('product/create.html', form=form)
