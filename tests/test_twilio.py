import datetime

import responses
from twilio.rest import Client

from src import helpers


class TestTwilio:
    account_sid = 'test_account_sid'
    auth_token = 'test_auth_token'
    client = Client(account_sid, auth_token)

    @responses.activate
    def test_get_phones(self):
        responses_url = f'https://api.twilio.com/2010-04-01/Accounts/' \
              f'{self.account_sid}/IncomingPhoneNumbers.json'
        responses_json = {
            "incoming_phone_numbers": [
                {"phone_number": "+0123456789"},
            ]
        }
        responses.add(responses.GET, responses_url, json=responses_json)

        phones = helpers.twilio.get_phones(self.client)
        phones_expected = [{'number': '+0123456789', 'platform': 'twilio'}]

        assert phones == phones_expected

    @responses.activate
    def test_get_contacts(self):
        responses_url = f'https://api.twilio.com/2010-04-01/Accounts/' \
                        f'{self.account_sid}/Messages.json'
        responses_json = {
            'messages': [
                {
                    "body": "Sent from your Twilio trial account - "
                            "Hello neighbour",
                    "to": "+353894518912",
                    "date_sent": "Wed, 04 Dec 2019 17:51:40 +0000",
                },
                {
                    "body": "Sent from your Twilio trial account - "
                            "Hello, is it me you are looking for?",
                    "to": "+353863767433",
                    "date_sent": "Wed, 04 Dec 2019 17:46:29 +0000",
                },
            ]
        }
        responses.add(responses.GET, responses_url, json=responses_json)

        contacts = helpers.twilio.get_contacts(self.client)
        contacts_expected = {
            '+353894518912': {
                'last_message': 'Sent from your Twilio trial account - '
                                'Hello neighbour',
                'last_message_date_sent': datetime.datetime(
                    2019, 12, 4, 17, 51, 40, tzinfo=datetime.timezone.utc
                )
            },
            '+353863767433': {
                'last_message': 'Sent from your Twilio trial account - '
                                'Hello, is it me you are looking for?',
                'last_message_date_sent': datetime.datetime(
                    2019, 12, 4, 17, 46, 29, tzinfo=datetime.timezone.utc
                )
            }
        }

        assert contacts == contacts_expected
