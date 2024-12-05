import os
import django
from faker import Faker

# 初始化 Django 環境
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "thuHelper.settings")
django.setup()

from bbs.models import Category

faker = Faker()


def generate_fake_categories(num_categories=10):
    for _ in range(num_categories):
        name = faker.unique.word().capitalize()  # 保證名稱唯一性
        description = faker.text()

        category, created = Category.objects.get_or_create(
            name=name,
            defaults={'description': description}
        )
        if created:
            print(f"Created Category: {name}")
        else:
            print(f"Category already exists: {name}")


# 設置生成數量
if __name__ == "__main__":
    generate_fake_categories(num_categories=10)
