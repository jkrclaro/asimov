from flask import Blueprint, redirect, session, url_for, flash, request
from flask_login import login_required, current_user

from src import etsy
from src.distogo.models import db
from src.distogo.models.dashboard import Platform, Channel, ChannelEtsy

etsy_bp = Blueprint('etsy', __name__, url_prefix='/etsy')


@etsy_bp.route('/connect')
@login_required
def connect():
    etsy_callback = 'etsy.connect_callback'
    etsy.callback_uri = url_for(etsy_callback, _external=True)
    scopes = (
        'email_r',
        'listings_r',
        'listings_w',
        'listings_d',
        'profile_r'
    )
    data = etsy.authenticate(scopes)
    login_url = data.get('login_url')
    session['etsy_request_token_secret'] = data.get('oauth_token_secret')
    return redirect(login_url)


@etsy_bp.route('/callback')
@login_required
def connect_callback():
    request_token = request.args.get('oauth_token')
    oauth_verifier = request.args.get('oauth_verifier')
    request_token_secret = session.pop('etsy_request_token_secret')
    data = {'oauth_verifier': oauth_verifier}
    response = etsy.get_access_token(data, request_token, request_token_secret)
    if response.status_code != 200:
        flash('Failed to connect your Etsy channel', 'danger')
        return redirect(url_for('dashboard.index'))

    access_token = response.text.split('&')
    oauth_token = access_token[0].split('=')[1]
    oauth_token_secret = access_token[1].split('=')[1]

    response = etsy.get_user_details(oauth_token, oauth_token_secret)
    if response.status_code != 200:
        flash('Failed to get user details for the Etsy channel', 'danger')
        return redirect(url_for('dashboard.index'))

    user_id = response.json()['results'][0]['user_id']
    response = etsy.find_all_user_shops(
        user_id,
        oauth_token,
        oauth_token_secret
    )
    if response.status_code != 200:
        flash('Failed to get user shops for the Etsy channel', 'danger')
        return redirect(url_for('dashboard.index'))

    shops = response.json()['results']
    for shop in shops:
        data_channel = {
            'platform_id': Platform.query.filter_by(name='etsy').first().id,
            'account_id': current_user.account.id,
        }
        channel = Channel(**data_channel)
        db.session.add(channel)
        db.session.commit()
        data_channel_etsy = {
            'oauth_token': oauth_token,
            'oauth_token_secret': oauth_token_secret,
            'shop_id': shop['shop_id'],
            'shop_name': shop['shop_name'],
            'user_id': user_id,
            'channel_id': channel.id,
        }
        channel_etsy = ChannelEtsy(**data_channel_etsy)
        db.session.add(channel_etsy)
        db.session.commit()
    flash('Successfully connected your Etsy account', 'success')
    return redirect(url_for('dashboard.index'))
