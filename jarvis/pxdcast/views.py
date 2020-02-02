import json

from django.core.exceptions import ObjectDoesNotExist
from django.forms.models import model_to_dict
from django.db.utils import IntegrityError

from rest_framework import decorators, permissions, status
from rest_framework.response import Response

from .helpers import itunes, feed
from .models import Podcast, Episode, Subscription


@decorators.api_view(['POST'])
@decorators.permission_classes([permissions.AllowAny])
def podcast_list(request):
    payload = json.loads(request.body.decode('utf-8'))
    keywords = payload.get('keywords', None)
    podcasts = itunes.search_podcasts(keywords)
    return Response(podcasts, status.HTTP_200_OK)


@decorators.api_view(['GET'])
@decorators.permission_classes([permissions.AllowAny])
def podcast_retrieve(request, itunes_id):
    try:
        podcast = Podcast.objects.get(itunes_id=itunes_id)
    except ObjectDoesNotExist:
        data = itunes.search_podcast(itunes_id)
        if not data:
            return Response(None, status.HTTP_404_NOT_FOUND)
        podcast = Podcast.objects.create_podcast(**data)

    if not podcast.summary:
        details = feed.get_podcast(podcast.feed)
        podcast.summary = details['summary']
        podcast.website = details['website']
        podcast.save()

    fields = ('img', 'name', 'author', 'summary', 'feed', 'website',)
    data = model_to_dict(podcast, fields=fields)
    return Response(data, status.HTTP_200_OK)


@decorators.api_view(['GET'])
@decorators.permission_classes([permissions.AllowAny])
def episode_list(request, itunes_id):
    try:
        podcast = Podcast.objects.get(itunes_id=itunes_id)
    except ObjectDoesNotExist:
        return Response({}, status.HTTP_404_NOT_FOUND)

    episodes = feed.get_episodes(podcast.feed)
    if podcast.episodes.count() != len(episodes) - 1:
        for episode in episodes:
            try:
                Episode.objects.create_episode(podcast=podcast, **episode)
            except IntegrityError:
                break
    else:
        fields = ('name', 'uploaded_at', 'duration',)
        episodes = podcast.episodes.all().values(*fields)

    return Response(episodes, status.HTTP_200_OK)


@decorators.api_view(['GET'])
@decorators.permission_classes([permissions.AllowAny])
def episode_retrieve(request, itunes_id, pk):
    data = {
        'id': 'js-party-with-kevin-ball',
        'name': 'JS Party with Kevin Ball',
        'uploaded_at': 'January 16',
        'duration': '1h 4m'
    }
    return Response(data, status.HTTP_200_OK)


@decorators.api_view(['GET'])
@decorators.permission_classes([permissions.IsAuthenticated])
def podcast_subscriptions(request):
    subscriptions = request.user.pxdcast.subscriptions.values('podcast_id')
    fields = ('itunes_id', 'img')
    podcasts = Podcast.objects.filter(id__in=subscriptions).values(*fields)
    data = list(podcasts)
    return Response(data, status.HTTP_200_OK)


@decorators.api_view(['POST'])
@decorators.permission_classes([permissions.IsAuthenticated])
def podcast_subscribe(request):
    payload = json.loads(request.body.decode('utf-8'))
    name = payload.get('name', None)
    podcast = Podcast.objects.get(name=name)
    account = request.user.pxdcast
    Subscription.objects.create_subscription(podcast=podcast, account=account)
    return Response({}, status.HTTP_200_OK)
