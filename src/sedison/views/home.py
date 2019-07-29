from flask import (
    Blueprint,
    render_template,
    current_app,
    redirect,
    url_for,
    jsonify,
    abort
)
from flask_login import current_user


home_bp = Blueprint('home', __name__)


@home_bp.route('/')
def index():
    if current_user.is_authenticated:
        return redirect(url_for('dashboard.index'))

    return render_template('home/index.html')


@home_bp.route('/about')
def about():
    if current_user.is_authenticated:
        return redirect(url_for('dashboard.index'))

    return render_template('home/about.html')


@home_bp.route('/pricing')
def pricing():
    if current_user.is_authenticated:
        return redirect(url_for('dashboard.index'))

    return render_template('home/pricing.html')


@home_bp.route('/terms')
def terms():
    return render_template('home/terms.html')


@home_bp.route('/privacy')
def privacy():
    return render_template('home/privacy.html')


@home_bp.route('/blogs')
def blogs():
    return render_template('home/blogs.html')


@home_bp.route('/health')
def health():
    if current_user.is_staff:
        return jsonify({'environment': current_app.config.get('FLASK_ENV')})

    return redirect(url_for('dashboard.index'))
