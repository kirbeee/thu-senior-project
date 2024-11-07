from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    student_id = models.CharField(max_length=15, blank=True, null=True)
    student_name = models.CharField(max_length=15, blank=True, null=True)

    def __str__(self):
        return self.student_name
