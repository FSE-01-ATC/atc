from django.urls import path

from roles.api import ProfessorListAPI, TAListAPI


urlpatterns = [
    path('api/professors', ProfessorListAPI.as_view()),
    path('api/tas', TAListAPI.as_view())
]
