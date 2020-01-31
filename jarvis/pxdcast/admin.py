from django.contrib import admin

from .models import Podcast, Episode, Subscription


class PodcastAdmin(admin.ModelAdmin):
    search_fields = ('apple_podcasts_id', 'name')


class EpisodeAdmin(admin.ModelAdmin):
    search_fields = ('podcast__name',)


admin.site.register(Podcast, PodcastAdmin)
admin.site.register(Episode, EpisodeAdmin)
admin.site.register(Subscription)
