from django import forms
from django.utils.translation import gettext_lazy as _

from .base import BaseForm
from src.rewardplex.models.reward import Reward


class RewardForm(BaseForm):
    name = forms.CharField(max_length=100)
    description = forms.CharField(max_length=280, widget=forms.Textarea(attrs={'rows': 4, 'cols': 15}))
    photo = forms.FileField()
    is_active = forms.BooleanField(label='Active', initial=True)

    class Meta:
        model = Reward
        fields = ('name', 'description', 'photo', 'is_active',)
