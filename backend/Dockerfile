FROM python:3.10-slim-buster

WORKDIR /app

COPY requirements.txt ./
RUN pip install -r requirements.txt

COPY . .

# Collect static files (optional, if you want to serve static files via Nginx)
# RUN python manage.py collectstatic --noinput
CMD ["gunicorn", "thuHelper.wsgi", "-b", "0.0.0.0:8000"]
# 啟動 Django 伺服器 (需根據你的專案調整)