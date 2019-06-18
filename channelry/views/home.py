import json
import logging

from flask import Blueprint, render_template, jsonify, current_app


home_bp = Blueprint('home', __name__)


@home_bp.route('/', methods=['GET'])
def index():
    return render_template('home/index.html')


@home_bp.route('/about', methods=['GET'])
def about():
    return render_template('home/about.html')


@home_bp.route('/pricing', methods=['GET'])
def pricing():
    return render_template('home/pricing.html')


@home_bp.route('/terms', methods=['GET'])
def terms():
    return render_template('home/terms.html')


@home_bp.route('/privacy', methods=['GET'])
def privacy():
    return render_template('home/privacy.html')


@home_bp.route('/health', methods=['GET'])
def health():
    return jsonify({'environment': current_app.config.get('DASHBOARD_URL')})
