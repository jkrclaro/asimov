import unittest

import responses

from src import mailgun


class Unit(unittest.TestCase):

    @responses.activate
    def test_send_email(self):
        url = 'https://api.eu.mailgun.net/v3/www.doshless.app/messages'
        responses.add(responses.POST, url)

        response = mailgun.send_email(
            'Confirm your email',
            ['John jkrclaro@gmail.com'],
            'Welcome',
        )

        assert response.request.body == 'from=Doshless+%3Cmailgun%40www.doshless.app%3E&to=John+jkrclaro%40gmail.com&subject=Confirm+your+email&text=Welcome&html='


if __name__ == '__main__':
    unittest.main()
