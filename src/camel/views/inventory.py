from flask import Blueprint, render_template
from flask_login import login_required, current_user

from src.camel.models.dashboard import Inventory


inventory_bp = Blueprint('inventory', __name__)


@inventory_bp.route('/inventories')
@login_required
def index():
    product_id = 2
    inventories = Inventory.query.filter_by(product_id=product_id)
    return render_template('inventory/index.html', inventories=inventories)
