from django.urls import path, include

from knox.views import LogoutView

from .views import UserAPIView, RegisterAPIView, LoginAPIView

app_name = 'accounts'

urlpatterns = [
    path('', include('knox.urls')),
    path('user', UserAPIView.as_view(), name='user'),
    path('register', RegisterAPIView.as_view(), name='register'),
    path('login', LoginAPIView.as_view(), name='login'),
    path('logout', LogoutView.as_view(), name='knox_logout')
]
