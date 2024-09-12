graph TD
  
    A[主畫面] -->|進入系統後主畫面顯示控制板| B[控制板]
    B -->|點擊登入後跳轉登入頁面| C1[登入系統]
    B -->|點擊課程表查看所有可選課程| C2[課程表]
    B -->|點擊開課明細查看課程的詳細資料| C3[開課明細]

   
    C1 -->|輸入帳號密碼後登入成功| D1[登入帳號]
    D1 -->|登入成功，進入課程表| E1[課程表頁面]
    
    C2 -->|顯示所有課程: 課程名稱, 時間, 老師| D2[課程列表]
    D2 -->|選擇想要的課程| E2[選取課程]
    E2 -->|將選定課程加入到我的課表中| F2[加入我的課表]
    F2 -->|查看自己選的課程安排| G2[顯示我的課表]
    G2 -->|按時間顯示選定課程的安排| H2[按時間顯示課程]

    C3 -->|顯示課程的詳細信息如老師, 學分等| D3[開課明細內容]
    D3 -->|查看課程詳細內容| E3[課程細節]