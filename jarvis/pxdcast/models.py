from django.db import models
from django.contrib.auth import get_user_model

from .managers import PodcastManager, EpisodeManager

User = get_user_model()


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
    name = models.CharField(max_length=256)
    uploaded_at = models.CharField(max_length=256)
    duration = models.CharField(max_length=256)
    url = models.URLField()
    podcast = models.ForeignKey(Podcast, on_delete=models.CASCADE)
    objects = EpisodeManager()

    class Meta:
        db_table = 'pxdcast_episodes'
        unique_together = ('name', 'podcast',)

    def __str__(self):
        return self.name


class Subscription(models.Model):
    account = models.ForeignKey(User, on_delete=models.CASCADE)
    podcast = models.ForeignKey(Podcast, on_delete=models.CASCADE)

    class Meta:
        db_table = 'pxdcast_subscriptions'

    def __str__(self):
        return f'{self.account} is subscribed to {self.podcast.name}'
