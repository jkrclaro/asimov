from flask import Blueprint, render_template
from flask_login import login_required

from src.channelry.models.product import Product

dashboard_bp = Blueprint('dashboard', __name__)


@dashboard_bp.route('/dashboard')
@login_required
def index():
    return render_template('dashboard/index.html')
