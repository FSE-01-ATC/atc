from django.contrib import admin

from roles.models import Group, Student, TeacherAssistant, Professor

admin.site.register(Group)
admin.site.register(Student)
admin.site.register(TeacherAssistant)
admin.site.register(Professor)
