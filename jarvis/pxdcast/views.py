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
        data = {
            'name': podcast.name,
            'author': podcast.author,
            'img': podcast.img,
            'feed': podcast.website,
            'website': podcast.website,
            'id': podcast.apple_podcasts_id,
            'summary': podcast.summary,
            'episodes': list(Episode.objects.filter(podcast__id=podcast.id).all())
        }
        print(data['episodes'])
    except ObjectDoesNotExist:
        apple_podcasts = ApplePodcasts()
        feed = Feed()
        apple_podcasts_data = apple_podcasts.search_podcast(pk)
        feed_data = feed.parse(apple_podcasts_data['website'])
        summary = feed_data.pop('summary')
        apple_podcasts_data['summary'] = summary
        podcast = Podcast.objects.get_or_create_podcast(**apple_podcasts_data)
        feed_episodes = feed_data['episodes']
        for feed_episode in feed_episodes:
            feed_episode['podcast'] = podcast
            Episode.objects.get_or_create_episode(**feed_episode)
        data = {**apple_podcasts_data, **feed_data}

    print(data)
    return jsonify(data)


def episode_list(request, pk):
    # try:
    #     podcast = Podcast.objects.get(apple_podcasts_id=pk)
    # except ObjectDoesNotExist:
    #     podcast = None
    #
    # data = {}
    # if podcast:
    #     feed = Feed()
    data = {}
    return jsonify(data)


def episode_retrieve(request, podcast_pk, pk):
    data = {
        'id': 'js-party-with-kevin-ball',
        'name': 'JS Party with Kevin Ball',
        'uploaded_at': 'January 16',
        'duration': '1h 4m'
    }
    return jsonify(data)
