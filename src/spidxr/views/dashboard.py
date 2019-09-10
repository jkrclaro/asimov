import json

from flask import Blueprint, render_template, flash, redirect, url_for, current_app
from flask_login import login_required

import boto3

dashboard_bp = Blueprint('dashboard', __name__)


@dashboard_bp.route('/dashboard')
@login_required
def index():
    return render_template('dashboard/index.html')


@dashboard_bp.route('/deploy')
@login_required
def deploy():
    flash('Website deployed!', 'success')
    # TODO: Trigger an AWS lambda to build and deploy an S3 website
    client = boto3.client(
        'lambda',
        aws_access_key_id=current_app.config['AWS_ACCESS_KEY_ID'],
        aws_secret_access_key=current_app.config['AWS_SECRET_ACCESS_KEY'],
        region_name='eu-west-1'
    )

    response = client.invoke(
        FunctionName='spidxr_website',
        InvocationType='RequestResponse',
        LogType='Tail',
        Payload=json.dumps({'hello': 'bye'}),
        Qualifier='current'
    )
    current_app.logger.info(response['Payload'].read())

    return redirect(url_for('dashboard.index'))
