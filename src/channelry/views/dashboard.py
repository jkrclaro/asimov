import json
import logging

from flask import Blueprint, render_template, jsonify, current_app
from flask_login import login_required, current_user


dashboard_bp = Blueprint('dashboard', __name__)


@dashboard_bp.route('/dashboard')
@login_required
def index():
    return render_template('dashboard/index.html')
