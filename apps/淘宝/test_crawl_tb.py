import requests
import time
import json
import base64


from urllib.parse import quote

from apps.淘宝 import test_hook_td


def req(url, header):
    r = requests.get(url, headers=header, verify=False)
    print(r.status_code)
    return r.text

def gen_detail_hook_params(timestamp_10d, timestamp_14d, timestamp_14d1, item_id, pvid, scm):
    data = r'{{"detail_v":"3.3.2","exParams":"{{\"NAV_START_ACTIVITY_TIME\":\"{timestamp}\",\"NAV_TO_URL_START_TIME\":\"{timestamp1}\",\"ad_type\":\"1.0\",\"appReqFrom\":\"detail\",\"clientCachedTemplateKeys\":\"[{{\\\"id\\\":\\\"1538383035450\\\",\\\"version\\\":\\\"68\\\"}}]\",\"container_type\":\"xdetail\",\"countryCode\":\"CN\",\"cpuCore\":\"8\",\"cpuMaxHz\":\"1555200\",\"dinamic_v3\":\"true\",\"id\":\"{item_id}\",\"item_id\":\"{item_id}\",\"latitude\":\"0\",\"longitude\":\"0\",\"osVersion\":\"23\",\"phoneType\":\"Nexus 6P\",\"pvid\":\"{pvid}\",\"scm\":\"{scm}\",\"soVersion\":\"2.0\",\"spm\":\"a2141.1.pinlei_tab4.d4-0\",\"spm-cnt\":\"a2141.7631564\",\"ultron2\":\"true\",\"utdid\":\"Xb6r2HfdTvsDAG4dHHurgSCI\",\"wx_options\":\"{{animated=true, url=//item.taobao.com/item.htm?id={item_id}&pvid={pvid}&scm={scm}&spm=a2141.1.pinlei_tab4.d4-0&utparam=%7B%22x_hestia_source%22%3A%22st_fenlei_gul%22%2C%22x_object_type%22%3A%22item%22%2C%22x_mt%22%3A%228%22%2C%22x_src%22%3A%22st_fenlei_gul%22%2C%22x_pos%22%3A%221%22%2C%22x_pvid%22%3A%22{pvid}%22%2C%22x_object_id%22%3A%22{item_id}%22%2C%22home_buckets%22%3A%22%22%2C%22home_industry_id%22%3A%225%22%2C%22item_type%22%3A%22normal%22%2C%22item_id%22%3A%22{item_id}%22%7D}}\"}}","itemNumId":"{item_id}"}}'
    #data = r'{{"detail_v":"3.3.2","exParams":"{{\"NAV_START_ACTIVITY_TIME\":\"{timestamp}\",\"NAV_TO_URL_START_TIME\":\"{timestamp1}\",\"ad_type\":\"1.0\",\"appReqFrom\":\"detail\",\"clientCachedTemplateKeys\":\"[{{\\\"id\\\":\\\"1538383035450\\\",\\\"version\\\":\\\"68\\\"}}]\",\"container_type\":\"xdetail\",\"countryCode\":\"CN\",\"cpuCore\":\"8\",\"cpuMaxHz\":\"1555200\",\"dinamic_v3\":\"true\",\"id\":\"{item_id}\",\"item_id\":\"{item_id}\",\"latitude\":\"0\",\"longitude\":\"0\",\"osVersion\":\"23\",\"phoneType\":\"Nexus 6P\",\"pvid\":\"{pvid}\",\"scm\":\"{scm}\",\"soVersion\":\"2.0\",\"spm\":\"a2141.1.pinlei_tab4.d3-4\",\"spm-cnt\":\"a2141.7631564\",\"u_channel\":\"ystttj\",\"ultron2\":\"true\",\"umpChannel\":\"ystttj\",\"utdid\":\"Xb6r2HfdTvsDAG4dHHurgSCI\",\"wx_options\":\"{{animated=true, url=https://item.taobao.com/item.htm?id={item_id}&pvid={pvid}&scm={scm}&spm=a2141.1.pinlei_tab4.d3-4&u_channel=ystttj&umpChannel=ystttj&utparam=%7B%22home_buckets%22%3A%22%22%2C%22home_industry_id%22%3A%225%22%2C%22item_type%22%3A%22tttm%22%2C%22item_id%22%3A%22{item_id}%22%7D}}\"}}","itemNumId":"{item_id}"}}'
    #print('ori_data:',data)
    #print('format_data:',data.format(timestamp=timestamp_14d, timestamp1=timestamp_14d1, item_id=item_id, pvid=pvid, scm=scm))
    hashMap1 = {
        "deviceId":"AiomvfL6hhU_hX6u80I0DM_cG952UaEtYQuomLzpl4vH",
        "appKey":"21646297",
        "utdid":"Xb6r2HfdTvsDAG4dHHurgSCI",
        "x-features":"27",
        "ttid":"255200@taobao_android_9.1.0",
        "v":"6.0",
        "sid":None,
        "ad_type":"1.0",
        "t": timestamp_10d,
        "api":"mtop.taobao.detail.getdetail",
        "data":data.format(timestamp=timestamp_14d, timestamp1=timestamp_14d1, item_id=item_id, pvid=pvid, scm=scm),
        "uid":None,
    }
    hashMap2 = {
        "pageName":"com.taobao.android.detail.wrapper.activity.DetailActivity",
        "pageId":"http://item.taobao.com/item.htm",
    }

    return hashMap1,hashMap2

def gen_list_hook_params(timestamp):

    data = r'{"containerParams":"{\"category_home_main\":{\"passInfo\":{\"categoryId\":\"1\",\"scm\":\"1.1.1.1\",\"spm\":\"2.2.2.2\"},\"count\":\"300\",\"pNum\":1,\"pSize\":\"20\",\"floorDataKey\":\"offline_auto_st_fenlei_gul_5\",\"categoryId\":\"5\"}}"}'
    
    hashMap1 = {
        "deviceId":"AiomvfL6hhU_hX6u80I0DM_cG952UaEtYQuomLzpl4vH",
        "appKey":"21646297",
        "utdid":"Xb6r2HfdTvsDAG4dHHurgSCI",
        "x-features":"27",
        "ttid":"255200@taobao_android_9.1.0",
        "v":"1.0",
        "sid":None,
        "t": timestamp,
        "api": "mtop.taobao.wireless.home.awesome.category",
        "data": data,
        "uid": None,
    }
    hashMap2 = {
        "pageName":"com.taobao.tao.TBMainActivity",
        "pageId":"https://g.alicdn.com/tbsearchwireless-pages/new-categories/0.0.28/pages/index/index.weex.js",
    }

    return hashMap1,hashMap2

def gen_detail_url_params(timestamp, timestamp1, item_id, pvid, scm):
    #detail_url = "https://trade-acs.m.taobao.com/gw/mtop.taobao.detail.getdetail/6.0/?data=%7B%22detail_v%22%3A%223.3.2%22%2C%22exParams%22%3A%22%7B%5C%22NAV_START_ACTIVITY_TIME%5C%22%3A%5C%22{timestamp}%5C%22%2C%5C%22NAV_TO_URL_START_TIME%5C%22%3A%5C%22{timestamp1}%5C%22%2C%5C%22ad_type%5C%22%3A%5C%221.0%5C%22%2C%5C%22appReqFrom%5C%22%3A%5C%22detail%5C%22%2C%5C%22clientCachedTemplateKeys%5C%22%3A%5C%22%5B%7B%5C%5C%5C%22id%5C%5C%5C%22%3A%5C%5C%5C%221538383035450%5C%5C%5C%22%2C%5C%5C%5C%22version%5C%5C%5C%22%3A%5C%5C%5C%2268%5C%5C%5C%22%7D%5D%5C%22%2C%5C%22container_type%5C%22%3A%5C%22xdetail%5C%22%2C%5C%22countryCode%5C%22%3A%5C%22CN%5C%22%2C%5C%22cpuCore%5C%22%3A%5C%228%5C%22%2C%5C%22cpuMaxHz%5C%22%3A%5C%221555200%5C%22%2C%5C%22dinamic_v3%5C%22%3A%5C%22true%5C%22%2C%5C%22id%5C%22%3A%5C%22{item_id}%5C%22%2C%5C%22item_id%5C%22%3A%5C%22{item_id}%5C%22%2C%5C%22latitude%5C%22%3A%5C%220%5C%22%2C%5C%22longitude%5C%22%3A%5C%220%5C%22%2C%5C%22osVersion%5C%22%3A%5C%2223%5C%22%2C%5C%22phoneType%5C%22%3A%5C%22Nexus+6P%5C%22%2C%5C%22pvid%5C%22%3A%5C%22{pvid}%5C%22%2C%5C%22scm%5C%22%3A%5C%22{scm}%5C%22%2C%5C%22soVersion%5C%22%3A%5C%222.0%5C%22%2C%5C%22spm%5C%22%3A%5C%22a2141.1.pinlei_tab4.d3-2%5C%22%2C%5C%22spm-cnt%5C%22%3A%5C%22a2141.7631564%5C%22%2C%5C%22u_channel%5C%22%3A%5C%22ystttj%5C%22%2C%5C%22ultron2%5C%22%3A%5C%22true%5C%22%2C%5C%22umpChannel%5C%22%3A%5C%22ystttj%5C%22%2C%5C%22utdid%5C%22%3A%5C%22Xb6r2HfdTvsDAG4dHHurgSCI%5C%22%2C%5C%22wx_options%5C%22%3A%5C%22%7Banimated%3Dtrue%2C+url%3Dhttps%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D{item_id}%26pvid%3D{pvid}%26scm%3D{scm}%26spm%3Da2141.1.pinlei_tab4.d3-2%26u_channel%3Dystttj%26umpChannel%3Dystttj%26utparam%3D%257B%2522home_buckets%2522%253A%2522%2522%252C%2522home_industry_id%2522%253A%25225%2522%252C%2522item_type%2522%253A%2522tttm%2522%252C%2522item_id%2522%253A%2522{item_id}%2522%257D%7D%5C%22%7D%22%2C%22itemNumId%22%3A%22{item_id}%22%7D"
    detail_url = "https://trade-acs.m.taobao.com/gw/mtop.taobao.detail.getdetail/6.0/?data=%7B%22detail_v%22%3A%223.3.2%22%2C%22exParams%22%3A%22%7B%5C%22NAV_START_ACTIVITY_TIME%5C%22%3A%5C%22{timestamp}%5C%22%2C%5C%22NAV_TO_URL_START_TIME%5C%22%3A%5C%22{timestamp1}%5C%22%2C%5C%22ad_type%5C%22%3A%5C%221.0%5C%22%2C%5C%22appReqFrom%5C%22%3A%5C%22detail%5C%22%2C%5C%22clientCachedTemplateKeys%5C%22%3A%5C%22%5B%7B%5C%5C%5C%22id%5C%5C%5C%22%3A%5C%5C%5C%221538383035450%5C%5C%5C%22%2C%5C%5C%5C%22version%5C%5C%5C%22%3A%5C%5C%5C%2268%5C%5C%5C%22%7D%5D%5C%22%2C%5C%22container_type%5C%22%3A%5C%22xdetail%5C%22%2C%5C%22countryCode%5C%22%3A%5C%22CN%5C%22%2C%5C%22cpuCore%5C%22%3A%5C%228%5C%22%2C%5C%22cpuMaxHz%5C%22%3A%5C%221555200%5C%22%2C%5C%22dinamic_v3%5C%22%3A%5C%22true%5C%22%2C%5C%22id%5C%22%3A%5C%22{item_id}%5C%22%2C%5C%22item_id%5C%22%3A%5C%22{item_id}%5C%22%2C%5C%22latitude%5C%22%3A%5C%220%5C%22%2C%5C%22longitude%5C%22%3A%5C%220%5C%22%2C%5C%22osVersion%5C%22%3A%5C%2223%5C%22%2C%5C%22phoneType%5C%22%3A%5C%22Nexus+6P%5C%22%2C%5C%22pvid%5C%22%3A%5C%22{pvid}%5C%22%2C%5C%22scm%5C%22%3A%5C%22{scm}%5C%22%2C%5C%22soVersion%5C%22%3A%5C%222.0%5C%22%2C%5C%22spm%5C%22%3A%5C%22a2141.1.pinlei_tab4.d4-0%5C%22%2C%5C%22spm-cnt%5C%22%3A%5C%22a2141.7631564%5C%22%2C%5C%22ultron2%5C%22%3A%5C%22true%5C%22%2C%5C%22utdid%5C%22%3A%5C%22Xb6r2HfdTvsDAG4dHHurgSCI%5C%22%2C%5C%22wx_options%5C%22%3A%5C%22%7Banimated%3Dtrue%2C+url%3D%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D{item_id}%26pvid%3D{pvid}%26scm%3D{scm}%26spm%3Da2141.1.pinlei_tab4.d4-0%26utparam%3D%257B%2522x_hestia_source%2522%253A%2522st_fenlei_gul%2522%252C%2522x_object_type%2522%253A%2522item%2522%252C%2522x_mt%2522%253A%25228%2522%252C%2522x_src%2522%253A%2522st_fenlei_gul%2522%252C%2522x_pos%2522%253A%25221%2522%252C%2522x_pvid%2522%253A%2522{pvid}%2522%252C%2522x_object_id%2522%253A%2522{item_id}%2522%252C%2522home_buckets%2522%253A%2522%2522%252C%2522home_industry_id%2522%253A%25225%2522%252C%2522item_type%2522%253A%2522normal%2522%252C%2522item_id%2522%253A%2522{item_id}%2522%257D%7D%5C%22%7D%22%2C%22itemNumId%22%3A%22{item_id}%22%7D"
    return detail_url.format(timestamp=timestamp, timestamp1=timestamp1, item_id=item_id, pvid=pvid, scm=scm)

#'com.taobao.android.detail.wrapper.activity.DetailActivity'
#'trade-acs.m.taobao.com'
#https%3A%2F%2Fg.alicdn.com%2Ftbsearchwireless-pages%2Fnew-categories%2F0.0.28%2Fpages%2Findex%2Findex.weex.js
#'http%3A%2F%2Fitem.taobao.com%2Fitem.htm'
def gen_req_headers(list_req, timestamp, page_name, host, x_page_url, x_sign, x_mini_wua, x_umt):
    header = {
    'x-features': '1051' if list_req else '27',
    'x-sgext': '923',
    'c-launch-info': '3,0,1575429485394,1575341916000,3',
    'x-page-name': page_name,
    'user-agent': 'MTOPSDK%2F3.1.1.7+%28Android%3B6.0%3BHuawei%3BNexus+6P%29',
    'x-ttid': '255200%40taobao_android_9.1.0',
    'cache-control': 'no-cache',
    'a-orange-q': 'appKey=21646297&appVersion=9.1.0&clientAppIndexVersion=1120191204110702376&clientVersionIndexVersion=0',
    'x-region-channel': 'CN',
    'x-appkey': '21646297',
    'x-nq': 'WIFI',
    'x-mini-wua': x_mini_wua,
    'x-c-traceid': 'Xb6r2HfdTvsDAG4dHHurgSCI1575429485394009919033',
    'A-SLIDER-Q': 'appKey%3D21646297%26ver%3D1575426197715',
    'x-app-conf-v': '19',
    'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
    'x-bx-version': '6.4.11',
    'x-pv': '6.3',
    'x-t': timestamp,
    'x-app-ver': '9.1.0',
    'f-refer': 'mtop',
    'x-ua': 'Nexus+6P%28Android%2F6.0%29+AliApp%28TB%2F9.1.0%29+Weex%2F0.26.4.15+1440x2392',
    #'Cookie': 't=17154d275dc85be4211c86b37f640561; enc=QYB1iTwtqPin2bSnyWqDI7%2FOvTPMrYoUFjOVBN2%2BxAZZZdE8OMzoULlbNykVVIxKksD4IHCrOGMQcTTb%2FznHMw%3D%3D; isg=AkNDthP_Gkw_ltYB0BOaZueU2QXtuNf6HEwzh3Ugn6IZNGNW_YhnSiGk3P6F; cna=GXdmFhh40jsCAd9X5cLXg6KU',
    'x-nettype': 'WIFI',
    'x-utdid': 'Xb6r2HfdTvsDAG4dHHurgSCI',
    'x-umt': x_umt,
    'x-devid': 'AiomvfL6hhU_hX6u80I0DM_cG952UaEtYQuomLzpl4vH',
    'x-sign': x_sign,
    'x-page-url': x_page_url,
    'Host': host,
    'Accept-Encoding': 'gzip',
    'Connection': 'Keep-Alive'
    }
    return header

def start():
    #注入Hook代码
    script = test_hook_td.hook_prepare()

    timestamp_w = time.time()
    timestamp_10d = str(int(timestamp_w))
    #鞋靴
    #list_url = 'https://guide-acs.m.taobao.com/gw/mtop.taobao.wireless.home.awesome.category/1.0/?data=%7B%22containerParams%22%3A%22%7B%5C%22category_home_main%5C%22%3A%7B%5C%22passInfo%5C%22%3A%7B%5C%22categoryId%5C%22%3A%5C%221%5C%22%2C%5C%22scm%5C%22%3A%5C%221.1.1.1%5C%22%2C%5C%22spm%5C%22%3A%5C%222.2.2.2%5C%22%7D%2C%5C%22count%5C%22%3A%5C%22300%5C%22%2C%5C%22pNum%5C%22%3A0%2C%5C%22pSize%5C%22%3A%5C%2220%5C%22%2C%5C%22floorDataKey%5C%22%3A%5C%22offline_auto_st_fenlei_gul_5%5C%22%2C%5C%22categoryId%5C%22%3A%5C%225%5C%22%7D%7D%22%7D'
    list_url = 'https://guide-acs.m.taobao.com/gw/mtop.taobao.wireless.home.awesome.category/1.0/?data=%7B%22containerParams%22%3A%22%7B%5C%22category_home_main%5C%22%3A%7B%5C%22passInfo%5C%22%3A%7B%5C%22categoryId%5C%22%3A%5C%221%5C%22%2C%5C%22scm%5C%22%3A%5C%221.1.1.1%5C%22%2C%5C%22spm%5C%22%3A%5C%222.2.2.2%5C%22%7D%2C%5C%22count%5C%22%3A%5C%22300%5C%22%2C%5C%22pNum%5C%22%3A1%2C%5C%22pSize%5C%22%3A%5C%2220%5C%22%2C%5C%22floorDataKey%5C%22%3A%5C%22offline_auto_st_fenlei_gul_5%5C%22%2C%5C%22categoryId%5C%22%3A%5C%225%5C%22%7D%7D%22%7D'
    #生成hook 列表页需要的参数
    hashmap1,hashmap2 = gen_list_hook_params(timestamp_10d)

    #执行Hook 获得x-sign等参数
    args_map = script.exports.getsig(timestamp_10d, hashmap1, hashmap2)
    args_map = json.loads(args_map)
    #生成请求列表页需要的header
    req_headers = gen_req_headers(True, timestamp_10d, "com.taobao.tao.TBMainActivity", "guide-acs.m.taobao.com", "https%3A%2F%2Fg.alicdn.com%2Ftbsearchwireless-pages%2Fnew-categories%2F0.0.28%2Fpages%2Findex%2Findex.weex.js", quote(args_map["x_sign"]), quote(args_map["x_mini_wua"]), quote(args_map["x_umt"]))
    
    #请求列表页
    list_page_source = req(list_url, req_headers)
    data_lists = json.loads(list_page_source)
    print(list_page_source)
    listItems = data_lists['data']['containers']['base']['category_home_main']['sections'][0]['categoryData']['listItems']
    for i in listItems:
        timestamp_w = time.time()
        timestamp_10d = str(int(timestamp_w))
        timestamp_des = int(str(timestamp_w)[:14].replace('.',''))
        timestamp_14d = str(timestamp_des)
        timestamp_14d1 = str(timestamp_des-100)

        #生成hook 详细页页需要的参数
        hashmap1,hashmap2 = gen_detail_hook_params(timestamp_10d, timestamp_14d, timestamp_14d1, i['itemId'], i['pvid'], i['scm'])

        #执行Hook 获得x-sign等参数
        args_map = script.exports.getsig(timestamp_10d, hashmap1, hashmap2)
        args_map = json.loads(args_map)

        print(args_map)
        print(str(args_map['x_sign']))
        #生成请求详情页需要的header
        req_headers = gen_req_headers(False, timestamp_10d, "com.taobao.android.detail.wrapper.activity.DetailActivity", "trade-acs.m.taobao.com", "http%3A%2F%2Fitem.taobao.com%2Fitem.htm", quote(args_map["x_sign"]).replace('/','%2F'), quote(args_map["x_mini_wua"]).replace('/','%2F'), quote(args_map["x_umt"]).replace('/','%2F'))
    
        #生成商品详情页URL
        detail_url = gen_detail_url_params(timestamp_14d, timestamp_14d1, i['itemId'], i['pvid'], i['scm'])

        #请求商品详细页
        detail_page_source = req(detail_url, req_headers)
        #print(detail_page_source)
        data_details = json.loads(detail_page_source)
        print('商品名:', data_details['data']['item']['title'])
        print('评论数:', data_details['data']['item']['commentCount'])
start()

