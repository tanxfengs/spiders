import asyncio
import random
import aiohttp


async def producer(queue):
    for i in range(10):
        await queue.put(i)
        await asyncio.sleep(random.randint(1, 3))


async def consumer(queue):
    while True:
        sleep_time = await queue.get()
        size = queue.qsize()
        print(f'当前队列有：{size} 个元素')
        url = 'http://httpbin.org/delay/2'
        async with aiohttp.ClientSession() as client:
            resp = await client.get(url)
            print(await resp.json())

async def main():
    queue = asyncio.Queue(maxsize=3)
    asyncio.create_task(producer(queue))
    con = asyncio.create_task(consumer(queue))
    await con


asyncio.run(main())
