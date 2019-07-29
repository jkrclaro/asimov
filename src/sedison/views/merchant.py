from flask import Blueprint, render_template, redirect, url_for, current_app
from flask_login import login_required, current_user

from ..helpers.flash import flash_form_errors
from ..models.merchant import Merchant
from ..forms.merchant import MerchantBaseForm
from ..models import db

merchant_bp = Blueprint('merchant', __name__)


@merchant_bp.route('/merchant/settings')
@login_required
def index():
    if not current_user.merchant:
        return redirect(url_for('merchant.setup'))

    return render_template('merchant/index.html')


@merchant_bp.route('/merchant/setup', methods=['GET', 'POST'])
@login_required
def setup():
    form = MerchantBaseForm()
    if form.validate_on_submit():
        data = {}
        fields = (
            'first_name',
            'last_name',
            'address',
            'apartment',
            'city',
            'zip_code',
            'country',
            'phone_number',
            'website'
        )
        for field in fields:
            data[field] = getattr(form, field).data
        merchant = Merchant(**data, user_id=current_user.id)
        db.session.add(merchant)
        db.session.commit()
        return redirect(url_for('dashboard.index'))
    else:
        flash_form_errors(form.errors)

    return render_template('merchant/setup.html', form=form)
