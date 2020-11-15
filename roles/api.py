from rest_framework import generics

from roles.models import Professor, TeacherAssistant
from roles.serializers import ProfessorSerializer, TASerializer


class ProfessorListAPI(generics.ListAPIView):
    serializer_class = ProfessorSerializer
    queryset = Professor.objects.all()


class TAListAPI(generics.ListAPIView):
    serializer_class = TASerializer
    queryset = TeacherAssistant.objects.all()
