# @Time    : 2020-05-11 10:56
# @Author  : LavÖz
# @File    : 登录.py
# @Software: PyCharm
import hashlib
import time

import requests

"""

POST /api/passport/v3_1/login.php HTTP/1.1
SN-REQID: 1589166006040295ca0f95306
User-Agent: Mozilla/5.0 (Linux; Android 5.1.1; m1 note Build/LYZ28N; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/52.0.2743.100 Mobile Safari/537.36 sinablog-android/7.0.0 (Android 5.1.1; zh_CN; meizu m1 note/m1 note)
Content-Type: application/x-www-form-urlencoded; charset=utf-8
Content-Length: 176
Host: appblog.sina.com.cn
Connection: Keep-Alive
Accept-Encoding: gzip

cookie_format=1&sign=1589166006_31135ce5b2a06c82b42d3ef8e5b2047c&pin=e3eb41c951f264a6daa16b6e4367e829&appver=7.0.0&appkey=2546563246&phone=18584858272&entry=app_blog&pwd=as1234

"""
def MD5(val):
    m = hashlib.md5()
    m.update(val.encode())
    return m.hexdigest()


def get_sign(val, t="1589165228"):
    return t + "_" + MD5(val+t)

def login(user, pwd):

    t = str(int(time.time()))

    sign = get_sign(user+pwd, t)

    headers = {
        'SN-REQID': '1589165228144295ca0f91884',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 5.1.1; m1 note Build/LYZ28N; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/52.0.2743.100 Mobile Safari/537.36 sinablog-android/7.0.0 (Android 5.1.1; zh_CN; meizu m1 note/m1 note)',
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
        'Host': 'appblog.sina.com.cn',
    }

    data = f'cookie_format=1&sign={sign}&pin=e3eb41c951f264a6daa16b6e4367e829&appver=7.0.0&appkey=2546563246&phone={user}&entry=app_blog&pwd={pwd}'

    response = requests.post('https://appblog.sina.com.cn/api/passport/v3_1/login.php', headers=headers, data=data, verify=False).text

    print(response)


print(get_sign("13555555555as1234"))


        #c = int(c, "16")
        #print(c)

"""
    private static String b(byte[] bArr) {
        if (bArr == null) {
            return null;
        }
        StringBuffer stringBuffer = new StringBuffer();
        for (byte b2 : bArr) {
            String hexString = Integer.toHexString(b2 & KeyboardListenRelativeLayout.f8254c);
            if (hexString.length() < 2) {
                stringBuffer.append(0);
            }
            stringBuffer.append(hexString);
        }
        return stringBuffer.toString();
    }
}

"""

login("18584858272", "as1234")