import os
from dotenv import load_dotenv

load_dotenv()  # 載入環境變數

DATABASE_PASSWORD = os.getenv('DATABASE_PASSWORD')
