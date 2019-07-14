from flask import Blueprint, flash, redirect, url_for, abort
from flask_login import login_required, current_user

from src import etsy
from src.doshless.models.dashboard import Channel, Inventory


listing_bp = Blueprint('listing', __name__, url_prefix='/listing')


@listing_bp.route('/<channel_id>/<product_uid>/<inventory_id>/sync')
@login_required
def sync(channel_id, product_uid, inventory_id):
    channel = Channel.query.get(channel_id)
    if not channel:
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
