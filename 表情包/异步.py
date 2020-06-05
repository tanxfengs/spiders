# @Time    : 2020-05-31 9:37
# @Author  : LavÖz
# @File    : 异步.py
# @Software: PyCharm

import requests
import aiohttp
import asyncio
from spiders.C_utils.utils import *
from uuid import uuid1



cookies = {
    'PHPSESSID': 'hvcdqvthipn0vq5ojg7oergvf1',
}

headers = {
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Cache-Control': 'no-cache',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36 Edg/83.0.478.37',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'Sec-Fetch-Site': 'cross-site',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-User': '?1',
    'Sec-Fetch-Dest': 'document',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
}


async def parse_index(queue):
    for _ in range(1, 50):
        async with aiohttp.ClientSession() as client:
            resp = await client.get(f"https://fabiaoqing.com/biaoqing/lists/page/{_}.html", headers=headers)
            response = await resp.text()
        # response = requests.get('https://fabiaoqing.com/biaoqing', headers=headers, cookies=cookies)
        print("正在抓取")
        pics = xpath(response, ".//div[@class='tagbqppdiv']//a/img/@data-original")
        for i in pics:
            print(i)
            await queue.put(i)


def parse_next():
    pass


def parse_detail():
    pass


async def save_pic(queue):
    while True:
        pic = await queue.get()
        async with aiohttp.ClientSession() as client:
            resp = await client.get(pic, headers=headers)


            # 取出图片名字
            file = pic[-5:]
            with open(str(uuid1()) +file, 'wb') as fd:
                while 1:
                    chunk = await resp.content.read(1024)  # 每次获取1024字节
                    if not chunk:
                        break
                    fd.write(chunk)

        print(f"{pic} 写入完毕")


async def main():
    queue = asyncio.Queue(maxsize=20)
    asyncio.create_task(parse_index(queue))
    con = asyncio.create_task(save_pic(queue))
    await con

asyncio.run(main())