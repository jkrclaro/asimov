import json

from django.forms.models import model_to_dict
from django.db.utils import IntegrityError

from rest_framework import decorators, permissions, status
from rest_framework.response import Response

from lovelace.pxdcast.helpers import itunes, feed
from lovelace.pxdcast.models import Podcast, Episode, Subscription
from lovelace.accounts.models import Pxdcast


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
    except Podcast.DoesNotExist:
        data = itunes.search_podcast(itunes_id)
        if not data:
            return Response(None, status.HTTP_404_NOT_FOUND)
        podcast = Podcast.objects.create_podcast(**data)

    if not podcast.summary:
        feed_podcast = feed.get_podcast(podcast.feed)
        podcast.summary = feed_podcast['summary']
        podcast.website = feed_podcast['website']
        podcast.save()

    fields = ('img', 'name', 'author', 'summary', 'feed', 'website',)
    podcast = model_to_dict(podcast, fields=fields)
    return Response(podcast, status.HTTP_200_OK)


@decorators.api_view(['GET'])
@decorators.permission_classes([permissions.AllowAny])
def episode_list(request, itunes_id):
    try:
        podcast = Podcast.objects.get(itunes_id=itunes_id)
    except Podcast.DoesNotExist:
        return Response(None, status.HTTP_404_NOT_FOUND)

    episodes = feed.get_episodes(podcast.feed)
    if podcast.episodes.count() != len(episodes):
        for episode in episodes:
            try:
                Episode.objects.create_episode(**episode, podcast=podcast)
            except IntegrityError:
                break
    else:
        fields = ('name', 'published_at', 'duration', 'url',)
        episodes = podcast.episodes.all().values(*fields)
    return Response(episodes, status.HTTP_200_OK)


@decorators.api_view(['GET'])
@decorators.permission_classes([permissions.AllowAny])
def episode_retrieve(request, itunes_id, pk):
    episode = None
    return Response(episode, status.HTTP_200_OK)


@decorators.api_view(['GET'])
@decorators.permission_classes([permissions.IsAuthenticated])
def podcast_subscriptions(request):
    fields = ('itunes_id', 'img')
    try:
        subscriptions = request.user.pxdcast.subscriptions.values('podcast_id')
        subscriptions = Podcast.objects.filter(id__in=subscriptions)
        subscriptions = subscriptions.values(*fields)
        subscriptions = list(subscriptions)
    except Pxdcast.DoesNotExist:
        subscriptions = []
    return Response(subscriptions, status.HTTP_200_OK)


@decorators.api_view(['POST'])
@decorators.permission_classes([permissions.IsAuthenticated])
def podcast_subscription(request):
    payload = json.loads(request.body.decode('utf-8'))
    itunes_id = payload.get('itunes_id', None)
    try:
        podcast = Podcast.objects.get(itunes_id=itunes_id)
        subscription = podcast.subscribers.filter(account=request.user.pxdcast)
        subscription = subscription.exists()
    except Podcast.DoesNotExist:
        subscription = False
    return Response(subscription, status.HTTP_200_OK)


@decorators.api_view(['POST'])
@decorators.permission_classes([permissions.IsAuthenticated])
def podcast_subscribe(request):
    payload = json.loads(request.body.decode('utf-8'))
    name = payload.get('name', None)
    podcast = Podcast.objects.get(name=name)
    account = request.user.pxdcast
    Subscription.objects.create_subscription(podcast=podcast, account=account)
    return Response(None, status.HTTP_200_OK)


@decorators.api_view(['POST'])
@decorators.permission_classes([permissions.IsAuthenticated])
def podcast_unsubscribe(request):
    payload = json.loads(request.body.decode('utf-8'))
    name = payload.get('name', None)
    podcast = Podcast.objects.get(name=name)
    account = request.user.pxdcast
    Subscription.objects.filter(account=account, podcast=podcast).delete()
    return Response(None, status.HTTP_200_OK)
