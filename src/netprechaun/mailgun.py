import os
import sys

import requests


class Mailgun:

    def __init__(self, api_key='', domain='www.netprechaun.com', region='eu'):
        self.api_key = api_key
        self.domain = domain
        self.region = region
        self.sender = f'Netprechaun <mailgun@{domain}>'

    def send_simple_message(self, subject, text, recipients):
        response = requests.post(
            f'https://api.{self.region}.mailgun.net/v3/{self.domain}/messages',
            auth=('api', self.api_key),
            data={
                'from': self.sender,
                'to': recipients,
                'subject': subject,
                'text': text
            }
        )

        return response
