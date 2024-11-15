from django.contrib.auth.models import User
from django.db import models


class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    id_card_number = models.CharField(max_length=15, blank=True, null=True)


class Teacher(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
