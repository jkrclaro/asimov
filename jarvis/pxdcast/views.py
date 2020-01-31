import json
from datetime import datetime, timezone

from django.core.exceptions import ObjectDoesNotExist
from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse

from .models import Podcast, Episode
from .applepodcasts import ApplePodcasts
from .feed import Feed
from jarvis.utils.jsonify import jsonify


@csrf_exempt
def podcast_list(request):
    payload = json.loads(request.body.decode('utf-8'))
    apple_podcasts = ApplePodcasts()
    apple_podcasts = apple_podcasts.search_podcasts(payload['keywords'])
    for apple_podcast in apple_podcasts:
        Podcast.objects.get_or_create_podcast(**apple_podcast)
    return jsonify(apple_podcasts)


def podcast_subscriptions(request):
    return jsonify([])


def podcast_retrieve(request, pk):
    try:
        podcast = Podcast.objects.get(apple_podcasts_id=pk)
    except ObjectDoesNotExist:
        apple_podcasts = ApplePodcasts()
        data = apple_podcasts.search_podcast(pk)
        podcast = Podcast.objects.get_or_create_podcast(**data)

    if not podcast.summary:
        feed = Feed()
        summary = feed.get_summary(podcast.website)
        podcast.summary = summary
        podcast.save()

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

    return jsonify(data)


def episode_list(request, pk):
    try:
        podcast = Podcast.objects.get(apple_podcasts_id=pk)
    except ObjectDoesNotExist:
        return JsonResponse({}, status=404)

    today = datetime.now(timezone.utc)
    time_elapsed = today - podcast.last_episodes_query_at
    last_time = divmod(time_elapsed.total_seconds(), 60)[0]
    last_query_was_an_hour_ago = last_time >= 60
    if last_query_was_an_hour_ago:
        feed = Feed()
        episodes = feed.get_episodes(podcast.website)
        podcast.last_episodes_query_at = today
        podcast.save()
        for episode in episodes:
            Episode.objects.get_or_create_episode(podcast=podcast, **episode)
    else:
        episodes = Episode.objects.filter(podcast=podcast)
        episodes = list(episodes.values())

    return jsonify(episodes)


def episode_retrieve(request, podcast_pk, pk):
    data = {
        'id': 'js-party-with-kevin-ball',
        'name': 'JS Party with Kevin Ball',
        'uploaded_at': 'January 16',
        'duration': '1h 4m'
    }
    return jsonify(data)
