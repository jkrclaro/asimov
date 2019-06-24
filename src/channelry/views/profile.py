from flask import Blueprint, render_template, flash
from flask_login import login_required, current_user, logout_user

from src.channelry.models import db
from src.channelry.forms.profile import EditProfileForm
from src.channelry.views.auth import send_email


profile_bp = Blueprint('profile', __name__)


@profile_bp.route('/profile', methods=['GET', 'POST'])
@login_required
def index():
    form = EditProfileForm()
    if form.validate_on_submit():
        if form.email.data != current_user.email:
            email = form.email.data
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
        elif form.name.data != current_user.name:
            current_user.name = form.name.data
            flash('Updated name.', 'success')
            db.session.add(current_user)
            db.session.commit()
    else:
        form.email.data = current_user.email
        form.name.data = current_user.name

    return render_template('profile/edit.html', form=form)
