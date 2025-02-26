from rest_framework import serializers
from .models import Category, Board, Post, Comment, PostLike, CommentLike, Tag
from django.contrib.auth.models import User # 或是你自訂的使用者模型
from school_system.models import Course # 假設 Course 模型在 school_system app 裡

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User # 或是你自訂的使用者模型
        fields = ['id', 'username'] # 包含你想公開的欄位 (避免密碼等敏感資訊)
        read_only_fields = ['id', 'username'] # 或是根據需求調整 - 也許使用者名稱在個人資料更新時可寫入

class CategorySerializer(serializers.ModelSerializer):
    boards = serializers.HyperlinkedRelatedField(  # 或是如果你偏好 ID 則使用 PrimaryKeyRelatedField
        many=True,
        read_only=True,
        view_name='board-detail' # 假設你有名為 'board-detail' 的 URL 名稱
    )

    class Meta:
        model = Category
        fields = ['id', 'name', 'description', 'slug', 'boards', 'created_at', 'updated_at'] # 明確列出欄位
        read_only_fields = ['id', 'slug', 'created_at', 'updated_at', 'boards'] # 標記在更新時不應變更的欄位

class BoardSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True) # Category 的巢狀序列化器
    course_id = serializers.PrimaryKeyRelatedField(queryset=Course.objects.all()) # 可寫入，使用 PK
    moderators = serializers.PrimaryKeyRelatedField(many=True, queryset=User.objects.all(), required=False) # 可寫入，版主使用 PK
    posts = serializers.HyperlinkedRelatedField(many=True, read_only=True, view_name='post-detail') # 連到貼文的連結

    class Meta:
        model = Board
        fields = [
            'id', 'name', 'description', 'board_type', 'category', 'course_id',
            'moderators', 'is_private', 'posts', 'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'created_at', 'updated_at', 'posts', 'category'] # Category 在此為唯讀，透過 CategorySerializer 更新

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
        read_only_fields = ['id', 'created_at', 'updated_at', 'replies', 'comment_likes_count']

    def get_replies(self, obj): # 取得巢狀回覆的方法
        serializer = CommentSerializer(obj.replies.all(), many=True) # 直接使用 CommentSerializer, 並設定 many=True
        return serializer.data # 返回 serializer.data


    def get_comment_likes_count(self, obj): # 取得讚數的方法
        return obj.comment_likes.count()

    def to_representation(self, instance): # 和 PostSerializer 一樣嵌入使用者資料
        representation = super().to_representation(instance)
        representation['user'] = UserSerializer(instance.user_id).data if instance.user_id else None # 嵌入使用者，處理空值情況
        return representation

class PostSerializer(serializers.ModelSerializer):
    user_id = serializers.PrimaryKeyRelatedField(queryset=User.objects.all()) # 可寫入，使用 PK
    board_id = serializers.PrimaryKeyRelatedField(queryset=Board.objects.all()) # 可寫入，使用 PK
    tags = serializers.PrimaryKeyRelatedField(many=True, queryset=Tag.objects.all(), required=False) # 標籤可寫入
    comments = CommentSerializer(many=True, read_only=True) # 巢狀 CommentSerializer
    post_likes_count = serializers.SerializerMethodField() # 計算讚數

    class Meta:
        model = Post
        fields = [
            'id', 'title', 'content', 'post_type', 'user_id', 'board_id', 'tags',
            'comments', 'post_likes_count', 'is_pinned', 'created_at', 'updated_at', 'deleted_at'
        ]
        read_only_fields = ['id', 'created_at', 'updated_at', 'comments', 'post_likes_count']

    def get_post_likes_count(self, obj): # 取得讚數的方法
        return obj.post_likes.count() # 透過反向關聯 'post_likes' 存取相關的 PostLike 物件

    def to_representation(self, instance): # 客製化呈現方式以嵌入使用者資訊
        representation = super().to_representation(instance)
        representation['user'] = UserSerializer(instance.user_id).data # 嵌入使用者資料
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