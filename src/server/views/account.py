from flask import Blueprint, render_template, redirect, url_for
from flask_login import current_user

from ..models.account import Account
from ..forms.account import AccountBaseForm
from ..models import db
from ...sidefone.flash import flash_form_errors

account_bp = Blueprint('account', __name__)


@account_bp.route('/account/settings')
def index():
    return render_template('account/index.html')


@account_bp.route('/account/setup', methods=['GET', 'POST'])
def setup():
    form = AccountBaseForm()
    if form.validate_on_submit():
        data = {}
        fields = (
            'name',
            'address',
            'apartment',
            'city',
            'zipcode',
            'country',
            'phone',
            'county',
            'website'
        )
        for field in fields:
            data[field] = getattr(form, field).data
        account = Account(**data, user_id=current_user.id)
        db.session.add(account)
        db.session.commit()
        return redirect(url_for('dashboard.index'))
    else:
        flash_form_errors(form.errors)

    return render_template('account/setup.html', form=form)
