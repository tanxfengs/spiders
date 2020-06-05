# @Time    : 2020/4/1 14:23
# @Author  : LavÖz
# @File    : index.py
# @Software: PyCharm
import json
import re

from spiders.C_utils.utils import *
import requests

session = requests.Session()

headers = {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:74.0) Gecko/20100101 Firefox/74.0"
}

def ease_out_quad(x):
    return 1 - (1 - x) * (1 - x)


class TencentSlide:
    """
    起点
    """

    def __init__(self):
        self.ua = "TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NDsgcnY6NzQuMCkgR2Vja28vMjAxMDAxMDEgRmlyZWZveC83NC4w"
        #self.aid = "549000912"
        self.aid = "2100049389" # 可过
        #self.aid = "1600000718"
        #self.aid = "1256832851" #豆瓣
        #self.aid = "2005597573"
        self.sess = None
        self.sid = None
        self.ans = None
        # 获取初识参数
        self.get_pre()

    def get_pre(self):
        url = "https://ssl.captcha.qq.com/cap_union_prehandle"
        params = {
            "aid": self.aid,
            "protocol": "https",
            "accver": "1",
            "showtype": "popup",
            "ua": self.ua,
            "noheader": "1",
            "fb": "1",
            "enableDarkMode": "0",
            "grayscale": "1",
            "clientype": "2",
            "cap_cd": "",
            "subsid": 1
        }

        ret = session.get(url, headers=headers, params=params).text[1:-1]
        ret = json.loads(ret)
        self.sess = ret.get("sess", "")
        self.sid = ret.get("sid", "")

    def get_images(self):
        url = "https://ssl.captcha.qq.com/cap_union_new_getsig"

        data = {
            'aid': self.aid,
            'protocol': 'https',
            'accver': '1',
            'showtype': 'popup',
            'ua': self.ua,
            'noheader': '1',
            'fb': '1',
            'enableDarkMode': '0',
            'grayscale': '1',
            'clientype': '2',
            'subsid': '2',
            'sess': self.sess,
            'fwidth': '0',
            'sid': self.sid,
            'forcestyle': 'undefined',
            'wxLang': '',
            'tcScale': '1',
            'uid': '',
            'cap_cd': '',
            'rnd': '929795',
            'TCapIframeLoadTime': 'undefined',
            'prehandleLoadTime': '73',
            'createIframeStart': '1586762662897',
            'rand': '64211224'
        }
        ret = session.post(url, headers=headers, data=data).json()
        #print(ret)
        self.vsig = ret.get("vsig", "")
        img1_url = ret.get("cdnPic1")
        img1_ur2 = ret.get("cdnPic2")
        params = {
            "vsig": self.vsig,
            "sess": self.sess,
            "ua": self.ua,
            "sid": self.sid,
            "aid": self.aid
        }
        img1 = session.get(img1_url, headers=headers, params=params).content
        img2 = session.get(img1_ur2, headers=headers, params=params).content
        distance = get_distance(img2, img1)
        return distance

    def get_ans(self, distance):
        """
        坐标
        :return:
        """
        url = "https://ssl.captcha.qq.com/cap_union_new_show"
        params = {"aid": self.aid,
                  "protocol": "https",
                  "accver": "1",
                  "showtype": "popup",
                  "ua": self.ua,
                  "noheader": "1", "fb": "1", "enableDarkMode": "0",
                  "ptcz": "c261b1a9c2a8e67c66f628891cd1b63a9967fbf3d84ed0dd9245892596b58853",
                  "fpinfo": "fpsig=11000658691E7C49C8AD6E1A74540EDE834C8E8523A98ABDC40FC42EF19004B439EE0D827CB4BE4861A9F9705E6C81DC7609",
                  "grayscale": "1", "clientype": "2", "subsid": "2",
                  "sess": self.sess,
                  "fwidth": "0",
                  "sid": self.sid,
                  "forcestyle": "undefined",
                  "wxLang": "",
                  "tcScale": "1",
                  "uid": "", "cap_cd": "",
                  "rnd": str(random.randint(10000, 99999)),
                  "TCapIframeLoadTime": "undefined",
                  "prehandleLoadTime": "207", "createIframeStart": "1585733856782"}

        ret = session.get(url, headers=headers, params=params).text
        # 'vsig:"c01p8T => c01p8T
        vsig = re.search("vsig:\"([0-9a-zA-Z\*\_\-])+\"", ret).group()
        self.sig = sub_quota(vsig)
        spt = re.search("spt:\"(\d+)\"", ret).group()
        # 高
        height = sub_quota(spt)
        websig = re.search("websig:\"([0-9a-f]{128})\"", ret).group()
        self.websig = sub_quota(websig)

        collect = re.search("collectdata:\"([a-z]{6})\"", ret).group()
        self.collect = sub_quota(collect)
        print("collect: ", self.collect)
        ans = re.search("&quot;ans&quot;:&quot;([0-9a-f]{32})&quot;", ret).group().split("&quot;")[-2]
        M = re.search("&quot;M&quot;:&quot;(\d+)&quot;", ret).group()
        M = M.split("&quot;")[-2]
        rand_str = re.search("&quot;randstr&quot;:&quot;(.{4})&quot;", ret).group().split("&quot;")[-2]
        print("rand_str:", rand_str)
        self.cdata = self.getcdata(ans, M, rand_str)
        ans = str(distance) + "," + height + ";"
        return ans

    def getcdata(self, ans, M, rand_str):
        i = 0

        while i<int(M):
            i+=1
            c = rand_str + str(i)
            if ans==md5(c):
                return str(i)

        return "0"

    def get_trace(self, distance, seconds=10):
        tracks = [0]
        offsets = [0]
        for t in np.arange(0.0, seconds, 0.1):
            # ease = globals()[ease_func]
            ease = ease_out_quad
            offset = round(ease(t / seconds) * distance)
            tracks.append(int(offset - offsets[-1]))
            offsets.append(offset)
        return tracks

    def validate(self):
        distance = self.get_images()
        self.ans = self.get_ans(distance)
        # 还需要生成轨迹
        trace = self.get_trace(distance)
        print(trace)



        url = "https://ssl.captcha.qq.com/cap_union_new_verify"
        data = {
            "aid": self.aid,
            "captype:"","
            "protocol": "https",
            "clientype": "1",
            "disturblevel": "",
            "apptype": "2",
            "noheader": "0",
            "color": "",
            "showtype": "",
            "fb": "1",
            "theme": "",
            "lang": "2052",
            "ua": self.ua,
            "subsid": "6",
            "sess": self.sess,
            "fwidth": "0",
            "sid": self.sid,
            "forcestyle": "0",
            "wxLang": "",
            "toScale": "1",
            "cap_cd": "",
            "rnd": str(random.randint(100000, 999999)),
            "TCapIframeLoadTime": "99",
            "prehandleLoadTime": "132",
            "createIframeStart": str(time.time() * 1000 - 2000),
            # "rand": str(random.random()),
            "subcapclass": "13",
            "vsig": self.sig,
            "ans": self.ans,
            f"{self.collect}": self.collect,
            "websig": self.websig,
            "cdata": self.cdata,
            "fpinfo": "fpsig=1100C35DEE446ABE604F03B4CE42E40BB2564F625EDC18F895C986C804AF5CBD5BA0208C73769F99FCDDF0342913864008A9",
            #"fpsig": "",
            #"tlg": "1",
            #"vlg": "0_0_0",
            "vmtime": "_",
            "vmData": ""
        }

        data = {"aid": self.aid, "protocol": "https", "accver": "1", "showtype": "popup",
                  "ua": self.ua,
                  "noheader": "1", "fb": "1", "enableDarkMode": "0",
                  "ptcz": "c261b1a9c2a8e67c66f628891cd1b63a9967fbf3d84ed0dd9245892596b58853",
                "fpinfo": "fpsig=11000658691E7C49C8AD6E1A74540EDE834C8E8523A98ABDC40FC42EF19004B439EE0D827CB4BE4861A9F9705E6C81DC7609",

                "grayscale": "1", "clientype": "2", "subsid": "2",
                  "sess": self.sess,
                  "fwidth": "0",
                    "sid": self.sid,
                    "forcestyle": "undefined", "wxLang": "", "tcScale": "1",
                  "uid": "", "cap_cd": "",
                "rnd": "339745",
                "TCapIframeLoadTime": "undefined",
                  #"prehandleLoadTime": "207", "createIframeStart": f"{int(time.time()*1000)}",
                "ans": self.ans,
                  "vsig": self.sig,
                  "cdata": self.cdata,
                  "websig": self.websig,
                  "subcapclass": "15",
                  #self.collect: self.collect,
                self.collect: "b17ez36hYDHJPy1RmA7qG0Gy/7E1Bi7TzzySjjOag5HbulSXToUQn8fwokw0zd0zu030iJk9/PlaMAIeZpuRLPK0kNvLIQNuAsfpSnCl1eNEDWcSXj8WfYz9tIrWh8r okA35 B2nA7Ryze2UZ2N8xnKxGskJbxpItr0cDxBe3FB 5k5u7jjzPJO33Byto26X5np0jzIfHap2Wb1VOrdOoz9tIrWh8r okA35 B2nA7Ryze2UZ2N83XZAOcs6gZMhfaidMfOwiGm5 cU54Jg vJO33Byto26AsfpSnCl1eMWpPbXt37zI4z9tIrWh8r 9izliJZkpxDRyze2UZ2N88ENoHkE/5shW1LXi9sPjkdVQPZKP6QDSfK0kNvLIQNuvbjW9Iqu6h bYtOhsAnKwkL9vwpwStXbokA35 B2nA6kvu1aTg mgkoveu DXg1plntogeIjI60pg7 BIMqLt1qnMYYsX99YaqQGVEQRkWn1gItjO0bGakD8m1vqobCd4sfAKNfa1AJRe4kYAXDBT0oveu DXg1pWhvQXjXz7e4o4FVgDc 2Ej9U0zaAhewDaqQGVEQRkWn7o7Figw0sWED8m1vqobCdCm0nyPu9ZApZ7pH8gBq/MEoveu DXg1pbRzid0QBFHwo4FVgDc 2ElqnMYYsX99YsiBw2spVXyntRedT8UZSEUL9vwpwStXbCm0nyPu9ZAqrvFaeb1jwYsfwokw0zd0zDeyisy rkaVrsFAK1UgtBj7ZeEDAYpPtOITifIHGEE/0niPYfyVrC0L9vwpwStXbX TiHUvqWJiufojgoAeV7ywCgrHIuhj/2fRkIPJpVgU4qaR9OxYROCj9CJryxfF8perqPzK0q7CWkaomTgHQNvujsWKDDSxYGddaR7ZxLCdJdzOKLlWpAqJftV1JdFOduiODJxSw8yGrvFaeb1jwYhvazZNKiY0E2fRkIPJpVgUN7KKzL6uRpVm7fG7SuWOsb23TBnzowWpZu3xu0rljrKUMEm65oW6iOJSnhdOEmrkoMIaqFqY24JaRqiZOAdA2lQ5aSJ248FkjiIFwsXJsTBnXWke2cSwnm7sQ5hAx5o9f5OIdS pYmLojgycUsPMhMR6ZbZXBdH8b2s2TSomNBAD4/u9wF7qCWbt8btK5Y6yoMr7hLOvZ9ij9CJryxfF8w09GfxGNnLPU2yr zxDmxLIgcNrKVV8pBHmqB8d1Qay9VZzKPbj06F9zseOGV/vwSH1We54/dE9f5OIdS pYmK5 iOCgB5Xv/eyqEjAY0mB18kItWPeNIzwOVnhN659RKP0ImvLF8XzUlUWnJEHOHZaRqiZOAdA29BvBOeohdglPkH0CXj2qYhzk7jp7JUNMtowWKcOJc2kZ11pHtnEsJz6gezwRkeocX TiHUvqWJhrd7RS1i7uxTW0MY9G4g1uEbLeC3PLVVilDBJuuaFuojiUp4XThJq5KDCGqhamNuAfb5TT9FHuePQbwTnqIXYJlQ5aSJ248FkjiIFwsXJsTBnXWke2cSwnPqB7PBGR6hw oHs8EZHqHDXcAKkjJQTpq7xWnm9Y8GKF30I00neeB9n0ZCDyaVYFOKmkfTsWEThrsFAK1UgtBuyEPaRLaqwee0KLTUt8nWiyIHDaylVfKU QfQJePapiGddaR7ZxLCdJdzOKLlWpAl/k4h1L6liYuiODJxSw8yGrvFaeb1jwYmm3Gr0S4ftLyg0nd6oF6aw4qaR9OxYROGuwUArVSC0GOJSnhdOEmrk 2XhAwGKT7QQLae7KzZX0H2 U0/RR7nj0niPYfyVrC0Ph42TmUcvxX TiHUvqWJgI6MlME/EiHRvazZNKiY0EOKmkfTsWEThZu3xu0rljrFm7fG7SuWOsa7BQCtVILQY 2XhAwGKT7bIgcNrKVV8pvauKtVk8mE77o7Figw0sWBnXWke2cSwnNdwAqSMlBOlZ7pH8gBq/MBvazZNKiY0ED4pCCGYuM9sbJPnA8YgCn yEPaRLaqweiQOmazEegqCWkaomTgHQNvSeI9h/JWsLI4iBcLFybEwZ11pHtnEsJ1/k4h1L6liYq7xWnm9Y8GKF30I00neeB9n0ZCDyaVYF7ZJmfOgB QMo/Qia8sXxfDiUp4XThJq57IQ9pEtqrB57QotNS3ydaHtCi01LfJ1olpGqJk4B0DZ5GnaF48H698YHPssIkDbVOVhBsputSw8tsK2q/D34FYm9Nh9bbcc Gfb4Bi7TmBTkcwmFj9plfHvGQ0/EjqvP cAlVRZOmlqGciZFvN/lE3dMoepgjzZsR4wUduu0lBWyVzlznHkIMfBeg8maewuLNey1L P1iR2V 7RqecynKw4o6Z65J TGI BmLyR4Kaa8WOimYgpyLKZ3XFGUWHqCd5npCfpSrthgGK7pOYA3jF57ltM/sw2MzCW957jyuKuNjw0znZZP7EGy/7E1Bi7T4T2Ixt rZKfK9I2LJxnqqhh/wMbZEDMBvQzom7PHiXXdMnAT/CamZYkHkbCuSs1359fyD0mgd5aasqJrzz99fbOjRKALwbsICu/sRUUjSPmCD8h9uLHg/9GKjnf7/j17VmWUrOFBEU7f4pQ4isyQhfp8QEclWt2vGlQ/uzWvRek8bXRhk8yJLgvo9Wbe14t3tVfDe3YVwySkF0SzqfcmIEGy/7E1Bi7T0ebhGfDxnRpkl1IyfsfOP0Gy/7E1Bi7TJVpQZEIs81qR/1M4Qu4AwqVBnAK118JcAaFB9e40VzXVgf5CkF4atCy8f5AWJ1q7WylaVMD6i/TqYBPEHwmwqkGy/7E1Bi7TEVNRjWu5iSGUjFvMHpXamsNbHxDfKEV/5EjeFNzPY64lUesNdHJpKLbMZS/9xVHQaATxYhxI FE7aRVdfPwZSh5pM53VU euDoMNnPip oZzGk5I32qGLspK7p1UrWOrg2fNT4RCSbOn9AG/JYDZ5d1a2jABx2mZCUBqY8UzVqCE38wSJvDgz1MvIih1WD6x0TixCW/HTJ6oPqCfkLYz8i6c 4xIZN Urw2hmkzGbVXx9TBNvJCEhXsGmYFnlw3SYBiu6TmAN4xee5bTP7MNjMwlvee48rirj414rP6BzFeuEDFqXcg O4B6BwQaMV0nyau8gnXhIR1ZRPsb4lD46eVVRquL0oNG54lNUMoRCXm4lqUWl/KzwrJyJL8m8wQxrhje4S7nuaCRu8ZrwuLwRI2Q0y4ynRwZU5yiwE3CRzobcYgQS6ZdfZY4ONhkMPj6oV/ xWVd2WSHPdmZ97c doLErzl/L0xv4d/j yC8SF3XN2O3VmkbktWdZF L9lXdK7IWH/5tVsVRU99JRevME60gZD9w3htDvaiPzN8 U5fRwrg3T571cRiMZiw41mGszThX85Cba6boDTanI8Mfh0Gy/7E1Bi7T0AjDvxJ35UNBsv xNQYu00Gy/7E1Bi7T6pJ0sItIL64MStlq3jksjLQrMOomqKlTozmm4Fx9E /AlaULtxVjQwvvb4nt/KtKioJysD DYHIbGA8gW7/5baU9kxwQlCC9bBx1vRUX/3jVQD0EFJ9Y8xKZKZ z7RFcuBSUAecRNBesed0xFY21Znp2DS20e3X695hXKx7hnLi11L6TJPG1zQf7RdzWlXc6oHUt1pNm/Hg2AisoZ nSwhbaVm0Vcmr7FtpWbRVyavs2AisoZ nSwhbaVm0Vcmr7NgIrKGfp0sIW2lZtFXJq wf7RdzWlXc6Jhmj4xTnDQkW2lZtFXJq xbaVm0Vcmr7NgIrKGfp0sL0hgm45ZG0EilUp6QbdsjpVqvAhCszGSOtK3iuSvPpL4w7qm54pAYPVqvAhCszGSOfMGDA2BZdJ27CkLhE87KAbsKQuETzsoApVKekG3bI6W7CkLhE87KAbsKQuETzsoBWq8CEKzMZIylUp6QbdsjpbsKQuETzsoBuwpC4RPOygG7CkLhE87KAKVSnpBt2yOlWq8CEKzMZI27CkLhE87KAKVSnpBt2yOmtK3iuSvPpLylUp6QbdsjpbsKQuETzsoCMO6pueKQGD6XGzt9eQwkL7cAEnBtz /BGo6YAgunCb7r X xRan7ERqOmAILpwm9Go6YAgunCb1C6h1dN8c7SX6GmH/zPAmX9JUi/FEjq7WYstd8NG N7PXq q4jafMWJ00LnD41Nul hph/8zwJl/SVIvxRI6u1mLLXfDRvje2Ystd8NG N7X6GmH/zPAmVmLLXfDRvje0Su7nFdGAiFZiy13w0b43tEru5xXRgIhWYstd8NG N7Ziy13w0b43tfoaYf/M8CZUSu7nFdGAiFZiy13w0b43uilA7i6fuqoV hph/8zwJlZiy13w0b43tmLLXfDRvje1 hph/8zwJlZiy13w0b43tfoaYf/M8CZV hph/8zwJlZiy13w0b43sExUg7W4/SGGYstd8NG N7X6GmH/zPAmUK9G7Hwhe9wWYstd8NG N7X6GmH/zPAmVmLLXfDRvje1 hph/8zwJluiODJxSw8yEExUg7W4/SGF hph/8zwJlZiy13w0b43tmLLXfDRvje2Ystd8NG N7/SVIvxRI6u39JUi/FEjq7f0lSL8USOrtoq S1QRTsSjFhj317A9RvHHvkbzupRqshfaQssIPYTgIFYy7sS2oNZaRqiZOAdA2EyU7vLl2fn sjkWYN mUWOj2xhYgkTbKBF1w6ozbVDjHWXRwR8hCIq/NOmo4uhmklpGqJk4B0DbtDMGHoRL wjrF9QuwfoVwpU4UC0V790KL7o6y37/owJC4vdmDHXIxMR6ZbZXBdH8uDLV5toG4wC9ypUy09tLPLI5899mQ4tU9/ST2SvUNWLIgcNrKVV8pPNQYKAKV0JxD4eNk5lHL8T6gezwRkeocD40WZTSFbeCufojgoAeV76ZgCCf6lPdCOKmkfTsWETglb0Jp3D/oeb8yDC1M5t elpGqJk4B0DZlXOBr3vw4o0Ph42TmUcvxNdwAqSMlBOlmSJahjr7I5y4MtXm2gbjA2fRkIPJpVgU4qaR9OxYROCj9CJryxfF8KDCGqhamNuB/1/p49aBu7JUOWkiduPBZ1Cc6p3b/TrqeLC7viaGDTLojgycUsPMhao0UR8f78oWOIvBUg/eVpJPgtBU1Xs2ffOtWVRbJeOGcnle2DDuoXg==",
                  #"eks": "_796b619b78553070afb8f4656ba264e4a1974563a97af6734155c471fd990e10bc332c54856365034cfe7fee7aabf146a4705a080a53c537a659bc52fc6562eb73ff23d2f94da0800598d872a72f1b22601f3bdcbb6702de61e9cf5996b3c1b0b4634ac5687bffd54897837a90a21b1a1d4132888cf0e6238ce679c9bd5f133cc24491a75266a160b161a4cd6f0bc3d6959742f75b78d369ba432d6272aedd9d2473b5585b63e841f4131738a482cac05986b5dc214c4bf5b22335535aa492fd",
                  "eks": "_50be12f5d5a1da2bb0066e39c543f1ca4aaa5e47a64fbda75ef17bbed52193ccc2b43ee56be1776ce1c1e20d07084f1ecf93d39a4b3dd0a1c5bc043a8e333e2caa5dd7d941bd9f492637102de333d448a7a6d878959e1837c0638767f0b97c1e4548072b4ca94d60d3345776083b70171de5a8d8ba69160f4324fed9e171f5dea90a71ff63af58bbb334c371a48ac3a50738d53ac7908a5c1da881f0dbfb42941bd61adf1316518154780c89c6bc8d695f1f03c9007c2a0b8f43770ecef53f0e",
                  "tlg": str(len(self.collect)), "vlg": "0_1_1"}

        print(data)
        ret = session.post(url, headers=headers, data=data).content.decode()
        print(ret)

if __name__ == '__main__':
    ts = TencentSlide()
    ts.validate()
