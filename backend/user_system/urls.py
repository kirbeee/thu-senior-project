from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import StudentViewSet

router = DefaultRouter()
router.register(r'students', StudentViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('auth/', include('dj_rest_auth.urls')),  # 包含身份驗證端點
    path('auth/registration/', include('dj_rest_auth.registration.urls')),  # 包含註冊端點
]
