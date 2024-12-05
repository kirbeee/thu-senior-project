import csv
from faker import Faker
import random

fake = Faker()

# 設定 CSV 文件名稱
file_name = 'courses_fake_data.csv'

# 生成假資料
with open(file_name, mode='w', newline='', encoding='utf-8') as file:
    writer = csv.writer(file)

    # 寫入表頭
    writer.writerow(['name', 'code', 'credits', 'description', 'teacher_id', 'student_ids'])

    # 生成 100 筆假資料
    for _ in range(100):
        name = fake.bs().title()  # 生成隨機課程名稱
        code = f"{fake.random_uppercase_letter()}{fake.random_uppercase_letter()}{random.randint(100, 999)}"
        credits = random.randint(1, 20)  # 隨機學分數
        description = fake.text(max_nb_chars=200)  # 課程描述
        # teacher_id = random.randint(1, 10)  # 假設有 10 位老師，隨機選一位
        # student_ids = ",".join(
        #     map(str, random.sample(range(1, 101), random.randint(5, 30))))  # 隨機生成學生ID列表（假設最多 100 位學生）

        teacher_id = None
        student_ids = None

        writer.writerow([name, code, credits, description, teacher_id, student_ids])

print(f"CSV file '{file_name}' generated successfully!")
