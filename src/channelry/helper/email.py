from flask import render_template, url_for
from flask_login import current_user

from src import token, mailgun
from src.channelry.models import db


def send_email(
        email: str,
        template: str,
        subject: str,
        endpoint: str = '',
        name: str = '',
        data: dict = {}
) -> None:
    """Send email in to_emails with expiring links via tokens.

    :param email: Email to be sent to.
    :param template: Email template to be rendered.
    :param subject: Title of email.
    :param endpoint: Primary URI for recipient to go to.
    :param name: Name of recipient.
    :param data: Data to be encrypted.
    """
    if endpoint:
        if data:
            url = url_for(endpoint, t=[token.encrypt(data)], _external=True)
        else:
            url = url_for(endpoint, _external=True)
        data['url'] = url

    html = render_template(template, **data)
    to_emails = [f'{name} {email}' if name else email]
    mailgun.send_email(subject, to_emails, html=html)


def email_confirmation() -> None:
    """Direct user where to confirm their email address."""
    email = current_user.email
    endpoint = 'auth.confirm'
    template = 'email/confirm.html'
    subject = 'Confirm Channelry your email address!'
    name = current_user.name
    data = {'email': current_user.email}
    context = {
        'endpoint': endpoint,
        'data': data,
        'name': name
    }
    send_email(email, template, subject, **context)


def email_change_email_success(old_email: str) -> None:
    """Notify old email of user that the email has been changed.

    :param old_email: Old email of user.
    """
    template = 'email/change_email_success.html'
    subject = 'Your Channelry email address has changed'
    name = current_user.name
    data = {'new_email': current_user.email}
    send_email(old_email, template, subject, name=name, data=data)


def email_reset() -> None:
    """Direct user where to reset their password."""
    email = current_user.email
    endpoint = 'auth.reset'
    template = 'email/reset.html'
    subject = 'Reset your Channelry password'
    data = {'email': email}
    context = {
        'endpoint': endpoint,
        'data': data
    }
    send_email(email, template, subject, **context)


def email_reset_success() -> None:
    """Notify user that the password was successfully changed via reset."""
    email = current_user.email
    endpoint = 'auth.forgot'
    email_template = 'email/reset_success.html'
    subject = 'Your Channelry password has been changed'
    send_email(email, email_template, subject, endpoint=endpoint)


def email_change_password_success() -> None:
    """Notify user that the password was successfully changed via profile."""
    endpoint = 'auth.reset'
    template = 'email/change_password_success.html'
    subject = 'Your Channelry password has been changed'
    context = {
        'endpoint': endpoint,
        'name': current_user.name
    }
    send_email(current_user, template, subject, **context)


def email_change_email(new_email: str) -> None:
    """Direct user where to change email.

    :param new_email: New email of user that is yet to be confirmed.
    """
    endpoint = 'auth.confirm'
    template = 'email/change_email.html'
    subject = 'Confirm your new Channelry email address!'
    old_email = current_user.email
    data = {
        'old_email': old_email,
        'new_email': new_email
    }
    name = current_user.name
    context = {
        'endpoint': endpoint,
        'name': name,
        'data': data
    }
    send_email(new_email, template, subject, **context)
