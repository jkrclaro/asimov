import os
import io
import logging
import unittest

import responses

from src.pxdcast.transcriber import Transcriber


class TestTranscriber(unittest.TestCase):

    # def setUp(self):
    #     self.transcriber = Transcriber()

    def test_speech(self):
        filename = 'podcast.wav'
        filepath = os.path.join(os.path.dirname(__file__), filename)
        # wav = self.transcriber.convert(filepath)

        # with io.open(filepath, 'rb') as audiofile:
        #     content = audiofile.read()
        #     self.transcriber.transcribe(content)

        assert True


if __name__ == '__main__':
    unittest.main()
