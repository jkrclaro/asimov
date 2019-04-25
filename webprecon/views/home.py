import json
import logging

from flask import Blueprint, render_template


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
