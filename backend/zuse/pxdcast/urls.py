from django.urls import path, re_path

from .views import (
    podcast_list, podcast_retrieve, podcast_subscriptions, podcast_subscribe,
    podcast_unsubscribe, podcast_subscription,
    episode_list, episode_retrieve,
)

app_name = 'pxdcast'

urlpatterns = [
    path('subscriptions', podcast_subscriptions, name='podcast_subscriptions'),
    path('podcasts', podcast_list, name='podcast_list'),
    re_path(r'podcasts/(?P<itunes_id>\d+)/$', podcast_retrieve, name='podcast_retrieve'),
    re_path(r'podcasts/(?P<itunes_id>\d+)/episodes/$', episode_list, name='episode_list'),
    re_path(r'podcasts/(?P<itunes_id>\d+)/episodes/(?P<pk>\d+)/$', episode_retrieve, name='episode_retrieve'),
    path('podcasts/subscribe', podcast_subscribe, name='podcast_subscribe'),
    path('podcasts/unsubscribe', podcast_unsubscribe, name='podcast_unsubscribe'),
    path('podcasts/subscription', podcast_subscription, name='podcast_subscription')
]
