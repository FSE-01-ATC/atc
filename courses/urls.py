from django.urls import path

from courses.api import ScheduledClassListAPI


urlpatterns = [
    path('api/timetable', ScheduledClassListAPI.as_view())
]
