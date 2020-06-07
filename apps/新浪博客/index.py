# @Time    : 2020/3/29 14:30
# @Author  : LavÖz
# @File    : 京东.py
# @Software: PyCharm
import frida, sys, os

jscode = """


Java.perform(function(){
    var main = Java.use("com.sina.crossplt.CpltUtil");
    var str = Java.use("java.lang.String")
    
    
    main.invoke.overload('java.lang.String', 'java.lang.String').implementation = function(a,b){
        console.log("a: ",a)
        console.log("b:", b)
        var res = this.invoke(a,b)
        console.log("result: ", res )
        return res
    }
    // 主动调用so层函数 arg1:地址 arg2: 返回值, 参数3: 函数参数数组

    /* 在调用so层 默认是CString, 传入jstr需要先转换*/
    
    var str1 = str.$new("/apicheck/blog");
    var str2 = str.$new('{"login_uid":"","s":"0","size":"10","appver":"7.0.0","appid":"2","chno":"515_104","x":"10","tag_id":"11","action":"down","deviceid":"55801dcad7226912789ded35482a8c46","mark":"0"}');
    console.log(str1)
    console.log(str2)
    //主动调用
    console.log(main.invoke(str1, str2))
    
        main.native_call.implementation = function(a,b,c,d){
     console.log("a: ",a)
        console.log("b:", b)
        console.log("c:", c)
        console.log("d:", d)
        var res = this.native_call(a,b,c,d)
         console.log("result: ", JSON.stringify(res._response_string ))
        return res
    }
    
    
    })
    




 var pointer = Module.findBaseAddress("libcrossplt.so").add(0x85D2C+1); //Jstr2cStr
 //var pointer = Module.findBaseAddress("libcrossplt.so").add(0x86AF0+1); //Jstr2cStr
 
 console.log(pointer)

Interceptor.attach(pointer, { 


  onEnter: function(args) { 

   // console.log('MD5Update参数2:',hexdump(args[1])); 
   
    
}, 
  onLeave: function(retval) {
  //console.log("result", hexdump(this.arg))
   }
   
})





"""

os.system("adb -s 95619f7 forward tcp:27042 tcp:27042")

with open("./index.js" ,"r", encoding="utf8") as f:
    jscode = f.read()


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
    process = frida.get_remote_device().attach("com.sina.sinablog")
    script = process.create_script(jscode)
    script.on("message", message)
    script.load()
    sys.stdin.read()
