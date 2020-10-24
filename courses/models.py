from django.db import models
import calendar


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


class Course(models.Model):
    code = models.CharField(max_length=16, blank=True)
    name = models.CharField(max_length=128, blank=True)
    
    def __str__(self):
        return f'{self.name}'


class Class(models.Model):
    day = models.CharField(max_length=9, choices=DAY_CHOICES)
    _type = models.CharField(max_length=8, choices=TYPE_CHOICES)
    timeslot = models.CharField(max_length=11, choices=TIMESLOT_CHOICES)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.course} - {self.get__type_display()}'


class Room(models.Model):
    number = models.IntegerField(default=0)
    _type = models.CharField(max_length=8, choices=TYPE_CHOICES)
    can_hold = models.ManyToManyField(Class)

    def __str__(self):
        return f'room {self.number}'