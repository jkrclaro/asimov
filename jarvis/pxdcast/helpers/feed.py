import ssl

import feedparser


if hasattr(ssl, '_create_unverified_context'):
    ssl._create_default_https_context = ssl._create_unverified_context


def get_podcast(url: str) -> dict:
    response = feedparser.parse(url)
    return {
        'summary': response['feed'].get('summary', None),
        'website': response['feed'].get('link', None)
    }


def get_episodes(url: str) -> list:
    feed_episodes = []
    response = feedparser.parse(url)
    for entry in response['entries']:
        for link in entry['links']:
            play_link = link['href'].split('?')
            if play_link[0].endswith('.mp3'):
                url = play_link[0]

        feed_episodes.append({
            'name': entry['title'],
            'uploaded_at': 'Today',
            'duration': entry.get('itunes_duration', 'N/A'),
            'url': url
        })
    return feed_episodes
