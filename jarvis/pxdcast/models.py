from django.db import models

from .managers import PodcastManager, EpisodeManager


class Podcast(models.Model):
    name = models.CharField(max_length=256, unique=True)
    author = models.CharField(max_length=256)
    img = models.URLField()
    feed = models.URLField()
    website = models.URLField()
    apple_podcasts_id = models.CharField(max_length=256)
    summary = models.TextField()
    objects = PodcastManager()

    class Meta:
        db_table = 'pxdcast_podcasts'

    def __str__(self):
        return self.name


class Episode(models.Model):
    name = models.CharField(max_length=256, unique=True)
    uploaded_at = models.CharField(max_length=256)
    duration = models.CharField(max_length=256)
    url = models.URLField()
    podcast = models.ForeignKey(Podcast, on_delete=models.CASCADE)
    objects = EpisodeManager()

    class Meta:
        db_table = 'pxdcast_episodes'

    def __str__(self):
        return self.name
