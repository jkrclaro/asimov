from django import forms

from .base import BaseForm


class CrawlForm(BaseForm):
    email = forms.EmailField(max_length=100)
