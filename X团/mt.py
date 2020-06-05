import requests

cookies = {
    '_lxsdk_cuid': '16f9dcdeb72c8-08d8f7b7b477dc-504f221b-1fa400-16f9dcdeb72c8',
    'iuuid': '80787B80CF7796952A4912888693995ACE370FB0A32BF1C6735D26D217124B91',
    'ci': '57',
    'cityname': '%E6%AD%A6%E6%B1%89',
    '_lxsdk': '80787B80CF7796952A4912888693995ACE370FB0A32BF1C6735D26D217124B91',
    '__utma': '74597006.1750388042.1585282608.1585282608.1585282608.1',
    '__utmz': '74597006.1585282608.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none)',
    '_hc.v': 'f2d995f2-d1c6-218a-28b8-51b5c008fb47.1585282627',
    'i_extend': 'C_b1Gimthomepagecategory1394H__a',
    'terminal': 'i',
    'w_utmz': 'utm_campaign=(direct)&utm_source=5000&utm_medium=(none)&utm_content=(none)&utm_term=(none)',
    'w_latlng': '0,0',
    'openh5_uuid': '80787B80CF7796952A4912888693995ACE370FB0A32BF1C6735D26D217124B91',
    'cssVersion': 'f6b707d5',
    'wm_order_channel': 'default',
    'utm_source': '',
    'au_trace_key_net': 'default',
    '_lx_utm': 'utm_source%3D60066',
    'uuid': '80787B80CF7796952A4912888693995ACE370FB0A32BF1C6735D26D217124B91',
    'w_visitid': '7e840bfa-56e5-4b03-b4e5-85aa38d1a5ae',
    'w_actual_lat': '0',
    'w_actual_lng': '0',
    'channelType': '{%22default%22:%220%22}',
    'channelConfig': '{%22channel%22:%22default%22%2C%22type%22:0%2C%22fixedReservation%22:{%22reservationTimeStatus%22:0%2C%22startReservationTime%22:0%2C%22endReservationTime%22:0}}',
    'service-off': '0',
    '_lxsdk_s': '1727941ce6e-1da-a41-477%7C%7C2',
}

headers = {
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Cache-Control': 'no-cache',
    'Accept': 'application/json',
    'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Mobile Safari/537.36',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Origin': 'https://h5.waimai.meituan.com',
    'Sec-Fetch-Site': 'same-site',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Dest': 'empty',
    'Referer': 'https://h5.waimai.meituan.com/waimai/mindex/home',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
}

params = (
    ('_', '1591172265546'),
    ('X-FOR-WITH', 'xeHLe2z5Y2hUQPCs8UbMEmZNUiSw4+nrZZHqDj4INLSeN2HQ6u4tZRffBF6rttfxyjP0xvh2ag6GzMGRhbL0TBFmv2MI8/h2E3UTOMhjVuCgtt+++Np22WAjx9UXDueiIQhEU1vK22qyHqYdHX/hKv9BsiK15W5IFnO07zmUghXnNSZIihwjCjjBvff8yU/mhtYtaMgsfxUKg/Q1pIlnpA=='),
)

data = {
  'startIndex': '0',
  'sortId': '0',
  'multiFilterIds': '',
  'sliderSelectCode': '',
  'sliderSelectMin': '',
  'sliderSelectMax': '',
  'geoType': '2',
  'rankTraceId': '',
  'uuid': '80787B80CF7796952A4912888693995ACE370FB0A32BF1C6735D26D217124B91',
  'platform': '3',
  'partner': '4',
  'originUrl': 'https://h5.waimai.meituan.com/waimai/mindex/home',
  'riskLevel': '71',
  'optimusCode': '10',
  'wm_latitude': '0',
  'wm_longitude': '0',
  'wm_actual_latitude': '31264839',
  'wm_actual_longitude': '119629272',
  'openh5_uuid': '80787B80CF7796952A4912888693995ACE370FB0A32BF1C6735D26D217124B91',
  '_token': 'eJxNTluPmkAY/S/zqpHrDGiyaUAQ0YKIwqpNH5DbAILIjHJp+t/Lpttsky85l++c5PwCjRmBBcdyEstNwStuwAJwM3aGwBRQMn7gnOMknocIyWgKwv89BKHIT8G18TWw+CGy7FSao58fhjvqL+OL8eJ4HwlzDABMaU0WDIPhrA2yMshmZZzRZ1DNwnvJ/LWYMquiuPs2zgFjsTyOxRGLTww+kf7T1rh/zJIsrUYWb3rqWfTZ5sqeUcOdg02moNkTKtYmPx+9qmicXn/wnbV1+rW+ZRISFCvtGoryQCQyEERy7Agn1bxndI6LXWkdO5ttt92+lA2be1fPw9Y0oGgKyjWMYWP4Kxt5ha9g99BfbvS9TIwwitIhtmzM1YGMHt8DXrit1WXPBodk2V6o3FFDV9xcN1l34iR3zs8P1JF91c3pETai5F52g1qzJylSuSR8hObFkZc3w7Q0e1eeHd3176R6zFUj89puJXmM9Fi/ztq+XllwHovqjojp0ebSdi/I6rLipecL4lOS3DRjM9noK2uCbSMktHqiWlCZYcgkBaGBEYgZJI57sjK3xNEyuzAB0ROpNzF5BIewqv11/xIxhlrseLarBIc0fXsDv/8Al0+4OA=='
}

response = requests.post('https://i.waimai.meituan.com/openh5/homepage/poilist', headers=headers, params=params, cookies=cookies, data=data)
print(response.json())
#NB. Original query string below. It seems impossible to parse and
#reproduce query strings 100% accurately so the one below is given
#in case the reproduced version is not "correct".
# response = requests.post('https://i.waimai.meituan.com/openh5/homepage/poilist?_=1591172265546&X-FOR-WITH=xeHLe2z5Y2hUQPCs8UbMEmZNUiSw4%2BnrZZHqDj4INLSeN2HQ6u4tZRffBF6rttfxyjP0xvh2ag6GzMGRhbL0TBFmv2MI8%2Fh2E3UTOMhjVuCgtt%2B%2B%2BNp22WAjx9UXDueiIQhEU1vK22qyHqYdHX%2FhKv9BsiK15W5IFnO07zmUghXnNSZIihwjCjjBvff8yU%2FmhtYtaMgsfxUKg%2FQ1pIlnpA%3D%3D', headers=headers, cookies=cookies, data=data)
