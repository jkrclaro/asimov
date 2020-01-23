from django.urls import path, re_path

from .views import (
    podcast_list, podcast_retrieve, episode_list, episode_retrieve,
    podcast_subscriptions
)

app_name = 'pxdcast'

urlpatterns = [
    path('subscriptions', podcast_subscriptions, name='podcast_subscriptions'),
    path('podcasts', podcast_list, name='podcast_list'),
    re_path(r'podcasts/(?P<pk>\d+)/$', podcast_retrieve, name='podcast_retrieve'),
    re_path(r'podcasts/(?P<pk>\d+)/episodes/$', episode_list, name='episode_list'),
    re_path(r'podcasts/(?P<podcast_pk>\d+)/episodes/(?P<pk>\d+)/$', episode_retrieve, name='episode_retrieve'),
]
