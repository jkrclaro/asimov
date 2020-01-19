import requests


class Search:

    def __init__(self):
        """The primary Search class."""
        self.itunes_url = 'https://itunes.apple.com'

    def search_itunes(self, keywords, podcasts):
        """Search podcasts in iTunes.
        Useful keys:
            - trackViewUrl
            - collectionName
            - artistName
            - artworkUrl100
            :param keywords: Keywords to be searched.
            :param podcasts: List of podcasts to be displayed.
        """
        url = f'{self.itunes_url}/search?term={keywords}&media=podcast'
        response = requests.get(url).json()

        fields = {
            'trackViewUrl': 'website',
            'trackName': 'name',
            'artistName': 'author',
            'artworkUrl100': 'img',
            'feedUrl': 'feed',
            'trackId': 'id',
        }
        for result in response['results']:
            podcast = {}
            for key, value in fields.items():
                podcast[value] = result[key]
            print(podcast)
            podcasts.append(podcast)

        return podcasts

    def search_podcasts(self, keywords: str = '', itunes: bool = True):
        """Search for podcasts based on keywords.
            :param keywords: Keywords to be searched.
            :param itunes: If true, get podcasts in iTunes.
        """

        podcasts = []
        if itunes:
            podcasts = self.search_itunes(keywords, podcasts)

        return podcasts
