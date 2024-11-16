from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Student, Teacher


@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = ('user', 'id_card_number')  # Adjust the fields to display in the admin list
    search_fields = ('user__username', 'id_card_number')  # Allow search by username or ID card number


@admin.register(Teacher)
class TeacherAdmin(admin.ModelAdmin):
    list_display = ('user',)  # Display user info in the list
    search_fields = ('user__username',)  # Allow search by username
