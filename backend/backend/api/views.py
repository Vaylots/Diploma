from django.http import HttpResponse, JsonResponse, FileResponse
from rest_framework.views import APIView
from django.core import serializers
from django.conf import settings
from .models import Movie
# Create your views here.

class Index(APIView):
    def get(self, request):
        return JsonResponse(
            {
                "message": "Это главный эндпоинт нашего api вот список доступных поинтов на данный момент",
                "getAllMovies": "Позволяет получить список всех фильмов",
                "getMovieById": "Позволяет получить фильм по его id (query: id:integer)",
                "getMovieTrailerById": "Позволяет получить трейлер фильма по его id (query: id:integer) | EXPERIMENTAL ",
            }
        )



class getAllMovies(APIView):
    def get(self, request):
        movies = serializers.serialize("json",Movie.objects.all())
        return HttpResponse(movies,content_type="application/json")


class getMovieById(APIView):
    def get(self, request):
        movie = serializers.serialize("json",Movie.objects.filter(id=request.GET.get("id")))
        return HttpResponse(movie, content_type="application/json")

class getMovieTrailerById(APIView):
    def get(self, request):
        film = Movie.objects.filter(id=request.GET.get("id")).get()
        file_path = f"{settings.BASE_DIR}/{film.trailer_file.url}"
        response = FileResponse(open(file_path, 'rb'))
        response['Content-Type'] = 'video/mp4'
        response['Accept-Ranges'] = 'bytes'
        if 'HTTP_RANGE' in request.headers:
            range_header = request.headers['HTTP_RANGE']
            range_values = range_header.split('=')[1].split('-')
            start = int(range_values[0])
            end = int(range_values[1]) if range_values[1] else None
            response = HttpResponse(
                response.file_to_stream(), status=206, content_type='video/mp4')
            response['Content-Range'] = f'bytes {start}-{end}/{response.file_to_stream().size}'
        return response
