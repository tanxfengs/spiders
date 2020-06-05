# @Time    : 2020/4/13 10:36
# @Author  : LavÖz
# @File    : index.py.py
# @Software: PyCharm

import requests

cookies = {
    'mgnd_session_id': 'ADARYG59J2-0YXE5XL34S5IZ8YR4WNE3-1X4RUX8K-0',
    'mgnd_session_create': '1586744578981',
    'mgnd_session_last_access': '1586744612461',
}

headers = {
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Cache-Control': 'no-cache',
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'X-Requested-With': 'XMLHttpRequest',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.92 Safari/537.36',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Origin': 'https://passport.migu.cn',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Dest': 'empty',
    'Referer': 'https://passport.migu.cn/login?sourceid=203021&apptype=2&forceAuthn=true&isPassive=false&authType=&display=&nodeId=70027513&relayState=login&weibo=1&callbackURL=http%3A%2F%2Fwww.miguvideo.com%2Fmgs%2Fwebsite%2Fprd%2Findex.html%3FisIframe%3Dweb%26isIframe%3Dweb',
    'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
}

data = {
  'sourceID': '203021',
  'appType': '2',
  'relayState': 'login',
  'loginID': '7cd22a641c582f294f1302efd88bfc4c38bb480732419a2f3517b3ab8e0aae205eb54d88aa15afc29ff892fee52ef595ad1363d659a75823fbbbb538f3d0ce4ab74890710e9a10005821db336dc6738dabcafc50da8409852e8f2542c5abd4c029efe607448aab9dafa6bba1f8f05af5f7012f0763e9d46d05bff259a2686076',
  'enpassword': '37d9a0fe04851962766736a4a8abba85b58bce2f76f97e9afe8dfe192cb355d40c76fe0655ce70f27aee40fd4a2e09c59073628f7c6ef3e4c1243b5c6d9c01286794b50f7be28d44c123b5b5bac1ff65765ccf2462a8a49471c433714f1e71899e5dbc9a50943abe8e6821032cf6e145e630a81e4083a2d6126974776909041c',
  'captcha': '',
  'imgcodeType': '1',
  'fingerPrint': '2554965ab531c7b27fc84ed57b653a973626389e3632013e8b20966d9f3af9afeea83d265191b7506f6f9d865acef75389ea30ac7db3269a347fdb72f54786136f52f1f41c8d4633b4426fcaa5f9a5c15902718f2e0da882330061ccc73a53970af03a7b884ed1ae90cdbb16fc65747a9acee0dd1642aaa997711f5518ee053c',
  'fingerPrintDetail': '7e74aab77fcbd23f48c75837cc21149c96be95c25f5510c62da9a0266b43a83ac95da2caef1d72ae8b3087c6d62efe909a3f0510d6604445128217da78a1669e7b2c63abbba2f50d90f51cfa5251d85bbb4f16fdee36fe7d8fced10fc1492dc5f4b5d2364befbcd22ceec65b5e081c7e3375a19e8a73bab9b631dfe62d69922a5801ec08af4f56f40e362211d86ceb7cf12571562a662861c1948a1015c7ca27678c7e6dd5b8b774d724f7cc8fe86b6638f520daec6e6ea50d578afb512fa00cef6a28655e4f07a49ef95fe44eb88315fbd3305a3154a12aa5bfab44b507de6c0bcc3d7b52b2a94e74417300bfeca52b7a5b7d013c4d4cfda4283ce69a52a169240967f28898e08669f9b96a1489d153cff5fd4696902148bd1473f3deee84dc0ff79b422c193f9d3d373565fa00a3ce9aedbdc0e5bd15d1acdf5af4fad43a0e1ee06c21579f7c5c8487d2f1ccb18796c4dd25846ba82dca26ea8b12ebfed01c1e981ad209b9030637947a0878dd457985908a9a77773282fef88c685e098b2f71103715a929821301b1b9312d230697ff0784f348edebd0c0ee36d20bba954a4f36a5a8bbd8e1a676537bc9d76e35dd2b9abff304dfb1b75d5b93278ad60c28289dd80e00dfb9d57700146b9f7b6714aff97f34765c9077e9c2b1eb10735602023a71b5da0da8f171747d53527870cb4a94a188db9aef4ff61cdae96f5eccef577d6e1f476da4ca67425b9ea08b2e458f975b14362afea89a31c7e9c647e46f24d6acb4a951b11f282850ee33e82cc08d2d39bfe67012e7e02a8d52682ec1b341b42dced027e99719f5bef45d2e2af5704fcef7dc6a3382a6bb3a42c6f0a62c9248aeb6f8a706bf1c4562ec031828119135f290ba0baf145cfbd832bd1fd7501f3617b428c0be59f235c711b2761429fefb8723a215036591d3b7882f3dd19b73bea27593d95d530d4ac5738c907544a913f4ac4efaab9e399f9b07533dab7e17a5b24e91c9b1660868b4f95ba66e494afa007793be06b7de781c89085b0a0505ea67963c35269a6fa1e119b4f89987483a6cb404f1d485b91bcc43156115a475f66db356f61fb11b92d699938019cc25e7b837b4186174af25f0b1dcec7ed219f3b81df60cb63e75507556b398ee5f5d151cede7ea75bb62cf2eeefcf16d1767f615600b046acc6c87742abfdf2dec516b5032d6434038086e30e5b3f97c6a5c51614abcfa17d8cacb6249ae0e8efd953b9bd80c2dbdca19f161564c21ae53579d2cb421a9e5c383a660ea71385eb674bcd417c8602a1659da5eda87dcf452e73014163465d7dc3ddf475e49c64556378c828ed67c7c2bc8b8d07bffe41d874c267ee57f53f8a2e5034b5e53bcc67baa11f8e48f092f53cd1d53d6eece303430d53cc72430e81508e5c4f3dde4bec82664887c660f2900b164e1b66b7f7aad',
  'isAsync': 'true'
}

response = requests.post('https://passport.migu.cn/authn', headers=headers, cookies=cookies, data=data)
print(response.text)
