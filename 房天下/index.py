import requests

cookies = {
    'g_sourcepage': 'txz_dl%5Egg_pc',
    '__jsluid_s': 'f336e5a2f1d0e32ece1291e8f5630e16',
}

headers = {
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Cache-Control': 'no-cache',
    'Accept': '*/*',
    'X-Requested-With': 'XMLHttpRequest',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.92 Safari/537.36',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Origin': 'https://passport.fang.com',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Dest': 'empty',
    'Referer': 'https://passport.fang.com/',
    'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
}

data = {
  'uid': '18584858272',
  'pwd': '1c94548fe93abc05072e4062439346e1df61700a9de1b5410f56cd53be6af05cc23095e533904b78970b22f7cad0d4607011f5edfc13ef6ba3ddd49bb89a79a8851ba8823e2895528046a9c648a1eb15aa7ba159f5d8a6e646512193ad6d6e65c273379533180661a4f3ab1954adc7e768ba136fb10f9460e66121fc2ec74b1b',
  'Service': 'soufun-passport-web',
  'AutoLogin': '1'
}

response = requests.post('https://passport.fang.com/login.api', headers=headers, cookies=cookies, data=data)
print(response.text)
