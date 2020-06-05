import requests

url = "http://www.kuwo.cn/api/www/search/searchMusicBykeyWord?key=五月天&reqId=ad058ec0-7c72-11ea-b79b-01371849499f&pn=1&rn=30"

payload = {}
headers = {
'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.92 Safari/537.36',
'csrf': '5SFG3LST86Y',
'Cookie': '_ga=GA1.2.87011031.1586664819; _gid=GA1.2.1609431915.1586664819; Hm_lvt_cdb524f42f0ce19b169a8071123a4797=1586657335; Hm_lpvt_cdb524f42f0ce19b169a8071123a4797=1586664819; kw_token=5SFG3LST86Y; _gat=1',
'Referer': 'http://www.kuwo.cn/search/list?key=%E4%B8%8B%E5%B1%B1'
}

response = requests.request("GET", url, headers=headers, data = payload)

print(response.text.encode('utf8'))
