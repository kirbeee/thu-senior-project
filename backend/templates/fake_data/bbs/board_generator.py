import os
import django

# 設置 DJANGO_SETTINGS_MODULE 為你的設置模塊
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "thuHelper.settings")

# 初始化 Django
django.setup()

import random
from faker import Faker
from school_system.models import Course
from bbs.models import Board, Category

faker = Faker()

def generate_fake_boards(num_boards=10):
    # 獲取所有課程和分類
    courses = list(Course.objects.all())
    categories = list(Category.objects.all())

    if not courses:
        print("No courses found. Please add courses first.")
        return
    if not categories:
        print("No categories found. Please add categories first.")
        return

    # 生成假資料
    for _ in range(num_boards):
        course = random.choice(courses)
        category = random.choice(categories)
        name = f"{course.name} - {faker.word().capitalize()} Discussion Board"

        Board.objects.create(
            name=name,
            description=faker.text(),
            course_id=course,
            category=category,
        )
        print(f"Created Board: {name}")


if __name__ == "__main__":
    generate_fake_boards()