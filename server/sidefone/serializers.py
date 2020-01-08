from rest_framework import serializers

from .models import Contact


class ContactSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Contact
        fields = [
            'name', 'email', 'phone', 'job', 'website', 'address', 'birthday',
            'company', 'agent', 'background', 'img',
        ]
