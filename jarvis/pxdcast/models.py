from django.db import models

from jarvis.pxdcast import managers
from jarvis.accounts.models import Pxdcast


class Podcast(models.Model):
    name = models.CharField(max_length=255, unique=True)
    author = models.CharField(max_length=255)
    img = models.URLField()
    feed = models.URLField()
    website = models.URLField(blank=True, null=True)
    itunes_id = models.CharField(max_length=255)
    summary = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = managers.PodcastManager()

    class Meta:
        db_table = 'podcasts'

    def __str__(self):
        return self.name


class Episode(models.Model):
    name = models.CharField(max_length=255)
    uploaded_at = models.DateTimeField()
    duration = models.CharField(max_length=255)
    url = models.URLField()
    podcast = models.ForeignKey(Podcast, related_name='episodes', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = managers.EpisodeManager()

    class Meta:
        db_table = 'episodes'
        unique_together = ('name', 'uploaded_at', 'duration', 'url', 'podcast',)

    def __str__(self):
        return self.name


class Subscription(models.Model):
    account = models.ForeignKey(Pxdcast, related_name='subscriptions', on_delete=models.CASCADE)
    podcast = models.ForeignKey(Podcast, related_name='subscribers', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = managers.SubscriptionManager()

    class Meta:
        db_table = 'subscriptions'

    def __str__(self):
        return f'{self.account} is subscribed to {self.podcast.name}'
