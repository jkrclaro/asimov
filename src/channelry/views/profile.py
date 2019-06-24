from flask import Blueprint, render_template, flash
from flask_login import login_required, current_user

from src.channelry.models import db
from src.channelry.forms.profile import ChangeProfileForm, ChangePasswordForm
from src.channelry.views.auth import send_email


profile_bp = Blueprint('profile', __name__)


@profile_bp.route('/profile', methods=['GET', 'POST'])
@login_required
def index():
    edited = False
    change_profile_form = ChangeProfileForm()
    change_password_form = ChangePasswordForm()

    if change_profile_form.validate_on_submit():
        edited = False
        if change_profile_form.email.data != current_user.email:
            email = change_profile_form.email.data
            endpoint = 'auth.confirm'
            email_template = 'email/change_email.html'
            subject = 'Confirm your new Channelry email address!'
            data = {
                'old_email': current_user.email,
                'new_email': email
            }
            name = current_user.name
            send_email(email, email_template, subject, endpoint=endpoint, name=name, data=data)
            flash(f"To finish changing your email address, we've sent an email to {email}. Simply click the link in the email to complete the process.", 'success')
        elif change_profile_form.name.data != current_user.name:
            current_user.name = change_profile_form.name.data
            flash('Updated name.', 'success')
            edited = True

    if change_password_form.validate_on_submit():
        current_user.logger.debug(current_user.password_match(change_password_form.old_password.data))
        if current_user.password_match(change_password_form.old_password.data):
            change_password_form.old_password.errors = [
                'New password should be different from old password'
            ]
        else:
            edited = True
            new_password = change_password_form.new_password.data
            current_user.password = current_user.password_hash(new_password)
            email = current_user.email
            name = current_user.name
            endpoint = 'auth.reset'
            email_template = 'email/change_password_success.html'
            subject = 'Your Stripe password has been changed'
            send_email(email, email_template, subject, endpoint=endpoint, name=name)

    else:
        change_profile_form.email.data = current_user.email
        change_profile_form.name.data = current_user.name

    if edited:
        db.session.add(current_user)
        db.session.commit()

    forms = {
        'change_profile_form': change_profile_form,
        'change_password_form': change_password_form
    }
    return render_template('profile/edit.html', **forms)
