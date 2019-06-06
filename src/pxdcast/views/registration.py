from django.shortcuts import render, redirect
from django.contrib.auth import (
    authenticate,
    login as auth_login, 
    logout as auth_logout
)
from django.contrib import messages
from django.conf import settings
from django.template.loader import render_to_string
from django.contrib.sites.shortcuts import get_current_site
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_text

from src.pxdcast.forms import SignupForm, LoginForm
from src.pxdcast.mailgun import Mailgun
from src.pxdcast.tokens import account_activation_token


mailgun = Mailgun(settings.MAILGUN_API_KEY)


def signup(request):
    if request.method == 'POST':
        form = SignupForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.is_active = False
            user.save()

            message = render_to_string(
                'registration/email/confirm_account.html', 
                {
                    'user': user,
                    'domain': get_current_site(request),
                    'uid': urlsafe_base64_encode(force_bytes(user.pk)),
                    'token': account_activation_token.make_token(user)
                }
            )
            mailgun.send_simple_message(
                'Confirm your account', 
                message,
                form.cleaned_data.get('email'),
            )

            messages.info('Please confirm your email address.')
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            auth_login(request, user)
            return redirect('pxdcast:home')
    else:
        form = SignupForm()

    return render(request, 'registration/signup.html', {'form': form})


def login(request):
    auth_fail = False
    form = LoginForm()
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            auth_login(request, user)
            return redirect('pxdcast:home')
        else:
            auth_fail = True

    return render(
        request, 
        'registration/login.html', 
        {'form': form, 'auth_fail': auth_fail}
    )


def logout(request):
    auth_logout(request)
    return redirect('pxdcast:home')