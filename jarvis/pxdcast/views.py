from django.core.exceptions import ObjectDoesNotExist

from .models import Podcast, Episode
from .applepodcasts import ApplePodcasts
from .feed import Feed
from jarvis.utils.jsonify import jsonify


def podcast_list(request):
    apple_podcasts = ApplePodcasts()
    a16z = apple_podcasts.search_podcasts('a16z')
    sed = apple_podcasts.search_podcasts('software engineering daily')
    jr = apple_podcasts.search_podcasts('joe rogan')
    recode_decode = apple_podcasts.search_podcasts('recode decode')
    podcasts = a16z + sed + jr + recode_decode
    return jsonify(podcasts)


def podcast_retrieve(request, pk):
    try:
        podcast = Podcast.objects.get(apple_podcasts_id=pk)
        episodes = Episode.objects.filter(podcast__id=podcast.id)
        data = {
            'name': podcast.name,
            'author': podcast.author,
            'img': podcast.img,
            'feed': podcast.website,
            'website': podcast.website,
            'id': podcast.apple_podcasts_id,
            'summary': podcast.summary,
            'episodes': list(episodes.values())
        }
    except ObjectDoesNotExist:
        apple_podcasts = ApplePodcasts()
        apple_podcasts_data = apple_podcasts.search_podcast(pk)
        feed = Feed()
        feed_episodes, feed_summary = feed.parse(apple_podcasts_data['website'])
        apple_podcasts_data['summary'] = feed_summary
        podcast = Podcast.objects.get_or_create_podcast(**apple_podcasts_data)
        for feed_episode in feed_episodes:
            Episode.objects.get_or_create_episode(
                podcast=podcast,
                **feed_episode
            )
        data = {'episodes': feed_episodes, **apple_podcasts_data}
    return jsonify(data)


def episode_list(request, pk):
    try:
        episodes = Episode.objects.filter(podcast__apple_podcasts_id=pk)
        episodes = list(episodes.values())
    except ObjectDoesNotExist:
        episodes = {}
    return jsonify(episodes)


def episode_retrieve(request, podcast_pk, pk):
    data = {
        'id': 'js-party-with-kevin-ball',
        'name': 'JS Party with Kevin Ball',
        'uploaded_at': 'January 16',
        'duration': '1h 4m'
    }
    return jsonify(data)
