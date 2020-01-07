from django.urls import include, path
from rest_framework import routers
from .views import ContactViewset

app_name = 'sidefone'

router = routers.DefaultRouter()
router.register('sidefone/contacts', ContactViewset, basename='sidefone')

urlpatterns = router.urls
