from django.shortcuts import render, redirect
from django.contrib import messages

from src.rewardplex.models.reward import Reward
from src.rewardplex.forms.reward import RewardForm


def index(request):
    if not request.user.is_authenticated:
        return render(request, 'home/index.html')
    else:
        if not request.user.profile.is_confirmed:
            messages.warning(
                request, 
                f'Please confirm your email address ({request.user.email})'
            )
        
        form = RewardForm()
        return render(request, 'dashboard/index.html', {'form': form})
