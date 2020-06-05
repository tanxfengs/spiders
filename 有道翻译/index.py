import json

import requests
from spiders.C_utils.utils import *


cookies = {
    'OUTFOX_SEARCH_USER_ID_NCOO': '1449700775.3749712',
    'OUTFOX_SEARCH_USER_ID': '-2034210018@112.22.127.253',
    '___rl__test__cookies': '1586687746015',
}

headers = {
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Cache-Control': 'no-cache',
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'X-Requested-With': 'XMLHttpRequest',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.92 Safari/537.36',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Origin': 'http://fanyi.youdao.com',
    'Referer': 'http://fanyi.youdao.com/',
    'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
}

params = (
    ('smartresult', ['dict', 'rule']),
)

item = getencpassword(requests, "./salt_sign.js", "let word = '中文';")
# item = json.loads(result)

data = {
  'i': '中文',
  'from': 'AUTO',
  'to': 'AUTO',
  'smartresult': 'dict',
  'client': 'fanyideskweb',
  'salt': item["salt"],
  'sign': item["sign"],
  'ts': item["ts"],
  'bv': item["bv"],
  'doctype': 'json',
  'version': '2.1',
  'keyfrom': 'fanyi.web',
  'action': 'FY_BY_CLICKBUTTION'
}

response = requests.post('http://fanyi.youdao.com/translate_o', headers=headers, params=params, cookies=cookies, data=data, verify=False)
print(response.json())
#NB. Original query string below. It seems impossible to parse and
#reproduce query strings 100% accurately so the one below is given
#in case the reproduced version is not "correct".
# response = requests.post('http://fanyi.youdao.com/translate_o?smartresult=dict&smartresult=rule', headers=headers, cookies=cookies, data=data, verify=False)
