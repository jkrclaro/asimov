import unittest

import responses

from src import mailgun


class Unit(unittest.TestCase):

    @responses.activate
    def test_send_email(self):
<<<<<<< HEAD
        url = 'https://api.eu.mailgun.net/v3/www.warkphone.com/messages'
=======
        url = 'https://api.eu.mailgun.net/v3/www.sidefone.com/messages'
>>>>>>> Add speech-bubble CSS
        responses.add(responses.POST, url)

        response = mailgun.send_email(
            'Confirm your email',
            ['John jkrclaro@gmail.com'],
            'Welcome',
        )

<<<<<<< HEAD
        assert response.request.body == 'from=Warkphone+%3Cmailgun%40www.warkphone.com%3E&to=John+jkrclaro%40gmail.com&subject=Confirm+your+email&text=Welcome&html='
=======
        assert response.request.body == 'from=Sidefone+%3Cmailgun%40www.sidefone.com%3E&to=John+jkrclaro%40gmail.com&subject=Confirm+your+email&text=Welcome&html='
>>>>>>> Add speech-bubble CSS


if __name__ == '__main__':
    unittest.main()
