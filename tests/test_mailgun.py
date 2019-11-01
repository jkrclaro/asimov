import unittest

import responses

from src import mailgun


class Unit(unittest.TestCase):

    @responses.activate
    def test_send_email(self):
        url = 'https://api.eu.mailgun.net/v3/www.cloudfile.dev/messages'
        responses.add(responses.POST, url)

        response = mailgun.send_email(
            'Confirm your email',
            ['John jkrclaro@gmail.com'],
            'Welcome',
        )

        assert response.request.body == 'from=Cloudfile+%3Cmailgun%40www.cloudfile.dev%3E&to=John+jkrclaro%40gmail.com&subject=Confirm+your+email&text=Welcome&html='


if __name__ == '__main__':
    unittest.main()
