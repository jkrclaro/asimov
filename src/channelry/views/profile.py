from flask import Blueprint, render_template, flash
from flask_login import login_required, current_user

from src.channelry.models import db
from src.channelry.models.auth import User
from src.channelry.forms.profile import (
    EditEmailForm,
    EditNameForm,
    EditPasswordForm
)
from src.channelry import helper


profile_bp = Blueprint('profile', __name__)


def email_edit(form_email: EditEmailForm) -> bool:
    """Send change of email to user.

    :param form_email: Instance of Flask-WTF form for editing email
    :return: Always false because new email needs to be confirmed first
    """
    if form_email.validate_on_submit():
        old_email = current_user.email
        new_email = form_email.email.data

        if new_email == old_email:
            flash('New email should be different from old email', 'danger')
        else:
            user = User.query.filter_by(email=new_email).first()
            if user:
                flash('Email is already taken', 'danger')
            else:
                helper.email_change_email(current_user, new_email)
                message = "To finish changing your email address, " \
                    f"we've sent an email to {old_email}. " \
                          "Simply click the button in the email to " \
                          "complete the process."
                flash(message, 'success')
    else:
        helper.flash_errors(form_email.email.errors)

    return False


def name_edit(form_name: EditNameForm) -> bool:
    """Assign new name to current user if valid

    :param form_name: Instance of Flask-WTF form for editing name
    :return: False if no new name has been assigned
    """
    edited = False
    old_name = current_user.name

    if form_name.validate_on_submit():
        new_name = form_name.name.data
        if new_name == old_name:
            flash('New name should be different from old name', 'danger')
        elif new_name:
            current_user.name = new_name
            flash('Successfully changed your Channelry name.', 'success')
            edited = True
        else:
            flash('Please provide a valid name', 'danger')
    else:
        helper.flash_errors(form_name.name.errors)

    return edited


def password_edit(form_password: EditPasswordForm) -> bool:
    """Send change of password to old email of user and assign new password.

    :param form_password: Instance of Flask-WTF form for editing name
    :return: False if no new password has been assigned
    """
    edited = False
    if form_password.validate_on_submit():
        old_password = form_password.old_password.data
        new_password = form_password.new_password.data

        if old_password == new_password:
            flash('New password must be different from old password', 'danger')
        elif current_user.password_match(old_password):
            hashed_password = current_user.password_hash(new_password)
            current_user.password = hashed_password.decode('utf8')
            helper.email_change_password_success(current_user)
            edited = True
            flash('Successfully changed your Channelry password', 'success')
        else:
            flash('Wrong old password.', 'danger')
    else:
        helper.flash_errors(form_password.old_password.errors)
        helper.flash_errors(form_password.new_password.errors)

    return edited


@profile_bp.route('/profile', methods=['GET', 'POST'])
@login_required
def index():
    form_email = EditEmailForm(prefix='form_email')
    form_name = EditNameForm(prefix='form_name')
    form_password = EditPasswordForm(prefix='form_password')

    if form_email.submit.data:
        edited = email_edit(form_email)
    elif form_name.submit.data:
        edited = name_edit(form_name)
    elif form_password.submit.data:
        edited = password_edit(form_password)
    else:
        edited = False

    if edited:
        db.session.add(current_user)
        db.session.commit()

    form_email.email.data = None
    form_name.name.data = None
    form_password.old_password.data = None
    form_password.new_password.data = None
    forms = {
        'form_email': form_email,
        'form_name': form_name,
        'form_password': form_password
    }
    return render_template('profile/index.html', **forms)
