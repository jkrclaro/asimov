import ssl
import datetime

import feedparser


if hasattr(ssl, '_create_unverified_context'):
    ssl._create_default_https_context = ssl._create_unverified_context


def format_duration(duration: str) -> str:
    try:
        duration = datetime.timedelta(seconds=int(duration))
    except ValueError:
        pass

    duration = datetime.datetime.strptime(duration, '%H:%M:%S')

    if duration.hour:
        duration = f'{duration.hour}h {duration.minute}m'
    elif duration.minute:
        duration = f'{duration.minute}m {duration.second}s'
    else:
        duration = f'{duration.second}s'

    return duration


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

        duration = entry.get('itunes_duration', 'N/A')
        duration = format_duration(duration)

        feed_episodes.append({
            'name': entry['title'],
            'uploaded_at': 'Today',
            'duration': duration,
            'url': url
        })
    return feed_episodes
