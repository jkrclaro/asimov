from flask import Blueprint, render_template
from flask_login import login_required, current_user

from src.storemecha.models.merchant import Menu
from src.storemecha.forms.menu import MenuCreateForm


menu_bp = Blueprint('menu', __name__, url_prefix='/menus')


@menu_bp.route('/')
@login_required
def index():
    menus = Menu.query.filter_by(merchant_id=current_user.merchant.id)
    return render_template('menu/index.html', menus=menus)


@menu_bp.route('/create')
@login_required
def create():
    form = MenuCreateForm()
    return render_template('menu/create.html', form=form)
