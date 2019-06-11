from django import forms

from src.rewardp.models.reward import Reward


class RewardForm(forms.Form):
    name = forms.CharField(max_length=100)
    description = forms.CharField(max_length=200, widget=forms.TextInput(attrs={'size':'40'}))
    photo = forms.FileField()
    is_active = forms.BooleanField()

    class Meta:
        model = Reward
        fields = ('name', 'description', 'photo', 'is_active',)

    def __init__(self, *args, **kwargs):
        super(RewardForm, self).__init__(*args, **kwargs)
        for visible_field in self.visible_fields():
            visible_field.field.widget.attrs['class'] = 'form-control'
