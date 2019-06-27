from flask import Blueprint, render_template
from flask_login import login_required


listing_bp = Blueprint('listing', __name__)


@listing_bp.route('/listing')
@login_required
def index():
    return render_template('listing/index.html')
