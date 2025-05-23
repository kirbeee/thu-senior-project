# Generated by Django 5.1.6 on 2025-03-24 23:34

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("school_system", "0003_alter_course_students_alter_course_teacher"),
        ("user_system", "0005_alter_student_user_alter_teacher_user_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="course",
            name="department",
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name="course",
            name="link",
            field=models.URLField(null=True),
        ),
        migrations.AddField(
            model_name="course",
            name="location",
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name="course",
            name="quota",
            field=models.IntegerField(null=True),
        ),
        migrations.AddField(
            model_name="course",
            name="selectNumberPeople",
            field=models.IntegerField(null=True),
        ),
        migrations.AddField(
            model_name="course",
            name="time",
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name="course",
            name="type",
            field=models.CharField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name="course",
            name="description",
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name="course",
            name="students",
            field=models.ManyToManyField(
                blank=True, related_name="courses", to="user_system.student"
            ),
        ),
    ]
