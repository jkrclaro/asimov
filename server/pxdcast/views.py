import time

from server.pxdcast.applepodcasts import ApplePodcasts
from server.pxdcast.feed import Feed
from server.utils.jsonify import jsonify


def podcast_list(request):
    apple_podcasts = ApplePodcasts()
    a16z = apple_podcasts.search_podcasts('a16z')
    sed = apple_podcasts.search_podcasts('software engineering daily')
    jr = apple_podcasts.search_podcasts('joe rogan')
    podcasts = a16z + sed + jr
    return jsonify(podcasts)


def podcast_retrieve(request, pk):
    apple_podcasts = ApplePodcasts()
    podcast = apple_podcasts.search_podcast(pk)
    return jsonify(podcast)


def episode_list(request, pk):
    feed = Feed()
    data = feed.parse(pk)
    return jsonify(data)


def episode_retrieve(request, podcast_pk, pk):
    data = {
        'id': 'js-party-with-kevin-ball',
        'name': 'JS Party with Kevin Ball',
        'uploaded_at': 'January 16',
        'duration': '1h 4m'
    }
    return jsonify(data)
