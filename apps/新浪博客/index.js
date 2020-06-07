function print(val){
    console.log(val)
}
print("[*]Hook Start...")
Java.perform(function () {
    var cpl =Java.use("com.sina.crossplt.CpltUtil");

    cpl.native_call.implementation = function (a,b,c,d) {
        print("Hook Cpl ...")
        print("a: " + a)
        print("b: " + b)
        print("c: " + c)
        print("d: " + d)

        var res = this.native_call(a,b,c,d)
        print("Reuslt: "+ res._response_string.value)
        return res

    }
    //
    var so = Module.findBaseAddress("libcrossplt.so")
    // var jstrFunc = Module.findExportByName("libcrossplt.so", "_Z14jstring2stringP7_JNIEnvP8_jstring");
    // print(jstrFunc)
     var createCpl = so.add(0x00069C28 + 1)
    var xx = so.add(0x22D4E6)
    var _3BF154 = so.add(0x3BF154)
    print("xx: "+hexdump(xx)+"\n")
    print("_3BF154: "+hexdump(_3BF154))
    Interceptor.attach(createCpl, {
        onEnter: function (args) {
            this.jstr = args[0]
            this.jst2 = args[1]
            print("args[2]"+args[2])
            print("args[3]"+ args[3])
        },
        onLeave: function (retval) {
           print("cstr是: "+ hexdump(this.jstr))
           print("Jstr是: "+ hexdump(this.jst2))
        }
    })
})