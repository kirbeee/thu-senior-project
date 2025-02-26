import os
import django

# 設置 DJANGO_SETTINGS_MODULE 為你的設置模塊
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "thuHelper.settings")

# 初始化 Django
django.setup()


from bbs.models import Category, Board, Post, Comment, Tag, PostLike, CommentLike
from school_system.models import Course  # 假設 Course 模型在 school_system 應用程式中
from django.contrib.auth.models import User  # Django 內建使用者模型

# 假設使用者帳號名稱為 "moderator1", "moderator2", "admin1", "student1", "student2", "student3", "student4", "student5", "student6"
user1, created = User.objects.get_or_create(username='moderator1')
user2, created = User.objects.get_or_create(username='moderator2')
user3, created = User.objects.get_or_create(username='admin1')
user4, created = User.objects.get_or_create(username='student1')
user5, created = User.objects.get_or_create(username='student2')
user6, created = User.objects.get_or_create(username='student3')
user7, created = User.objects.get_or_create(username='student4')
user8, created = User.objects.get_or_create(username='student5')
user9, created = User.objects.get_or_create(username='student6')

print("已建立使用者假資料：")
print(user1, user2, user3, user4, user5, user6, user7, user8, user9)

user1 = User.objects.get(username='moderator1')

# 假設您要建立四門課程，並假設 Course 模型有名稱為 'name' 的欄位
course1 = Course.objects.create(name="資料結構與演算法", credits=3) #  加入 credits=3
course2 = Course.objects.create(name="微積分 (一)", credits=4)     #  加入 credits=4
course3 = Course.objects.create(name="學務處公告", credits=0)     #  學務處公告可能沒有學分，可以設為 0
course4 = Course.objects.create(name="通識課程", credits=2)     #  通識課程可以設定為 2 學分

#  請根據您的 Course 模型實際情況，以及您希望的假資料，設定合適的 credits 值
#  重要的是要提供一個值，避免 NULL 值
print("已建立課程假資料：")
print(course1, course2, course3, course4)

category1, created = Category.objects.get_or_create(  # 使用 get_or_create()
    name="課程討論",
    defaults={"description": "針對各門課程的討論區。", "slug": "courses"}
)
category2, created = Category.objects.get_or_create(  # 使用 get_or_create()
    name="校園生活",
    defaults={"description": "討論校園生活、活動、社團等。", "slug": "campus-life"}
)
category3, created = Category.objects.get_or_create(  # 使用 get_or_create()
    name="二手交易",
    defaults={"description": "提供學生二手物品交易的平台。", "slug": "marketplace"}
)

print("已建立分類假資料：")
print(category1, category2, category3)
print("已建立分類假資料：")
print(category1, category2, category3)
board1, created = Board.objects.get_or_create( # 使用 get_or_create()
    name="資料結構與演算法",
    defaults={ # 將其他參數放入 defaults
        "description": "討論資料結構與演算法課程的相關問題。",
        "board_type": 'forum',
        "course_id": course1,
        "category": category1,
        "is_private": False
    }
)
board1.moderators.set([user1, user2]) # 設定版主 (moderators 設定在 get_or_create 之後)


board2, created = Board.objects.get_or_create( # 使用 get_or_create()
    name="微積分 (一)",
    defaults={ # 將其他參數放入 defaults
        "description": "討論微積分（一）課程的習題和觀念。",
        "board_type": 'qna',
        "course_id": course2,
        "category": category1,
        "is_private": False
    }
)

board3, created = Board.objects.get_or_create( # 使用 get_or_create()
    name="校園活動公告",
    defaults={ # 將其他參數放入 defaults
        "description": "發布校園活動相關公告。",
        "board_type": 'announcement',
        "category": category2,
        "is_private": False,
        "course_id": course3 #  確保 board3 有 course_id
    }
)
board3.moderators.set([user3]) # 設定版主

board4, created = Board.objects.get_or_create( # 使用 get_or_create()
    name="[徵]  二手教科書交換",
    defaults={ # 將其他參數放入 defaults
        "description": "大家來交換或出售二手教科書吧！",
        "board_type": 'forum',
        "category": category3,
        "is_private": False,
        "course_id": course4 # 確保 board4 有 course_id
    }
)

print("已建立討論區假資料：")
print(board1, board2, board3, board4)

tag1 = Tag.objects.create(name="考古題", slug="exam-questions", description="包含考古題相關資訊的貼文。")
tag2 = Tag.objects.create(name="作業問題", slug="homework-help", description="討論作業問題的貼文。")
tag3 = Tag.objects.create(name="活動公告", slug="event-announcement", description="校園活動公告貼文。")

print("已建立標籤假資料：")
print(tag1, tag2, tag3)

post1 = Post.objects.create(
    title="資料結構期中考考古題分享 (2023 Fall)",
    content="大家好，這裡分享一下我整理的 2023 年秋季學期資料結構期中考考古題，希望能幫助到大家！ [檔案連結]  祝大家考試順利！",
    post_type='discussion', user_id=user4, board_id=board1, is_pinned=True
)
post1.tags.set([tag1]) # 設定標籤

post2 = Post.objects.create(
    title="微積分(一)  Ch3. 習題 3.5  求解",
    content="請問各位，微積分(一)  Ch3. 習題 3.5  這題要怎麼解啊？我卡關很久了...  求指點！",
    post_type='question', user_id=user5, board_id=board2
)
post2.tags.set([tag2]) # 設定標籤

post3 = Post.objects.create(
    title="[公告]  本週五校園演唱會活動",
    content="學務處公告：本週五晚上七點將在操場舉辦校園演唱會，歡迎各位同學踴躍參加！  詳細資訊請參考海報 [海報圖片連結]。",
    post_type='announcement', user_id=user3, board_id=board3
)
post3.tags.set([tag3]) # 設定標籤

post4 = Post.objects.create(
    title="徵求二手線性代數課本 (作者: Lay)",
    content="如題，徵求二手線性代數課本，作者是 Lay 的書，第七版或更新版本皆可，書況良好，價格可議，意者站內信！",
    post_type='discussion', user_id=user6, board_id=board4
)

print("已建立貼文假資料：")
print(post1, post2, post3, post4)

comment1 = Comment.objects.create(
    content="感謝分享考古題！對考試很有幫助！", post_id=post1, user_id=user7
)

comment2 = Comment.objects.create(
    content="請問考古題有答案嗎？", post_id=post1, user_id=user8
)

comment3 = Comment.objects.create(
    content="回覆樓上，考古題通常沒有標準答案，要自己練習喔！", post_id=post1, user_id=user4, parent_comment=comment2
) # 設定父評論，建立巢狀回覆

comment4 = Comment.objects.create(
    content="Ch3.5  這題應該是用 XX 定理，你試試看。", post_id=post2, user_id=user9
)

print("已建立評論假資料：")
print(comment1, comment2, comment3, comment4)

PostLike.objects.create(user_id=user7, post_id=post1) # student4 讚了 post1
PostLike.objects.create(user_id=user8, post_id=post1) # student5 讚了 post1
PostLike.objects.create(user_id=user9, post_id=post2) # student6 讚了 post2

print("已建立貼文點讚假資料")

CommentLike.objects.create(user_id=user4, comment_id=comment1) # student1 讚了 comment1
CommentLike.objects.create(user_id=user9, comment_id=comment3) # student6 讚了 comment3

print("已建立評論點讚假資料")
