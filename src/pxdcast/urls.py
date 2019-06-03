
from django.urls import re_path, path

from .views import (
    index
)

app_name = 'pxdcast'


urlpatterns = [
    path('', index, name='index'),
]