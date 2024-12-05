import os
import django
import csv

# 設置 DJANGO_SETTINGS_MODULE 為你的 Django 設定檔
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'thuHelper.settings')

# 初始化 Django
django.setup()

from school_system.models import Course
from user_system.models import Teacher, Student

# 讀取 CSV 並寫入資料庫
with open('courses_fake_data.csv', mode='r', encoding='utf-8') as file:
    reader = csv.DictReader(file)

    for row in reader:
        # 解析課程數據
        course_name = row['name']
        course_code = row['code']
        credits = row['credits']
        description = row['description']
        # teacher_id = int(row['teacher_id'])

        # 獲取老師對象
        # teacher = Teacher.objects.get(id=teacher_id)

        # 創建課程對象
        course = Course.objects.create(
            name=course_name,
            code=course_code,
            credits=credits,
            description=description,
            teacher=None
        )

        # 處理學生 ID
        # student_ids = map(int, row['student_ids'].split(','))
        # students = Student.objects.filter(id__in=student_ids)

        # 將學生添加到課程
        # course.students.add(*students)
        #
        # print(f'Course "{course_name}" imported successfully!')
