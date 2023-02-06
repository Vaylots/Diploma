from django.urls import path
from .views import Index, getAllMovies, getMovieById, getMovieTrailerById 

urlpatterns = [
    path("", Index.as_view(), name="IndexEndPoint"),
    path("getAllMovies", getAllMovies.as_view(), name="getAllMovies"),
    path("getMovieById", getMovieById.as_view(), name="getMovieById"),
    path("getMovieTrailerById", getMovieTrailerById.as_view(), name="getMovieById"),
]
