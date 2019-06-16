import requests


class Search:

    def __init__(self):
        """The primary Search class.

            :param scheme: Scheme of Netlify's API url.
            :param host: Host of Netlify's API url.
        """
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
        keywords = keywords.replace(' ', '+').lower()
        url = f'{self.itunes_url}/search?term={keywords}&media=podcast'
        response = requests.get(url).json()

        fields = ('trackViewUrl', 'trackName', 'artistName', 'artworkUrl100')
        for result in response['results']:
            podcast = {}
            for key, value in result.items():
                for field in fields:
                    if key == field:
                        podcast[field] = value
            podcasts.append(podcast)

        return podcasts

    def search_podcasts(self, keywords: str='', itunes: bool=True):
        """Search for podcasts based on keywords.

            :param keywords: Keywords to be searched.
            :param itunes: If true, get podcasts in iTunes.
        """

        podcasts = []
        if itunes:
            podcasts = self.search_itunes(keywords, podcasts)

        return podcasts