# @Time    : 2020/4/2 10:33
# @Author  : LavÖz
# @File    : index.py
# @Software: PyCharm
import requests
from requests.utils import cookiejar_from_dict

session = requests.Session()
url1 = "https://www.qimai.cn/"


headers = {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:74.0) Gecko/20100101 Firefox/74.0"
}
c = session.get(url1, headers=headers).cookies
print(dict(c))

cookies = "acw_tc=76b20ff415857948822495452e07a646c293f78c63c13ec50292327278ae5b;  syncd=-1334; qm_check=SxJXQEUSChd2fHd1dRQQeV5EVVwYYhwXZ3h9EHNKUUBYWVNDEAMEAhB9WUZdU0QDdAEBEENEbQVmABRIQ28FbwAZEhkVUVhcU18aChIAHAAcABkHHgAbTQ%3D%3D; PHPSESSID=4i845il6l7emkehrtpdt5st0i7; gr_user_id=97658514-c775-44b6-8a10-db9118b47d6d; ada35577182650f1_gr_session_id=00ac6013-be28-4d95-ba54-dd3d42bde3f9; grwng_uid=63854dfe-6ed4-4732-8a27-b5b344c75d8a; ada35577182650f1_gr_session_id_00ac6013-be28-4d95-ba54-dd3d42bde3f9=true"
item = {}

c_list = cookies.split("; ")
for _ in c_list:
    key,value = _.split("=")
    item[key] = value
# session.cookies= cookiejar_from_dict(item)

print(session.cookies)


ret = session.get("https://api.qimai.cn/rank/globalrank?analysis=dTB9QSxacUR9dGFEdSB%2BQipZbBhqZ2ZAU3dYTgZabVl0FU5CUV5bH1dcVwZWVBZVWApwEwcABgkCC1QODFIBdkIB", headers=headers).text
print(ret)