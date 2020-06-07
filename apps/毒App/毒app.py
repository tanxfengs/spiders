# @Time    : 2020-05-13 12:37
# @Author  : LavÖz
# @File    : 毒app.py
# @Software: PyCharm

import requests

def get_headers(header_raw):
    """
    通过原生请求头获取请求头字典
    :param header_raw: {str} 浏览器请求头
    :return: {dict} headers
    """
    header_raw = header_raw.strip()  # 处理可能的空字符
    header_raw = header_raw.split("\n")  # 分割每行
    header_raw = [line.split(":", 1) for line in header_raw]  # 分割冒号
    header_raw = dict((k.strip(), v.strip()) for k, v in header_raw)  # 处理可能的空字符
    return header_raw


headers = """
duuuid: 54559570579cd282
duimei: 54559570579cd282
shumengid: DuBSDa25SP+6ScQyg4Emgnq4ogcAWE+1F8W1Zi+rF0uhmXnChSqDCoDl7QSjOXKrf3rpxq2OpjXmaxePp7qMl+Xw
duplatform: android
appId: duapp
duchannel: testFlight
duv: 4.38.1
duloginToken: 
dudeviceTrait: sm-j200g
timestamp: 1589345650618
shumeiid: 20200512212627ffa71bf8f8e390293aac3884566e550e01865792dd51979e
oaid: 
User-Agent: duapp/4.38.1(android;5.1.1)
X-Auth-Token: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiI1NDU1OTU3MDU3OWNkMjgyIiwic3ViIjoiNTQ1NTk1NzA1NzljZDI4MiIsImlhdCI6MTU4OTM0MTcwNCwiZXhwIjoxNjIwODc3NzA0LCJ1dWlkIjoiNTQ1NTk1NzA1NzljZDI4MiIsInVzZXJJZCI6MTc1NTY3NTA2LCJ1c2VyTmFtZSI6Ilx1NmI2M1x1NzZmNFx1OWVkMVx1OWVjNFx1ODExYVx1OGRiZXVEZiIsImlzR3Vlc3QiOnRydWV9.mwVgTr-JcEnwIMignZsI02msYjilg5Xcsf-9P0OUaGo2jxTv9Gw2bUKfimkPRbJExqA9xGkGo3ffP81B2sj7lHdwBHVDrkD_SgSLLUm0KnfBd-OwIjgprHg98DJC_xRLg-1hM_NdZG-mjOxO5l6YpkCfiITd6L8G5JXDJUi1mERratPyMMpKLGiZR2Hw1Ywss5eH2Glk5wdP_VglmMCpWHnu8LB5OZr3cv6NpjtUyXh18_8BvJEkgmPQXdDwmYF5zRADPYpCsGexNZwKBTu3CNyjIGZ73bXjN5fZYo8DRPS95LFLcoAxL-lrHU9CZEeTGy2UsYd_ghbU3RPxKVtSQw
isRoot: 0
emu: 1
isProxy: 1
Host: m.poizon.com
Connection: Keep-Alive
Accept-Encoding: gzip
"""




headers = get_headers(headers)
print(headers)
# lastIdlimit9loginTokenplatformandroidproductId78848showType0source0timestamp1589345650618uuid54559570579cd282v4.38.1
# 010110100010001010010010000011000111001011101010101000101110111010011010101101101010001000101100010110100010001010011010110011001111001011100010101000100100110010110010100010101011110010111100
# aes




res = requests.get("https://m.poizon.com//sns/v2/tag/spu-content-list?productId=78848&showType=0&source=0&lastId=&limit=9&newSign=8e83a58adb627e4939ee343167090a62" ,headers=headers, verify=False)
print(res.text)