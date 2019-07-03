from flask import (
    Blueprint,
    render_template,
    flash,
    redirect,
    url_for,
    abort,
    current_app,
)
from flask_login import login_required, current_user

from src.camel import helper
from src.camel.models import db
from src.camel.models.dashboard import Product
from src.camel.forms.product import (
    CreateProductEtsyForm,
    InventorySKUForm
)


product_bp = Blueprint('product', __name__, url_prefix='/products')


@product_bp.route('/')
@login_required
def index():
    products = Product.query.filter_by(account_id=current_user.account.id).all()
    return render_template('product/index.html', products=products)


@product_bp.route('/<uid>', methods=['GET', 'POST'])
@login_required
def retrieve(uid: str):
    product = Product.\
        query.\
        filter_by(
            account_id=current_user.account.id,
            uid=uid
        ).first()
    if not product:
        abort(404)

    form = CreateProductEtsyForm(obj=product)
    if form.validate_on_submit():
        product.uid = form.uid.data
        db.session.add(product)
        db.session.commit()
        flash('Successfully updated product', 'success')
        return redirect(url_for('product.retrieve', uid=uid))
    else:
        helper.flash_errors(form.errors)

    context = {
        'form': form,
        'form_inventory': InventorySKUForm(),
        'product': product
    }
    return render_template('product/retrieve.html', **context)


@product_bp.route('/create', methods=['GET', 'POST'])
@login_required
def create():
    form = CreateProductEtsyForm()
    if form.validate_on_submit():
        title = form.title.data
        product_data = {
            'title': title,
            'account_id': current_user.account.id,
            'category': form.category.data,
            'renewal': form.renewal.data,
            'kind': form.kind.data,
            'description': form.description.data
        }
        product = Product(**product_data)
        db.session.add(product)
        db.session.commit()

        flash(f'Successfully added {title}', 'success')
        return redirect(url_for('product.index'))
    return render_template('product/create.html', form=form)
