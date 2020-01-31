import json
from datetime import datetime, timezone

from django.core.exceptions import ObjectDoesNotExist

from rest_framework import decorators, permissions, status
from rest_framework.response import Response

from .helpers import itunes, feed
from .models import Podcast, Episode


@decorators.api_view(['POST'])
@decorators.permission_classes([permissions.IsAuthenticated])
def podcast_list(request):
    payload = json.loads(request.body.decode('utf-8'))
    keywords = payload.get('keywords', None)
    podcasts = itunes.search_podcasts(keywords)
    return Response(podcasts, status.HTTP_200_OK)


@decorators.api_view(['GET'])
@decorators.permission_classes([permissions.IsAuthenticated])
def podcast_subscriptions(request):
    return Response([], status.HTTP_200_OK)


@decorators.api_view(['GET'])
@decorators.permission_classes([permissions.IsAuthenticated])
def podcast_retrieve(request, pk):
    try:
        podcast = Podcast.objects.get(apple_podcasts_id=pk)
    except ObjectDoesNotExist:
        data = itunes.search_podcast(pk)
        podcast = Podcast.objects.create_podcast(**data)

    if not podcast.summary:
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

    return Response(data, status.HTTP_200_OK)


@decorators.api_view(['GET'])
@decorators.permission_classes([permissions.IsAuthenticated])
def episode_list(request, pk):
    try:
        podcast = Podcast.objects.get(apple_podcasts_id=pk)
    except ObjectDoesNotExist:
        return Response({}, status.HTTP_404_NOT_FOUND)

    episodes = []
    if podcast.last_episodes_query_at:
        today = datetime.now(timezone.utc)
        time_elapsed = today - podcast.last_episodes_query_at
        last_time = divmod(time_elapsed.total_seconds(), 60)[0]
        last_query_was_12_hours_ago = last_time >= 720

        if last_query_was_12_hours_ago:
            episodes = feed.get_episodes(podcast.website)
            podcast.last_episodes_query_at = today
            podcast.save()
            for episode in episodes:
                Episode.objects.create_episode(podcast=podcast, **episode)
    else:
        episodes = Episode.objects.filter(podcast=podcast)
        episodes = list(episodes.values())

    return Response(episodes, status.HTTP_200_OK)


@decorators.api_view(['GET'])
@decorators.permission_classes([permissions.IsAuthenticated])
def episode_retrieve(request, podcast_pk, pk):
    data = {
        'id': 'js-party-with-kevin-ball',
        'name': 'JS Party with Kevin Ball',
        'uploaded_at': 'January 16',
        'duration': '1h 4m'
    }
    return Response(data, status.HTTP_200_OK)
