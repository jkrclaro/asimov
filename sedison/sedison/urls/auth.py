from django.urls import path, re_path
from django.contrib.auth.views import (
    PasswordResetView,
    PasswordResetDoneView,
    PasswordResetConfirmView,
    PasswordResetCompleteView
)

from ..views.auth import signup, login, logout, activate


app_name = 'auth'


urlpatterns = [
    path('signup', signup, name='signup'),
    path('login', login, name='login'),
    path('logout', logout, name='logout'),
    re_path(r'^activate/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$', activate, name='activate'),
    path('reset', PasswordResetView.as_view(success_url='reset/done'), name='reset'),
    path('reset/done', PasswordResetDoneView.as_view(), name='reset_done'),
    re_path(r'^reset/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$', PasswordResetConfirmView.as_view(), name='reset_confirm'),
    path('reset/complete', PasswordResetCompleteView.as_view(), name='password_reset_complete'),
]
