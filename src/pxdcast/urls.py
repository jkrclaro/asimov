from django.urls import re_path, path
from django.views.generic.base import TemplateView

from src.pxdcast.views import home, dashboard, registration

app_name = 'pxdcast'


urlpatterns = [
    path('', home.index, name='home'),
    path('signup', registration.signup, name='signup'),
    path('login', registration.login, name='login'),
    path('logout', registration.logout, name='logout'),
    re_path(r'^activate/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$', registration.activate, name='activate'),
    path('dashboard', dashboard.index, name='dashboard'),
    path('pricing', TemplateView.as_view(template_name='home/pricing.html'), name='pricing'),
    path('privacy', TemplateView.as_view(template_name='home/privacy.html'), name='privacy'),
    path('terms', TemplateView.as_view(template_name='home/terms.html'), name='terms')
]