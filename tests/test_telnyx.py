import telnyx
import responses

from src import helpers

telnyx.api_key = 'test_api_key'


class TestTelnyx:

    @responses.activate
    def test_get_phones(self):
        responses_url = 'https://api.telnyx.com/v2/messaging_phone_numbers'
        responses_json = {
          "data": [
            {"phone_number": "+17652649135"}
          ]
        }

        responses.add(responses.GET, responses_url, json=responses_json)
        phones = helpers.telnyx.get_phones(telnyx)
        phones_expected = [{'number': '+17652649135', 'platform': 'telnyx'}]
        assert phones == phones_expected
