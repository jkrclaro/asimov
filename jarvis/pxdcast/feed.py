import ssl

import feedparser


class Feed:

    def parse(self, url):
        """Parse feed of podcast.

        Keys:
        - id
        - name
        - uploaded_at
        - duration
        - url
        """
        # https://stackoverflow.com/questions/28282797/feedparser-parse-ssl-certificate-verify-failed
        if hasattr(ssl, '_create_unverified_context'):
            ssl._create_default_https_context = ssl._create_unverified_context

        episodes = []
        response = feedparser.parse(url)

        summary = response['feed']['summary']
        for entry in response['entries']:
            for link in entry['links']:
                play_link = link['href'].split('?')
                if play_link[0].endswith('.mp3'):
                    url = play_link[0]

            episode = {
                'name': entry['title'],
                'uploaded_at': 'Today',
                'duration': entry['itunes_duration'],
                'url': url
            }
            episodes.append(episode)

        data = {
            'episodes': episodes,
            'summary': summary
        }
        return data
