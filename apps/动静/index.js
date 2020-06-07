

Java.perform(function(){
    var main = Java.use("cn.gzmovement.AppTokenCreator")
    main.createBasicSignature.implementation = function (a,b,c) {
                console.log("a: \n", a)
                console.log("b: \n", b)
                console.log("c: \n", c)

        var res = this.createBasicSignature(a,b,c);
        console.log("res: \n", res)
        return res
    }


    var so = Module.findBaseAddress("liblib-c-kernel.so")


    // var md5 = so.add(0x008BC4);
    //     if(md5!=null){
    //     Interceptor.attach(md5, {
    //         onEnter: function (args) {
    //             this.args = args[0]
    //             console.log("[0]",hexdump(args[0]))
    //         },
    //         onLeave: function (retval) {
    //             console.log(retval)
    //             console.log("[md5_Res]",hexdump(this.args))
    //
    //         }
    //     })
    // }

        var str_tmp = so.add(0x00008AD4);
        if(str_tmp!=null){
        Interceptor.attach(str_tmp, {
            onEnter: function (args) {

                console.log("[0]",hexdump(args[0]))
                console.log("[1]",hexdump(args[1]))
            },
            onLeave: function (retval) {


            }
        })
    }

          var md5 = so.add(0x0008BDC);
        if(md5!=null){
        Interceptor.attach(md5, {
            onEnter: function (args) {
                this.arg_md5 = args[1]
                // console.log("[sub_9f88 0]",args[0].readCstring)

                console.log("[md5 1]",hexdump(args[1]))
                // console.log("[md5 1]",hexdump(args[1]))
                console.log("[md5 2]",args[2])
                // console.log("[sub_9f88 1]",hexdump(args[1]))
                // console.log("[sub_9f88 2]",hexdump(args[2]))
            },
            onLeave: function (retval) {
                console.log("[md5 result]",hexdump( this.arg_md5))


            }
        })
    }
        var sub_9f88 = so.add(0x00009F88);
        if(sub_9f88!=null){
        Interceptor.attach(str_tmp, {
            onEnter: function (args) {
                this.arg_sub = args[0]
                // console.log("[sub_9f88 0]",args[0].readCstring)
                console.log("[sub_9f88 1]",hexdump(args[1]))
                console.log("[sub_9f88 2]",hexdump(args[0]))
                // console.log("[sub_9f88 1]",hexdump(args[1]))
                // console.log("[sub_9f88 2]",hexdump(args[2]))
            },
            onLeave: function (retval) {
                console.log("[sub_9f88 result]",hexdump( this.arg_sub))


            }
        })
    }

});
