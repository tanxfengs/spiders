# @Time    : 2020-05-03 17:26
# @Author  : LavÖz
# @File    : index.py
# @Software: PyCharm
import jsonpath
import requests
from spiders.C_utils.utils import *

CSRF= ""
artist = ""

headers = {
    'Host': 'www.kuwo.cn',
    'Cache-Control': 'max-age=0',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.7 Safari/537.36',
    #'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
}

session = requests.Session()

def get_cookie():
    response = session.get('http://www.kuwo.cn', headers=headers)
    print(response.headers)
    print(response.cookies)
    global CSRF
    CSRF = response.cookies.get("kw_token")


def get_reqId():
    ret = getencpassword(session, "./req_id.js", "", False)
    print(ret)
    return ret


def get_music_list(name):


    headers = {
        'Connection': 'keep-alive',
        'Accept': 'application/json, text/plain, */*',
        'csrf': f'{session.cookies.get("kw_token")}',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.7 Safari/537.36',
        'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
        "Referer": "http://www.kuwo.cn/search/list?key=%E5%91%A8%E6%9D%B0%E4%BC%A6"
    }

    params = (
        ('key', f'{name}'),
        ('pn', '1'),
        ('rn', '5'),
        ('reqId', f'{get_reqId()}'),
    )

    response = session.get('http://www.kuwo.cn/api/www/search/searchMusicBykeyWord', headers=headers, params=params, verify=False).json()
    rid_list = jsonpath.jsonpath(response, "$..rid")
    name_list = jsonpath.jsonpath(response, "$..name")

    for index, rid in enumerate(rid_list):
        get_play_url(rid, name_list[index])


def get_play_url(rid, name):


    headers = {
        'Connection': 'keep-alive',
        'Accept': 'application/json, text/plain, */*',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.7 Safari/537.36',
        'Referer': 'http://www.kuwo.cn/search/list?key=%E4%BA%94%E6%9C%88%E5%A4%A9',
        'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
    }

    params = (
        ('format', 'mp3'),
        ('rid', f'{rid}'),
        ('response', 'url'),
        ('type', 'convert_url3'),
        ('br', '128kmp3'),
        ('from', 'web'),
        ('t', f'{int(time.time() * 1000)}'),
        ('reqId', f'{get_reqId()}'),
    )

    response = session.get('http://www.kuwo.cn/url', headers=headers, params=params, verify=False).json()
    print("="*100)
    print("音乐播放地址为: ")
    result = f"[*] [{artist}-{name}] {response.get('url')}"
    with open("./music.txt", "a", encoding="utf8") as f:
        f.write(result + "\n\t")
    print(result)
    print("="*100)



def run():
    get_cookie()
    while True:
        global artist
        artist = input("请输入要听的歌曲")
        if artist == "0":
            return
        get_music_list(artist)

run()