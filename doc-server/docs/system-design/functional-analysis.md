# functional-analysis

## 前言
我們目標做出一個開源的課程論壇系統，目前現有的系統有CrossLink
(前身為台科大選課模擬系統，後來擴展成三校的選課模擬系統，並加上社群的功能)和
歐趴糖，將根據現有功能及能改善的內容，進行分析。

以下我們將針對CrossLink及歐趴糖進行分析。

## 功能分析
### Crosslink
1. **選課模擬**
    - 需為三校(國立臺灣大學、台灣科技大學、師範大學)學生才可進行選課模擬，且認證有次數限制
2. **課程查詢**
    - 可以透過學期、學校、課程代碼，或者課名及教師名快速搜尋該課程
    - 需要登入才能選修該課程
    - 點擊課程名稱超連結即可查看課程資料的細節，或前往課程網站查看課程大綱
3. **詢問課程**
    - 可透過課名或教師名快速搜尋是否有相同的提問
	- 有列出觸及和解答數量
	- 如需查看詳細問答內容需登入Facebook
	- 頁面設計類似Mobile01
4. **找同學**
	- 可透過課名或教師名快速搜尋是否有相同的提問
	- 有列出觸及和解答數量
	- 如需查看詳細問答內容需登入Facebook
	- 頁面設計類似Mobile01

#### 觀察到的點
- 目前使用者雖有25435人，但詢問課程的觸及和解答的數量都不高
- 如需進行選課模擬需為三校(臺大、臺科大、臺師大)的學生
- 課程查詢中部分課程未顯示講師與時間
- 課程查詢中的修課人數也無更新(顯示0)

### 歐趴糖
1. **首頁**
    - 可分為全部、課程評價、考古題這三大類，作為搜尋依據
	- 可以收藏和分享該課程評價文章
	- 課程評價是以學生角度出發

2. **校園新聞**
    - 各學校的官方新聞
3. **最新公告**
    - 分成人才招募、校園活動、系列活動、重要公告和系統公告
4. **精選文章**
	- 不只有課程評價，更包含了有關大學生活的指南，或者各大學的精選選課懶人包
    - 有Hashtag幫助需要者快速找到想看的內容


**觀察到的點**
- 不論從課程評價或是考古題，搜尋結果並沒有完全依照關鍵字做排序(以東海大學為例) 推測是因為不夠普遍
- 課程評價中的每個課程的詳細資料排版太窄，不容易清楚的看到想看的內容
- 透過Hashtag按鈕才能得到更準確的搜尋結果
