from django.db import models
from django.core.exceptions import ObjectDoesNotExist


class PodcastManager(models.Manager):

    def get_or_create_podcast(self, name, author, img, website, id):
        try:
            podcast = self.get(name=name)
        except ObjectDoesNotExist:
            podcast = self.create(
                name=name,
                author=author,
                img=img,
                feed=website,
                website=website,
                apple_podcasts_id=id
            )
        return podcast
