from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
import calendar

from roles.models import Professor, TeacherAssistant, Group


DAY_CHOICES = [(str(i), calendar.day_name[i]) for i in range(0, 7)]
TYPE_CHOICES = [
    ('1', 'Lecture'),
    ('2', 'Tutorial'),
    ('3', 'Lab')
]
TIMESLOT_CHOICES = [
    ('1', '09:00-10:30'),
    ('2', '10:40-12:10'),
    ('3', '12:40-14:10'),
    ('4', '14:20-15:50'),
    ('5', '16:00-17:30'),
    ('6', '17:40-19:10'),
    ('7', '19:20-20:50')
]

DEGREE_TYPES = (
    ('BS', 'Bachelor'),
    ('MS', 'Master')
)


class Course(models.Model):
    code = models.CharField(max_length=16)
    degree = models.CharField(max_length=16, choices=DEGREE_TYPES, default='BS')
    year = models.IntegerField(validators=(MinValueValidator(12), MaxValueValidator(24)), default=19)
    name = models.CharField(max_length=128)
    instructor = models.ForeignKey(Professor, related_name='courses', on_delete=models.SET_NULL, null=True, blank=True)
    assistants = models.ManyToManyField(TeacherAssistant, related_name='courses')

    def __str__(self):
        return f'{self.name}'


class Class(models.Model):
    _type = models.CharField(max_length=8, choices=TYPE_CHOICES)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='classes')

    def __str__(self):
        return f'{self.course} - {self.get__type_display()}'


class Room(models.Model):
    number = models.IntegerField()
    _type = models.CharField(max_length=8, choices=TYPE_CHOICES)
    can_hold = models.ManyToManyField(Class)

    def __str__(self):
        return f'room {self.number}'


class ScheduledClass(models.Model):
    day = models.CharField(max_length=9, choices=DAY_CHOICES)
    timeslot = models.CharField(max_length=11, choices=TIMESLOT_CHOICES)
    _class = models.ForeignKey(Class, related_name='scheduled_classes', on_delete=models.CASCADE)
    assistant = models.ForeignKey(TeacherAssistant, related_name='scheduled_classes', on_delete=models.SET_NULL, default=None, null=True, blank=True)
    room = models.ForeignKey(Room, related_name='scheduled_classes', on_delete=models.SET_NULL, null=True, blank=True)
    group = models.ForeignKey(Group, related_name='scheduled_classes', on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return f'Scheduled class #{self.pk}'
