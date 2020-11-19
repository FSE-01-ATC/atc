from django.urls import path

from roles.api import ProfessorLoginAPI, ProfessorListAPI, ProfessorDislikesAPI, TAListAPI


urlpatterns = [
    path('api/professor/auth', ProfessorLoginAPI.as_view()),
    path('api/professors', ProfessorListAPI.as_view()),
    path('api/professor/<id>/dislikes', ProfessorDislikesAPI.as_view()),
    path('api/tas', TAListAPI.as_view()),
]
