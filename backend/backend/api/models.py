from django.db import models
# Create your models here.


class Movie(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255, blank=True)
    nameRu = models.CharField(max_length=255, blank=True)
    image_url = models.CharField(max_length=255)
    trailer_url = models.CharField(max_length=255)
    description = models.TextField()
    year = models.IntegerField()
    countryRu = models.CharField(max_length=255)
    genreRu = models.CharField(max_length=255)
    filmDirector = models.CharField(max_length=255)
    screenWriter = models.CharField(max_length=255)
    budjet = models.IntegerField()
    moneyUsa = models.IntegerField()
    moneyTotal = models.IntegerField()
    premier = models.DateField(auto_now=False, auto_now_add=False)
    premierRu = models.DateField(auto_now=False, auto_now_add=False)
    age = models.IntegerField()
    time = models.IntegerField()
    trailer_file = models.FileField(
        upload_to="trailers", null=True, default=None)

    def __str__(self):
        return f"{self.name} / {self.nameRu}"
