# @Time    : 2020/3/31 15:26
# @Author  : LavÖz
# @File    : J_D.py
# @Software: PyCharm
import requests
import re

from spiders.C_utils import utils



session = requests.Session()

headers = {
    "user-agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36"
}



class JDLogin:
    def __init__(self):
        self.session_id = None
        self.JSESSIONID = None
        self.challenge = None # 验证码相关
        self.y = None #滑块起始y坐标
        self.track = None


    def get_session_id(self):
        url = "https://seq.jd.com/jseqf.html?bizId=passport_jd_com_login_pc&platform=js&version=1"
        ret = session.get(url, headers=headers).text
        session_id = re.search("_jdtdmap_sessionId=\"\d+\"", ret).group()
        self.session_id = utils.sub_quota(session_id)
        print(self.session_id)


    def get_Jession_id(self):
        url = "https://seq.jd.com/jseq.html"
        params= {
            "d": utils.getencpassword(session,"./jd_Login_d参数算法.js",f"let sessionId='{self.session_id}';"),
            "p": "",
            "loc": "https://passport.jd.com/new/login.aspx?ReturnUrl=https%3A%2F%2Fwww.jd.com%2F%3Fcu%3Dtrue%26utm_source%3Dclick.linktech.cn%26utm_medium%3Dtuiguang%26utm_campaign%3Dt_4_A100236995%26utm_term%3D1ae0b1841e80464db96bc88548f7b4b1"
        }

        ret = session.get(url,params=params, headers=headers).text
        print(ret)
        self.JSESSIONID = session.cookies.get("JSESSIONID", "")
        print(self.JSESSIONID)


    def get_slide_images(self):
        params = """
        appId: 1604ebb2287
        scene: login
        product: click-bind-suspend
        e: HLVHJHUYSX6QASSMRU4JTRZ74N7WWKC2VRZLCVD4YPB4TIL4ESN53MH5HBJ5UV6MGKMYIT26JWJXQZASCS4TR6ON3I
        lang: zh_CN"""
        params = utils.get_post_data(params)
        url = "https://iv.jd.com/slide/g.html"
        ret = session.get(url, headers=headers, params=params).json()
        img1 = utils.b64_to_bin(ret["bg"])
        img2 = utils.b64_to_bin(ret["patch"])
        self.challenge = ret["challenge"]
        # self.y = ret["y"]
        # print(wh1, wh2, self.challenge, self.y)
        distance = utils.get_distance(img2, img1)
        track = utils.get_JD_track(distance)
        print(f"开始的距离为{track[0][0]}  结束的位置为 {track[-1][0]}",)
        self.get_slideD(track)

    def get_slideD(self, track):
        jscode = f"let arr = {track};"
        ret = utils.getencpassword(session, "./滑块轨迹.js",jscode )
        self.track = ret


    def login(self):
        url = "https://iv.jd.com/slide/s.html"
        params = {
            "d": self.track,
            "c": self.challenge,
            "w": 278,
            "appId": "1604ebb2287",
            "product": "bind-suspend",
            "scene":"login",
            "e": "HLVHJHUYSX6QASSMRU4JTRZ74N7WWKC2VRZLCVD4YPB4TIL4ESN53MH5HBJ5UV6MGKMYIT26JWJXQZASCS4TR6ON3I",
            "s": self.session_id,
            "o": "18584858272",
            "lang": "zh_CN"
        }
        print(params)
        print(session.cookies)
        new_headers = headers.update({"Referer":"https://passport.jd.com/new/login.aspx?ReturnUrl=https%3A%2F%2Fwww.jd.com%2F",
                                      "Sec-Fetch-Dest": "script",
                                      "Sec-Fetch-Mode": "no-cors",
                                      "Sec-Fetch-Site": "same-site",
                                      "Pragma": "no-cache"

                                      })
        ret = session.get(url, params=params, headers=new_headers).json()
        print(ret)

if __name__ == '__main__':
    jd = JDLogin()
    jd.get_session_id()
    jd.get_Jession_id()
    jd.get_slide_images()
    jd.login()
