import time

from server.pxdcast.search import Search
from server.utils.jsonify import jsonify


def podcast_list(request):
    time.sleep(1)
    data = [
        {
            'id': 1,
            'name': 'Software Engineering Daily',
            'img': 'https://storage.googleapis.com/indie-hackers.appspot.com/product-avatars/software-engineering-daily/PWairgiOpneHvkGJri7RVbtORKI2?'
        },
        {
            'id': 2,
            'name': 'a16z Podcast',
            'img': 'https://i.scdn.co/image/9843fa080da4fc3455bb348d68f8dd5b0aa402ce'
        },
    ]
    search = Search()
    a16z = search.search_podcasts('a16z')
    sed = search.search_podcasts('software engineering daily')
    podcasts = a16z + sed
    return jsonify(podcasts)


def podcast_retrieve(request, pk):
    time.sleep(1)
    podcasts = [
        {
            'id': 1,
            'name': 'Software Engineering Daily',
            'img': 'https://storage.googleapis.com/indie-hackers.appspot.com/product-avatars/software-engineering-daily/PWairgiOpneHvkGJri7RVbtORKI2?',
            'author': 'Jeff Meyerson',
            'website': 'softwareengineeringdaily.com',
            'summary': "Technical interviews about software topics."
        },
        {
            'id': 2,
            'name': 'a16z Podcast',
            'img': 'https://i.scdn.co/image/9843fa080da4fc3455bb348d68f8dd5b0aa402ce',
            'author': 'Andreessen Horowitz',
            'website': 'a16z.com',
            'summary': "The a16z Podcast discusses tech and culture trends, news, and the future – especially as ‘software eats the world’. It features industry experts, business leaders, and other interesting thinkers and voices from around the world. This podcast is produced by Andreessen Horowitz (aka “a16z”), a Silicon Valley-based venture capital firm. Multiple episodes are released every week; visit a16z.com for more details and to sign up for our newsletters and other content as well!"
        }
    ]
    pk = int(pk)
    data = {}
    for podcast in podcasts:
        print(f"{podcast['id'] == pk}")
        if podcast['id'] == pk:
            data = podcast
    return jsonify(data)


def episode_list(request, pk):
    time.sleep(1)
    data = {
        1: [
            {
                'id': 'apollo-graphql-with-geoff-schmidt',
                'name': 'Apollo GraphQL with Geoff Schmidt',
                'uploaded_at': 'January 17',
                'duration': '1h 9m',
                'url': 'http://traffic.libsyn.com/joeroganexp/p1413.mp3'
            },
            {
                'id': 'js-party-with-kevin-ball',
                'name': 'JS Party with Kevin Ball',
                'uploaded_at': 'January 16',
                'duration': '1h 4m',
                'url': 'http://traffic.libsyn.com/joeroganexp/p1412.mp3',
            },
            {
                'id': 'packet-baremetal-infrastructure-with-zachary-smith-and-nathan-goulding',
                'name': 'Packet: Baremetal Infrastructure with Zachary Smith and Nathan Goulding',
                'uploaded_at': 'January 15',
                'duration': '53 mins',
                'url': 'http://traffic.libsyn.com/joeroganexp/p1411.mp3',
            },
            {
                'id': 'edge-computing-platform-with-jaromir-coufal',
                'name': 'Edge Computing Platform with Jaromir Coufal',
                'uploaded_at': 'January 14',
                'duration': '53 mins',
                'url': 'http://traffic.libsyn.com/joeroganexp/p1410.mp3',
            }
        ],
        2: [
            {
                'id': 'controlling-ai',
                'name': 'Controlling AI',
                'uploaded_at': 'January 16',
                'duration': '26 mins',
                'url': 'http://traffic.libsyn.com/joeroganexp/p1407.mp3',
            },
            {
                'id': 'food-drugs-and-tech—100-years-of-public-health',
                'name': 'Food, Drugs, and Tech—100 Years of Public Health',
                'uploaded_at': 'January 14',
                'duration': '32 mins',
                'url': 'http://traffic.libsyn.com/joeroganexp/p1408.mp3',
            },
            {
                'id': 'on-pharma-trends-and-big-company-innovation',
                'name': 'On Pharma Trends and Big Company Innovation',
                'uploaded_at': 'January 11',
                'duration': '59 mins',
                'url': 'http://traffic.libsyn.com/joeroganexp/p1409.mp3',
            }
        ]
    }
    pk = int(pk)
    data = data[pk]
    return jsonify(data)


def episode_retrieve(request, podcast_pk, pk):
    time.sleep(1)
    data = {
        'id': 'js-party-with-kevin-ball',
        'name': 'JS Party with Kevin Ball',
        'uploaded_at': 'January 16',
        'duration': '1h 4m'
    }
    return jsonify(data)
