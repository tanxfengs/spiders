# @Time    : 2020/3/31 14:38
# @Author  : LavÖz
# @File    : index.py.py
# @Software: PyCharm

import requests
headers = {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:74.0) Gecko/20100101 Firefox/74.0"
}

data = {
    "loginName": "13554575175",
    "passwor":"as1234",
    "isRemberMeLoginName": False,
    "NECaptchaValidate": False

}

session = requests.Session()
ret = session.post("https://www.adidas.com.cn/member/login.json",json=data, verify=False)
print(ret.text)