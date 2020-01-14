import json
from django.http import HttpResponse


def jsonify(data):
    data = json.dumps(data)
    return HttpResponse(data, content_type='application/json')
