from rest_framework import serializers
from .models import Category, Board, Post, Comment, PostLike, CommentLike, Tag
from django.contrib.auth.models import User
from school_system.models import Course

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']
        read_only_fields = ['id', 'username']

class CategorySerializer(serializers.ModelSerializer):
    boards = serializers.HyperlinkedRelatedField(
        many=True,
        read_only=True,
        view_name='board-detail'
    )

    class Meta:
        model = Category
        fields = ['id', 'name', 'description', 'slug', 'boards', 'created_at', 'updated_at']
        read_only_fields = ['id', 'slug', 'created_at', 'updated_at', 'boards']

class BoardSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    course_id = serializers.PrimaryKeyRelatedField(queryset=Course.objects.all())
    moderators = serializers.PrimaryKeyRelatedField(many=True, queryset=User.objects.all(), required=False)
    posts = serializers.HyperlinkedRelatedField(many=True, read_only=True, view_name='post-detail')

    class Meta:
        model = Board
        fields = [
            'id', 'name', 'description', 'board_type', 'category', 'course_id',
            'moderators', 'is_private', 'posts', 'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'created_at', 'updated_at', 'posts', 'category']

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['id', 'name', 'slug', 'description', 'created_at']
        read_only_fields = ['id', 'slug', 'created_at']

class CommentSerializer(serializers.ModelSerializer):
    user_id = serializers.PrimaryKeyRelatedField(queryset=User.objects.all(), allow_null=True)
    post_id = serializers.PrimaryKeyRelatedField(queryset=Post.objects.all())
    replies = serializers.SerializerMethodField()
    comment_likes_count = serializers.SerializerMethodField()

    class Meta:
        model = Comment
        fields = [
            'id', 'content', 'post_id', 'user_id', 'parent_comment',
            'replies', 'comment_likes_count', 'created_at', 'updated_at', 'deleted_at'
        ]
        read_only_fields = ['id', 'created_at', 'updated_at', 'replies', 'comment_likes_count',"deleted_at"]

    def get_replies(self, obj):
        serializer = CommentSerializer(obj.replies.all(), many=True)
        return serializer.data


    def get_comment_likes_count(self, obj):
        return obj.comment_likes.count()

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['user'] = UserSerializer(instance.user_id).data if instance.user_id else None
        return representation

class PostSerializer(serializers.ModelSerializer):
    user_id = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    board_id = serializers.PrimaryKeyRelatedField(queryset=Board.objects.all())
    tags = serializers.PrimaryKeyRelatedField(many=True, queryset=Tag.objects.all(), required=False)
    comments = CommentSerializer(many=True, read_only=True)
    post_likes_count = serializers.SerializerMethodField()

    class Meta:
        model = Post
        fields = [
            'id', 'title', 'content', 'post_type', 'user_id', 'board_id', 'tags',
            'comments', 'post_likes_count', 'is_pinned', 'created_at', 'updated_at', 'deleted_at'
        ]
        read_only_fields = ['id', 'created_at', 'updated_at', 'comments', 'post_likes_count','deleted_at']

    def get_post_likes_count(self, obj):
        return obj.post_likes.count()

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['user'] = UserSerializer(instance.user_id).data
        return representation

class PostLikeSerializer(serializers.ModelSerializer):
    user_id = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    post_id = serializers.PrimaryKeyRelatedField(queryset=Post.objects.all())
    class Meta:
        model = PostLike
        fields = ['id', 'user_id', 'post_id', 'created_at']
        read_only_fields = ['id', 'created_at']

class CommentLikeSerializer(serializers.ModelSerializer):
    user_id = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    comment_id = serializers.PrimaryKeyRelatedField(queryset=Comment.objects.all())
    class Meta:
        model = CommentLike
        fields = ['id', 'user_id', 'comment_id', 'created_at']
        read_only_fields = ['id', 'created_at']