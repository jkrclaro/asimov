import io
import os

import pydub
from google.cloud import speech


class Transcriber:

    def __init__(self):
        self.speech_client = speech.SpeechClient()

    def convert(self, filename):
        sound = pydub.AudioSegment.from_mp3(filename)
        print(sound)
        return sound.export(filename, format='wav')

    def transcribe(self, content):
        audio = speech.types.RecognitionAudio(content=content)
        config = speech.types.RecognitionConfig(
            encoding=speech.enums.RecognitionConfig.AudioEncoding.LINEAR16,
            sample_rate_hertz=44100,
            audio_channel_count=2,
            enable_separate_recognition_per_channel=True,
            language_code='en-US'
        )
        response = self.speech_client.recognize(config, audio)

        print(response)
        for index, result in enumerate(response.results):
            alternative = result.alternatives[0]
            print('-' * 20)
            print('First alternative of result {}'.format(index))
            print(u'Transcript: {}'.format(alternative.transcript))
            print(u'Channel Tag: {}'.format(result.channel_tag))

        return response
