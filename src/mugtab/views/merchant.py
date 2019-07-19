from flask import Blueprint, render_template, redirect, url_for
from flask_login import login_required, current_user

from src.mugtab.models.merchant import Product
from src.mugtab.models.merchant import Menu

merchant_bp = Blueprint('merchant', __name__)


@merchant_bp.route('/merchant')
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
    return render_template('merchant/index.html', **context)
