# @Time    : 2020/4/6 13:27
# @Author  : LavÖz
# @File    : index.py
# @Software: PyCharm
import os
import re
import sys
import time

import requests
from jsonpath import jsonpath

cookies = {
    'install_id': '800081883964295',
    'ttreq': '1$6af74b7e317afbd6cd3f542c3bbe350b6e1e2fb1',
    'odin_tt': '41d03918377fea77d0c2d2735765f7808d7845a956680c7e778342bb5ea2a11dd7a4d70a6df3c55a302360888eb9c4f9070d282980fd34e3c66d3cf957c9c998',
    'qh[360]': '1',
}

headers = {
    'Host': 'aweme-hl.snssdk.com',
    #'x-ss-req-ticket': '1589202701961',
    #'x-gorgon': '0401a0a54001b31a9c62cf5636a12852d475a7041770adf9e175',
    #'x-khronos': '1589202701',
    'user-agent': 'okhttp/3.10.0.1',
}

root = "E:\Energy\PYTHON\spiders\pupputeer\spiders\抖音"

def GetFileName(fileDir):
    return os.listdir(fileDir)


def get_list(t=0):

    params = (
        ('user_id', '66598046050'),
        ('max_cursor', f"{t}"),
        ('count', '30'),
        #('retry_type', 'no_retry'),
        ('iid', '800081883964295'),
        ('device_id', '54520740301'),
        ('ac', 'wifis'), #瞎写
        ('channel', 'wandoujia1'),
        ('aid', '2329'),
        ('app_name', 'douyin_lite'),
        ('version_code', '263'), #瞎写
        ('version_name', '2.6.3'), #瞎写
        ('device_platform', 'android'),#瞎写
        #('ssmix', 'a'),
        ('device_type', 'sm-j200g'),#瞎写
        ('device_brand', 'samsung'),#瞎写
        ('language', 'zh'),#瞎写
        ('os_api', '12'),  #瞎写
        ('os_version', '5.1.2'), #瞎写
        #('uuid', '865166027629610'),
        #('openudid', '54559570579cd282'),
       # ('manifest_version_code', '262'),
       # ('resolution', '720*1280'),
       # ('dpi', '320'),
        #('update_version_code', '2620'),
       # ('_rticket', '1589202701959'),
        #('cdid', '84fc4cfa-f978-442d-80ad-d5304143c0f7'),
      #  ('ts', '1589202704'),
       # ('as', 'a11111111111111111111'),
       # ('cp', 'a000000000000000000000'),
       # ('mas', 'null'),
    )

    response = requests.get('https://aweme-hl.snssdk.com/aweme/v1/aweme/post/', headers=headers, params=params, verify=False).json()
    aweme_list = jsonpath(response, "$..aweme_list")[0]
    vheaders = {
        "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; Pixel 2 XL Build/OPD1.170816.004) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.162 Mobile Safari/537.36",
        "x-requested-with": "XMLHttpRequest"

    }

    for aweme in aweme_list:
        name = aweme.get("desc")
        filename = name+ ".mp4"
        if filename in GetFileName(root):
            print(filename, "已存在")
            continue
        url = jsonpath(aweme, "$..play_addr.url_list.0")[0]
        res = requests.get(url, headers=vheaders).content
        filename = filename.replace("\"","'")
        filename = re.sub(r'[-,$()#+&*]|\（|\（|/', "", filename)

        with open(rf"{filename}", "wb") as f:
            f.write(res)
        print(name, "保存成功!")
    t = response.get("max_cursor")
    get_list(t)




get_list()

