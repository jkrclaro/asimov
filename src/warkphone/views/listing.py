from flask import Blueprint, flash, redirect, url_for, abort
from flask_login import login_required, current_user

from src.warkphone.models.merchant import Menu, Inventory


listing_bp = Blueprint('listing', __name__, url_prefix='/listing')


@listing_bp.route('/<menu_id>/<product_uid>/<inventory_id>/sync')
@login_required
def sync(menu_id, product_uid, inventory_id):
    menu = Menu.query.get(menu_id)
    if not menu:
        abort(404)

    inventory = Inventory.query.get(inventory_id)
    if not inventory:
        abort(404)
    # Get listing
    # If listing exists, update
    # If listing does not exist, create it

    flash('Successfully synced listing', 'success')

    context = {
        'uid': product_uid,
        'sku': inventory.sku
    }
    url = url_for('inventory.retrieve', **context)
    return redirect(url)
