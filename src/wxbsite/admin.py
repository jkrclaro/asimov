from django.contrib import admin

from .models import User, Profile

for model in (User, Profile,):
    admin.site.register(model)
