---
title: 在 Django 中使用 HTTPS
---

<div class="alert alert--warning">
  <strong>警告：</strong> 這是由chatGPT生成的內容，需要進行可行性的評估。
</div>

在 Django 中使用 HTTPS 主要涉及以下幾個步驟：

### 1. 獲取 SSL 憑證
首先，你需要獲取一個 SSL 憑證。你可以選擇以下幾種方式：

- **購買 SSL 憑證**：可以從各大憑證頒發機構（CA）購買。
- **免費 SSL 憑證**：例如使用 [Let's Encrypt](https://letsencrypt.org/)，提供免費的 SSL 憑證。

### 2. 配置 Web 伺服器
Django 自帶的開發伺服器並不支援 HTTPS，因此通常需要使用一個 Web 伺服器來處理 HTTPS 請求。以下是一些常見的 Web 伺服器配置：

#### 使用 Nginx 配置 HTTPS
如果你選擇使用 Nginx，可以按以下步驟進行配置：

1. **安裝 Nginx**：
   ```bash
   sudo apt update
   sudo apt install nginx
   ```

2. **配置 Nginx**：
   在 Nginx 的配置檔中添加 HTTPS 支援。通常位於 `/etc/nginx/sites-available/default` 或 `/etc/nginx/sites-available/your_domain`。

   ```nginx
   server {
       listen 80;
       server_name your_domain.com www.your_domain.com;

       # 301 重定向 HTTP 到 HTTPS
       return 301 https://$host$request_uri;
   }

   server {
       listen 443 ssl;
       server_name your_domain.com www.your_domain.com;

       ssl_certificate /path/to/your/fullchain.pem;  # Let's Encrypt 憑證
       ssl_certificate_key /path/to/your/privkey.pem;  # 憑證私鑰

       location / {
           proxy_pass http://localhost:8000;  # 假設 Django 在 8000 埠運行
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
       }
   }
   ```

3. **重啟 Nginx**：
   ```bash
   sudo systemctl restart nginx
   ```

### 3. 更新 Django 設定
在 Django 的 `settings.py` 中，為了確保 HTTPS 的安全性，可以進行以下配置：

```python
# 使用 HTTPS 的時候，Django 會將 `X-Forwarded-Proto` 標頭設置為 `https`
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')

# 確保使用 HTTPS 的請求使用安全的 cookies
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True
```

### 4. 測試 HTTPS
確保你的服務器正常運行，然後在瀏覽器中訪問你的域名以確認 HTTPS 是否正常工作。

這樣就完成了在 Django 中使用 HTTPS 的配置。如果有任何疑問或需要進一步的幫助，隨時告訴我！