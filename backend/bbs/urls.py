from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet, BoardViewSet, PostViewSet, CommentViewSet, LikeViewSet

router = DefaultRouter()
router.register('categories', CategoryViewSet)
router.register('boards', BoardViewSet)
router.register('posts', PostViewSet)
router.register('comments', CommentViewSet)
router.register('likes', LikeViewSet)

urlpatterns = [
    path('', include(router.urls)),
]