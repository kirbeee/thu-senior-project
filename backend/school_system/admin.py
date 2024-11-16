from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Course


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ('name', 'code', 'credits', 'teacher')  # Fields to display in the list view
    search_fields = ('name', 'code', 'teacher__user__username')  # Search by course name, code, or teacher's username
    list_filter = ('teacher',)  # Filter by teacher
    filter_horizontal = ('students',)  # Allow selection of multiple students in a better way for the 'students' field

    # You can also add additional customization, like ordering the list or adding inlines for related models
    ordering = ('name',)  # Default ordering by course name
