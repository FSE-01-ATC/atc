import json

from rest_framework import generics, status
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

from roles.models import Professor, TeacherAssistant
from roles.serializers import ProfessorSerializer, ProfessorDislikesSerializer, TASerializer


class ProfessorListAPI(generics.ListAPIView):
    serializer_class = ProfessorSerializer
    queryset = Professor.objects.all()


class ProfessorDislikesAPI(generics.UpdateAPIView):
    serializer_class = ProfessorDislikesSerializer

    def get_object(self, **kwargs):
        instance = get_object_or_404(Professor, id=self.kwargs['id'])
        return instance

    def put(self, request, *args, **kwargs):
        professor = self.get_object()

        tas = json.loads(request.data.get('dislikes'))
        for ta in tas:
            if professor.dislikes.filter(id=ta).exists():
                professor.dislikes.remove(ta)
            else:
                professor.dislikes.add(ta)

        professor.save()
        return Response(status=status.HTTP_200_OK)


class TAListAPI(generics.ListAPIView):
    serializer_class = TASerializer
    queryset = TeacherAssistant.objects.all()
