from django.db import models
from django.dispatch import receiver
from django.db.models.signals import post_save
from django.contrib.auth.models import AbstractUser

from server.accounts import managers


class User(AbstractUser):
    pass


class Account(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    account = models.OneToOneField(User, on_delete=models.CASCADE)
    objects = managers.AccountManager()

    class Meta:
        db_table = 'accounts'

    def __str__(self):
        return self.account.username

    @receiver(post_save, sender=User)
    def create_user_account(sender, instance, created, **kwargs):
        if created:
            Account.objects.create(account=instance)

    @receiver(post_save, sender=User)
    def save_user_account(sender, instance, **kwargs):
        instance.account.save()
