from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import get_user_model

User = get_user_model()


class SignupForm(UserCreationForm):
    email = forms.EmailField(max_length=254, required=True)

    class Meta:
        model = User
        fields = ('username', 'email', 'password1', 'password2',)

    def __init__(self, *args, **kwargs):
        super(SignupForm, self).__init__(*args, **kwargs)
        self.fields['password2'].label = 'Confirm password'
        placeholders = {
            'username': 'jkrclaro',
            'email': 'jkrclaro@gmail.com',
            'password1': 'Pxdc4st!',
            'password2': 'Pxdc4st!'
        }
        for key, value in placeholders.items():
            self.fields[key].initial = value


class LoginForm(AuthenticationForm):
    pass

