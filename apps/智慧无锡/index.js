Java.perform(function () {
    var so = Module.findBaseAddress("libm2o_jni.so");
    var sha1 = so.add(0x000A5AC)
    console.log(sha1)
         Interceptor.attach(sha1,{
            onEnter: function(args){
                this.args = args[0]
                console.log("args[0]: ",args[0])
            },
            onLeave: function(retval){
                console.log("result: ",this.args.readCString())
            }
        });
    var main = Java.use("com.hoge.android.jni.Utils");
    main.signature.implementation = function (a, b) {
        console.log("A: ", a)
        console.log("B: ", b)
        return this.signature(a,b)
    }

})

