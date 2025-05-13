import csv
from django.core.management.base import BaseCommand
from school_system.models import Course
from user_system.models import Teacher
from django.contrib.auth.models import User
from django.utils.text import slugify  # 用於生成安全的 URL slug，也可以用於生成 username

class Command(BaseCommand):
    help = 'Imports courses from a CSV file'

    def add_arguments(self, parser):
        parser.add_argument('csv_file', type=str, help='Path to the CSV file containing course data')

    def handle(self, *args, **options):
        csv_file_path = options['csv_file']

        with open(csv_file_path, 'r', encoding='utf-8') as file:
            reader = csv.DictReader(file)
            for row in reader:
                try:
                    # 處理學分數
                    credits_str = row.get('學分數', '0')
                    credits = int(credits_str.split('-')[-1]) if '-' in credits_str else int(credits_str)

                    # 處理授課教師
                    teacher_name = row.get('授課教師')
                    teacher = None
                    if teacher_name:
                        name_parts = teacher_name.split(' ', 1)
                        last_name = name_parts[0] if name_parts else ''
                        first_name = name_parts[1] if len(name_parts) > 1 else ''

                        # 生成一個基於名字和姓氏的 username
                        base_username = slugify(f"{first_name}-{last_name}")
                        username = base_username

                        # 檢查 username 是否已存在，如果存在則添加一個數字後綴
                        counter = 1
                        while User.objects.filter(username=username).exists():
                            username = f"{base_username}-{counter}"
                            counter += 1

                        # 嘗試根據 username 查找 User，如果不存在則創建
                        user, user_created = User.objects.get_or_create(
                            username=username,
                            defaults={'first_name': first_name, 'last_name': last_name}
                        )

                        # 嘗試根據 User 查找 Teacher，如果不存在則創建
                        teacher, teacher_created = Teacher.objects.get_or_create(user=user)

                    # 創建 Course 物件
                    course = Course(
                        department=row.get('系所'),
                        name=row.get('課程標題'),
                        teacher=teacher,
                        type=row.get('課程類型'),
                        credits=credits,
                        location=row.get('上課地點') or None,
                        time=row.get('上課時間') or None,
                        link=row.get('課程連結'),
                        quota=int(row.get('選課狀況-名額', 0)),
                        selectNumberPeople=int(row.get('選課狀況-選上人數', 0)),
                        description=row.get('課程概述') or None,
                    )
                    course.save()
                    self.stdout.write(self.style.SUCCESS(f"Successfully imported course: {course.name}"))

                except ValueError as e:
                    self.stderr.write(self.style.ERROR(f"Error importing course '{row.get('課程標題', 'N/A')}': {e}"))
                except Exception as e:
                    self.stderr.write(self.style.ERROR(f"An unexpected error occurred while importing course '{row.get('課程標題', 'N/A')}': {e}"))

        self.stdout.write(self.style.SUCCESS('Successfully finished importing courses.'))