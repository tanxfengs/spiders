
function print(val){
    console.log(val+"\n")

}

Java.perform(function(){
    // var RequestUtils = Java.use("com.shizhuang.duapp.common.utils.RequestUtils")
    // console.log(RequestUtils)
    // RequestUtils.a.overload('java.util.Map').implementation = function (a) {
    //             console.log("a: ", a)
    //
    //     var res = this.a(a);
    //     console.log("res: " ,res)
    //     return res
    // }
    //
    //  RequestUtils.b.overload('java.util.Map', 'long').implementation = function (a,b) {
    //             console.log("函数b a: ", a)
    //             console.log("函数b b: ", b)
    //
    //     var res = this.b(a,b);
    //     console.log("函数b res: " ,res)
    //     return res
    // }
    //
    // var Encrypt = Java.use("com.duapp.aesjni.AESEncrypt");
    // print("Encrypt 获取成功" + Encrypt);
    // Encrypt.getByteValues.implementation = function () {
    //
    // var res = this.getByteValues()
    //     print("getBytesValue_RES: " + res)
    //     print("getBytesValue_RES_length: " + res.length)
    //     return res
    // }
    //
    // var str = Java.use("java.lang.String")
    // Encrypt.encodeByte.implementation = function (a,b) {
    //     var aStr = str.$new(a)
    //     print("encodeByte a : " + aStr);
    //     print("encodeByte b : " + b);
    //     var res = this.encodeByte(a,b)
    //     print("encodeByte_RES: " + res)
    //     return res
    // }
    // //00000FD8
    // var so = Module.findBaseAddress("libJNIEncrypt.so");
    // print("So Addr: " + so)
    // var aes = so.add(0x000FD8)
    //
    // Interceptor.attach(aes, {
    //     onEnter: function (args) {
    //         print("args[0]" + args[0])
    //         print("args[0]" + args[1])
    //
    //     },
    //     onLeave: function (retval) {
    //
    //     }
    // })
    //
    var keys = Java.use("java.security.KeyStore")
    print(keys)
    keys.load.overload('java.io.InputStream', 'int').implementation = function (a, b) {
        print(a)
        print(b)
        return this.load(a,b)

    }

    //{hideAddProduct=0, title=yeezy 350 v2, sortMode=0, typeId=0, sortType=0, showHot=1, catId=0, page=0, limit=20}
});



rpc. exports = {
    
}