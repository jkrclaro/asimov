import unittest

import responses

from src import mailgun


class Unit(unittest.TestCase):

    @responses.activate
    def test_send_email(self):
        url = 'https://api.eu.mailgun.net/v3/www.validpage.com/messages'
        responses.add(responses.POST, url)

        response = mailgun.send_email(
            'Confirm your email',
            ['John jkrclaro@gmail.com'],
            'Welcome',
        )

        assert response.request.body == 'from=Validpage+%3Cmailgun%40www.validpage.com%3E&to=John+jkrclaro%40gmail.com&subject=Confirm+your+email&text=Welcome&html='


if __name__ == '__main__':
    unittest.main()
