# @Time    : 2020/4/12 9:58
# @Author  : LavÖz
# @File    : index.py
# @Software: PyCharm
import json

import requests

session = requests.Session()

headers = {
    'authority': 'captcha.fengkongcloud.com',
    'pragma': 'no-cache',
    'cache-control': 'no-cache',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.92 Safari/537.36',
    'accept': '*/*',
    'sec-fetch-site': 'same-site',
    'sec-fetch-mode': 'no-cors',
    'sec-fetch-dest': 'script',
    'referer': 'https://www.fengkongcloud.com/account/login.html',
    'accept-language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
}




class ShumeiSlide:
    def __init__(self):
        pass

    def get_pre(self):
        params = (
            ('sdkver', '1.1.3'),
            ('lang', 'zh-cn'),
            ('rversion', '1.0.1'),
            ('channel', 'DEFAULT'),
            ('appId', 'default'),
            ('callback', 'sm_1586656349011'),
            ('organization', 'RlokQwRlVjUrTUlkIqOg'),
            ('model', 'slide'),
            ('data', '{}'),
        )
        response = session.get('https://captcha.fengkongcloud.com/ca/v1/register', headers=headers, params=params)
        json_data = response.text.split("(")[1].split(")")[0]
        data = json.loads(json_data)
        print(data)

if __name__ == '__main__':
    sm_login = ShumeiSlide()
    sm_login.get_pre()