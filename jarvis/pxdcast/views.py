import time

from .models import Podcast
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
        podcast_model = Podcast.objects.get(apple_podcasts_id=pk)
    except Podcast.DoesNotExist:
        podcast_model = None

    if podcast_model:
        podcast = {
            'name': podcast_model.name,
            'author': podcast_model.author,
            'img': podcast_model.img,
            'feed': podcast_model.website,
            'website': podcast_model.website,
            'id': podcast_model.apple_podcasts_id
        }
    else:
        apple_podcasts = ApplePodcasts()
        podcast = apple_podcasts.search_podcast(pk)
        Podcast.objects.get_or_create_podcast(**podcast)
    return jsonify(podcast)


def episode_list(request, pk):
    podcast = Podcast.objects.get(apple_podcasts_id=pk)
    data = {}
    if podcast:
        feed = Feed()
        data = feed.parse(podcast.feed)
    return jsonify(data)


def episode_retrieve(request, podcast_pk, pk):
    data = {
        'id': 'js-party-with-kevin-ball',
        'name': 'JS Party with Kevin Ball',
        'uploaded_at': 'January 16',
        'duration': '1h 4m'
    }
    return jsonify(data)
