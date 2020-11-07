from rest_framework import generics

from courses.serializers import ScheduledClassSerializer
from courses.models import ScheduledClass


class ScheduledClassListAPI(generics.ListAPIView):
    serializer_class = ScheduledClassSerializer
    queryset = ScheduledClass.objects.all()
