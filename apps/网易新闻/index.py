# @Time    : 2020-06-06 21:20
# @Author  : LavÖz
# @File    : index.py.py
# @Software: PyCharm

import frida, sys

with open("./index.js", "r", encoding="utf8") as f:
    jscode = f.read()


"""
455709e07722eabb8b5eeaf67ef44d71ffb53596-5a11-4600-8027-94d3684b3e842020-04-27T05:22:02Z1.02427400222b0ad4cf54d0ab3b3b3acbf85ae3f44

455709e07722eabb8b5eeaf67ef44d71bb7ef6ae-8107-4cd1-9e77-4f128ef4fb932020-04-27T05:04:59Z1.02427400ba78adbc96e93232332eeb721d4065604

"""


def message(message, data):
    if message["type"] == "send":
        try:
            print("[*]", message["payload"])
        except:
            print("============")

            print(message)
            print("============")

    else:
        print(message)


if __name__ == '__main__':
    # 先打开app进程
    process = frida.get_remote_device().attach("com.netease.newsreader.activity")
    script = process.create_script(jscode)
    script.on("message", message)
    script.load()
    sys.stdin.read()
