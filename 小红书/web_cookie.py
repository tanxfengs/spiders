class XhsWebCookie:
    def __init__(self):


        self.headers = {
            'Host': 'www.xiaohongshu.com',
            'pragma': 'no-cache',
            'cache-control': 'no-cache',
            'sec-ch-ua': '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
            'sec-ch-ua-mobile': '?0',
            'upgrade-insecure-requests': '1',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36',
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-user': '?1',
            'sec-fetch-dest': 'document',
            'referer': 'https://www.xiaohongshu.com/web-login/canvas?redirectPath=http%3A%2F%2Fwww.xiaohongshu.com%2Fdiscovery%2Fitem%2F6109149c000000002103ca3c',
            'accept-language': 'zh-CN,zh;q=0.9',
        }
        self.json_headers = {
            'Host': 'www.xiaohongshu.com',
            'pragma': 'no-cache',
            'cache-control': 'no-cache',
            'sec-ch-ua': '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
            'sec-ch-ua-mobile': '?0',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36',
            'content-type': 'application/json',
            'accept': '*/*',
            'origin': 'https://www.xiaohongshu.com',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'referer': 'https://www.xiaohongshu.com/web-login/canvas?redirectPath=http%3A%2F%2Fwww.xiaohongshu.com%2Fdiscovery%2Fitem%2F6109149c000000002103ca3c',
            'accept-language': 'zh-CN,zh;q=0.9',
        }

    def get_sign(self):
        # 随机一个
        user_agent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36'
        audio = random.uniform(100, 104)
        # 模拟canvas指纹
        fp = md5(str(random.uniform(1, 1000)))
        encrypt_str = f'{user_agent}~~~false~~~zh-CN~~~24~~~8~~~12~~~-480~~~Asia/Shanghai~~~1~~~1~~~1~~~1~~~unknown~~~Win32~~~Chrome PDF Plugin::Portable Document Format::application/x-google-chrome-pdf~pdf,Chrome PDF Viewer::::application/pdf~pdf,Native Client::::application/x-nacl~,application/x-pnacl~~~~canvas winding:yes~canvas fp:{fp}~~~false~~~false~~~false~~~false~~~false~~~0;false;false~~~4;7;8~~~{audio}'
        return user_agent, encrypt_str, md5(encrypt_str + 'hasaki')

    def get_cookies(self):
        session = requests.Session()
        user_agent, sign, _id = self.get_sign()
        self.headers['user-agent'] = user_agent
        # 获取trace_id
        res = session.get('https://www.xiaohongshu.com/discovery/item/6109149c000000002103ca3c', 
                          headers=self.headers, allow_redirects=False)
        # session
        self.json_headers['user-agent'] = user_agent
        fp = {"id": _id, "sign": sign}
        params = {'p': 'cc'}
        # 验证指纹
        res = session.post('https://www.xiaohongshu.com/fe_api/burdock/v2/shield/registerCanvas',
                           headers=self.json_headers, params=params, json=fp,)
        data = res.json()
        if not data.get('success'):
            return None
        # print(session.cookies)
        # 获取可正常请求的cookie
        return dict(session.cookies)
