
from django.urls import re_path, path

from .views import (
    index, signup
)

app_name = 'pxdcast'


urlpatterns = [
    path('', index, name='index'),
    path('signup', signup, name='signup')
]