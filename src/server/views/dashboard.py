from flask import Blueprint, render_template, current_app

dashboard_bp = Blueprint('dashboard', __name__)


@dashboard_bp.route('/')
def index():
    return render_template('dashboard/index.html')
