from rest_framework import viewsets
from .models import Category, Board, Post, Comment, Like
from .serializers import CategorySerializer, BoardSerializer, PostSerializer, CommentSerializer, LikeSerializer
from rest_framework.filters import OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class BoardViewSet(viewsets.ModelViewSet):
    queryset = Board.objects.all()
    serializer_class = BoardSerializer
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_fields = ['course_id']  # 允许通过 course_id 过滤

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_fields = ['board_id']  # 允许通过 board_id 过滤

class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


class LikeViewSet(viewsets.ModelViewSet):
    queryset = Like.objects.all()
    serializer_class = LikeSerializer
