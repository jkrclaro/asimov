from django.urls import path, re_path

from .views import podcast_list, podcast_retrieve

app_name = 'pxdcast'

urlpatterns = [
    path('podcasts', podcast_list, name='podcast_list'),
    re_path(r'podcasts/(?P<pk>\d+)/$', podcast_retrieve, name='podcast_retrieve')
]
