// 名稱	資料型態	說明
// 討論課程編號 (discuss_id)	SERIAL INT	主鍵
// 討論標題 (discuss_topic)	VARCHAR(50)
// 討論內容 (discuss_text)	VARCHAR(50)
// 圖片網址	TEXT[]
// 評分分數 (rate)	INT
// 發布時間 (post_time)	TIMESTAMP
// 留言使用者 (discuss_user)	INT	外鍵，連接 user(user_id)

function TablePage(){
    const mockData = [
        {
            discuss_id: 1,
            discuss_topic: "test",
            discuss_text:"12345667",
            rate: 5,
            post_time: "2021-10-10",
        }
    ]

    const config = []

    return (
        <div>
            table page
        </div>
    )
}

export default TablePage;