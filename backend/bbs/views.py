from rest_framework import viewsets, mixins # Import mixins if you need them (e.g., for CreateModelMixin, DestroyModelMixin)
from rest_framework.permissions import IsAuthenticatedOrReadOnly # Or your desired permission class
from .models import Category, Board, Post, Comment, PostLike, CommentLike # Corrected import: PostLike, CommentLike, removed Like
from .serializers import CategorySerializer, BoardSerializer, PostSerializer, CommentSerializer, PostLikeSerializer, CommentLikeSerializer # Corrected import: PostLikeSerializer, CommentLikeSerializer, removed LikeSerializer
from rest_framework.filters import OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend


class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['id']

class BoardViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Board.objects.all()
    serializer_class = BoardSerializer
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_fields = ['course_id','category_id']  # 允许通过 course_id 过滤

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_fields = ['board_id']  # 允许通过 board_id 过滤

class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


class PostLikeViewSet(viewsets.ModelViewSet): # ViewSet for Post Likes
    queryset = PostLike.objects.all()
    serializer_class = PostLikeSerializer
    permission_classes = [IsAuthenticatedOrReadOnly] # Adjust permissions as needed

class CommentLikeViewSet(viewsets.ModelViewSet): # ViewSet for Comment Likes
    queryset = CommentLike.objects.all()
    serializer_class = CommentLikeSerializer
    permission_classes = [IsAuthenticatedOrReadOnly] # Adjust permissions as needed