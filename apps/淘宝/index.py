import requests

cookies = {
    'enc': '32MuV5qVmbadXHPGtuZpYfBxzNIxx%2FKmlgXRIfXeoxg2F%2Bk6JQ1I2PkxwXkRLbe7K%2BHmvKNddidt4U3WlRZlBglyMYauukrTkEtuulT3ULqi7%2Fui0QZmlJXjPyHk0uai',
}

headers = {
    'x-features': '27',
    'x-sgext': '923',
    #'c-launch-info': '0,0,1589214788039,1589213421000,2',
    #'x-page-name': 'com.taobao.search.searchdoor.SearchDoorActivity',
    'x-location': '116.410344%2C39.916295',
    'user-agent': 'MTOPSDK%2F3.1.1.7+%28Android%3B5.1.1%3Bsamsung%3Bsm-j200g%29',
    'x-ttid': '1568707461534%40taobao_android_9.0.0',
    'cache-control': 'no-cache',
    #'a-orange-q': 'appKey=21646297&appVersion=9.0.0&clientAppIndexVersion=1120200512025500050&clientVersionIndexVersion=0',
    'x-region-channel': 'CN',
    'x-appkey': '21646297',
    #'x-nq': 'WIFI',
    'x-mini-wua': 'HHnB_2V0FvWULaNwLfqviXMcUajeU65ojGnfrvrM%2BUDgZ50e8e1w%2BhKshDyhCtd0n6%2B6FfJfXe9hkxAO2wXesXZ1hjB2crq8TkQR%2Ft9vltD5v5Q%2FhBqfhyehyVHM%2BgW5V33ul',
    #'x-c-traceid': 'Xp5VKmXjfmcDAOnrqFPqao6e1589214788039005218465',
    #'A-SLIDER-Q': 'appKey%3D21646297%26ver%3D1589183836902',
    'x-app-conf-v': '19',
    'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
    'x-bx-version': '6.4.21', #瞎写
    'x-pv': '6.3',
    'x-t': '1589246223',
    'x-app-ver': '9.0.1', #瞎写
    #'f-refer': 'mtop',
    #'x-nettype': 'WIFIs', #瞎写
    'x-utdid': 'Xp5VKmXjfmcDAOnrqFPqao6e',
    #'x-umt': '4dRLUydLOpuK2jVyBmrltoniYBSDtxws', #瞎写
    'x-devid': 'AsAC61Lbd0qHtYot2g7Tj5WWx4hsHm5689B3JIDLaDjw',
    'x-sign': 'azYBCM002xAAHHzIbqGQVkm95Tu9bHzMfevnWZtSs%2BUi0Th5TrjPZcRh35tcqtKXFFJazTT3DQ6%2FhrjILP04i677rd0svHzMfLx8zH',
    #'x-page-url': 'http%3A%2F%2Fs.m.taobao.com%2Fh5entry',
   # 'Host': 'guide-acs.m.taobao.com',
}

params = (
    ('data',
     '{"LBS":"{\\"SG_TMCS_1H_DS\\":\\"{\\\\\\"stores\\\\\\":[]}\\",\\"SG_TMCS_FRESH_MARKET\\":\\"{\\\\\\"stores\\\\\\":[]}\\",\\"TB\\":\\"{\\\\\\"stores\\\\\\":[{\\\\\\"code\\\\\\":\\\\\\"202554127\\\\\\",\\\\\\"type\\\\\\":\\\\\\"4\\\\\\"}]}\\",\\"TMALL_MARKET_B2C\\":\\"{\\\\\\"stores\\\\\\":[]}\\",\\"TMALL_MARKET_O2O\\":\\"{\\\\\\"stores\\\\\\":[{\\\\\\"code\\\\\\":\\\\\\"238792224\\\\\\",\\\\\\"bizType\\\\\\":\\\\\\"DELIVERY_TIME_HALF_DAY\\\\\\",\\\\\\"type\\\\\\":\\\\\\"CHOOSE_ADDR\\\\\\"}]}\\"}","URL_REFERER_ORIGIN":"https://s.m.taobao.com/h5entry","ad_type":"1.0","apptimestamp":"1589214788","areaCode":"CN","brand":"samsung","cityCode":"110100","countryNum":"156","device":"sm-j200g","editionCode":"CN","filterEmpty":"true","filterUnused":"true","from":"suggest_all-query","homePageVersion":"v6","imei":"865166027629610","imsi":"460004192385898","info":"wifi","isEnterSrpSearch":"true","itemfields":"commentCount,newDsr","jarvisDisable":"true","latitude":"39.916295","layeredSrp":"true","longitude":"116.410344","n":"10","needTabs":"true","network":"wifi","new_shopstar":"true","page":"1","pos":"3_0","q":"\u5C0F\u7C7310pro","rainbow":"12995,13104,12702,11686,13407,14071,13834,13970","referrer":"http://s.m.taobao.com/search.htm?q=%E5%B0%8F%E7%B1%B310&spm=a2141.7631694.0.0","schemaType":"auction","searchDoorFrom":"srp","searchFramework":"true","search_action":"initiative","search_wap_mall":"false","setting_on":"imgBanners,userdoc,tbcode,pricerange,localshop,smartTips,firstCat,dropbox,realsale,insertTexts,tabs","showspu":"true","sputips":"on","style":"list","subtype":"text","sugg":"\u5C0F\u7C7310_3_0","suggest_rn":"bucketid_12-rn_41267aa6-451f-4995-b495-38b080034154","sversion":"8.0","ttid":"1568707461534@taobao_android_9.0.0","utd_id":"Xp5VKmXjfmcDAOnrqFPqao6e","vm":"nw"}'),
     #'{"LBS":"{\\"SG_TMCS_1H_DS\\":\\"{\\\\\\"stores\\\\\\":[]}\\",\\"SG_TMCS_FRESH_MARKET\\":\\"{\\\\\\"stores\\\\\\":[]}\\",\\"TB\\":\\"{\\\\\\"stores\\\\\\":[{\\\\\\"code\\\\\\":\\\\\\"202554127\\\\\\",\\\\\\"type\\\\\\":\\\\\\"4\\\\\\"}]}\\",\\"TMALL_MARKET_B2C\\":\\"{\\\\\\"stores\\\\\\":[]}\\",\\"TMALL_MARKET_O2O\\":\\"{\\\\\\"stores\\\\\\":[{\\\\\\"code\\\\\\":\\\\\\"238792224\\\\\\",\\\\\\"bizType\\\\\\":\\\\\\"DELIVERY_TIME_HALF_DAY\\\\\\",\\\\\\"type\\\\\\":\\\\\\"CHOOSE_ADDR\\\\\\"}]}\\"}","URL_REFERER_ORIGIN":"https://s.m.taobao.com/h5entry","ad_type":"1.0","apptimestamp":"1589214788","areaCode":"CN","brand":"samsung","cityCode":"110100","countryNum":"156","device":"sm-j200g","editionCode":"CN","filterEmpty":"true","filterUnused":"true","from":"suggest_all-query","homePageVersion":"v6","imei":"865166027629610","imsi":"460004192385898","info":"wifi","isEnterSrpSearch":"true","itemfields":"commentCount,newDsr","jarvisDisable":"true","latitude":"39.916295","layeredSrp":"true","longitude":"116.410344","n":"10","needTabs":"true","network":"wifi","new_shopstar":"true","page":"1","pos":"3_0","q":"魅族17","rainbow":"12995,13104,12702,11686,13407,14071,13834,13970","referrer":"http://s.m.taobao.com/search.htm?q=%E9%AD%85%E6%97%8F17&spm=a2141.7631694.0.0","schemaType":"auction","searchDoorFrom":"srp","searchFramework":"true","search_action":"initiative","search_wap_mall":"false","setting_on":"imgBanners,userdoc,tbcode,pricerange,localshop,smartTips,firstCat,dropbox,realsale,insertTexts,tabs","showspu":"true","sputips":"on","style":"list","subtype":"text","sugg":"\u5C0F\u7C7310_3_0","suggest_rn":"bucketid_12-rn_41267aa6-451f-4995-b495-38b080034154","sversion":"8.0","ttid":"1568707461534@taobao_android_9.0.0","utd_id":"Xp5VKmXjfmcDAOnrqFPqao6e","vm":"nw"}'),
)

response = requests.get('https://guide-acs.m.taobao.com/gw/mtop.taobao.wsearch.appsearch/1.0/', headers=headers,
                        params=params)
print(response.json())
# NB. Original query string below. It seems impossible to parse and
# reproduce query strings 100% accurately so the one below is given
# in case the reproduced version is not "correct".
# response = requests.get('https://guide-acs.m.taobao.com/gw/mtop.taobao.wsearch.appsearch/1.0/?data=%7B%22LBS%22%3A%22%7B%5C%22SG_TMCS_1H_DS%5C%22%3A%5C%22%7B%5C%5C%5C%22stores%5C%5C%5C%22%3A%5B%5D%7D%5C%22%2C%5C%22SG_TMCS_FRESH_MARKET%5C%22%3A%5C%22%7B%5C%5C%5C%22stores%5C%5C%5C%22%3A%5B%5D%7D%5C%22%2C%5C%22TB%5C%22%3A%5C%22%7B%5C%5C%5C%22stores%5C%5C%5C%22%3A%5B%7B%5C%5C%5C%22code%5C%5C%5C%22%3A%5C%5C%5C%22202554127%5C%5C%5C%22%2C%5C%5C%5C%22type%5C%5C%5C%22%3A%5C%5C%5C%224%5C%5C%5C%22%7D%5D%7D%5C%22%2C%5C%22TMALL_MARKET_B2C%5C%22%3A%5C%22%7B%5C%5C%5C%22stores%5C%5C%5C%22%3A%5B%5D%7D%5C%22%2C%5C%22TMALL_MARKET_O2O%5C%22%3A%5C%22%7B%5C%5C%5C%22stores%5C%5C%5C%22%3A%5B%7B%5C%5C%5C%22code%5C%5C%5C%22%3A%5C%5C%5C%22238792224%5C%5C%5C%22%2C%5C%5C%5C%22bizType%5C%5C%5C%22%3A%5C%5C%5C%22DELIVERY_TIME_HALF_DAY%5C%5C%5C%22%2C%5C%5C%5C%22type%5C%5C%5C%22%3A%5C%5C%5C%22CHOOSE_ADDR%5C%5C%5C%22%7D%5D%7D%5C%22%7D%22%2C%22URL_REFERER_ORIGIN%22%3A%22https%3A%2F%2Fs.m.taobao.com%2Fh5entry%22%2C%22ad_type%22%3A%221.0%22%2C%22apptimestamp%22%3A%221589214788%22%2C%22areaCode%22%3A%22CN%22%2C%22brand%22%3A%22samsung%22%2C%22cityCode%22%3A%22110100%22%2C%22countryNum%22%3A%22156%22%2C%22device%22%3A%22sm-j200g%22%2C%22editionCode%22%3A%22CN%22%2C%22filterEmpty%22%3A%22true%22%2C%22filterUnused%22%3A%22true%22%2C%22from%22%3A%22suggest_all-query%22%2C%22homePageVersion%22%3A%22v6%22%2C%22imei%22%3A%22865166027629610%22%2C%22imsi%22%3A%22460004192385898%22%2C%22info%22%3A%22wifi%22%2C%22isEnterSrpSearch%22%3A%22true%22%2C%22itemfields%22%3A%22commentCount%2CnewDsr%22%2C%22jarvisDisable%22%3A%22true%22%2C%22latitude%22%3A%2239.916295%22%2C%22layeredSrp%22%3A%22true%22%2C%22longitude%22%3A%22116.410344%22%2C%22n%22%3A%2210%22%2C%22needTabs%22%3A%22true%22%2C%22network%22%3A%22wifi%22%2C%22new_shopstar%22%3A%22true%22%2C%22page%22%3A%221%22%2C%22pos%22%3A%223_0%22%2C%22q%22%3A%22%E5%B0%8F%E7%B1%B310pro%22%2C%22rainbow%22%3A%2212995%2C13104%2C12702%2C11686%2C13407%2C14071%2C13834%2C13970%22%2C%22referrer%22%3A%22http%3A%2F%2Fs.m.taobao.com%2Fsearch.htm%3Fq%3D%25E5%25B0%258F%25E7%25B1%25B310%26spm%3Da2141.7631694.0.0%22%2C%22schemaType%22%3A%22auction%22%2C%22searchDoorFrom%22%3A%22srp%22%2C%22searchFramework%22%3A%22true%22%2C%22search_action%22%3A%22initiative%22%2C%22search_wap_mall%22%3A%22false%22%2C%22setting_on%22%3A%22imgBanners%2Cuserdoc%2Ctbcode%2Cpricerange%2Clocalshop%2CsmartTips%2CfirstCat%2Cdropbox%2Crealsale%2CinsertTexts%2Ctabs%22%2C%22showspu%22%3A%22true%22%2C%22sputips%22%3A%22on%22%2C%22style%22%3A%22list%22%2C%22subtype%22%3A%22text%22%2C%22sugg%22%3A%22%E5%B0%8F%E7%B1%B310_3_0%22%2C%22suggest_rn%22%3A%22bucketid_12-rn_41267aa6-451f-4995-b495-38b080034154%22%2C%22sversion%22%3A%228.0%22%2C%22ttid%22%3A%221568707461534%40taobao_android_9.0.0%22%2C%22utd_id%22%3A%22Xp5VKmXjfmcDAOnrqFPqao6e%22%2C%22vm%22%3A%22nw%22%7D', headers=headers, cookies=cookies)
