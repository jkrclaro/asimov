from django.db import models

from phonenumber_field.modelfields import PhoneNumberField


class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=254, null=True, blank=True)
    phone = PhoneNumberField(null=True, blank=True)
    job = models.CharField(max_length=254, null=True, blank=True)
    website = models.URLField(max_length=200, null=True, blank=True)
    address = models.CharField(max_length=254, null=True, blank=True)
    birthday = models.DateField(null=True, blank=True)
    company = models.CharField(max_length=254, null=True, blank=True)
    agent = models.CharField(max_length=254, null=True, blank=True)
    background = models.TextField(null=True, blank=True)
    img = models.ImageField(upload_to='sidefone', null=True, blank=True)

    class Meta:
        db_table = 'sidefone_contacts'

    def __str__(self):
        return self.name
