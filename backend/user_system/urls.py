# urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import StudentViewSet, TeacherViewSet  # 加入 TeacherViewSet

from django.urls import path
from .views import UserRoleView

urlpatterns = [
    path('user-role/', UserRoleView.as_view(), name='user-role'),
]
