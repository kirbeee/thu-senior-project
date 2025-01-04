import os
import django

# 設置 DJANGO_SETTINGS_MODULE 為你的設置模塊
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "thuHelper.settings")

# 初始化 Django
django.setup()

from faker import Faker
from bbs.models import Post, Board
from django.contrib.auth import get_user_model
import random

# 创建 Faker 实例
fake = Faker()

# 获取所有 Board 实例
boards = Board.objects.all()

# 获取一个用户实例（假设你至少有一个用户）
user = get_user_model().objects.first()

# 插入随机数据到每个板块
for board in boards:
    # 随机生成 5 到 10 条帖子
    num_posts = random.randint(5, 10)
    for _ in range(num_posts):
        Post.objects.create(
            title=fake.sentence(),  # 随机生成标题
            content=fake.text(),    # 随机生成内容
            user_id=user,           # 使用第一个用户
            board_id=board,         # 当前的板块
            created_at=fake.date_this_year(),  # 随机生成创建日期
            deleted_at=None         # 假设没有删除时间
        )

print("成功为每个板块插入了随机的帖子数据。")