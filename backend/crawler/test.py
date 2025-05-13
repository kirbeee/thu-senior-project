import requests
from bs4 import BeautifulSoup
import csv

ACADEMIC_YEAR = "113"
SEMESTER = "2"
BASE_URL = "https://course.thu.edu.tw/view/"
TABLE = ["課碼","系所", "課程標題", "授課教師", "課程類型", "學分數", "上課地點","上課時間","選課方法","授課方法","課程連結", "課程概述","選課狀況-名額","選課狀況-選上人數","選課狀況-剩餘名額","選課狀況-已登記"]

def get_web_data(course_number):
    try:
        response = requests.get(BASE_URL+ACADEMIC_YEAR+'/'+SEMESTER+'/'+course_number)
        response.raise_for_status()
        return BeautifulSoup(response.content, 'html.parser')
    except requests.exceptions.RequestException as e:
        print("網路請求錯誤:", e)
    except AttributeError:
        print("找不到網頁標題")
def get_teacher_name(soup):
    teacher_div = soup.find('div', class_='three columns')
    if teacher_div:
        teacher_link = teacher_div.find('a')
        if teacher_link:
            teacher_name = teacher_link.text.strip()
            return teacher_name
    return "找不到授課教師"
def get_basic_data_info(soup,course_info):
    basic_data_div = soup.find('div', class_='column one-third')
    if basic_data_div:
        basic_data_paragraph = basic_data_div.find('p')
        if basic_data_paragraph:
            basic_data_text = basic_data_paragraph.text.strip()
            data_lines = basic_data_text.split('<br>')
            for line in data_lines:
                cleaned_line = line.strip().replace('\n','')
                if cleaned_line.startswith("必修課") or cleaned_line.startswith("選修課"):
                    course_type = cleaned_line[:3]
                    course_info["課程類型"] = course_type
                    cleaned_line = cleaned_line.replace("必修課，","").replace("選修課，","")
                cleaned_line = cleaned_line.split()
                diction = {}
                for pair in cleaned_line:
                    if "：" in pair:
                        split_result = pair.split("：", 1)
                        if len(split_result) == 2:
                            key, value = split_result
                            diction[key] = value
                if '上課時間' in diction:
                    course_info['上課時間'] = diction['上課時間'][:diction['上課時間'].find('[')]
                    if '[' in diction['上課時間'] and ']' in diction['上課時間']:
                        course_info['上課地點'] = diction['上課時間'][
                                                  diction['上課時間'].find('[') + 1:diction['上課時間'].find(']')]
                    else:
                        course_info['上課地點'] = "地點資訊不完整"  # 或者您可以將其設置為 None 或空字串
                if '學分數' in diction:
                    course_info['學分數'] = diction['學分數']
    return course_info
def get_people_info(soup,course_info):
    eight_columns_div = soup.find_all('div', class_='eight columns')
    if len(eight_columns_div) > 1:
        eight_columns_div = eight_columns_div[1]
        p_tag = eight_columns_div.select_one('p')
        if p_tag:
            text_content = p_tag.text.strip()
            if "本課程名額為" in text_content and "人，已有" in text_content and "人選讀，尚餘名額" in text_content:
                parts = text_content.split("，")
                try:
                    capacity = parts[0].split("為")[1].split("人")[0]
                    enrolled = parts[1].split("已有")[1].split("人")[0]
                    remaining = parts[2].split("名額")[1].split("人")[0].replace("人。", "") # 去除句尾的 "人。"
                    course_info["選課狀況-名額"] = capacity
                    course_info["選課狀況-選上人數"] = enrolled
                    course_info["選課狀況-剩餘名額"] = remaining
                except IndexError:
                    print("解析選課資訊時發生錯誤")
        else:
            print("找不到 <p> 標籤")
    else:
        print("找不到 class 為 'eight columns' 的 <div> 標籤")
    return course_info
def get_deparment_info(soup):
    a_tag = soup.find('a', class_='last_bc')
    if a_tag:
        span_tag = a_tag.find('span')
        if span_tag:
            depatment = span_tag.text
            return depatment
        else:
            print("找不到 <span> 標籤")
    else:
        print("找不到具有 class 'last_bc' 的 <a> 標籤")
    return None
def get_data(course_number):
    course_info = dict.fromkeys(TABLE)
    try:
        soup = get_web_data(course_number)

        course_info["課碼"] = course_number
        course_info["課程連結"] = BASE_URL+ACADEMIC_YEAR+'/'+SEMESTER+'/'+course_number
        course_info["課程標題"] = soup.title.string
        course_info["授課教師"] = get_teacher_name(soup)
        course_info = get_basic_data_info(soup,course_info)
        course_info = get_people_info(soup,course_info)
        course_info['系所'] = get_deparment_info(soup)

        description_div = soup.find('div', class_='thirteen columns')
        if description_div:
            description_paragraph = description_div.find('p')
            if description_paragraph:
                description_text = description_paragraph.text.strip()
                course_info["課程概述"] = description_text
        return course_info
    except requests.exceptions.RequestException as e:
        print("網路請求錯誤:", e)
    except AttributeError:
        print("資料不全")
    return course_info
def save_to_csv(course_data_list, filename="course_data.csv"):
    with open(filename, 'w', newline='', encoding='utf-8-sig') as csvfile:
        fieldnames = TABLE
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()
        for data in course_data_list:
            writer.writerow(data)

if __name__ == '__main__':
    all_course_data = []
    for course in range(3001, 3005):
        print('正在處理第', course, '筆資料')
        course_data = get_data(str(course))
        all_course_data.append(course_data)
    save_to_csv(all_course_data)
    print("課程資料已儲存至 course_data.csv")