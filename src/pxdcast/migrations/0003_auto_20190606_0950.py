# Generated by Django 2.2.1 on 2019-06-06 08:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pxdcast', '0002_profile'),
    ]

    operations = [
        migrations.RenameField(
            model_name='profile',
            old_name='account',
            new_name='user',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='birthday',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='city',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='picture',
        ),
    ]