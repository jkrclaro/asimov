from flask import Blueprint, render_template, flash
from flask_login import login_required

dashboard_bp = Blueprint('dashboard', __name__)


@dashboard_bp.route('/dashboard')
@login_required
def index():
    return render_template('dashboard/index.html')


@dashboard_bp.route('/deploy')
@login_required
def deploy():
    flash('Website deployed!', 'success')
    # TODO: Trigger an AWS lambda to build and deploy an S3 website
    return render_template('dashboard/index.html')
