import ssl
import datetime

import feedparser


if hasattr(ssl, '_create_unverified_context'):
    ssl._create_default_https_context = ssl._create_unverified_context


def format_duration(duration: str) -> str:
    try:
        duration = datetime.datetime.strptime(duration, '%H:%M:%S')
    except ValueError:
        duration_as_timedelta = datetime.timedelta(seconds=int(duration))
        duration = (datetime.datetime.min + duration_as_timedelta).time()

    if duration.hour:
        duration = f'{duration.hour}h {duration.minute}m'
    elif duration.minute:
        duration = f'{duration.minute} mins'
    else:
        duration = f'{duration.second} secs'

    return duration


def format_published_at(published_at: datetime) -> str:
    parsed = datetime.datetime.strptime(published_at, '%a, %d %b %Y %H:%M:%S %z')
    published_at = parsed.strftime('%Y-%m-%d %H:%M')
    return published_at


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

        published_at = entry.get('published', None)
        published_at = format_published_at(published_at)

        feed_episodes.append({
            'name': entry['title'],
            'uploaded_at': published_at,
            'duration': duration,
            'url': url
        })
    return feed_episodes
