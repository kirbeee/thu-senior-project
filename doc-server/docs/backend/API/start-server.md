---
title: 啟動 Swagger 伺服器
position: 1
---

# 啟動 Swagger 伺服器

在開始使用 Swagger 進行 API 文件查看之前，請按照以下步驟操作：

1. **啟動 Django 後端**:
   確保您的 Django 後端服務正在運行。在專案根目錄下，使用以下命令啟動伺服器：

   ```bash
   python manage.py runserver
   ```

2. **訪問 Swagger 文件**:
   一旦 Django 伺服器啟動成功，打開您的瀏覽器並訪問以下地址：

   ```
   http://localhost:8000/swagger
   ```

   這將帶您到 Swagger UI，您可以在這裡查看和測試 API 文件。

3. **查看 API 文件**:
   在 Swagger UI 中，您將看到可用的 API 端點和詳細的使用說明。您可以直接在頁面上嘗試調用這些 API，查看請求和回應範例。

### 注意事項
- 確保您的 Django 專案已正確配置 Swagger。
- 如果在訪問過程中遇到任何問題，請檢查 Django 的控制台輸出，以獲取可能的錯誤信息。
