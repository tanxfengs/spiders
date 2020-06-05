import copy
import hashlib
import json
import random
import re
import cv2
import numpy as np
import requests
import time


requests = requests.Session()


def sub_quota(s):
    return s.split("\"")[1]


def md5(string:str):
    m = hashlib.md5()
    m.update(string.encode())
    return m.hexdigest()


def rgb_to_hex(rgb):
    color = ""
    for i in rgb:
        color += str(hex(i))[-2:].replace('x', '0').upper()
    x = int(color, 16)
    return x


def get_img(res):
    image = np.asarray(bytearray(res), dtype="uint8")
    img = cv2.imdecode(image, cv2.IMREAD_COLOR)
    return img


def get_w_h(img):

    h, w, _ = img.shape
    return w,h


def rgb_img(img):
    img4 = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    return img4


def get_rgb(img, y, x):
    """
    :param img:
    :param y: 纵轴坐标
    :param x: 横轴坐标
    :return:
    """
    return rgb_to_hex(img[y-1][x-1])


class QQLogin:
    def __init__(self):
        self.headers = {"user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36"}
        self._uin = None  # QQ
        self._password = None #密码
        self._salt = None # salt
        self._cap_cd = None #参数
        self._verifycode = None #识别码(有验证码需过滑块返回)
        self._pt_vcode_v1 = None
        self._pt_verifysession_v1 = None
        # Ua base64
        self._UA = "TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV09XNjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS81NS4wLjI4ODMuODcgU2FmYXJpLzUzNy4zNg=="
        self._sess = None
        self._sid  = None
        self._sig = None
        self.trace_x = None
        self.trace_y = None
        self.trace_time = None
        self._ans = None
        self._collect = None
        self._websig = None
        self.cdata = None

    def check_code(self, uin):
        """
        是否有验证码
        """
        self._uin = uin
        url = "https://ssl.ptlogin2.qq.com/check?regmaster=&pt_tea=2&pt_vcode=1&uin=" + uin + "&appid=549000912&r=" + str(int(time.time()*1000)) + "&pt_uistyle=40"
        ret = requests.get(url, headers=self.headers, verify=False)
        ret = re.sub("\'", "", ret.text)
        arr = ret.split(",")
        # 需要验证码
        if arr[0] == "ptui_checkVC(1":
            self._pt_vcode_v1 = 1
            self._cap_cd = arr[1]
            self._salt = arr[2]
            return True
        elif arr[0] == "ptui_checkVC('0'":
            pt_vcode_v1 = "0"
            verifycode = arr[1]
            salt = arr [2]
            pt_verifysession_v1 = arr[3]
            return False
        else:
            return False

    def get_vc(self):
        """
        获取滑块验证参数
        :return:
        """
        url = "https://ssl.captcha.qq.com/cap_union_prehandle?aid=549000912&captype=&curenv=inner&protocol=https&clientype=2&disturblevel=&apptype=2&noheader=&color=&showtype=embed&fb=1&theme=&lang=2052&ua=" + self._UA + "&grayscale=1&cap_cd=" + self._cap_cd + "&uid=" + self._uin + "&wxLang=&subsid=1&callback=&sess="
        res = requests.get(url, headers=self.headers, verify=False).text
        res_data = res[1:-1]
        data = json.loads(res_data)
        self._sess = data.get("sess", "")
        self._sid = data.get("sid", "")
        # print(res)
        # 请求验证码
        url2 = f"https://ssl.captcha.qq.com/cap_union_new_show?aid=549000912&captype=&curenv=inner&protocol=https&clientype=2&disturblevel=&apptype=2&noheader=&color=&showtype=embed&fb=1&theme=&lang=2052&ua={self._UA}&grayscale=1&cap_cd={self._cap_cd}&uid={self._uin}&wxLang=&subsid=1&callback=&sess"
        ret2 = requests.get(url2, headers=self.headers, verify=False).text
        # 'vsig:"c01p8T => c01p8T

        vsig = re.search("vsig:\"([0-9a-zA-Z\*\_\-]{187})\"", ret2).group()
        self._sig = sub_quota(vsig)
        spt = re.search("spt:\"(\d+)\"", ret2).group()
        # 高
        height = sub_quota(spt)
        websig = re.search("websig:\"([0-9a-f]{128})\"", ret2).group()
        self._websig = sub_quota(websig)

        collect = re.search("collectdata:\"([a-z]{6})\"", ret2).group()
        self._collect = sub_quota(collect)
        print("collect: ",self._collect)
        ans = re.search("&quot;ans&quot;:&quot;([0-9a-f]{32})&quot;", ret2).group().split("&quot;")[-2]
        M = re.search("&quot;M&quot;:&quot;(\d+)&quot;", ret2).group()
        M = M.split("&quot;")[-2]
        rand_str = re.search("&quot;randstr&quot;:&quot;(.{4})&quot;", ret2).group().split("&quot;")[-2]
        print("rand_str:", rand_str)
        self.cdata = self.getcdata (ans, M, rand_str)
        img_A = self.getvcpic(1)
        img_B = self.getvcpic(2)
        # 它的宽
        width = self.captcha(img_A, img_B)
        self._ans = str(width) + "," + height + ";"
        self.dovc()

    def dovc(self):
        ans = self._ans.split(",")
        print(ans)
        width = int(ans[0])
        # collect = self.generate_slideValue(width)
        url ="https://ssl.captcha.qq.com/cap_union_new_verify"
        data = {
            "aid": "549000912",
            "captype:"","
            "protocol":"https",
            "clientype":"1",
            "disturblevel":"",
            "apptype": "2",
            "noheader":"0",
            "color":"",
           "showtype":"",
            "fb":"1",
            "theme":"",
            "lang":"2052",
            "ua": self._UA,
            "subsid":"6",
            "sess": self._sess,
            "fwidth": "0",
            "sid": self._sid,
            "forcestyle":"0",
            "wxLang":"",
            "toScale":"1",
            "uid":self._uin,
            "cap_cd": self._cap_cd,
            "rnd": str(random.randint(100000, 999999)),
            "TCapIframeLoadTime":"99",
            "prehandleLoadTime":"48",
            "createIframeStart":str(time.time()*1000),
            "rand": str(random.random()),
            "subcapclass": "13",
            "vsig": self._sig,
            "ans": self._ans,
            f"{self._collect}": self._collect,
            "websig": self._websig,
            "cdata": self.cdata,
            "fpinfo":"",
            "fpsig":"",
            "tlg":"1",
            "vlg":"0_0_0",
            "vmtime":"_",
            "vmData":""
        }

        refer = f"https://ssl.captcha.qq.com/cap_union_new_show?aid=549000912&captype=&protocol=https&clientype=1&disturblevel=&apptype=2&noheader=0&color=&showtype=&fb=1&theme=&lang=2052&ua={self._UA}&subsid=2&sess={self._sess}&fwidth=0&sid={self._sid} &forcestyle=0&wxLang=&tcScale=1&uid={self._uin}&cap_cd={self._cap_cd}&rnd={random.randint(100000, 999999)}&TCapIframeLoadTime=99&prehandleLoadTime=48&createIframeStart={time.time()*1000}"
        new_header = copy.deepcopy(self.headers)
        new_header.update({"referer": refer})
        ret = requests.post(url, headers=new_header, data=data, verify=False).json()
        print(ret)
        if ret.get("errorCode")!="0":
            print("验证失败, 正在重试")
            self.qq_login(self._uin, self.password)
        self._verifycode = ret.get("randstr", "")
        self._pt_verifysession_v1 = ret.get("ticket", "")

    def generate_slideValue(self, width):
        sx = random.randint(700, 730)
        sy = random.randint(295, 300)
        self.trace_x = sx
        self.trace_y = sy
        ex = sx + (width - 55) / 2
        s_time = random.randint(100, 300)
        res = f"[{sx},{sy},{s_time}],"
        y = 0
        x = 0
        time = 0
        while (sx < ex):
            x = random.randint(1, 5)
            sx = sx + x
            time = random.randint(9, 16)
            s_time += time
            res = f"[{x}, {y}, {time}],"

        return f"[{x}, {y}, {time}]"

    def captcha(self, img1, img2):
        res1 = requests.get(img1, headers=self.headers, verify=False).content
        res3 = requests.get(img2, headers=self.headers, verify=False).content

        from spiders.C_utils.utils import get_distance
        dist = get_distance(res1,res3)

        print("dist",dist)
        return dist

    def getvcpic(self, img_index):
        url = f"https://ssl.captcha.qq.com/cap_union_new_getcapbysig?aid=549000912&captype=&protocol=https&clientype=1&disturblevel=&apptype=2&noheader=0&uid={self._uin}&color=&showtype=&fb=1&lang=2052&ua={self._UA}&cap_cd={self._cap_cd}&rnd={random.randint(100000, 999999)}" \
        f"&rand={random.random()}&sess={self._sess}&sid={self._sid}&vsig={self._sig}&img_index={img_index}"
        return url

    def getcdata(self, ans, M, rand_str):
        i = 0
        while (i<int(M) and i<1000):
            i+=1
            c = rand_str + str(i)
            if ans==md5(c):
                return str(i)

            return "0"



    def getencpassword(self):
        jscode = f"let pwd='{self.password}', uin='{self._salt}', code='{self._verifycode}'"

        with open("./password.js", "r", encoding="utf-8") as f:
            jscode += f.read()

        data = {
            "code": jscode
        }
        password = requests.post("http://localhost:3000/enc", data).json()["msg"]

        return password
    
    def login(self, password):
        self.password = password
        p = self.getencpassword()
        url = f"https://ssl.ptlogin2.qq.com/login?u={self._uin}&verifycode={self._verifycode}&pt_vcode_v1={self._pt_vcode_v1}&pt_verifysession_v1={self._pt_verifysession_v1}&p={p}&pt_randsalt=2&u1=https%3A%2F%2Fqzs.qq.com%2Fqzone%2Fv5%2Floginsucc.html%3Fpara%3Dizone&ptredirect=0&h=1&t=1&g=1&from_ui=1&ptlang=2052&pt_uistyle=40&aid=549000912&daid=5&has_onekey=1&"
        ret = requests.get(url, headers=self.headers, verify=False).text
        if "页面过期" in ret:
            print(ret)
            requests.cookies.clear()
            self.qq_login(self._uin, self.password)
        else:
            print("登录成功")
            print(ret)

    def qq_login(self, username, password):
        self._uin = username
        self.password = password
        if self.check_code(username):
            # 调用识别
            self.get_vc()
            print("需要验证码")
            return self.login(password)

        else:
            return self.login(password)


if __name__ == "__main__":
    start = time.time()
    qq = QQLogin()
    qq.qq_login("user", "pass")
    print(time.time()-start, " /s")