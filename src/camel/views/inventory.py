from flask import Blueprint, render_template
from flask_login import login_required, current_user

from src.camel.models.dashboard import Product


inventory_bp = Blueprint('inventory', __name__, url_prefix='/inventory')


@inventory_bp.route('/')
@login_required
def index():
    products = Product.query.filter_by(account_id=current_user.account.id)
    return render_template('inventory/index.html', products=products)
