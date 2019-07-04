from flask import (
    Blueprint,
    render_template,
    flash,
    redirect,
    url_for,
    abort,
    current_app
)
from flask_login import login_required, current_user

from src.camel.models import db
from src.camel.models.dashboard import Product, Inventory, Listing
from src.camel.forms.product import InventoryEditForm, InventoryCreateForm
from src.camel import helper


inventory_bp = Blueprint('inventory', __name__, url_prefix='/inventory')


@inventory_bp.route('/', methods=['GET', 'POST'])
@login_required
def index():
    form = InventoryCreateForm()
    if form.validate_on_submit():
        product = form.product.data
        data = {
            'product_id': product.id,
            'available': form.available.data,
            'when_sold': form.when_sold.data,
            'price': form.price.data,
            'sku': form.sku.data,
        }
        inventory = Inventory(**data)
        db.session.add(inventory)
        db.session.commit()
        flash('Successfully added SKU', 'success')
    else:
        helper.flash.flash_errors(form.errors)

    products = Product.query.filter_by(account_id=current_user.account.id).all()
    return render_template('inventory/index.html', products=products, form=form)


@inventory_bp.route('/<uid>/create', methods=['POST'])
@login_required
def create(uid):
    product = Product.query.filter_by(uid=uid).first()
    if not product:
        abort(404)

    form = InventoryEditForm()
    if form.validate_on_submit():
        data = {
            'product_id': product.id,
            'available': form.available.data,
            'when_sold': form.when_sold.data,
            'price': form.price.data,
            'sku': form.sku.data,
        }
        inventory = Inventory(**data)
        db.session.add(inventory)
        db.session.commit()
        flash('Successfully added SKU', 'success')
    else:
        helper.flash.flash_errors(form.errors)

    return redirect(url_for('product.retrieve', uid=uid))


@inventory_bp.route('/<uid>/<sku>', methods=['GET', 'POST'])
@login_required
def retrieve(uid, sku):
    product = Product.\
        query.\
        filter_by(
            uid=uid,
            account_id=current_user.account.id
        ).first()
    if not product:
        abort(404)

    inventory = Inventory.\
        query.\
        filter_by(product_id=product.id, sku=sku).\
        first()
    if not inventory:
        abort(404)

    form = InventoryEditForm(obj=inventory)
    if form.validate_on_submit():
        if form.channels.data:
            for channel in form.channels.data:
                listing = Listing(inventory.id, channel.id)
                db.session.add(listing)
            db.session.commit()
            flash('Successfully linked channel to SKU', 'success')
        else:
            inventory.price = form.price.data
            inventory.available = form.available.data
            inventory.sku = form.sku.data
            inventory.when_sold = form.when_sold.data
            inventory.is_active = form.is_active.data
            db.session.add(inventory)
            db.session.commit()
            flash('Successfully updated SKU', 'success')

        url = url_for('inventory.retrieve', uid=uid, sku=inventory.sku)
        return redirect(url)
    else:
        helper.flash.flash_errors(form.errors)

    context = {
        'inventory': inventory,
        'form': form,
        'product': product
    }
    return render_template('inventory/retrieve.html', **context)
