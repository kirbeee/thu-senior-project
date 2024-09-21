# Database Design

## using

System : PostgreSQL
node-module:

- pg
- sequelize : ORM

### User 

| key             | data type    | description |
|-----------------|--------------|-------------|
| user_id         | SERIAL INT   | PK          |
| student_id      | VARCHAR(15)  |             |
| password        | VARCHAR(100) |             |
| user_name       | VARCHAR(50)  |             |
| Google Oauth–id | VARCHAR(100) |             |
| department      | INT          | FK          |
| identity        | INT          | FK          |


### 使用者身分表 (identity table)

| key                   | 資料型態        |    |
|-----------------------|-------------|----|
| 使用者身分編碼 (identity_id) | SERIAL INT  | 主鍵 |
| 身分名稱 (identity_name)  | VARCHAR(50) |    |

### 科系表 (department table)

| 名稱                     | 資料型態        | 說明                  |
|------------------------|-------------|---------------------|
| 科系編碼 (department_id)   | SERIAL INT  | 主鍵                  |
| 科系名稱 (department_name) | VARCHAR(50) |                     |
| 畢業門檻 (dp_graduation)   | INT         | 所需學分，外鍵，連接畢業門檻表(編號) |

### 開課明細 (course table)

| 名稱                       | 資料型態        | 說明                |
|--------------------------|-------------|-------------------|
| 課程代碼 (course_id)         | SERIAL INT  | 主鍵                |
| 課程名稱 (course_name)       | VARCHAR(50) |                   |
| 老師 (course_teacher)      | VARCHAR(50) | 可搭配 user(user_id) |
| 課程內容 (course_content)    | VARCHAR(50) |                   |
| 課程開課時間 (course_time)     | VARCHAR(50) |                   |
| 學分數                      | INT         |                   |
| 課程屬性 (course_type)       | VARCHAR(50) |                   |
| 討論版 (course_discuss)     | INT         | 外鍵，連接討論區(討論課程編號)  |
| 考古題 (course_examination) | VARCHAR(50) | 外鍵，連接考古題          |

### 考古題表 (exam table) [討論]

| 名稱                   | 資料型態        | 說明                      |
|----------------------|-------------|-------------------------|
| 考古題科目 (exam_subject) | INT         | 主鍵，連接 course(course_id) |
| 考古題 (exam_text)      | VARCHAR(50) |                         |

### 學年表 (year table) [deprecate]

| 名稱                   | 資料型態       | 說明 |
|----------------------|------------|----|
| Id (year_department) | SERIAL INT | 主鍵 |
| 學年 (year_year)       | SMALLINT   |    |

### 畢業門檻 (graduation_requirement table) [deprecate]

| 名稱    | 資料型態       | 說明                          |
|-------|------------|-----------------------------|
| id 系級 | SERIAL INT | 主鍵                          |
| 必修    | SMALLINT   |                             |
| 本系選修  | SMALLINT   |                             |
| 外系選修  | SMALLINT   |                             |
| 學年    | INT        | 外鍵，連接 year(year_department) |

### 討論表 (discuss board table) [討論區]

| 名稱                   | 資料型態        | 說明                  |
|----------------------|-------------|---------------------|
| 討論課程編號 (id)          | SERIAL INT  | 主鍵                  |
| 作者(author)           | INT         | 外鍵 user(user_id)    |
| 討論標題 (topic)         | VARCHAR(50) |                     |
| 討論內容 (text_content)  | VARCHAR(50) |                     |
| 圖片網址                 | TEXT[]      |                     |
| 評分分數 (rate)          | INT         |                     |
| 發布時間 (post_time)     | TIMESTAMP   |                     |
| 留言使用者 (discuss_user) | INT         | 外鍵，連接 user(user_id) |

### 圖片表 (image table) [討論版]

| 名稱               | 資料型態         | 說明 |
|------------------|--------------|----|
| 圖片編號 (image_id)  | SERIAL INT   | 主鍵 |
| 圖片網址 (image_url) | VARCHAR(255) |    |

### 討論串表 (thread table) [討論版]

| 名稱                  | 資料型態         | 說明                        |
|---------------------|--------------|---------------------------|
| 討論串編號 (thread_id)   | SERIAL INT   | 主鍵                        |
| 討論課程編號 (discuss_id) | INT          | 外鍵，連接 discuss(discuss_id) |
| 討論內容 (thread_text)  | VARCHAR(255) |                           |
| 讚數 (likes)          | INT          |                           |
| 編輯時間 (edit_time)    | TIMESTAMP    |                           |

### 留言表 (comment table) [deprecate]

| 名稱                   | 資料型態         | 說明                        |
|----------------------|--------------|---------------------------|
| 留言編號 (comment_id)    | SERIAL INT   | 主鍵                        |
| 討論課程編號 (discuss_id)  | INT          | 外鍵，連接 discuss(discuss_id) |
| 留言內容 (comment_text)  | VARCHAR(255) |                           |
| 留言使用者 (comment_user) | INT          | 外鍵，連接 user(user_id)       |
| 留言時間 (comment_time)  | TIMESTAMP    |                           |