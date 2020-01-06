# import datetime
#
# import responses
# from twilio.rest import Client
#
# from src import helpers
#
#
# class TestTwilio:
#     TWILIO_ACCOUNT_SID = 'test_account_sid'
#     TWILIO_AUTH_TOKEN = 'test_auth_token'
#     client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
#
#     @responses.activate
#     def test_get_phones(self):
#         responses_url = f'https://api.twilio.com/2010-04-01/Accounts/' \
#               f'{self.TWILIO_ACCOUNT_SID}/IncomingPhoneNumbers.json'
#         responses_json = {
#             "incoming_phone_numbers": [
#                 {"phone_number": "+0123456789"},
#             ]
#         }
#         responses.add(responses.GET, responses_url, json=responses_json)
#
#         phones = helpers.twilio.get_phones(self.client)
#         phones_expected = [{'number': '+0123456789', 'platform': 'twilio'}]
#
#         assert phones == phones_expected
#
#     @responses.activate
#     def test_get_contacts(self):
#         responses_url = f'https://api.twilio.com/2010-04-01/Accounts/' \
#                         f'{self.TWILIO_ACCOUNT_SID}/Messages.json'
#         responses_json = {
#             'messages': [
#                 {
#                     "body": "Sent from your Twilio trial account - "
#                             "Hello neighbour",
#                     "to": "+353894518912",
#                     "date_sent": "Wed, 04 Dec 2019 17:51:40 +0000",
#                 },
#                 {
#                     "body": "Sent from your Twilio trial account - "
#                             "Hello, is it me you are looking for?",
#                     "to": "+353863767433",
#                     "date_sent": "Wed, 04 Dec 2019 17:46:29 +0000",
#                 },
#             ]
#         }
#         responses.add(responses.GET, responses_url, json=responses_json)
#
#         contacts = helpers.twilio.get_contacts(self.client)
#         contacts_expected = {
#             '+353894518912': {
#                 'last_message': 'Sent from your Twilio trial account - '
#                                 'Hello neighbour',
#                 'last_message_date_sent': datetime.datetime(
#                     2019, 12, 4, 17, 51, 40, tzinfo=datetime.timezone.utc
#                 )
#             },
#             '+353863767433': {
#                 'last_message': 'Sent from your Twilio trial account - '
#                                 'Hello, is it me you are looking for?',
#                 'last_message_date_sent': datetime.datetime(
#                     2019, 12, 4, 17, 46, 29, tzinfo=datetime.timezone.utc
#                 )
#             }
#         }
#
#         assert contacts == contacts_expected
#
#     def test_sms_build(self):
#         payload = {
#             'sender': '+123',
#             'receiver': '+456',
#             'message': 'Test'
#         }
#         sms = helpers.twilio.sms_build(payload)
#         sms_expected = {
#             'from_': payload['sender'],
#             'to': payload['receiver'],
#             'body': payload['message']
#         }
#         assert sms == sms_expected
#
#     @responses.activate
#     def test_sms_send(self):
#         responses_url = f'https://api.twilio.com/2010-04-01/Accounts/' \
#                         f'{self.TWILIO_ACCOUNT_SID}/Messages.json'
#         response_json = {}
#         responses.add(responses.POST, responses_url, json=response_json)
#         sms = {
#             'from_': '+123',
#             'to': '+456',
#             'body': 'Testing'
#         }
#         message, category = helpers.twilio.sms_send(self.client, sms)
#         message_expected = 'Successfully sent your message'
#         category_expected = 'success'
#         assert message == message_expected
#         assert category == category_expected
