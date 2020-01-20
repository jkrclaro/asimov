import requests


class ApplePodcasts:

    def __init__(self):
        self.url = 'https://itunes.apple.com'

    def search(self, keywords: str):
        """Search podcasts in iTunes.

        Useful keys:
            - trackViewUrl
            - collectionName
            - artistName
            - artworkUrl100
            :param keywords: Keywords to be searched.
            :param podcasts: List of podcasts to be displayed.
        """
        url = f'{self.url}/search?term={keywords}&media=podcast'
        response = requests.get(url).json()

        fields = {
            'trackViewUrl': 'website',
            'trackName': 'name',
            'artistName': 'author',
            'artworkUrl100': 'img',
            'feedUrl': 'feed',
            'trackId': 'id',
        }

        podcasts = []
        for result in response['results']:
            podcast = {}
            for key, value in fields.items():
                podcast[value] = result[key]
            podcasts.append(podcast)

        return podcasts
