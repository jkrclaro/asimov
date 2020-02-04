from django.db import models
from django.core.exceptions import ObjectDoesNotExist


class PodcastManager(models.Manager):

    def create_podcast(
            self,
            name: str,
            author: str,
            img: str,
            itunes_id: str,
            feed: str,
            summary: str = ''
    ):
        try:
            podcast = self.get(name=name)
        except ObjectDoesNotExist:
            podcast = self.create(
                name=name,
                author=author,
                img=img,
                feed=feed,
                itunes_id=itunes_id,
                summary=summary
            )
        return podcast


class EpisodeManager(models.Manager):

    def create_episode(
            self,
            name: str,
            published_at: str,
            duration: str,
            url: str,
            podcast: models.Model
    ):
        return self.create(
            name=name,
            published_at=published_at,
            duration=duration,
            url=url,
            podcast=podcast
        )


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
