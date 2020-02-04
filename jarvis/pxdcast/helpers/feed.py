import ssl
import datetime
import pytz

import feedparser


if hasattr(ssl, '_create_unverified_context'):
    ssl._create_default_https_context = ssl._create_unverified_context


def format_duration(duration: str) -> str:
    if ':' in duration:
        try:
            duration = datetime.datetime.strptime(duration, '%H:%M:%S')
        except ValueError:
            duration = datetime.datetime.strptime(duration, '%M:%S')
    else:
        duration_as_timedelta = datetime.timedelta(seconds=int(duration))
        duration = (datetime.datetime.min + duration_as_timedelta).time()

    duration = duration.replace(tzinfo=pytz.utc)

    if duration.hour:
        duration = f'{duration.hour}h {duration.minute}m'
    elif duration.minute:
        duration = f'{duration.minute} mins'
    else:
        duration = f'{duration.second} secs'

    return duration


def format_published_at(published: str) -> datetime.datetime:
    feed_format = '%a, %d %b %Y %H:%M:%S %z'
    published_at = datetime.datetime.strptime(published, feed_format)
    published_at.replace(tzinfo=pytz.utc)
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

        duration = entry.get('itunes_duration', None)
        duration = format_duration(duration)

        published_at = entry.get('published', None)
        published_at = format_published_at(published_at)

        feed_episodes.append({
            'name': entry['title'],
            'published_at': published_at,
            'duration': duration,
            'url': url
        })
    return feed_episodes
