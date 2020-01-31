import requests

base_url = 'https://itunes.apple.com'
fields = {
    # 'trackViewUrl': 'website',
    'trackName': 'name',
    'artistName': 'author',
    'artworkUrl600': 'img',
    'feedUrl': 'website',
    'trackId': 'id',
}


def search_podcasts(keywords: str) -> list:
    url = f'{base_url}/search?term={keywords}&media=podcast'
    response = requests.get(url).json()
    return [
        serialize_podcast(result)
        for result in response['results']
    ]


def search_podcast(podcast_id: str) -> dict:
    url = f'{base_url}/lookup?id={podcast_id}'
    response = requests.get(url).json()['results'][0]
    return serialize_podcast(response)


def serialize_podcast(data: dict) -> dict:
    return {
        value: data.get(key, '')
        for key, value in fields.items()
    }
