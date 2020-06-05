# @Time    : 2020/4/12 12:35
# @Author  : LavÖz
# @File    : kuwo.py
# @Software: PyCharm
import time
import requests
from requests.utils import cookiejar_from_dict, unquote
from spiders.C_utils.utils import *

session = requests.Session()

csrf = "5SFG3LST86Y"
cookie = f"_ga=GA1.2.87011031.1586664819; _gid=GA1.2.1609431915.1586664819; Hm_lvt_cdb524f42f0ce19b169a8071123a4797=1586657335; Hm_lpvt_cdb524f42f0ce19b169a8071123a4797=1586664819; _gat=1; kw_token={csrf}"




class KuwoMusic:
    _instance = None

    def __new__(cls, *args, **kwargs):
        if cls._instance is None:
            # 继承父类cls
            # cls instance 就是生成的实例对象, 如果有就返回这个对象, 没有就生成这个对象
            cls._instance = super().__new__(cls)
        return cls._instance

    def __init__(self):
        global cookie
        cookie = cookie_string_to_dict(cookie)
        cookie = cookiejar_from_dict(cookie)
        session.cookies = cookie
        self.search_key = "%E4%BA%94%E6%9C%88%E5%A4%A9",
        self.reqId = "96a2fab0-7c76-11ea-85e5-0791f76434f6"
        self.pn = 1
        self.rn = 30

        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.92 Safari/537.36',
            'csrf': csrf,
            'Referer': f'http://www.kuwo.cn/search/list?key={self.search_key}'
        }

    def get_rid(self):
        url = "http://www.kuwo.cn/api/www/search/searchMusicBykeyWord"
        params = {
            "key": "五月天",
            "pn": "1",
            "rn": "30",
            "reqId": self.reqId
        }
        url = f"http://www.kuwo.cn/api/www/search/searchMusicBykeyWord?key=五月天&reqId={self.reqId}&pn={self.pn}&rn={self.rn}"
        ret = session.get(url,  headers=self.headers).json()
        # rids = list(map( lambda x: x["rid"], ret["data"]["list"]))
        item_list = []
        for _ in ret["data"]["list"]:
            item = {}
            item["rid"] = _["rid"]
            item["name"] = unquote(_["name"])
            item_list.append(item)
        return item_list


    def get_play_url(self, item):
        rid = item["rid"]
        url = f"http://www.kuwo.cn/url?format=mp3&rid={rid}&response=url&type=convert_url3&br=128kmp3&from=web&t=1586665478384&reqId=85ab8611-7c75-11ea-85e5-0791f76434f6"
        ret = session.get(url, headers=self.headers).json()
        item.update({"url": ret["url"]})
        return item

    def main(self):
        rids = self.get_rid()
        for rid in rids:
            play_url = self.get_play_url(rid)
            print(play_url)




if __name__ == '__main__':
    kw = KuwoMusic()
    # kw.get_rid()
    # kw.get_play_url("3622015")
    kw.main()