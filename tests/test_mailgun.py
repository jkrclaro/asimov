import os
import io
import logging
import unittest

import responses

from libs import mailgun


class TestMailgun(unittest.TestCase):

    def setUp(self):
        mailgun.api_key = 'test-api-key-123'

    @responses.activate
    def test_send_email(self):
        url = 'https://api.eu.mailgun.net/v3/www.channelry.com/messages'
        responses.add(responses.POST, url)

        response = mailgun.send_email(
            'Confirm your email',
            ['John jkrclaro@gmail.com'],
            'Welcome',
        )

        assert response.request.body == 'from=Channelry+%3Cmailgun%40www.channelry.com%3E&to=John+jkrclaro%40gmail.com&subject=Confirm+your+email&text=Welcome&html='


if __name__ == '__main__':
    unittest.main()
