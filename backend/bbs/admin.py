from django.contrib import admin
from .models import Category, Board, Post, Comment, PostLike, CommentLike # 修正導入行，加入 PostLike 和 CommentLike, 移除 Like

# 註冊 Category 模型
@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'description')
    search_fields = ('name',)

# 註冊 Board 模型
@admin.register(Board)
class BoardAdmin(admin.ModelAdmin):
    list_display = ('name', 'course_id', 'category', 'description', 'board_type', 'is_private') # 加入 board_type 和 is_private 顯示
    search_fields = ('name', 'course_id__name', 'category__name')
    list_filter = ('category', 'course_id', 'board_type', 'is_private') # 加入 board_type 和 is_private 篩選

# 註冊 Post 模型
@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'user_id', 'board_id', 'created_at', 'post_type', 'is_pinned') # 加入 post_type 和 is_pinned 顯示
    search_fields = ('title', 'content', 'user_id__username')
    list_filter = ('board_id', 'created_at', 'post_type', 'is_pinned') # 加入 post_type 和 is_pinned 篩選
    ordering = ('-created_at',)

# 註冊 Comment 模型
@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ('user_id', 'post_id', 'content', 'created_at')
    search_fields = ('content', 'user_id__username')
    list_filter = ('post_id', 'created_at')

# 註冊 PostLike 模型 (取代舊的 Like 模型)
@admin.register(PostLike)
class PostLikeAdmin(admin.ModelAdmin):
    list_display = ('user_id', 'post_id', 'created_at')  # 修改 list_display 配合 PostLike 模型欄位
    search_fields = ('user_id__username', 'post_id__title')  # 修改 search_fields 配合 PostLike 模型欄位
    list_filter = ('created_at', ) # list_filter 保持不變，或根據需要調整

# 註冊 CommentLike 模型 (新增 CommentLike 模型管理)
@admin.register(CommentLike)
class CommentLikeAdmin(admin.ModelAdmin):
    list_display = ('user_id', 'comment_id', 'created_at') # 修改 list_display 配合 CommentLike 模型欄位
    search_fields = ('user_id__username', 'comment_id__content') # 修改 search_fields 配合 CommentLike 模型欄位
    list_filter = ('created_at',) # list_filter 保持不變，或根據需要調整