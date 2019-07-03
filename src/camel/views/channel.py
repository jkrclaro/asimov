from flask import Blueprint, render_template
from flask_login import login_required, current_user

from src.camel.models.dashboard import Channel


channel_bp = Blueprint('channel', __name__, url_prefix='/channels')


@channel_bp.route('/')
@login_required
def index():
    channels = Channel.query.filter_by(account_id=current_user.account.id)
    return render_template('channel/index.html', channels=channels)


@channel_bp.route('/connect')
@login_required
def connect():
    return render_template('channel/connect.html')
