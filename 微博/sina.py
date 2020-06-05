# @Time    : 2020/4/1 13:33
# @Author  : LavÖz
# @File    : sina.py
# @Software: PyCharm
import base64
import re
from urllib.parse import *
from spiders.C_utils.utils import *

import requests

session = requests.Session()

headers = {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36"
}


class SinaLogin:
    def __init__(self, username, password):
        self.username = username
        self.password = password
        self.servertime = None
        self.pcid = None
        self.pubKey = None
        self.rsakv = None
        self.nonce = None
        self.get_pre()


    def get_pre(self):
        url = "https://login.sina.com.cn/sso/prelogin.php"
        su = self.get_su()
        params = {"entry":"weibo",
                  "su": su,
                  "rsakt": "mod"
                  }
        ret = session.get(url, params=params).json()
        self.servertime = ret.get("servertime","")
        self.pcid = ret.get("pcid","")
        self.rsakv = ret.get("rsakv")
        self.nonce = ret.get("nonce")
        self.pubKey = ret.get("pubkey")
       # self.pubKey = pubkey.split("-----")[1].strip()
        print(ret)

    def captcha(self):
        url = "https://login.sina.com.cn/cgi/pin.php"
        params = {
            "p": "gz-53e2bb30871ae9e5a85c8eb3f9635ea21aa6"
        }

        res = session.get(url, params=params, headers=headers).content
        ret = requests.post('http://127.0.0.1:8820', data={"img": base64.b64encode(res)}).text
        verycode = re.search("结果：(.+)\s", ret).group(1)
        return verycode

    def get_password(self):
        jscode = f"var pubKey='{self.pubKey}', servertime='{self.servertime}', nonce='{self.nonce}', password='{self.password}';"
        password = getencpassword(session,"./password.js", jscode)
        return password

    def get_su(self):
        username_url_encode = quote(self.username).encode()
        return base64.b64encode(username_url_encode)

    def login(self):
        verycode = self.captcha()
        su = self.get_su()
        password = self.get_password()
        data = {"entry": "weibo", "gateway": "1", "from": "", "savestate": "7", "qrcode_flag": "false",
                  "useticket": "1", "pagerefer": "",
                "pcid": self.pcid,
                "door": verycode,
                  "vsnf": "1",
                "su": su, # url编码 + base64
                "service": "miniblog",
                "servertime":self.servertime,
                  "nonce": self.nonce,
                "pwencode": "rsa2",
                "rsakv": self.rsakv,
                  "sp": password,
                  "sr": "1920*1080", "encoding": "UTF-8",
                "prelt": "164",
                  "url": "https://weibo.com/ajaxlogin.php?framelogin=1&callback=parent.sinaSSOController.feedBackUrlCallBack",
                  "returntype": "META"}

        url = "https://login.sina.com.cn/sso/login.php"
        ret = session.post(url, data=data, headers=headers).content.decode(errors="ignore")
        print(ret)



if __name__ == '__main__':
    sina = SinaLogin("fgfg668@163.com", "arsenalramsey123")
    sina.login()
    """
    
		<html>
		<head>
		<title>ÐÂÀËÍ¨ÐÐÖ¤</title>
		<meta http-equiv="refresh" content="0; url=&#39;https://login.sina.com.cn/crossdomain2.php?action=login&entry=weibo&r=https%3A%2F%2Fpassport.weibo.com%2Fwbsso%2Flogin%3Fssosavestate%3D1617327469%26url%3Dhttps%253A%252F%252Fweibo.com%252Fajaxlogin.php%253Fframelogin%253D1%2526callback%253Dparent.sinaSSOController.feedBackUrlCallBack%2526sudaref%253Dweibo.com%26display%3D0%26ticket%3DST-MjY5NzI1Mzk3NA%3D%3D-1585791469-gz-19ABDBB3A207CB2062209CBF54CB431D-1%26retcode%3D0&login_time=1585791468&sign=809a1cc0647f9305&sr=1920%2A1080&#39;"/>
		<meta http-equiv="Content-Type" content="text/html; charset=GBK" />
		</head>
		<body bgcolor="#ffffff" text="#000000" link="#0000cc" vlink="#551a8b" alink="#ff0000">
		<script type="text/javascript" language="javascript">
		location.replace("https://login.sina.com.cn/crossdomain2.php?action=login&entry=weibo&r=https%3A%2F%2Fpassport.weibo.com%2Fwbsso%2Flogin%3Fssosavestate%3D1617327469%26url%3Dhttps%253A%252F%252Fweibo.com%252Fajaxlogin.php%253Fframelogin%253D1%2526callback%253Dparent.sinaSSOController.feedBackUrlCallBack%2526sudaref%253Dweibo.com%26display%3D0%26ticket%3DST-MjY5NzI1Mzk3NA%3D%3D-1585791469-gz-19ABDBB3A207CB2062209CBF54CB431D-1%26retcode%3D0&login_time=1585791468&sign=809a1cc0647f9305&sr=1920%2A1080");
		</script>
		</body>
		</html>
    """