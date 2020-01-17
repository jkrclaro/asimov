import time

from server.utils.jsonify import jsonify


def podcast_list(request):
    time.sleep(1)
    data = [
        {
            'id': 1,
            'name': 'Diet Coke',
            'img': 'https://storage.googleapis.com/indie-hackers.appspot.com/product-avatars/software-engineering-daily/PWairgiOpneHvkGJri7RVbtORKI2?'
        },
        {
            'id': 2,
            'name': 'Pepsi Cola',
            'img': 'https://storage.googleapis.com/indie-hackers.appspot.com/product-avatars/software-engineering-daily/PWairgiOpneHvkGJri7RVbtORKI2?'
        },
    ]
    return jsonify(data)


def podcast_retrieve(request, pk):
    time.sleep(1)
    data = {
        'id': 1,
        'name': 'Software Engineering Daily',
        'img': 'https://storage.googleapis.com/indie-hackers.appspot.com/product-avatars/software-engineering-daily/PWairgiOpneHvkGJri7RVbtORKI2?',
        'author': 'Jeff Meyerson',
        'website': 'softwareengineeringdaily.com',
        'summary': "Technical interviews about software topics."
    }
    return jsonify(data)


def episode_list(request, pk):
    time.sleep(1)
    data = [
        {
            'id': 'js-party-with-kevin-ball',
            'name': 'JS Party with Kevin Ball',
            'uploaded_at': 'January 16',
            'duration': '1h 4m'
        },
        {
            'id': 'packet-baremetal-infrastructure-with-zachary-smith-and-nathan-goulding',
            'name': 'Packet: Baremetal Infrastructure with Zachary Smith and Nathan Goulding',
            'uploaded_at': 'January 15',
            'duration': '53 mins'
        },
        {
            'id': 'edge-computing-platform-with-jaromir-coufal',
            'name': 'Edge Computing Platform with Jaromir Coufal',
            'uploaded_at': 'January 14',
            'duration': '53 mins'
        },
    ]
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
