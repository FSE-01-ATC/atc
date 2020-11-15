from django.urls import path

from roles.api import ProfessorListAPI


urlpatterns = [
    path('api/professors', ProfessorListAPI.as_view())
]
