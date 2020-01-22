from django.db import models

from .managers import PodcastManager


class Podcast(models.Model):
    name = models.CharField(max_length=256, unique=True)
    author = models.CharField(max_length=256)
    img = models.URLField()
    feed = models.URLField()
    website = models.URLField()
    apple_podcasts_id = models.CharField(max_length=256)
    objects = PodcastManager()

    class Meta:
        db_table = 'pxdcast_podcasts'

    def __str__(self):
        return self.name
