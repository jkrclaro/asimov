import os
import jinja2

from src import mailgun, token


def main():
    mailgun.username = os.environ.get('MAILGUN_USERNAME')
    mailgun.password = os.environ.get('MAILGUN_PASSWORD')
    token.secret_key = '123'
    token.salt = '12345'
<<<<<<< HEAD
    email = {'email': 'john@warkphone.com'}
=======
    email = {'email': 'john@sidefone.com'}
>>>>>>> Add speech-bubble CSS

    data = token.encrypt(email)
    url = f'http://dashboard.localhost:3000/confirm?t={data}'
    context = {'url': url}

    # Requires an app context to use flask.render_template so just use jinja2
    html = jinja2.Environment(
<<<<<<< HEAD
        loader=jinja2.FileSystemLoader('src/warkphone/templates/')
    ).get_template('email/confirm.html').render(context)
    mailgun.send_email(
        'Confirm your Warkphone email address!',
=======
        loader=jinja2.FileSystemLoader('src/sidefone/templates/')
    ).get_template('email/confirm.html').render(context)
    mailgun.send_email(
        'Confirm your Sidefone email address!',
>>>>>>> Add speech-bubble CSS
        [f'John {email}'],
        html=html,
    )


if __name__ == '__main__':
    main()
