from django.db import models
from django.contrib.auth.models import AbstractUser

from .choices import CITIES
from .managers import ProfileManager


class User(AbstractUser):
    pass


class Profile(models.Model):
    city = models.CharField(max_length=30, choices=CITIES)
    picture = models.FileField(upload_to='profiles', blank=True, null=True)
    birthday = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    account = models.OneToOneField(User, on_delete=models.CASCADE)
    objects = ProfileManager()

    class Meta:
        db_table = 'profiles'

    def __str__(self):
        return self.account.username
