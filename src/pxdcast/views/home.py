from django.shortcuts import render, redirect


def index(request):
    if not request.user.is_authenticated:
        return render(request, 'home/index.html')
    else:
        return redirect('pxdcast:dashboard')
