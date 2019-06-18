import os
import sys

import requests


class Mailgun:

    def __init__(
        self,
        api_key: str,
        domain: str='www.channelry.com',
        region: str='eu'
    ):
        """Primary class of Mailgun.

        :param api_key: API key.
        :param domain: Verified domain.
        :param region: Domain region.
        """
        self.api_key = api_key
        self.domain = domain
        self.region = region
        self.from_email = f'Channelry <mailgun@{domain}>'

    def send_email(
        self,
        subject: str,
        to_emails: list,
        text: str='',
        html: str='',
    ):
        """Send an email.

        :param subject: Title of email.  
        :param to_emails: Emails to be sent to.  
        :param text: Body of message. (Text version)  
        :param html: Body of the message. (HTML version)  
        """
        response = requests.post(
            f'https://api.{self.region}.mailgun.net/v3/{self.domain}/messages',
            auth=('api', self.api_key),
            data={
                'from': self.from_email,
                'to': to_emails,
                'subject': subject,
                'text': text,
                'html': html
            }
        )

        return response
