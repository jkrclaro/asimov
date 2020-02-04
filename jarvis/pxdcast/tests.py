from django.test import TestCase

from jarvis.pxdcast.models import Episode, Podcast
from jarvis.pxdcast.helpers import feed


class FeedTestCase(TestCase):

    def test_format_duration(self):
        self.assertEqual(feed.format_duration('01:36:41'), '1h 36m')
        self.assertEqual(feed.format_duration('00:36:41'), '36 mins')
        self.assertEqual(feed.format_duration('00:00:41'), '41 secs')
        self.assertEqual(feed.format_duration('0:40:12'), '40 mins')
        self.assertEqual(feed.format_duration('2412'), '40 mins')
        self.assertEqual(feed.format_duration('58:55'), '58 mins')

    # def test_format_uploaded_at(self):
    #     self.assertEqual(feed.format_published_at('Sun, 25 Aug 2019 11:00:00 +0000'), '2019-08-25 11:00')


class EpisodeTestCase(TestCase):

    def setUp(self) -> None:
        Podcast.objects.create_podcast({
            'name': 'Artificial Intelligence (AI Podcast) with Lex Fridman',
            'author': 'Lex Fridman',
            'img': 'https://is4-ssl.mzstatic.com/image/thumb/Podcasts113/v4/29/ea/e1/29eae152-8211-a682-27f3-3604dcf5fc97/mza_8620699171955537230.png/600x600bb.jpg',
            'itunes_id': 1434243584,
            'feed': 'https://lexfridman.com/category/ai/feed/',
            'summary': 'Conversations about the nature of intelligence, science, and technology (at MIT and beyond) from the perspective of deep learning, robotics, AI, AGI, neuroscience, philosophy, psychology, cognitive science, economics, physics, mathematics, and more.'
        })

    def test_create_episode(self):
        Episode.objects.create_episode({
            'name': 'Elon Musk: Tesla Autopilot',
            'published_at': feed.format_published_at('Sun, 25 Aug 2019 11:00:00 +0000'),
            'duration': feed.format_duration('58:55'),
            'url': 'https://media.blubrry.com/takeituneasy/content.blubrry.com/takeituneasy/mit_ai_elon_musk.mp3',
            'podcast': Podcast.objects.filter(name='Artificial Intelligence (AI Podcast) with Lex Fridman').first()
        })
