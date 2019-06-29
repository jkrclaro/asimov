import os
import jinja2

from src import mailgun, token


def main():
    mailgun.api_key = os.environ.get('MAILGUN_API_KEY')
    token.api_key = '123'
    token.secret_key = '12345'
    email = 'john@trycamel.com.com'

    confirmation_token = token.generate(email)
    confirmation_url = f'http://dashboard.localhost:3000/email/confirm/{confirmation_token}'
    context = {'confirmation_url': confirmation_url}

    # Requires an app context to use flask.render_template so just use jinja2
    html = jinja2.Environment(
        loader=jinja2.FileSystemLoader('camel/templates/')
    ).get_template('account/email/confirm_email.html').render(context)
    mailgun.send_email(
        'Confirm your Camel email address!',
        [f'John {email}'],
        html=html,
    )


if __name__ == '__main__':
    main()
