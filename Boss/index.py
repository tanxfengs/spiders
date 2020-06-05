# @Time    : 2020/4/6 19:18
# @Author  : LavÖz
# @File    : index.py
# @Software: PyCharm
import re

import requests
from requests.utils import urlparse, unquote, quote
from requests.utils import cookiejar_from_dict
from spiders.C_utils.utils import *

session = requests.Session()

headers = {
    "user-agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.162 Safari/537.36",

}


class BossZP:
    def __init__(self, city, query):
        self.city = city
        self.query = query

    def get_token(self):
        url = "https://www.zhipin.com/job_detail"
        params = {
            "query": self.query,
            "city": self.city,
            "position": ""
        }

        ret = session.get(url, headers=headers, params=params, allow_redirects=False)
        print(ret.status_code)
        print(ret.content.decode())
        print(ret.headers)
        location = ret.headers.get("location")
        seed = unquote(location)
        path = urlparse(seed).query
        params = path.split("&")
        print(params)
        item = {}
        for p in params:
            p_list = p.split("=")
            item[p_list[0]] = p_list[1]

        print(item)
        self.seed = item.get('seed')+"="
        self.ts = item.get('ts')
        self.name = item.get('name')
        jscode = f"""let seed = "{self.seed}", ts = {self.ts};"""
        ret = getencpassword(session,"./ABC.z.js", jscode)
        print(ret)
        o_cookie = {"__zp_stoken__": quote(ret),
                  #"_l":quote(f"""
                  
                 # l=/job_detail/?query=爬虫&city=101200100&industry=&position=&r=https://www.zhipin.com/web/common/security-check.html?seed={self.seed}&name={self.name}&ts={self.ts}&callbackUrl=/job_detail/?query=爬虫&city=101200100&industry=&position=&srcReferer=https://www.zhipin.com/web/common/security-check.html?seed={self.seed}&name={self.name}&ts={self.ts}&callbackUrl=/job_detail/?query=爬虫&city=101200100&industry=&position=&srcReferer=https://www.zhipin.com/web/common/security-check.html?seed={self.seed}&name={self.name}&ts={self.ts}&callbackUrl=/job_detail/?query=爬虫&city={self.city}&industry=&position=&srcReferer=https://www.zhipin.com/wuhan/&friend_source=0
                  #"""),
                    "_a": "77323247.1586174956..1586174956.1.1.1.1",
                  "_c": f"{self.ts}",
                  "_g":"-",
                  #"Hm_lvt_194df3105ad7148dcf2b98a91b5e727a":"1586159333,1586160680,1586163030,1586163673",
                  #"Hm_lpvt_194df3105ad7148dcf2b98a91b5e727a":"1586168065"
                  }
        cookie = cookiejar_from_dict(o_cookie)
        session.cookies = cookie
        url = "https://www.zhipin.com/" + location
        ret= session.get(url, headers=headers.update({"referer": f"https://www.zhipin.com/job_detail/?query={self.query}&city=100010000&industry=&position="}))
        print(ret)


    def getData(self):
        self.get_token()
        print(session.cookies)
        url = "https://www.zhipin.com/job_detail"
        params = {
            "query": self.query,
            "city": self.city,
            "position": ""
        }

        new_headers = headers.update({
            "referer": quote(f"""
            
https://www.zhipin.com/web/common/security-check.html?seed={self.seed}&name=e40ffaca&ts={self.ts}&callbackUrl=/job_detail/?query=爬虫&city=101200100&industry=&position=&srcReferer=https://www.zhipin.com/web/common/security-check.html?seed={self.seed}&name=e40ffaca&ts={self.ts}&callbackUrl=/job_detail/?query=爬虫&city=101200100&industry=&position=&srcReferer=https://www.zhipin.com/web/common/security-check.html?seed{self.seed}&name=e40ffaca&ts={self.ts}&callbackUrl=/job_detail/?query=爬虫&city=101200100&industry=&position=&srcReferer=https://www.zhipin.com/web/common/security-check.html?seed={self.seed}=&name=e40ffaca&ts={self.ts}&callbackUrl=/job_detail/?query=爬虫&city=101200100&industry=&position=&srcReferer=https://www.zhipin.com/web/common/security-check.html?seed={self.seed}=&name=e40ffaca&ts={self.ts}&callbackUrl=/job_detail/?query=%E7%88%AC%E8%99%AB&city=101200100&industry=&position=&srcReferer=https://www.zhipin.com/wuhan/
            """)
        })

        ret = session.get(url, headers=new_headers, params=params).content.decode()
        print(ret)

if __name__ == '__main__':
    zp = BossZP("101200100", "%E7%88%AC%E8%99%AB")
    zp.getData()