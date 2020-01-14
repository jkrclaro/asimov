from django.http import JsonResponse


def podcast_list(request):
    data = {
        'podcasts': [
            {'id': 1, 'name': 'Diet Coke'}
        ]
    }
    return JsonResponse(data)
