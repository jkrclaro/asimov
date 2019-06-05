
from django.urls import re_path, path
from django.views.generic.base import TemplateView

from .views import (
    index,
    signup,
    login
)

app_name = 'pxdcast'


urlpatterns = [
    path('', index, name='index'),
    path('signup', signup, name='signup'),
    path('login', login, name='login'),
    path('pricing', TemplateView.as_view(template_name='pricing.html'), name='pricing')
]