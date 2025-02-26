FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

FROM node:18-alpine AS server
# 建立新的伺服器階段，使用 Node.js 鏡像

WORKDIR /app

COPY --from=builder /app/.next ./.next
# 複製 .next 資料夾 (包含建置好的程式碼)
COPY --from=builder /app/node_modules ./node_modules
# 複製 production dependencies
COPY --from=builder /app/package*.json ./
# 複製 package.json 和 package-lock.json

#  如果你有 public 資料夾也需要複製 (如果你的 public 資料夾有靜態資源)
COPY --from=builder /app/public ./public

EXPOSE 3000
# Next.js 預設伺服器 Port 是 3000
CMD ["npm", "start"]
# 執行 Next.js 伺服器