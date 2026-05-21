from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator


class Course(models.Model):
    name = models.CharField(max_length=100)
    code = models.CharField(max_length=10, null=True, blank=True)
    credits = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(20)])
    department = models.CharField(max_length=100,null=True)
    location = models.CharField(max_length=100, null=True)
    type = models.CharField(max_length=10,null=True)
    time = models.CharField(max_length=100 ,null=True)
    link = models.URLField(null=True)
    quota = models.IntegerField(null=True)
    selectNumberPeople = models.IntegerField(null=True)
    description = models.TextField(null=True)
    teacher = models.ForeignKey('user_system.Teacher', on_delete=models.CASCADE, null=True)
    students = models.ManyToManyField('user_system.Student', related_name='courses', blank=True)

    def __str__(self):
        return self.name
