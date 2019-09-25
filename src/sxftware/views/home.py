from django.shortcuts import render, redirect
from django.contrib import messages

from src.sxftware.forms import CrawlForm


def index(request):
    form = CrawlForm()
    if request.method == 'POST':
        form = CrawlForm(request.POST)
        if form.is_valid():
            return redirect('sxftware:search')

    if not request.user.is_authenticated:
        return render(request, 'home/index.html', {'form': form})
    else:
        if not request.user.profile.is_confirmed:
            messages.warning(
                request, 
                f'Please confirm your email address ({request.user.email})'
            )
        
        return render(request, 'dashboard/index.html', {'form': form})
