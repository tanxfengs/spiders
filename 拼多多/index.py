import requests

cookies = {
    'api_uid': 'CiU3XV6Kt1BGFQBNXRhaAg==',
    '_nano_fp': 'XpdJn5gYlpPoXqPJn9_V6y97D9cXaSLhRK0PkEs1',
    'PDDAccessToken': '',
    'ua': 'Mozilla%2F5.0%20(Linux%3B%20Android%208.0.0%3B%20Pixel%202%20XL%20Build%2FOPD1.170816.004)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F81.0.4044.92%20Mobile%20Safari%2F537.36',
    'webp': '1',
    'JSESSIONID': '6C844A5C4B5D0FA41263C52AA1E21397',
}

headers = {
    'Host': 'yangkeduo.com',
    'Pragma': 'no-cache',
    'Cache-Control': 'no-cache',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Linux; Android 8.0.0; Pixel 2 XL Build/OPD1.170816.004) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.92 Mobile Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'Referer': 'http://yangkeduo.com/search_result.html?search_key=%E5%B0%8F%E7%B1%B310&source=index&options=1&search_met_track=suggestion&refer_search_met_pos=2&refer_page_el_sn=99886&refer_page_name=search_result&refer_page_id=10015_1586830619152_l3asr0zz1d&refer_page_sn=10015',
    'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
}

params = (
    ('search_key', '\u5C0F\u7C7310'),
    ('source', 'index'),
    ('options', '1'),
    ('search_met_track', 'suggestion'),
    ('refer_search_met_pos', '2'),
    ('refer_page_el_sn', '99886'),
    ('refer_page_name', 'search_result'),
    ('refer_page_id', '10015_1586830619152_l3asr0zz1d'),
    ('refer_page_sn', '10015'),
    ('list_id', 'JXUOV76kzF'),
    ('flip', '20;5;0;0;bdd79f10-ea07-4c26-bff9-191613aaae84'),
    ('page_id', '10015_1586830636142_ovdv67kq9i'),
    ('item_index', '0'),
    ('sp', '0'),
    ('is_back', '1'),
)

response = requests.get('http://yangkeduo.com/search_result.html', headers=headers, params=params, cookies=cookies)
print(response.text)
#NB. Original query string below. It seems impossible to parse and
#reproduce query strings 100% accurately so the one below is given
#in case the reproduced version is not "correct".
# response = requests.get('http://yangkeduo.com/search_result.html?search_key=%E5%B0%8F%E7%B1%B310&source=index&options=1&search_met_track=suggestion&refer_search_met_pos=2&refer_page_el_sn=99886&refer_page_name=search_result&refer_page_id=10015_1586830619152_l3asr0zz1d&refer_page_sn=10015&list_id=JXUOV76kzF&flip=20%3B5%3B0%3B0%3Bbdd79f10-ea07-4c26-bff9-191613aaae84&page_id=10015_1586830636142_ovdv67kq9i&item_index=0&sp=0&is_back=1', headers=headers, cookies=cookies)
