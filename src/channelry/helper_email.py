from flask import render_template, url_for

from src.channelry.models import db

from src import token, mailgun


def send_email(email: str, template: str, subject: str, endpoint: str = '', name: str = '', data: dict = {}) -> None:
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


def send_confirm(user: db.Model) -> None:
    """Send email after successfully signing up.

    :param user: SQLAlchemy model of user
    :return: None
    """
    email = user.email
    endpoint = 'auth.confirm'
    template = 'email/confirm.html'
    subject = 'Confirm Channelry your email address!'
    name = user.name
    data = {'email': user.email}
    context = {
        'endpoint': endpoint,
        'data': data,
        'name': name
    }
    send_email(email, template, subject, **context)


def send_resend_confirmation(user: db.Model) -> None:
    """Resend confirmation email to user.

    :param user: SQLAlchemy model of user
    :return: None
    """
    email = user.email
    endpoint = 'auth.confirm'
    email_template = 'email/confirm.html'
    subject = 'Confirm Channelry your email address!'
    name = user.name
    data = {'email': email}
    context = {
        'endpoint': endpoint,
        'data': data,
        'name': name
    }
    send_email(email, email_template, subject, **context)


def send_change_email_success(user: db.Model, old_email: str) -> None:
    """Send email after successfully confirming changing of email.

    :param user: SQLAlchemy model of user
    :param old_email: Old email of user.
    :param new_email: New email of user.
    :return: None
    """
    template = 'email/change_email_success.html'
    subject = 'Your Channelry email address has changed'
    name = user.name
    data = {'new_email': user.email}
    send_email(old_email, template, subject, name=name, data=data)


def send_reset(user: db.Model):
    """Send email when user needs to reset their password.

    :param user: SQLAlchemy model of user
    :return: None
    """
    email = user.email
    endpoint = 'auth.reset'
    email_template = 'email/reset.html'
    subject = 'Reset your Channelry password'
    data = {'email': email}
    context = {
        'endpoint': endpoint,
        'data': data
    }
    send_email(email, email_template, subject, **context)


def send_reset_success(user: db.Model):
    """Send email when user successfully changes their password during reset.

    :param user: SQLAlchemy model of user
    :return: None
    """
    email = user.email
    endpoint = 'auth.forgot'
    email_template = 'email/reset_success.html'
    subject = 'Your Channelry password has been changed'
    send_email(email, email_template, subject, endpoint=endpoint)


def send_change_password_success(user: db.Model) -> None:
    """Send email after successfully changing password of user.

    :param user: SQLAlchemy model of user
    :return: None
    """
    endpoint = 'auth.reset'
    template = 'email/change_password_success.html'
    subject = 'Your Stripe password has been changed'
    context = {
        'endpoint': endpoint,
        'name': user.name
    }
    send_email(user, template, subject, **context)


def send_change_email(user: db.Model, new_email: str):
    """Send email that a new email for user has been requested for change.

    :param user: SQLAlchemy model of user
    :param new_email: New email of user that is yet to be confirmed.
    :return: None
    """
    endpoint = 'auth.confirm'
    template = 'email/change_email.html'
    subject = 'Confirm your new Channelry email address!'
    old_email = user.email
    data = {
        'old_email': old_email,
        'new_email': new_email
    }
    name = user.name
    context = {
        'endpoint': endpoint,
        'name': name,
        'data': data
    }
    send_email(old_email, template, subject, **context)
