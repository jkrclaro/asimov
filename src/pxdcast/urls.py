from django.urls import re_path, path
from django.views.generic.base import TemplateView

from src.pxdcast.views import home, dashboard, registration

app_name = 'pxdcast'


urlpatterns = [
    path('', home.index, name='home'),
    path('signup', registration.signup, name='signup'),
    path('login', registration.login, name='login'),
    path('logout', registration.logout, name='logout'),
    path('dashboard', dashboard.index, name='dashboard'),
    path('pricing', TemplateView.as_view(template_name='home/pricing.html'), name='pricing')
]