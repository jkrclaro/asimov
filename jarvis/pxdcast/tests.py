from django.test import TestCase

from .helpers import feed


class FeedTestCase(TestCase):

    def test_format_duration(self):
        self.assertEqual(feed.format_duration('01:36:41'), '1h 36m')
        self.assertEqual(feed.format_duration('00:36:41'), '36 mins')
        self.assertEqual(feed.format_duration('00:00:41'), '41 secs')
        self.assertEqual(feed.format_duration('0:40:12'), '40 mins')
        self.assertEqual(feed.format_duration('2412'), '40 mins')

    def test_format_uploaded_at(self):
        self.assertEqual(feed.format_published_at('Sun, 25 Aug 2019 11:00:00 +0000'), '2019-08-25 11:00')
