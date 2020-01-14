from server.utils.jsonify import jsonify


def podcast_list(request):
    data = [
        {'id': 1, 'name': 'Diet Coke', 'img': 'https://secureimg.stitcher.com/feedimagesplain328/16374.jpg'}
    ]
    return jsonify(data)
