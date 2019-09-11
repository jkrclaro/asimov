from django.urls import re_path, path
from django.views.generic.base import TemplateView
from django.contrib.auth.views import (
    PasswordResetView,
    PasswordResetDoneView,
    PasswordResetConfirmView
)
from src.spidxr.views import home, dashboard, authentication

app_name = 'spidxr'


urlpatterns = [
    path('', home.index, name='home'),
    path('signup', authentication.signup, name='signup'),
    path('login', authentication.login, name='login'),
    path('logout', authentication.logout, name='logout'),
    re_path(r'^activate/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$', authentication.activate, name='activate'),
    path('reset', PasswordResetView.as_view(success_url='reset/done'), name='reset'),
    path('reset/done', PasswordResetDoneView.as_view(), name='reset_done'),
    re_path(r'^reset/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$', PasswordResetConfirmView.as_view(), name='reset_confirm'),
    path('dashboard', dashboard.index, name='dashboard'),
    path('about', TemplateView.as_view(template_name='home/about.html'), name='about'),
    path('pricing', TemplateView.as_view(template_name='home/pricing.html'), name='pricing'),
    path('privacy', TemplateView.as_view(template_name='home/privacy.html'), name='privacy'),
    path('terms', TemplateView.as_view(template_name='home/terms.html'), name='terms')
]