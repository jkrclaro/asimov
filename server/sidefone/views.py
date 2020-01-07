from rest_framework import viewsets

from .models import Contact
from .serializers import ContactSerializer


class ContactViewset(viewsets.ModelViewSet):
    """API that allows contacts to be viewed or edited."""
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
