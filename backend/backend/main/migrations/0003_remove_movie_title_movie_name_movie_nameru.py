# Generated by Django 4.1.4 on 2022-12-10 11:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_alter_movie_year'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='movie',
            name='title',
        ),
        migrations.AddField(
            model_name='movie',
            name='name',
            field=models.CharField(blank=True, max_length=255),
        ),
        migrations.AddField(
            model_name='movie',
            name='nameRu',
            field=models.CharField(blank=True, max_length=255),
        ),
    ]
