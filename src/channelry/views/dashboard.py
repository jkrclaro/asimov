from flask import Blueprint, render_template
from flask_login import login_required, current_user

from src.channelry.models.product import Product
from src.channelry.models.channel import Channel

dashboard_bp = Blueprint('dashboard', __name__)


@dashboard_bp.route('/dashboard')
@login_required
def index():
    channel = Channel.\
        query.\
        filter_by(account_id=current_user.account.id).\
        first()
    product = Product.\
        query.\
        filter_by(account_id=current_user.account.id).\
        first()
    context = {
        'product': product,
        'channel': channel
    }
    return render_template('dashboard/index.html', **context)
