import time

from server.utils.jsonify import jsonify


def podcast_list(request):
    time.sleep(1)
    data = [
        {
            'id': 1,
            'name': 'Diet Coke',
            'img': 'https://secureimg.stitcher.com/feedimagesplain328/16374.jpg'
        },
        {
            'id': 2,
            'name': 'Pepsi Cola',
            'img': 'https://secureimg.stitcher.com/feedimagesplain328/16374.jpg'
        },
    ]
    return jsonify(data)


def podcast_retrieve(request, pk):
    time.sleep(1)
    data = {
        'id': 1,
        'name': '99% Invisible',
        'img': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/'
               '99pi.svg/1200px-99pi.svg.png',
        'author': 'Roman Mars',
        'website': '99percentinvisible.org',
        'summary': "Design is everywhere in our lives, perhaps most importantly "
                   "in the places where we've just stopped noticing. "
                   "99% Invisible is a weekly exploration of the process and "
                   "power of design and architecture. "
                   "From award winning producer Roman Mars. "
                   "Learn more at 99percentinvisible.org. "
                   "A proud member of Radiotopia, from PRX. "
                   "Learn more at radiotopia.fm.",
        'episodes': [
            {
                'name': '384-Mini-Stories: Volume 8',
                'uploaded_at': 'January 7',
                'duration': '50 mins'},
            {
                'name': '383-Mini-Stories: Volume 7',
                'uploaded_at': 'Dec 19, 2019',
                'duration': '40 mins'
            }
        ]
    }
    return jsonify(data)
