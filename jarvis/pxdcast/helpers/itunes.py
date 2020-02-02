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


def search_podcast(itunes_id: str) -> dict:
    url = f'{base_url}/lookup?id={itunes_id}'
    results = requests.get(url).json().get('results', None)
    podcast = {}
    if results:
        result = results[0]
        podcast = serialize_podcast(result)
    return podcast


def serialize_podcast(data: dict) -> dict:
    return {
        value: data.get(key, '')
        for key, value in fields.items()
    }
