from rest_framework import generics

from roles.models import Professor
from roles.serializers import ProfessorSerializer


class ProfessorListAPI(generics.ListAPIView):
    serializer_class = ProfessorSerializer
    queryset = Professor.objects.all()
