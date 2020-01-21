import requests


class ApplePodcasts:

    def __init__(self):
        self.url = 'https://itunes.apple.com'
        self.fields = {
            'trackViewUrl': 'website',
            'trackName': 'name',
            'artistName': 'author',
            'artworkUrl100': 'img',
            'feedUrl': 'feed',
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
        for result in response['results']:
            podcast = {
                value: result[key]
                for key, value in self.fields.items()
            }
            podcasts.append(podcast)

        return podcasts

    def search_podcast(self, podcast_id: str):
        data = {
            '1019576853': {
                "author": "Software Engineering Daily",
                "feed": "https://softwareengineeringdaily.com/feed/podcast/",
                "id": 1019576853,
                "img": "https://is3-ssl.mzstatic.com/image/thumb/Podcasts123/v4/2c/99/01/2c99012b-0dfe-367d-4d5c-f45937fc35e0/mza_3996063589906118583.png/100x100bb.jpg",
                "name": "Software Engineering Daily",
                "website": "https://podcasts.apple.com/us/podcast/software-engineering-daily/id1019576853?uo=4"
            },
            '842818711': {
                "author": "Andreessen Horowitz",
                "feed": "https://feeds.simplecast.com/JGE3yC0V",
                "id": 842818711,
                "img": "https://is5-ssl.mzstatic.com/image/thumb/Podcasts123/v4/2b/b3/db/2bb3db73-440a-eecf-6c60-34079235d975/mza_1552337875059766252.jpg/100x100bb.jpg",
                "name": "a16z Podcast",
                "website": "https://podcasts.apple.com/us/podcast/a16z-podcast/id842818711?uo=4"
            }
        }

        podcast = data.get(podcast_id, None)
        return podcast
