from flask import Blueprint, render_template
from flask_login import login_required


product_bp = Blueprint('product', __name__)


@product_bp.route('/product')
@login_required
def index():
    return render_template('product/index.html')
