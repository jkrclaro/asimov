from django.conf import settings
from django.contrib import admin
from django.conf.urls import include
from django.urls import path, re_path
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf.urls.static import static
from django.contrib.auth.views import PasswordResetCompleteView
from django.views.generic.base import TemplateView
from django.contrib.auth.views import (
    PasswordResetView,
    PasswordResetDoneView,
    PasswordResetConfirmView
)

from sedison.sedison.views import home


admin.autodiscover()


urlpatterns = [
    path('', include('sedison.sedison.urls.home', namespace='home')),
    path('', include('sedison.sedison.urls.auth', namespace='auth')),
    path('social/', include('social_django.urls', namespace='social')),
]

if settings.DEBUG:
    import debug_toolbar
    urlpatterns += [
        path('admin/', admin.site.urls),
        path('__debug__/', include(debug_toolbar.urls)),
    ]
    urlpatterns += staticfiles_urlpatterns()
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
else:
    urlpatterns += [
        path('__6TJny9S332qv92p57585kZdM9srNA66N2s26M39U4M2232B8Uz/', admin.site.urls),
    ]
