from django import forms

from .base import BaseForm
from src.wxbsite.models.reward import Referral


class ReferralForm(BaseForm):
    name = forms.CharField(max_length=100)
    description = forms.CharField(max_length=280, widget=forms.Textarea(attrs={'rows': 4, 'cols': 15}))
    photo = forms.FileField()
    is_active = forms.BooleanField(label='Active', initial=True)

    class Meta:
        model = Referral
        fields = ('name', 'description', 'photo', 'is_active',)
