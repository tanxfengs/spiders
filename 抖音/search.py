import requests

from spiders.C_utils.utils import get_param

session = requests.Session()
cookies = {
    'odin_tt': 'f2a34f0be9eb473f74562bdd2114cbc21a86a5a2c24889dde6f44ee6ba64b2cb2284f5dbd74ff72bd6c316189369c63a',
}

headers = {
    'path': '/aweme/v1/general/search/single/?manifest_version_code=100201&_rticket=1591320283559&app_type=normal&iid=109046625531&channel=nubiamm_xh&device_type=NX563J&language=zh&resolution=1080*1920&openudid=ab6e0ddd0803038c&update_version_code=10209900&cdid=ae1620f3-5acd-4747-b76b-58b8ac5a436a&os_api=28&dpi=480&ac=wifi&device_id=38634977358&mcc_mnc=46000&os_version=9&version_code=100200&app_name=aweme&version_name=10.2.0&device_brand=nubia&ssmix=a&device_platform=android&aid=1128&ts=1591320282',
    'method': 'POST',
    'schema': 'https',
    'authority': 'search-lf.amemv.com',
    'Host': 'search-lf.amemv.com',
    'x-ss-req-ticket': '1591319616819',
    'x-tt-token': '00c5b6a802512eabdac88f2ec7e45ca637012fb5e6819de9dade4baa01cd0be518272928cc1170c154e8540c6eb7a4eca118f316a37911407db4a353c8a2bf2db3f9326143e6b791142e630f73a1a28d51a5d-1.0.0',
    'sdk-version': '1',
    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'x-ss-stub': '6F4825B6B03A5CDFDD40543353697B05',
    'x-ss-dp': '1128',
    'x-tt-trace-id': '00-820a5eac098fed2f84edf2a5c4450468-820a5eac098fed2f-01',
    'user-agent': 'com.ss.android.ugc.aweme/100201 (Linux; U; Android 9; zh_CN; NX563J; Build/PKQ1.181021.001; Cronet/TTNetVersion:79d23018 2020-02-03 QuicVersion:ac58aac6 2020-01-20)',
    'x-khronos': '1591319616',
    'x-gorgon': '0401c0fe0001f53fddb74a791588a76faefe9522289ccdec1add',
}

params = (
    ('manifest_version_code', '100201'),
    ('_rticket', '1591319616820'),
    ('app_type', 'normal'),
    ('iid', '109046625531'),
    ('channel', 'nubiamm_xh'),
    ('device_type', 'NX563J'),
    ('language', 'zh'),
    ('resolution', '1080*1920'),
    ('openudid', 'ab6e0ddd0803038c'),
    ('update_version_code', '10209900'),
    ('cdid', 'ae1620f3-5acd-4747-b76b-58b8ac5a436a'),
    ('os_api', '28'),
    ('dpi', '480'),
    ('ac', 'wifi'),
    ('device_id', '38634977358'),
    ('mcc_mnc', '46000'),
    ('os_version', '9'),
    ('version_code', '100200'),
    ('app_name', 'aweme'),
    ('version_name', '10.2.0'),
    ('device_brand', 'nubia'),
    ('ssmix', 'a'),
    ('device_platform', 'android'),
    ('aid', '1128'),
    ('ts', '1591319616'),
)

data = 'keyword=大司马&offset=0&count=20&is_pull_refresh=0&search_source=search_history&hot_search=0&latitude=0.0&longitude=0.0&search_id=&query_correct_type=1&mac_address=DC%3AF0%3A90%3A99%3A23%3A1C&is_filter_search=0&sort_type=0&publish_time=0&disable_synthesis=0&multi_mod=0&single_filter_aladdin=0&client_width=360&dynamic_type=0&epidemic_card_type=0'
data = get_param(data)
response = requests.post('https://search-lf.amemv.com/aweme/v1/general/search/single/?manifest_version_code=100201&_rticket=1591320283559&app_type=normal&iid=109046625531&channel=nubiamm_xh&device_type=NX563J&language=zh&resolution=1080*1920&openudid=ab6e0ddd0803038c&update_version_code=10209900&cdid=ae1620f3-5acd-4747-b76b-58b8ac5a436a&os_api=28&dpi=480&ac=wifi&device_id=38634977358&mcc_mnc=46000&os_version=9&version_code=100200&app_name=aweme&version_name=10.2.0&device_brand=nubia&ssmix=a&device_platform=android&aid=1128&ts=1591320282', headers=headers, cookies=cookies, data=data)
print(response.json())

#NB. Original query string below. It seems impossible to parse and
#reproduce query strings 100% accurately so the one below is given
#in case the reproduced version is not "correct".
# response = requests.post('https://search-lf.amemv.com/aweme/v1/general/search/single/?manifest_version_code=100201&_rticket=1591319616820&app_type=normal&iid=109046625531&channel=nubiamm_xh&device_type=NX563J&language=zh&resolution=1080*1920&openudid=ab6e0ddd0803038c&update_version_code=10209900&cdid=ae1620f3-5acd-4747-b76b-58b8ac5a436a&os_api=28&dpi=480&ac=wifi&device_id=38634977358&mcc_mnc=46000&os_version=9&version_code=100200&app_name=aweme&version_name=10.2.0&device_brand=nubia&ssmix=a&device_platform=android&aid=1128&ts=1591319616', headers=headers, cookies=cookies, data=data)
