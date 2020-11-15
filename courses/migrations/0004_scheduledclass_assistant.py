# Generated by Django 3.1.2 on 2020-11-07 21:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('roles', '0001_initial'),
        ('courses', '0003_course_year'),
    ]

    operations = [
        migrations.AddField(
            model_name='scheduledclass',
            name='assistant',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='scheduled_classes', to='roles.teacherassistant'),
        ),
    ]