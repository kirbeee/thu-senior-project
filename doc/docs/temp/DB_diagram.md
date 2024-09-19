### 用戶表 (user table)

| 名稱                       | 資料類型         | 說明             |
|--------------------------|--------------|----------------|
| 學號 (student_id)          | VARCHAR(15)  |                |
| User id                  | SERIAL INT   | 主鍵             |
| 密碼 (password)            | VARCHAR(100) |                |
| 使用者名稱 (user_name)        | VARCHAR(50)  |                |
| 所屬科系索引 (user_department) | INT          | 外鍵，連接科系表(科系編碼) |
| 使用者身分 (user_type)        | INT          | 外鍵             |
| Google Oauth – id        | VARCHAR(100) |                |

### 使用者身分表 (identity table)

| 名稱                    | 資料型態        |    |
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

### 考古題表 (exam table) [討論]

| 名稱                   | 資料型態        | 說明                      |
|----------------------|-------------|-------------------------|
| 考古題科目 (exam_subject) | INT         | 主鍵，連接 course(course_id) |
| 考古題 (exam_text)      | VARCHAR(50) |                         |

[ER-model](https://dbdiagram.io/home)

```
Table identity {
    identity_id SERIAL [pk]
    identity_name VARCHAR(50) [not null]
}

Table department {
    department_id SERIAL [pk]
    department_name VARCHAR(50) [not null]
    graduation_requirement_id INT
}

Table graduation_requirement {
    id SERIAL [pk]
    required_credits SMALLINT
    elective_credits SMALLINT
    cross_department_credits SMALLINT
    year_id INT
}

Table year {
    year_id SERIAL [pk]
    year_year SMALLINT [not null]
}

Table user {
    user_id SERIAL [pk]
    student_id VARCHAR(15) [unique, not null]
    password VARCHAR(100) [not null]
    user_name VARCHAR(50) [not null]
    user_department INT
    user_type INT
    google_oauth_id VARCHAR(100)
}

Table course {
    course_id SERIAL [pk]
    course_name VARCHAR(50) [not null]
    course_teacher INT
    course_content VARCHAR(50)
    course_time VARCHAR(50)
    credits INT [not null]
    course_type VARCHAR(50)
    course_discuss INT
    course_examination VARCHAR(50)
}

Table exam {
    exam_id SERIAL [pk]
    course_id INT
    exam_text VARCHAR(50)
}

Table discuss {
    discuss_id SERIAL [pk]
    discuss_topic VARCHAR(50) [not null]
    discuss_text VARCHAR(50)
    image_urls TEXT[]
    rate INT
    post_time TIMESTAMP
    discuss_user INT
}

Table comment {
    comment_id SERIAL [pk]
    discuss_id INT
    comment_text VARCHAR(255) [not null]
    comment_user INT
    comment_time TIMESTAMP
}

Table thread {
    thread_id SERIAL [pk]
    discuss_id INT
    thread_text VARCHAR(255) [not null]
    likes INT
    edit_time TIMESTAMP
}

Table image {
    image_id SERIAL [pk]
    image_url VARCHAR(255) [not null]
}

Ref: user.user_department > department.department_id
Ref: user.user_type > identity.identity_id
Ref: course.course_teacher > user.user_id
Ref: course.course_discuss > discuss.discuss_id
Ref: exam.course_id > course.course_id
Ref: discuss.discuss_user > user.user_id
Ref: comment.discuss_id > discuss.discuss_id
Ref: comment.comment_user > user.user_id
Ref: thread.discuss_id > discuss.discuss_id
Ref: department.graduation_requirement_id > graduation_requirement.id
Ref: graduation_requirement.year_id > year.year_id

```

### ER-Model

[Tool:pgModeler](https://pgmodeler.io/screenshots)