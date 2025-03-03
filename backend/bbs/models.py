from django.db import models
from django.conf import settings

class Category(models.Model):
    """
    Categorizes boards into broader topics.
    """
    name = models.CharField(max_length=100, unique=True, verbose_name="Category Name")
    description = models.TextField(blank=True, verbose_name="Description")
    slug = models.SlugField(unique=True, blank=True, verbose_name="Slug (URL friendly)")  # For URL-friendly category names
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    # Optional: icon or image for categories - FileField or URLField

    class Meta:
        verbose_name_plural = "Categories"  # Correct plural form in admin

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name) # Auto-generate slug from name
        super().save(*args, **kwargs)


class Board(models.Model):
    """
    Represents a discussion forum within a category, often related to a course.
    """
    BOARD_TYPES = [
        ('forum', 'Forum'),  # General discussion
        ('qna', 'Q&A'),      # Question & Answer format
        ('announcement', 'Announcement'), # One-way communication, admin/moderator posts only
        ('study_group', 'Study Group'), # For study group organization
    ]

    name = models.CharField(max_length=100, unique=True, verbose_name="Board Name")
    description = models.TextField(blank=True, verbose_name="Description")
    board_type = models.CharField(max_length=20, choices=BOARD_TYPES, default='forum', verbose_name="Board Type")
    course_id = models.ForeignKey('school_system.Course', on_delete=models.CASCADE, related_name="boards", verbose_name="Course")
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, related_name="boards", verbose_name="Category")
    moderators = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name="moderated_boards", blank=True, verbose_name="Moderators")
    is_private = models.BooleanField(default=False, verbose_name="Private Board") # For private boards, need to implement permissions
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['category', 'name'] # Default ordering for boards

    def __str__(self):
        return self.name


class Post(models.Model):
    """
    Individual posts within a board, initiating or contributing to discussions.
    """
    POST_TYPES = [
        ('discussion', 'Discussion'), # Open discussion topic
        ('question', 'Question'),     # Specific question seeking answers
        ('announcement', 'Announcement'), # Important announcements (often board-level)
        # Add more as needed ('poll', 'resource', etc.)
    ]

    title = models.CharField(max_length=255, verbose_name="Post Title")
    content = models.TextField(verbose_name="Content")
    post_type = models.CharField(max_length=20, choices=POST_TYPES, default='discussion', verbose_name="Post Type")
    user_id = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="posts", verbose_name="Author")
    board_id = models.ForeignKey(Board, on_delete=models.CASCADE, related_name="posts", verbose_name="Board")
    tags = models.ManyToManyField('Tag', blank=True, related_name="posts", verbose_name="Tags") # Many-to-many for tagging
    is_pinned = models.BooleanField(default=False, verbose_name="Pinned Post") # For pinning important posts
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True, blank=True, verbose_name="Deleted At")
    # Optional: attachments - FileField or GenericRelation for more flexibility

    class Meta:
        ordering = ['-created_at'] # Newest posts first

    def __str__(self):
        return self.title


class Comment(models.Model):
    """
    Replies to posts, enabling threaded discussions.
    """
    content = models.TextField(verbose_name="Comment Content")
    post_id = models.ForeignKey(Post, on_delete=models.CASCADE, related_name="comments", verbose_name="Post")
    user_id = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, related_name="comments", verbose_name="Author")
    parent_comment = models.ForeignKey('self', on_delete=models.CASCADE, null=True, blank=True, related_name="replies", verbose_name="Parent Comment") # Threaded comments
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True, blank=True, verbose_name="Deleted At")

    class Meta:
        ordering = ['created_at'] # Oldest comments first in a thread

    def __str__(self):
        return f"Comment by {self.user_id} on {self.post_id}" # Improved __str__


class Tag(models.Model):
    """
    Keywords or labels for posts, improving search and topic organization.
    """
    name = models.CharField(max_length=50, unique=True, verbose_name="Tag Name")
    slug = models.SlugField(unique=True, blank=True, verbose_name="Slug (URL friendly)")  # URL-friendly tag names
    description = models.TextField(blank=True, verbose_name="Description")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name) # Auto-generate slug from name
        super().save(*args, **kwargs)


class PostLike(models.Model):
    """
    Likes specifically for posts.
    """
    user_id = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="post_likes", verbose_name="User")
    post_id = models.ForeignKey(Post, on_delete=models.CASCADE, related_name="post_likes", verbose_name="Post")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('user_id', 'post_id') # One like per user per post

    def __str__(self):
        return f"{self.user_id} likes post: {self.post_id}"


class CommentLike(models.Model):
    """
    Likes specifically for comments.
    """
    user_id = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="comment_likes", verbose_name="User")
    comment_id = models.ForeignKey(Comment, on_delete=models.CASCADE, related_name="comment_likes", verbose_name="Comment")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('user_id', 'comment_id') # One like per user per comment

    def __str__(self):
        return f"{self.user_id} likes comment: {self.comment_id}"


from django.utils.text import slugify # Import slugify for automatic slug generation