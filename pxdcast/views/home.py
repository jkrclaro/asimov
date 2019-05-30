from flask import Blueprint, render_template, request

from pxdcast.itunes import Itunes


home_blueprint = Blueprint('home', __name__)


@home_blueprint.route('/', methods=['GET'])
def home():
    return render_template('home.html')


@home_blueprint.route('/pricing', methods=['GET'])
def pricing():
    return render_template('pricing.html')


@home_blueprint.route('/terms', methods=['GET'])
def terms():
    return render_template('terms.html')


@home_blueprint.route('/privacy', methods=['GET'])
def privacy():
    return render_template('privacy.html')


@home_blueprint.route('/search', methods=['GET', 'POST'])
def search():
    keyword = request.form.get('keyword')
    itunes = Itunes()
    podcasts = itunes.search_podcasts(keyword)
    print(podcasts)
    return render_template('search.html', podcasts=podcasts)
