from django.contrib import admin

from courses.models import Class, Room, Course

admin.site.register(Class)
admin.site.register(Course)
admin.site.register(Room)
