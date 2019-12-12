import requests

api_key = ''
domain = 'www.sidefone.com'
region = 'eu'
from_email = f'Sidefone <mailgun@{domain}>'


def send_email(subject: str, to_emails: list, text: str = '', html: str = ''):
    """Send an email.

    :param subject: Title of email.  
    :param to_emails: Emails to be sent to.  
    :param text: Body of message. (Text version)  
    :param html: Body of the message. (HTML version)  
    """
    response = requests.post(
        f'https://api.{region}.mailgun.net/v3/{domain}/messages',
        auth=('api', api_key),
        data={
            'from': from_email,
            'to': to_emails,
            'subject': subject,
            'text': text,
            'html': html
        }
    )

    return response
