import frida,sys
import time


hook_test = '''
Java.perform(
    function(){
        /*var InnerProtocolParamBuilderImpl = Java.use('mtopsdk.mtop.protocol.builder.impl.InnerProtocolParamBuilderImpl')
        InnerProtocolParamBuilderImpl.buildParams.implementation = function(param1){
            var ret_val = this.buildParams(param1)
            printHashMap(ret_val)
            return ret_val
        },*/
        var lnf = Java.use('tb.lnf')
        lnf.a.overload('java.util.HashMap', 'java.util.HashMap', 'java.lang.String', 'java.lang.String', 'boolean').implementation = function(p1, p2, p3, p4, p5){
            send('hashmap1:')
            printHashMap(p1)
            send('hashmap2:')
            printHashMap(p2)
            send('param3:'+p3)
            send('param4:'+p4)
            send('param5:'+p5)

            var ret_val =  this.a(p1, p2, p3, p4, p5)
            printHashMap(ret_val)
            return ret_val
        }

    }
)

function printHashMap(param_hm){
    var HashMap = Java.use('java.util.HashMap');
    var args_map = Java.cast(param_hm, HashMap)
    send('args_map:'+args_map.toString());
}
'''



hook_lnf_code = '''
Java.perform(
    function(){
        var HashMap = Java.use('java.util.HashMap')
        var IMiddleTierGenericComponent = Java.use('com.alibaba.wireless.security.open.middletier.IMiddleTierGenericComponent');
        IMiddleTierGenericComponent.getSign.implementation = function(a1){
            send('enter getSign')
            var args_map = Java.cast(a1, HashMap)
            send('args_map'+args_map.toString());
            var ret = this.getSign(a1)

            var ret_map = Java.cast(ret, HashMap)
            send('ret_map:'+ret_map.toString());
            return ret
        };

        var lnf = Java.use('tb.lnf');
        lnf.a.overload('java.util.Map','java.lang.String', 'boolean').implementation = function(aa1, aa2, aa3){
            //printstack()
            send('enter method a map string boolean')
            //send('aa1:'+printHashMap(aa1))
            //send('aa2:'+aa2)
            //send('aa3:'+aa3)
            var ret_str3 = this.a(aa1, aa2, aa3);
            send('ret_str3:'+ret_str3.get('INPUT'));
            return ret_str3
        };

        lnf.a.overload('java.util.HashMap','java.lang.String').implementation = function(aa1, aa2){
            send('enter method 2param')
            //send('2pram_a_a1:'+printHashMap(aa1))
            //send('2pram_a_a1:'+aa2)
            var ret_str2 = this.a(aa1, aa2);
            send('2pram_a_ret_str2:'+ret_str2);
            return ret_str2
        };

        lnf.d.implementation = function(){
            var ret = this.d()
            //send('d method:'+ret)
            return ret
        };

        var InnerProtocolParamBuilderImpl = Java.use('mtopsdk.mtop.protocol.builder.impl.InnerProtocolParamBuilderImpl')
        InnerProtocolParamBuilderImpl.buildParams.implementation = function(r19){
            //send('enter InnerProtocolParamBuilderImpl')
            var ret = this.buildParams(r19)
            //printHashMap(ret)
            return ret

        };

        lnf.a.overload('java.util.HashMap','java.lang.String', 'java.lang.String').implementation = function(a1, a2, a3){
            send('enter method a hashmap string string')
            //send('2pram_a_a1:'+printHashMap(a1))
            //send('2pram_a_a1:'+a2)
            var ret_str = this.a(a1, a2, a3);
            send('ret_str hashmap string string:'+ret_str);
            return ret_str
        };
        lnf.a.overload('java.lang.String', 'java.lang.String').implementation = function(a1, a2){
            send('enter method a string string')
            //send('2pram_a_a1:'+printHashMap(a1))
            //send('2pram_a_a1:'+a2)
            var ret_str = this.a(a1, a2);
            send('ret_str string string:'+ret_str);
            return ret_str
        };

        var SwitchConfig = Java.use('mtopsdk.mtop.global.SwitchConfig')
        SwitchConfig.isGlobalSpdySwitchOpen.implementation = function(){
            //send('SwitchConfig')
            return false
        };

        var a_5_para = lnf.a.overload('java.util.HashMap','java.util.HashMap','java.lang.String','java.lang.String','boolean')
        
        a_5_para.implementation = function(a1, a2, a3, a4,a5){
            send('enter a_5_para')
            send('hm1')
            printHashMap(a1)
            send('hm2')
            printHashMap(a2)
            send('a3:'+a3)
            send('a4:'+a4)
            send('a5:'+a5)
            //printstack()
            var ret = this.a(a1, a2, a3, a4,a5)
            printHashMap(ret)
            return ret

        };

        lnf.a.overload('mtopsdk.mtop.global.MtopConfig').implementation = function(a1){
            send('enter method a MtopConfig')
            return this.a(a1);
            var ret_str = this.a(a1, a2);
            send('ret_str string string:'+ret_str);
            return ret_str
        };

        var leb = Java.use('tb.leb')
        leb.signature.implementation = function(data){
            var sig = this.signature(data)
            send('****************sig*******************:'+sig)
            return sig
        }

        var SecurityGuardManager = Java.use('com.taobao.wireless.security.sdk.SecurityGuardManager')
        SecurityGuardManager.getSecureSignatureComp.implementation = function(){
            //printstack()
            return this.getSecureSignatureComp()
        }
        

    }
)

function printHashMap(param_hm){
    var HashMap = Java.use('java.util.HashMap');
    var args_map = Java.cast(param_hm, HashMap)
    send('args_map'+args_map.toString());
}

function printstack() {
    send(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
}
'''

test_gen_sig = '''
rpc.exports = {
    getsig:function(){
        Java.perform(
            function(){
                var lne = Java.use('tb.lne').$new()

                var HashMap = Java.use('java.util.HashMap')
                var hm = HashMap.$new()
                var str3 = lne.a(hm, hm,"","", true)
            }
        )
    }
}
'''

test_gen_sig = '''
rpc.exports = {
    getsig:function(timestamp){
        Java.perform(
            function(){

                var TBSdkLog = Java.use('mtopsdk.common.util.TBSdkLog')
                TBSdkLog.e.overload('java.lang.String', 'java.lang.String').implementation = function(str1, str2){
                    send('log:'+str1)
                    send('log:'+str2)
                }

                var HashMap = Java.use('java.util.HashMap')
                var hashMap1 = HashMap.$new();

                var data='{"detail_v":"3.3.2","exParams":"{\"NAV_START_ACTIVITY_TIME\":\"1575640752386\",\"NAV_TO_URL_START_TIME\":\"1575640752378\",\"ad_type\":\"1.0\",\"appReqFrom\":\"detail\",\"clientCachedTemplateKeys\":\"[{\\\"id\\\":\\\"1538383035450\\\",\\\"version\\\":\\\"68\\\"}]\",\"container_type\":\"xdetail\",\"countryCode\":\"CN\",\"cpuCore\":\"8\",\"cpuMaxHz\":\"1555200\",\"dinamic_v3\":\"true\",\"id\":\"605857798916\",\"item_id\":\"605857798916\",\"latitude\":\"0\",\"longitude\":\"0\",\"osVersion\":\"23\",\"phoneType\":\"Nexus 6P\",\"pvid\":\"705dc461-5089-4cf5-8ce7-ace6bc85925d\",\"scm\":\"1007.12144.130673.4948130_0_3032\",\"soVersion\":\"2.0\",\"spm\":\"a2141.1.pinlei_tab4.d4-0\",\"spm-cnt\":\"a2141.7631564\",\"ultron2\":\"true\",\"utdid\":\"Xb6r2HfdTvsDAG4dHHurgSCI\",\"wx_options\":\"{animated=true, url=//item.taobao.com/item.htm?id=605857798916&pvid=705dc461-5089-4cf5-8ce7-ace6bc85925d&scm=1007.12144.130673.4948130_0_3032&spm=a2141.1.pinlei_tab4.d4-0&utparam=%7B%22x_hestia_source%22%3A%22st_fenlei_gul%22%2C%22x_object_type%22%3A%22item%22%2C%22x_mt%22%3A%228%22%2C%22x_src%22%3A%22st_fenlei_gul%22%2C%22x_pos%22%3A%221%22%2C%22x_pvid%22%3A%22705dc461-5089-4cf5-8ce7-ace[*] args_map:{deviceId=AiomvfL6hhU_hX6u80I0DM_cG952UaEtYQuomLzpl4vH, appKey=21646297, utdid=Xb6r2HfdTvsDAG4dHHurgSCI, x-features=27, ttid=255200@taobao_android_9.1.0, v=6.0, sid=null, t=1575640752, api=mtop.taobao.detail.getdetail, data={"detail_v":"3.3.2","exParams":"{\"NAV_START_ACTIVITY_TIME\":\"1575640752386\",\"NAV_TO_URL_START_TIME\":\"1575640752378\",\"ad_type\":\"1.0\",\"appReqFrom\":\"detail\",\"clientCachedTemplateKeys\":\"[{\\\"id\\\":\\\"1538383035450\\\",\\\"version\\\":\\\"68\\\"}]\",\"container_type\":\"xdetail\",\"countryCode\":\"CN\",\"cpuCore\":\"8\",\"cpuMaxHz\":\"1555200\",\"dinamic_v3\":\"true\",\"id\":\"605857798916\",\"item_id\":\"605857798916\",\"latitude\":\"0\",\"longitude\":\"0\",\"osVersion\":\"23\",\"phoneType\":\"Nexus 6P\",\"pvid\":\"705dc461-5089-4cf5-8ce7-ace6bc85925d\",\"scm\":\"1007.12144.130673.4948130_0_3032\",\"soVersion\":\"2.0\",\"spm\":\"a2141.1.pinlei_tab4.d4-0\",\"spm-cnt\":\"a2141.7631564\",\"ultron2\":\"true\",\"utdid\":\"Xb6r2HfdTvsDAG4dHHurgSCI\",\"wx_options\":\"{animated=true, url=//item.taobao.com/item.htm?id=605857798916&pvid=705dc461-5089-4cf5-8ce7-ace6bc85925d&scm=1007.12144.130673.4948130_0_3032&spm=a2141.1.pinlei_tab4.d4-0&utparam=%7B%22x_hestia_source%22%3A%22st_fenlei_gul%22%2C%22x_object_type%22%3A%22item%22%2C%22x_mt%22%3A%228%22%2C%22x_src%22%3A%22st_fenlei_gul%22%2C%22x_pos%22%3A%221%22%2C%22x_pvid%22%3A%22705dc461-5089-4cf5-8ce7-ace6bc85925d%22%2C%22x_object_id%22%3A%22605857798916%22%2C%22home_buckets%22%3A%22%22%2C%22home_industry_id%22%3A%225%22%2C%22item_type%22%3A%22normal%22%2C%22item_id%22%3A%22605857798916%22%7D}\"}","itemNumId":"605857798916"}'

                hashMap1.put("deviceId", "AiomvfL6hhU_hX6u80I0DM_cG952UaEtYQuomLzpl4vH")
                hashMap1.put("appKey", "21646297")
                hashMap1.put("utdid","Xb6r2HfdTvsDAG4dHHurgSCI")
                hashMap1.put("x-features", "27")
                hashMap1.put("ttid", "255200@taobao_android_9.1.0")
                hashMap1.put("v", "6.0")
                hashMap1.put("sid", "26")
                hashMap1.put("ad_type", "1.0")

                hashMap1.put("t", timestamp)
                hashMap1.put("api", "mtop.taobao.detail.getdetail")
               // hashMap1.put("data", JSON.stringify(data))
                hashMap1.put("data", data)
               
                hashMap1.put("uid", null)



                var hashMap2 = HashMap.$new();
                hashMap2.put("pageName","com.taobao.android.detail.wrapper.activity.DetailActivity")
                hashMap2.put("pageId","http://item.taobao.com/item.htm")

                var str = "21646297"
                var str2 = null
                var z = false
                
                
                var mtopConfig;
                Java.choose('mtopsdk.mtop.global.MtopConfig',{
                    "onMatch":function(instance){
                        mtopConfig = instance
                    },
                    "onComplete":function(){
                    }
                })

                var lnf = Java.use('tb.lnf').$new()
                lnf.b(mtopConfig)

                var tmp = lnf.a(hashMap1, hashMap2, str, str2, z)
                printHashMap(tmp)
                
            }
        )

    }
}

function printHashMap(param_hm){
    var HashMap = Java.use('java.util.HashMap');
    var args_map = Java.cast(param_hm, HashMap)
    send('args_map'+args_map.toString());
}
'''

gen_sig = '''
rpc.exports = {
    getsig:function(timestamp){
        Java.perform(
            function(){
                //send('eeeeeeeeeeeeeeeeeeeeee')

                //var loga = Java.use('mtopsdk.common.log.a').$new()

                var TBSdkLog = Java.use('mtopsdk.common.util.TBSdkLog')
                //TBSdkLog.setTLogEnabled(true)
                //send(TBSdkLog.tLogEnabled.value)
                //send(TBSdkLog.isLogEnable(TBSdkLog.logEnable.value))
                
                //TBSdkLog.setLogEnable(TBSdkLog.logEnable.value)
                //TBSdkLog.setLogAdapter(loga)
                //send('eeeeeeeeeeeeeeeeeeeeee')

                TBSdkLog.e.overload('java.lang.String', 'java.lang.String', 'java.lang.String').implementation=function(log1, log2, log3){
                    send(log1)
                    send(log2)
                    send(log3)
                    this.e(log1, log2, log3)
                }

                var data = '{"detail_v":"3.3.2","exParams":"{\"NAV_START_ACTIVITY_TIME\":\"1575357562038\",\"NAV_TO_URL_START_TIME\":\"1575357562026\",\"ad_type\":\"1.0\",\"appReqFrom\":\"detail\",\"clientCachedTemplateKeys\":\"[{\\\"id\\\":\\\"1538383035450\\\",\\\"version\\\":\\\"68\\\"}]\",\"container_type\":\"xdetail\",\"countryCode\":\"CN\",\"cpuCore\":\"8\",\"cpuMaxHz\":\"1555200\",\"dinamic_v3\":\"true\",\"id\":\"603483014905\",\"item_id\":\"603483014905\",\"latitude\":\"0\",\"longitude\":\"0\",\"osVersion\":\"23\",\"phoneType\":\"Nexus 6P\",\"pvid\":\"0861e6a9-5d8a-4d3d-a53a-f750ef593f85\",\"scm\":\"1007.12144.130672.4948164_0_0\",\"soVersion\":\"2.0\",\"spm\":\"a2141.1.pinlei_tab4.d3-4\",\"spm-cnt\":\"a2141.7631564\",\"u_channel\":\"ystttj\",\"ultron2\":\"true\",\"umpChannel\":\"ystttj\",\"utdid\":\"Xb6r2HfdTvsDAG4dHHurgSCI\",\"wx_options\":\"{animated=true, url=https://item.taobao.com/item.htm?id=603483014905&pvid=0861e6a9-5d8a-4d3d-a53a-f750ef593f85&scm=1007.12144.130672.4948164_0_0&spm=a2141.1.pinlei_tab4.d3-4&u_channel=ystttj&umpChannel=ystttj&utparam=%7B%22home_buckets%22%3A%22%22%2C%22home_industry_id%22%3A%225%22%2C%22item_type%22%3A%22tttm%22%2C%22item_id%22%3A%22603483014905%22%7D}\"}","itemNumId":"603483014905"}'
                //var data = '{"detail_v": "3.3.2",\
	            //            "exParams": "{"NAV_START_ACTIVITY_TIME":"1575013794568","NAV_TO_URL_START_TIME":"1575013794538","action":"ipv","ad_type":"1.0","appReqFrom":"detail","clientCachedTemplateKeys":"[{"id":"1538383035450","version":"68"}]","container_type":"xdetail","countryCode":"CN","cpuCore":"8","cpuMaxHz":"1555200","dinamic_v3":"true","from":"search","id":"600686693236","item_id":"600686693236","latitude":"0","list_type":"search","longitude":"0","osVersion":"23","phoneType":"Nexus 6P","search_action":"initiative","soVersion":"2.0","spm":"a2141.7631557.itemlist.12","spm-cnt":"a2141.7631564","ultron2":"true","utdid":"Xb6r2HfdTvsDAG4dHHurgSCI"}",\
	            //            "itemNumId": "600686693236"}'
                //send(JSON.stringify(data))

                var HashMap = Java.use('java.util.HashMap')
                var hashMap1 = HashMap.$new();
                hashMap1.put("deviceId", "AiomvfL6hhU_hX6u80I0DM_cG952UaEtYQuomLzpl4vH")
                hashMap1.put("appKey", "21646297")
                hashMap1.put("utdid","Xb6r2HfdTvsDAG4dHHurgSCI")
                hashMap1.put("x-features", "27")
                hashMap1.put("ttid", "255200@taobao_android_9.1.0")
                hashMap1.put("v", "6.0")
                hashMap1.put("sid", "26")
                hashMap1.put("ad_type", "1.0")

                hashMap1.put("t", timestamp)
                hashMap1.put("api", "mtop.taobao.detail.getdetail")
               // hashMap1.put("data", JSON.stringify(data))
                hashMap1.put("data", data)
               
                hashMap1.put("uid", null)



                var hashMap2 = HashMap.$new();
                hashMap2.put("pageName","com.taobao.android.detail.wrapper.activity.DetailActivity")
                hashMap2.put("pageId","http://item.taobao.com/item.htm")

                var str = "21646297"
                var str2 = null
                var z = false
                
                var lnf = Java.use('tb.lnf').$new()
                var mtopConfig;
                Java.choose('mtopsdk.mtop.global.MtopConfig',{
                    "onMatch":function(instance){
                        //tmp = instance.a(hashMap1, hashMap2, str, str2, z)
                        //tmp = instance.f.getSecurityFactors(hashMap2)
                        //send('is null:'+tmp)
                        mtopConfig = instance
                    },
                    "onComplete":function(){
                    }
                })

                lnf.b(mtopConfig)
                //send('lnf.f'+lnf.f.getSecurityFactors(hashMap2))
                //send('lnf.e'+lnf.e)
                var tmp = lnf.a(hashMap1, hashMap2, str, str2, z)
                
                printHashMap(tmp)
            }
        )

    }
}

function printHashMap(param_hm){
    var HashMap = Java.use('java.util.HashMap');
    var args_map = Java.cast(param_hm, HashMap)
    send('args_map'+args_map.toString());
}
'''

do_gen_sig = '''
rpc.exports = {
    getsig:function(timestamp, py_hashMap1, py_hashMap2){
        var args_map = ""
        Java.perform(
            function(){

                var HashMap = Java.use('java.util.HashMap')
                var hashMap1 = HashMap.$new();
                hashMap1.put("deviceId", py_hashMap1["deviceId"])
                hashMap1.put("appKey", py_hashMap1["appKey"])
                hashMap1.put("utdid", py_hashMap1["utdid"])
                hashMap1.put("x-features", py_hashMap1["x-features"])
                hashMap1.put("ttid", py_hashMap1["ttid"])
                hashMap1.put("v", py_hashMap1["v"])
                hashMap1.put("sid", py_hashMap1["sid"])
                //hashMap1.put("ad_type", py_hashMap1[""])
                hashMap1.put("t", py_hashMap1["t"])
                hashMap1.put("api", py_hashMap1["api"])
                hashMap1.put("data", py_hashMap1["data"])
                
                hashMap1.put("uid", py_hashMap1["uid"])

                send('hashmap1')
                printHashMap(hashMap1)
                var hashMap2 = HashMap.$new();
                hashMap2.put("pageId",py_hashMap2["pageId"])
                hashMap2.put("pageName",py_hashMap2["pageName"])
                
                send('hashmap2')
                printHashMap(hashMap2)
                var str = "21646297"
                var str2 = null
                var z = false
                
                var lll = Java.use('tb.lll').$new()
                var mtopConfig;
                send('can you see me?')
                Java.choose('mtopsdk.mtop.global.MtopConfig',{
                    "onMatch":function(instance){
                        mtopConfig = instance
                    },
                    "onComplete":function(){
                    }
                })
                send('i can see you')

                lll.b(mtopConfig)
                var tmp = lll.a(hashMap1, hashMap2, str, str2, z)
                
                printHashMap(tmp)
                args_map = '{'+'"x_sign":"'+tmp.get("x-sign")+'",'+'"x_mini_wua":"'+tmp.get("x-mini-wua")+'",'+'"x_umt":"'+tmp.get("x-umt")+'"}'
                //args_map["x_sign"] = tmp.get("x-sign")
                //args_map["x_mini_wua"] = tmp.get("x-mini-wua")
                //args_map["x_umt"] = tmp.get("x-umt")

                //send('x-sign:'+tmp.get("x-sign"))
                send('all param:'+args_map)
            }
        )
    return args_map
    }
}

function printHashMap(param_hm){
    var HashMap = Java.use('java.util.HashMap');
    var args_map = Java.cast(param_hm, HashMap)
    send('args_map'+args_map.toString());
}
'''

def on_message(message, data):
    if message['type'] == 'send':
        print("[*] {0}".format(message['payload']))
    else:
        print(message)

def test():
    process = frida.get_usb_device().attach('com.taobao.taobao')
    script = process.create_script(test_gen_sig)
    script.on('message', on_message)
    script.load()
    print('hook_prepare is ok')

    ts = str(int(time.time()))
    script.exports.getsig(ts)

    #script.exports.getsig(ts)
    #script.exports.getsig(ts)
    #script.exports.getsig(ts)
    #script.exports.getsig(ts)
    #script.exports.getsig(ts)
    #script.exports.getsig(ts)
    #script.exports.getsig(ts)

    sys.stdin.read()

def hook_prepare():
    process = frida.get_usb_device().attach('com.taobao.taobao')
    script = process.create_script(do_gen_sig)
    script.on('message', on_message)
    script.load()
    print('hook_prepare is ok')
    return script
    #ts = str(int(time.time()))
    #script.exports.getsig(ts)

    #script.exports.getsig(ts)
    #script.exports.getsig(ts)
    #script.exports.getsig(ts)
    #script.exports.getsig(ts)
    #script.exports.getsig(ts)
    #script.exports.getsig(ts)
    #script.exports.getsig(ts)

    #sys.stdin.read()

#hook_prepare()
if __name__ == "__main__":
    test()
