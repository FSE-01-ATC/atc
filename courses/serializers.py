from rest_framework import serializers
from django.contrib.auth import get_user_model

from courses.models import ScheduledClass, Class, Room, Group, Course
from roles.models import Professor, TeacherAssistant


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = get_user_model()
        fields = ('first_name', 'last_name', )


class ProfessorSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Professor
        exclude = ('id', 'likes', 'dislikes', )


class TASerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = TeacherAssistant
        exclude = ('id', )


class CourseSerializer(serializers.ModelSerializer):
    instructor = ProfessorSerializer(read_only=True)

    class Meta:
        model = Course
        exclude = ('id', 'assistants', 'code', )


class ClassSerializer(serializers.ModelSerializer):
    course = CourseSerializer(read_only=True)
    _type = serializers.CharField(source='get__type_display')

    class Meta:
        model = Class
        exclude = ('id', )


class RoomSerializer(serializers.ModelSerializer):

    class Meta:
        model = Room
        exclude = ('id', 'can_hold', '_type', )


class GroupSerializer(serializers.ModelSerializer):

    class Meta:
        model = Group
        exclude = ('id', )


class ScheduledClassSerializer(serializers.ModelSerializer):
    _class = ClassSerializer(read_only=True)
    assistant = TASerializer(read_only=True)
    room = RoomSerializer(read_only=True)
    group = GroupSerializer(read_only=True)
    day = serializers.CharField(source='get_day_display')
    timeslot = serializers.CharField(source='get_timeslot_display')

    class Meta:
        model = ScheduledClass
        exclude = ('id', )
