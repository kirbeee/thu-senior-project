from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField()

    def __str__(self):
        return self.name


class Board(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField()
    course_id = models.ForeignKey('school_system.Course', on_delete=models.CASCADE, related_name="boards")
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, related_name="boards")

    def __str__(self):
        return self.name


class Post(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, related_name="posts")
    board_id = models.ForeignKey(Board, on_delete=models.CASCADE, related_name="posts")
    created_at = models.DateTimeField(auto_now_add=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.title


class Comment(models.Model):
    content = models.TextField()
    post_id = models.ForeignKey(Post, on_delete=models.CASCADE, related_name="comments")
    user_id = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name="comments")
    created_at = models.DateTimeField(auto_now_add=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return f"Comment by {self.user} on {self.post}"


class Like(models.Model):
    create_at = models.DateTimeField(auto_now_add=True)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, related_name="likes")
    post_id = models.ForeignKey(Post, on_delete=models.CASCADE, related_name="likes")
    comment_id = models.ForeignKey(Comment, on_delete=models.CASCADE, related_name="likes")

    def __str__(self):
        return f"{self.user_id} likes {self.post_id}"
