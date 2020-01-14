from django.urls import path

from .views import podcast_list

app_name = 'pxdcast'

urlpatterns = [
    path('podcasts', podcast_list, name='podcast_list')
]
