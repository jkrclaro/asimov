from flask import Blueprint, render_template
from flask_login import login_required, current_user

from src.wadless.models.dashboard import Menu


channel_bp = Blueprint('menu', __name__, url_prefix='/menus')


@channel_bp.route('/')
@login_required
def index():
    menus = Menu.query.filter_by(account_id=current_user.account.id)
    return render_template('menu/index.html', menus=menus)


@channel_bp.route('/connect')
@login_required
def connect():
    return render_template('menu/connect.html')
