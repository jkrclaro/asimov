import requests


class Itunes:

    def __init__(self, scheme: str='https', host: str='itunes.apple.com'):
        """The primary iTunes class.

            :param scheme: Scheme of Netlify's API url.
            :param host: Host of Netlify's API url.
        """
        self.scheme = scheme
        self.host = host
        self.url = f'{scheme}://{host}'

    def itunify_keyword(self, keyword):
        return keyword.replace(' ', '+').lower()

    def search_podcasts(self, keyword):
        """Search for podcasts based on keyword.

        Useful keys:
            - trackViewUrl
            - collectionName
            - artistName
            - artworkUrl100

            :param keyword: Keyword to be searched.
        """

        keyword = self.itunify_keyword(keyword)
        url = f'{self.url}/search?term={keyword}&media=podcast'
        print(url)
        response = requests.get(url).json()

        fields = ('trackViewUrl', 'trackName', 'artistName', 'artworkUrl100')
        podcasts = []
        for result in response['results']:
            podcast = {}
            for key, value in result.items():
                for field in fields:
                    if key == field:
                        podcast[field] = value
            podcasts.append(podcast)

        return podcasts
