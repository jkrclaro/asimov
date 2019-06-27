import json
import logging

from flask import Blueprint, render_template, jsonify, current_app
from flask_login import login_required, current_user

from src.channelry.forms.inventory import InventoryCreateForm


inventory_bp = Blueprint('inventory', __name__)


@inventory_bp.route('/inventory')
@login_required
def index():
    return render_template('inventory/index.html')


@inventory_bp.route('/inventory/create')
@login_required
def create():
    form = InventoryCreateForm()
    return render_template('inventory/create.html', form=form)
