from flask import (
    Blueprint,
    url_for,
    redirect,
    request,
    session,
    flash,
    render_template
)
from flask_login import login_required, current_user

from src import etsy
from src.camel.models import db
from src.camel.models.channel import Channel, Platform


channel_bp = Blueprint('channel', __name__, url_prefix='/channels')


@channel_bp.route('/etsy/connect')
@login_required
def connect_etsy():
    etsy_callback = 'channel.connect_etsy_callback'
    etsy.callback_uri = url_for(etsy_callback, _external=True)
    scopes = ('email_r', 'listings_r', 'listings_w', 'listings_d')
    login_url = etsy.authenticate(scopes)
    return redirect(login_url)


@channel_bp.route('/etsy/callback')
@login_required
def connect_etsy_callback():
    token = request.args.get('oauth_token')
    secret = ''
    platform_id = Platform.query.filter_by(name='etsy').first().id
    account_id = current_user.account.id
    channel = Channel(token, secret, platform_id, account_id)
    db.session.add(channel)
    db.session.commit()
    flash('Successfully connected your Etsy account', 'success')
    return redirect(url_for('dashboard.index'))


@channel_bp.route('/')
@login_required
def index():
    channels = Channel.query.filter_by(account_id=current_user.account.id)
    return render_template('channel/index.html', channels=channels)
