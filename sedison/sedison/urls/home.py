from django.urls import path
from django.views.generic.base import TemplateView

from ..views.home import index


app_name = 'home'


urlpatterns = [
    path('', index, name='home'),
    path('about', TemplateView.as_view(template_name='home/about.html'), name='about'),
    path('pricing', TemplateView.as_view(template_name='home/pricing.html'), name='pricing'),
    path('privacy', TemplateView.as_view(template_name='home/privacy.html'), name='privacy'),
    path('terms', TemplateView.as_view(template_name='home/terms.html'), name='terms')
]
