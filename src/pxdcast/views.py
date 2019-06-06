from django.shortcuts import render, redirect
from django.contrib.auth import login as auth_login, authenticate

from .forms import SignupForm


def home(request):
    return render(request, 'home/index.html')

def signup(request):
    if request.method == 'POST':
        form = SignupForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            auth_login(request, user)
            return redirect('pxdcast:home')
    else:
        form = SignupForm()

    return render(request, 'user/signup.html', {'form': form})

def login(request):
    return render(request, 'user/login.html', {'form': None})
