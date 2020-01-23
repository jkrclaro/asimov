from django.db import models
from django.core.exceptions import ObjectDoesNotExist


class PodcastManager(models.Manager):

    def get_or_create_podcast(self, name, author, img, website, id, summary):
        try:
            podcast = self.get(name=name)
        except ObjectDoesNotExist:
            podcast = self.create(
                name=name,
                author=author,
                img=img,
                feed=website,
                website=website,
                apple_podcasts_id=id,
                summary=summary
            )
        return podcast


class EpisodeManager(models.Manager):

    def get_or_create_episode(self, name, uploaded_at, duration, url, podcast):
        try:
            episode = self.get(name=name)
        except ObjectDoesNotExist:
            episode = self.create(
                name=name,
                uploaded_at=uploaded_at,
                duration=duration,
                url=url,
                podcast=podcast
            )
        return episode
