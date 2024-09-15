import pkg from 'pg';
import keys from '../config/dev.js';

const { Pool } = pkg;

const pool = new Pool({
  user: keys.databases.user,
  host: keys.databases.host,
  database: keys.databases.database,
  password: keys.databases.password,
  port: keys.databases.port,
});

pool.on('connect', () => console.log('已連接到 PostgreSQL'));

pool.on('error', (err) => console.error('資料庫錯誤:', err));

const testConnection = async () => {
  console.log('正在測試資料庫連接...');
  let client;

  try {
    client = await pool.connect();
    console.log('成功獲取資料庫連接');

    const { rows } = await client.query('SELECT NOW()');
    console.log('資料庫連接成功:', rows[0]);
  } catch (err) {
    console.error('資料庫連接錯誤:', err.message);
  } finally {
    client?.release(); // Optional chaining to release client if it exists
  }
};

testConnection();

export default pool;
