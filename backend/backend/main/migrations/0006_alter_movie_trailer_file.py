# Generated by Django 4.1.4 on 2023-01-18 15:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0005_movie_trailer_file'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movie',
            name='trailer_file',
            field=models.FileField(default=None, null=True, upload_to='trailers'),
        ),
    ]