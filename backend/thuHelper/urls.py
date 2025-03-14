"""
URL configuration for thuHelper project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

from django.urls import include
from rest_framework import permissions

from django.urls import re_path
from django.views.generic import TemplateView
from dj_rest_auth.registration.views import VerifyEmailView

urlpatterns = [
    path("admin/", admin.site.urls),
]

# Swagger settings
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
schema_view = get_schema_view(
    openapi.Info(
        title="Snippets API",
        default_version='v1',
        description="Test description",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="contact@snippets.local"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)
urlpatterns += [
    re_path(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    re_path(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    re_path(r'^redoc/$', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]

# CORS settings

urlpatterns += [
    path('', TemplateView.as_view(template_name='index.html'))
]

# api-auth settings
urlpatterns += [
    re_path(r"^api_auth/", include("rest_framework.urls")),
]

# all api
urlpatterns += [
    path('api/', include([
        path('bbs/', include('bbs.urls')),
        path('', include('dj_rest_auth.urls')),
        path('school_system/', include('school_system.urls')),
        path('registration/', include('dj_rest_auth.registration.urls')),
    ])),
]
# static file settings
from django.conf import settings
from django.conf.urls.static import static

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

