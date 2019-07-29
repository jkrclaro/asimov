from flask import Blueprint, render_template
from flask_login import login_required, current_user

from src.sedison.models.merchant import Product
from src.sedison.models.merchant import Menu

dashboard_bp = Blueprint('dashboard', __name__)


@dashboard_bp.route('/dashboard')
@login_required
def index():
    menus = Menu.\
        query.\
        filter_by(merchant_id=current_user.merchant.id).\
        all()
    product = Product.\
        query.\
        filter_by(merchant_id=current_user.merchant.id).\
        first()
    context = {
        'product': product,
        'menus': menus
    }
    return render_template('dashboard/index.html', **context)
