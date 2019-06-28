from flask import Blueprint, render_template
from flask_login import login_required, current_user

from src.channelry.models.product import Product
from src.channelry.models.channel import Channel

dashboard_bp = Blueprint('dashboard', __name__)


@dashboard_bp.route('/dashboard')
@login_required
def index():
    product = Product.\
        query.\
        filter_by(account_id=current_user.account.id).\
        first()
    return render_template('dashboard/index.html', product=product)
