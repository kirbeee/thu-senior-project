from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator


# Create your models here.
class Course(models.Model):
    name = models.CharField(max_length=100)
    code = models.CharField(max_length=10)
    credits = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(20)])
    description = models.TextField()
    teacher = models.ForeignKey('user_system.Teacher', on_delete=models.CASCADE, null=True)
    students = models.ManyToManyField('user_system.Student', related_name='courses', null=True)

    def __str__(self):
        return self.name
