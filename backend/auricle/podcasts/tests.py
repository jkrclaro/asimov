import datetime
import pytz

from django.test import TestCase

from auricle.podcasts.models import Episode, Podcast
from auricle.podcasts.helpers import feed


class FeedTestCase(TestCase):

    def test_format_duration(self):
        self.assertEqual(feed.format_duration('01:36:41'), '1h 36m')
        self.assertEqual(feed.format_duration('00:36:41'), '36 mins')
        self.assertEqual(feed.format_duration('00:00:41'), '41 secs')
        self.assertEqual(feed.format_duration('0:40:12'), '40 mins')
        self.assertEqual(feed.format_duration('2412'), '40 mins')
        self.assertEqual(feed.format_duration('58:55'), '58 mins')
        self.assertEqual(feed.format_duration('60:15'), '1hr')

    def test_format_uploaded_at(self):
        feed_pa = feed.format_published_at('Sun, 25 Aug 2019 11:00:00 +0000')
        test_pa = datetime.datetime(2019, 8, 25, 11, 0, tzinfo=pytz.utc)
        self.assertEqual(feed_pa, test_pa)


class EpisodeTestCase(TestCase):

    def setUp(self) -> None:
        data = {
            'name': 'Artificial Intelligence (AI Podcast) with Lex Fridman',
            'author': 'Lex Fridman',
            'img': 'https://is4-ssl.mzstatic.com/image/thumb/600x600bb.jpg',
            'itunes_id': 1434243584,
            'feed': 'https://lexfridman.com/category/ai/feed/',
            'summary': 'Conversations about the nature of intelligence.'
        }
        Podcast.objects.create_podcast(**data)

    def test_create_episode(self):
        feed_pa = feed.format_published_at('Sun, 25 Aug 2019 11:00:00 +0000')
        data = {
            'name': 'Elon Musk: Tesla Autopilot',
            'published_at': feed_pa,
            'duration': feed.format_duration('58:55'),
            'url': 'https://media.blubrry.com/mit_ai_elon_musk.mp3',
            'podcast': Podcast.objects.get(id=1)
        }
        episode = Episode.objects.create_episode(**data)
        test_pa = datetime.datetime(2019, 8, 25, 11, 0, tzinfo=pytz.utc)
        self.assertEqual(episode.published_at, test_pa)
