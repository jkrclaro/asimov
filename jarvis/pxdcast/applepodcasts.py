import requests


class ApplePodcasts:

    def __init__(self):
        self.url = 'https://itunes.apple.com'
        self.fields = {
            # 'trackViewUrl': 'website',
            'trackName': 'name',
            'artistName': 'author',
            'artworkUrl600': 'img',
            'feedUrl': 'website',
            'trackId': 'id',
        }

    def search_podcasts(self, keywords: str):
        """Search podcasts in iTunes.

        Useful keys:
            - trackViewUrl
            - collectionName
            - artistName
            - artworkUrl100
            - feedUrl
            :param keywords: Keywords to be searched.
            :param podcasts: List of podcasts to be displayed.
        """
        url = f'{self.url}/search?term={keywords}&media=podcast'
        response = requests.get(url).json()

        podcasts = []
        for data in response['results']:
            podcast = self.serialize_podcast(data)
            podcast['summary'] = ''
            podcasts.append(podcast)

        return podcasts

    def search_podcast(self, podcast_id: str):
        url = f'{self.url}/lookup?id={podcast_id}'
        data = requests.get(url).json()['results'][0]
        podcast = self.serialize_podcast(data)
        return podcast

    def serialize_podcast(self, data):
        return {
            value: data[key]
            for key, value in self.fields.items()
        }
