// index.js
const { Pool } = require('pg');

// 創建連接池實例
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'senior-project',
  password: 'Kmsh710023',
  port: 5432,
});

// 連接成功事件
pool.on('connect', () => {
  console.log('已連接到 PostgreSQL');
});

// 連接錯誤事件
pool.on('error', (err) => {
  console.error('資料庫錯誤:', err);
});

// 測試連接
const testConnection = async () => {
  console.log('正在測試資料庫連接...'); // 確認是否執行到這一步
  let client;
  try {
    client = await pool.connect(); // 獲取資料庫連接
    console.log('成功獲取資料庫連接');
    const result = await client.query('SELECT NOW()'); // 查詢當前時間
    console.log('資料庫連接成功:', result.rows[0]); // 打印當前時間
  } catch (err) {
    console.error('資料庫連接錯誤:', err.message); // 打印錯誤信息
  } finally {
    if (client) {
      client.release(); // 釋放連接
    }
  }
};

// 測試連接
testConnection();

// 導出連接池
module.exports = pool;
