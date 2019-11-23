import json

from flask import Blueprint, render_template, flash, redirect, url_for, current_app
import boto3

dashboard_bp = Blueprint('dashboard', __name__)


@dashboard_bp.route('/')
def index():
    return render_template('dashboard/index.html')