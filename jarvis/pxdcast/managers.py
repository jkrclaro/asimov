from django.db import models
from django.core.exceptions import ObjectDoesNotExist


class PodcastManager(models.Manager):

    def create_podcast(self, name: str, author: str, img: str, website: str, id: str, summary=None):
        try:
            podcast = self.get(name=name)
        except ObjectDoesNotExist:
            podcast = self.create(
                name=name,
                author=author,
                img=img,
                feed=website,
                website=website,
                itunes_id=id,
                summary=summary
            )
        return podcast


class EpisodeManager(models.Manager):

    def create_episode(self, name: str, uploaded_at: str, duration: str, url: str, podcast):
        try:
            episode = self.get(name=name, podcast__id=podcast.id)
        except ObjectDoesNotExist:
            episode = self.create(
                name=name,
                uploaded_at=uploaded_at,
                duration=duration,
                url=url,
                podcast=podcast
            )
        return episode


class SubscriptionManager(models.Manager):

    def create_subscription(self, podcast, account):
        try:
            subscription = self.get(podcast=podcast, account=account)
        except ObjectDoesNotExist:
            subscription = self.create(
                podcast=podcast,
                account=account
            )
        return subscription
