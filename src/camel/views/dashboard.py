from flask import Blueprint, render_template, redirect, url_for
from flask_login import login_required, current_user

from src.camel.models.dashboard import Product
from src.camel.models.dashboard import Channel

dashboard_bp = Blueprint('dashboard', __name__)


@dashboard_bp.route('/dashboard')
@login_required
def index():
    channels = Channel.\
        query.\
        filter_by(account_id=current_user.account.id).\
        all()
    product = Product.\
        query.\
        filter_by(account_id=current_user.account.id).\
        first()
    context = {
        'product': product,
        'channels': channels
    }
    return render_template('dashboard/index.html', **context)
