# Generated by Django 4.1.1 on 2022-10-04 19:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Projects', '0002_project_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='project',
            name='category',
        ),
    ]
