import os
import django

# 設置 DJANGO_SETTINGS_MODULE 為你的設置模塊
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "thuHelper.settings")

# 初始化 Django
django.setup()

from bbs.models import Category, Board, Post, Comment, Tag, PostLike, CommentLike
from school_system.models import Course
from django.contrib.auth.models import User

# 建立使用者假資料 (使用 get_or_create 避免重複)
user1, created = User.objects.get_or_create(username='moderator1')
user2, created = User.objects.get_or_create(username='moderator2')
user3, created = User.objects.get_or_create(username='admin1')
user4, created = User.objects.get_or_create(username='student1')
user5, created = User.objects.get_or_create(username='student2')
user6, created = User.objects.get_or_create(username='student3')
user7, created = User.objects.get_or_create(username='student4')
user8, created = User.objects.get_or_create(username='student5')
user9, created = User.objects.get_or_create(username='student6')

print("已檢查或建立使用者假資料：") #  修改訊息更精確
print(user1, user2, user3, user4, user5, user6, user7, user8, user9)

user1 = User.objects.get(username='moderator1') #  再次取得 user1 (確保後續使用到的是最新的 User 物件)

# 建立課程假資料 (使用 get_or_create 避免重複)
course1, created = Course.objects.get_or_create(name="資料結構與演算法", defaults={"credits": 3}) # defaults 內設定其他欄位
course2, created = Course.objects.get_or_create(name="微積分 (一)", defaults={"credits": 4})
course3, created = Course.objects.get_or_create(name="學務處公告", defaults={"credits": 0})
course4, created = Course.objects.get_or_create(name="通識課程", defaults={"credits": 2})


print("已檢查或建立課程假資料：") # 修改訊息更精確
print(course1, course2, course3, course4)

# 建立分類假資料 (已使用 get_or_create, 無需修改)
category1, created = Category.objects.get_or_create(
    name="課程討論",
    defaults={"description": "針對各門課程的討論區。", "slug": "courses"}
)
category2, created = Category.objects.get_or_create(
    name="校園生活",
    defaults={"description": "討論校園生活、活動、社團等。", "slug": "campus-life"}
)
category3, created = Category.objects.get_or_create(
    name="二手交易",
    defaults={"description": "提供學生二手物品交易的平台。", "slug": "marketplace"}
)

print("已檢查或建立分類假資料：") # 修改訊息更精確
print(category1, category2, category3)

# 建立討論區假資料 (已使用 get_or_create, 無需修改)
board1, created = Board.objects.get_or_create(
    name="資料結構與演算法",
    defaults={
        "description": "討論資料結構與演算法課程的相關問題。",
        "board_type": 'forum',
        "course_id": course1,
        "category": category1,
        "is_private": False
    }
)
board1.moderators.set([user1, user2])

board2, created = Board.objects.get_or_create(
    name="微積分 (一)",
    defaults={
        "description": "討論微積分（一）課程的習題和觀念。",
        "board_type": 'qna',
        "course_id": course2,
        "category": category1,
        "is_private": False
    }
)

board3, created = Board.objects.get_or_create(
    name="校園活動公告",
    defaults={
        "description": "發布校園活動相關公告。",
        "board_type": 'announcement',
        "category": category2,
        "is_private": False,
        "course_id": course3
    }
)
board3.moderators.set([user3])

board4, created = Board.objects.get_or_create(
    name="[徵]  二手教科書交換",
    defaults={
        "description": "大家來交換或出售二手教科書吧！",
        "board_type": 'forum',
        "category": category3,
        "is_private": False,
        "course_id": course4
    }
)

print("已檢查或建立討論區假資料：") # 修改訊息更精確
print(board1, board2, board3, board4)

# 建立標籤假資料 (已使用 create, 修改為 get_or_create 避免重複)
tag1, created = Tag.objects.get_or_create(name="考古題", defaults={"slug": "exam-questions", "description": "包含考古題相關資訊的貼文。"}) # 使用 get_or_create
tag2, created = Tag.objects.get_or_create(name="作業問題", defaults={"slug": "homework-help", "description": "討論作業問題的貼文。"}) # 使用 get_or_create
tag3, created = Tag.objects.get_or_create(name="活動公告", defaults={"slug": "event-announcement", "description": "校園活動公告貼文。"}) # 使用 get_or_create

print("已檢查或建立標籤假資料：") # 修改訊息更精確
print(tag1, tag2, tag3)

# 建立貼文假資料 (已使用 create, 修改為 get_or_create 避免重複 - 需更精細的判斷條件)
post1, created = Post.objects.get_or_create( # 使用 get_or_create, 需定義更精確的 lookup 條件
    title="資料結構期中考考古題分享 (2023 Fall)",
    board_id=board1, # lookup 條件加入 board_id 避免同標題在不同版面重複
    user_id=user4,  # lookup 條件加入 user_id (雖然同使用者在同版面發同標題文章機率不高, 但更嚴謹)
    defaults={ # 將其他參數放入 defaults
        "content": "大家好，這裡分享一下我整理的 2023 年秋季學期資料結構期中考考古題，希望能幫助到大家！ [檔案連結]  祝大家考試順利！",
        "post_type": 'discussion',
        "is_pinned": True
    }
)
post1.tags.set([tag1])

post2, created = Post.objects.get_or_create( # 使用 get_or_create,  需定義更精確的 lookup 條件
    title="微積分(一)  Ch3. 習題 3.5  求解",
    board_id=board2, # lookup 條件加入 board_id
    user_id=user5, # lookup 條件加入 user_id
    defaults={ # 將其他參數放入 defaults
        "content": "請問各位，微積分(一)  Ch3. 習題 3.5  這題要怎麼解啊？我卡關很久了...  求指點！",
        "post_type": 'question'
    }
)
post2.tags.set([tag2])

post3, created = Post.objects.get_or_create( # 使用 get_or_create,  需定義更精確的 lookup 條件
    title="[公告]  本週五校園演唱會活動",
    board_id=board3, # lookup 條件加入 board_id
    user_id=user3, # lookup 條件加入 user_id
    defaults={ # 將其他參數放入 defaults
        "content": "學務處公告：本週五晚上七點將在操場舉辦校園演唱會，歡迎各位同學踴躍參加！  詳細資訊請參考海報 [海報圖片連結]。",
        "post_type": 'announcement'
    }
)
post3.tags.set([tag3])

post4, created = Post.objects.get_or_create( # 使用 get_or_create,  需定義更精確的 lookup 條件
    title="徵求二手線性代數課本 (作者: Lay)",
    board_id=board4, # lookup 條件加入 board_id
    user_id=user6, # lookup 條件加入 user_id
    defaults={ # 將其他參數放入 defaults
        "content": "如題，徵求二手線性代數課本，作者是 Lay 的書，第七版或更新版本皆可，書況良好，價格可議，意者站內信！",
        "post_type": 'discussion'
    }
)


print("已檢查或建立貼文假資料：") # 修改訊息更精確
print(post1, post2, post3, post4)

# 建立評論假資料 (已使用 create, 修改為 get_or_create 避免重複 - 需更精細的判斷條件)
comment1, created = Comment.objects.get_or_create( # 使用 get_or_create, 需定義更精確的 lookup 條件
    post_id=post1, # lookup 條件加入 post_id
    user_id=user7, # lookup 條件加入 user_id
    defaults={ # 將其他參數放入 defaults
        "content": "感謝分享考古題！對考試很有幫助！",
    }
)

comment2, created = Comment.objects.get_or_create( # 使用 get_or_create, 需定義更精確的 lookup 條件
    post_id=post1, # lookup 條件加入 post_id
    user_id=user8, # lookup 條件加入 user_id
    defaults={ # 將其他參數放入 defaults
        "content": "請問考古題有答案嗎？",
    }
)

comment3, created = Comment.objects.get_or_create( # 使用 get_or_create, 需定義更精確的 lookup 條件
    post_id=post1, # lookup 條件加入 post_id
    user_id=user4, # lookup 條件加入 user_id
    parent_comment=comment2, # lookup 條件加入 parent_comment (針對巢狀回覆更精確)
    defaults={ # 將其他參數放入 defaults
        "content": "回覆樓上，考古題通常沒有標準答案，要自己練習喔！",
    }
)

comment4, created = Comment.objects.get_or_create( # 使用 get_or_create, 需定義更精確的 lookup 條件
    post_id=post2, # lookup 條件加入 post_id
    user_id=user9, # lookup 條件加入 user_id
    defaults={ # 將其他參數放入 defaults
        "content": "Ch3.5  這題應該是用 XX 定理，你試試看。",
    }
)


print("已檢查或建立評論假資料：") # 修改訊息更精確
print(comment1, comment2, comment3, comment4)

# 建立貼文點讚假資料 (已使用 create, 修改為 get_or_create 避免重複 - 針對 ManyToMany 關聯需調整)
post_like1, created = PostLike.objects.get_or_create(user_id=user7, post_id=post1) # 使用 get_or_create, 根據 user_id 和 post_id 避免重複
post_like2, created = PostLike.objects.get_or_create(user_id=user8, post_id=post1) # 使用 get_or_create, 根據 user_id 和 post_id 避免重複
post_like3, created = PostLike.objects.get_or_create(user_id=user9, post_id=post2) # 使用 get_or_create, 根據 user_id 和 post_id 避免重複


print("已檢查或建立貼文點讚假資料") # 修改訊息更精確

# 建立評論點讚假資料 (已使用 create, 修改為 get_or_create 避免重複 - 針對 ManyToMany 關聯需調整)
comment_like1, created = CommentLike.objects.get_or_create(user_id=user4, comment_id=comment1) # 使用 get_or_create, 根據 user_id 和 comment_id 避免重複
comment_like2, created = CommentLike.objects.get_or_create(user_id=user9, comment_id=comment3) # 使用 get_or_create, 根據 user_id 和 comment_id 避免重複

print("已檢查或建立評論點讚假資料") # 修改訊息更精確

