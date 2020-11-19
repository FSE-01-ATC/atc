from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator, ValidationError
from django.contrib.auth import get_user_model


DEGREE_TYPES = (
    ('BS', 'Bachelor'),
    ('MS', 'Master')
)


class Group(models.Model):
    degree = models.CharField(max_length=16, choices=DEGREE_TYPES)
    number = models.IntegerField(validators=(MinValueValidator(1), MaxValueValidator(12)))
    year = models.IntegerField(validators=(MinValueValidator(12), MaxValueValidator(24)))

    def __str__(self):
        return f'Group {self.year}{self.degree}-{self.number}'


# To be extended
# ToDo: Innopolis email validator
class Student(models.Model):
    user = models.OneToOneField(get_user_model(), on_delete=models.SET_NULL, blank=False, null=True)
    email = models.EmailField(max_length=64)
    group = models.ForeignKey(Group, related_name='students', on_delete=models.SET_NULL, blank=False, null=True)

    def __str__(self):
        return f"Student {self.email}"


class TeacherAssistant(models.Model):
    user = models.OneToOneField(get_user_model(), on_delete=models.SET_NULL, blank=False, null=True)
    email = models.EmailField(max_length=64)

    def __str__(self):
        return f"TA {self.email}"


# ToDo: Validate that 'likes' and 'dislikes' sets do not intersect
class Professor(models.Model):
    user = models.OneToOneField(get_user_model(), related_name='professor', on_delete=models.SET_NULL, blank=False, null=True)
    email = models.EmailField(max_length=64)
    likes = models.ManyToManyField(TeacherAssistant, related_name='liked_professors', blank=True)
    dislikes = models.ManyToManyField(TeacherAssistant, related_name='disliked_professors', blank=True)

    def __str__(self):
        return f"Professor {self.email}"
