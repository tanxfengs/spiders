import time

import jsonpath
import requests
from spiders.C_utils.utils import *

headers = {
    'authority': 'www.toutiao.com',
    'pragma': 'no-cache',
    'cache-control': 'no-cache',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36 Edg/83.0.478.44',
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'sec-fetch-site': 'none',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-user': '?1',
    'sec-fetch-dest': 'document',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
    #   'cookie': 'csrftoken=5c21e7f4ecdecdc9e97efa3f253fbd77; WEATHER_CITY=%E5%8C%97%E4%BA%AC; ttcid=4387cbeffbab4ecabe59b2761aa198bc19; SLARDAR_WEB_ID=a1aa0ff8-583e-49f6-86f8-752ebf87ce1e; s_v_web_id=verify_kb0i9bo6_IrxVONgd_mZap_4zMO_ArxP_81t7nWhJJKOk; tt_webid=6834403675705918983; tt_webid=6834403675705918983; tt_scid=DjmG633D0QwlGfti8Cy0O.Dvxn85RSG0ijttzItlehMm650TMC4zozpXSOhOB1yF3a31; __tasessionId=ol8vv0m3p1591269083105',
}


class ToutiaoSpider:
    def __init__(self, category):
        self.category = category
        self.t = int(time.time())
        self.session = requests.Session()

    def get_param(self,category):
        jscode = f"let time={self.t};let category = {category};"
        data = getencpassword(self.session, "./_signature.js", jscode, False)
        return data

    def get_list_url(self):
        data = self.get_param(self.category)
        _as = data["as"]
        _cp = data["cp"]
        _sign = data["sign"]
        params = {
            "utm_source": "toutiao",
            "category": self.category.replace("'",""),
            "widen": "1",
            "max_behot_time": self.t,
            "tadrequire": "true",
            "as": _as,
            "cp": _cp,
            "_signature": _sign
        }


        response = self.session.get('https://www.toutiao.com/api/pc/feed/', headers=headers, params=params).json()
        print(response)
        max_behot_time = jsonpath.jsonpath(response, "$..max_behot_time")
        if max_behot_time:
            self.t = max_behot_time[0]
            self.parse_next(params)

    def parse_next(self, param):
        #js = f"let as = '{param['as']}'; let cp = '{param['cp']}';"
        data = self.get_param(self.category)
        param["max_behot_time"] = self.t
        _sign = data["sign"]
        param["_signature"] = _sign
        response = self.session.get('https://www.toutiao.com/api/pc/feed/', headers=headers, params=param).json()
        print(response)
        max_behot_time = jsonpath.jsonpath(response, "$..max_behot_time")
        if max_behot_time:
            self.t = max_behot_time[0]
            self.parse_next(param)

    def start(self):
        self.get_list_url()



spider = ToutiaoSpider("'__all__'")
spider.start()
