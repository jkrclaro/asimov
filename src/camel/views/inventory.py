from flask import Blueprint, render_template, flash, redirect, url_for, abort, current_app
from flask_login import login_required, current_user

from src.camel.models import db
from src.camel.models.dashboard import Product, Inventory
from src.camel.forms.product import InventorySKUForm
from src.camel import helper


inventory_bp = Blueprint('inventory', __name__, url_prefix='/inventory')


@inventory_bp.route('/')
@login_required
def index():
    products = Product.query.filter_by(account_id=current_user.account.id).all()
    return render_template('inventory/index.html', products=products)


@inventory_bp.route('/<unique_id>/create', methods=['POST'])
@login_required
def create(unique_id):
    product = Product.query.filter_by(unique_id=unique_id).first()
    if not product:
        abort(404)

    form = InventorySKUForm()
    if form.validate_on_submit():
        data = {
            'product_id': product.id,
            'available': form.available.data,
            'when_sold': 'Stop selling',
            'incoming': form.incoming.data,
            'sku': form.sku.data,
        }
        inventory = Inventory(**data)
        db.session.add(inventory)
        db.session.commit()
        flash('Successfully added SKU', 'success')
    else:
        helper.flash.flash_errors(form.errors)

    return redirect(url_for('product.retrieve', unique_id=unique_id))


@inventory_bp.route('/<unique_id>/<sku>', methods=['GET', 'POST'])
@login_required
def retrieve(unique_id, sku):
    product = Product.\
        query.\
        filter_by(
            unique_id=unique_id,
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

    form = InventorySKUForm(obj=inventory)
    if form.validate_on_submit():
        inventory.price = form.price.data
        inventory.available = form.available.data
        inventory.sku = form.sku.data
        inventory.when_sold = form.when_sold.data
        inventory.incoming = form.incoming.data
        db.session.add(inventory)
        db.session.commit()
        flash('Successfully updated SKU', 'success')
        return redirect(url_for('inventory.retrieve', unique_id=unique_id, sku=sku))
    else:
        helper.flash.flash_errors(form.errors)

    context = {
        'inventory': inventory,
        'form': form,
        'product': product
    }
    return render_template('inventory/retrieve.html', **context)
