import os
import io
import logging
import unittest

import responses

from src.pxdcast.mailgun import Mailgun


class TestNetlify(unittest.TestCase):

    def setUp(self):
        self.mailgun = Mailgun('6bbb4f8865ce1a7e18f0cee373e3d592-87cdd773-71a84f51')

    def test_send_simple_message(self):
        self.mailgun.send_simple_message('Welcome', 'Confirm your email', ['jkrclaro@gmail.com'])


if __name__ == '__main__':
    unittest.main()
