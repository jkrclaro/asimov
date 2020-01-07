from django.urls import include, path
from rest_framework import routers
from . import views

app_name = 'sidefone'

router = routers.DefaultRouter()
router.register('contacts', views.ContactViewset, 'contacts')

urlpatterns = router.urls
