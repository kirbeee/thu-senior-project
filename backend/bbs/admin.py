from django.contrib import admin

# Register your models here.
# admin.py

from django.contrib import admin
from .models import Category, Board, Post, Comment, Like

# 註冊 Category 模型
@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'description')  # 顯示類別名稱與描述
    search_fields = ('name',)  # 允許根據類別名稱進行搜尋

# 註冊 Board 模型
@admin.register(Board)
class BoardAdmin(admin.ModelAdmin):
    list_display = ('name', 'course_id', 'category', 'description')  # 顯示討論區名稱、課程和分類
    search_fields = ('name', 'course_id__name', 'category__name')  # 允許根據名稱、課程或分類進行搜尋
    list_filter = ('category', 'course_id')  # 可以根據課程或分類進行篩選

# 註冊 Post 模型
@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'user_id', 'board_id', 'created_at')  # 顯示標題、作者、討論區、創建時間
    search_fields = ('title', 'content', 'user_id__username')  # 允許根據標題、內容或用戶進行搜尋
    list_filter = ('board_id', 'created_at')  # 可以根據討論區和創建時間進行篩選
    ordering = ('-created_at',)  # 根據創建時間倒序排列

# 註冊 Comment 模型
@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ('user_id', 'post_id', 'content', 'created_at')  # 顯示評論的用戶、所屬帖子、內容與創建時間
    search_fields = ('content', 'user_id__username')  # 允許根據內容或用戶進行搜尋
    list_filter = ('post_id', 'created_at')  # 可以根據帖子和創建時間進行篩選

# 註冊 Like 模型
@admin.register(Like)
class LikeAdmin(admin.ModelAdmin):
    list_display = ('user_id', 'post_id', 'comment_id', 'create_at')  # 顯示用戶、帖子、評論與點讚時間
    search_fields = ('user_id__username', 'post_id__title', 'comment_id__content')  # 允許根據用戶、帖子標題或評論內容搜尋
    list_filter = ('create_at',)  # 可以根據點讚時間進行篩選
