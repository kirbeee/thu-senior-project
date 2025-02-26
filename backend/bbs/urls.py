from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet, BoardViewSet, PostViewSet, CommentViewSet, PostLikeViewSet, CommentLikeViewSet # Modified import - removed LikeViewSet, added PostLikeViewSet and CommentLikeViewSet

router = DefaultRouter()
router.register('categories', CategoryViewSet)
router.register('boards', BoardViewSet)
router.register('posts', PostViewSet)
router.register('comments', CommentViewSet)
router.register('post-likes', PostLikeViewSet) # Renamed route and ViewSet registration for Post Likes
router.register('comment-likes', CommentLikeViewSet) # Renamed route and ViewSet registration for Comment Likes

urlpatterns = [
    path('', include(router.urls)),
]