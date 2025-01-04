# 使用官方 Python 映像
FROM python:3.10
EXPOSE 8000
# 设置工作目录
WORKDIR /backend

# 安装依赖
COPY requirements.txt ./
RUN pip3 install --no-cache-dir -r requirements.txt

# 复制 Django 项目代码
COPY . .

# 启动命令
CMD ["python","manage.py", "runserver", "0.0.0.0:8000"]
