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
        episodes = []
        response = feedparser.parse(url)
        for entry in response['entries']:
            episode = {
                'name': entry['title'],
                'uploaded_at': entry['published'],
                'duration': entry['itunes_duration'],
                'url': entry['links'][1]['href']
            }
            episodes.append(episode)

        return episodes
