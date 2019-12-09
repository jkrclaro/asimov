import json

import telnyx
import responses

from src import helpers

telnyx.api_key = 'test_api_key'


def telnyx_permission_error_callback(request):
    error = {
        'errors': [{
            'code': '20017', 'title': 'Account not level 2 verified',
            'detail': "Level 2 account verification is "
                      "required to perform this action. "
                      "Check the 'verifications' tab under 'account' "
                      "on the portal for more information.",
            'meta': {
                'url': 'https://developers.telnyx.com/docs/'
                       'overview/errors/20017'
            }
        }]
    }
    return 403, {}, json.dumps(error)


class TestTelnyx:

    @responses.activate
    def test_get_phones(self):
        responses_url = 'https://api.telnyx.com/v2/messaging_phone_numbers'
        responses_json = {
          "data": [{"phone_number": "+17652649135"}]
        }

        responses.add(responses.GET, responses_url, json=responses_json)
        phones = helpers.telnyx.get_phones(telnyx)
        phones_expected = [{'number': '+17652649135', 'platform': 'telnyx'}]
        assert phones == phones_expected

    @responses.activate
    def test_sms_create_permission_error(self):
        responses_url = 'https://api.telnyx.com/v2/messages'
        responses.add_callback(
            responses.POST,
            responses_url,
            callback=telnyx_permission_error_callback
        )

        data = {
            'from': '+17652649135',
            'to': '+353863767433',
            'text': 'Testing!'
        }
        message, category = helpers.telnyx.sms_create(telnyx, data)

        message_expected = "Level 2 account verification is required to " \
                           "perform this action. Check the 'verifications' " \
                           "tab under 'account' on the portal for more " \
                           "information."
        category_expected = "danger"

        assert message == message_expected
        assert category == category_expected

