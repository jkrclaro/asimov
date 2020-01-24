import ssl

import feedparser


class Feed:

    def __init__(self):
        # https://stackoverflow.com/questions/28282797/feedparser-parse-ssl-certificate-verify-failed
        if hasattr(ssl, '_create_unverified_context'):
            ssl._create_default_https_context = ssl._create_unverified_context

    def get_summary(self, url):
        response = feedparser.parse(url)
        summary = response['feed']['summary']
        return summary

    def get_episodes(self, url):
        episodes = []
        response = feedparser.parse(url)
        for entry in response['entries']:
            for link in entry['links']:
                play_link = link['href'].split('?')
                if play_link[0].endswith('.mp3'):
                    url = play_link[0]

            episode = {
                'name': entry['title'],
                'uploaded_at': 'Today',
                'duration': entry.get('itunes_duration', 'N/A'),
                'url': url
            }
            episodes.append(episode)
        return episodes
