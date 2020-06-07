function print(val){
    console.log(val + "\n")
}

Java.perform(function () {
    print("[*]开始Hook")
        var jencry = Java.use("com.zhongsou.souyue.utils.ZSSecret")
        jencry.encrypt.implementation = function (a) {
            print("加密的参数为: "+ a);
            var res = this.encrypt(a);
            print("加密的结果为: "+ res);
            return res

        }
        var e = Java.use("com.zhongsou.souyue.utils.e")
        e.b.implementation = function (a) {
            print("b.a()的结果是: ", a)

            var res = this.b(a);
            print(res)
            return res
        }

     //
        var encrypt = Module.findBaseAddress("libencrypt.so");
        console.log(encrypt)
        var key = encrypt.add(0x00001C8C)
        if(key != null){
        Interceptor.attach(key,{
            onEnter: function(args){
                console.log("args[0]: ",args[0].readCString())
            },
            onLeave: function(retval){
                //this.args1.writeByteArray(hexToBytes("0123456789abcdef0123456789abcdef"));
                console.log("retval: ",retval.readCString());
            }
        });
     }
     //
     var des = encrypt.add(0x1304)
        if(des != null){
        Interceptor.attach(des,{
            onEnter: function(args){
                console.log("DESargs[0]: ",  hexdump(args[0]), "数据是: \n", args[0].readCString())
              //  console.log("DESargs[1] length: ", args[1]+ "\n" + hexdump(args[1]))
                this.arg1 = args[1]
                console.log("DESargs[2] length: ", args[2])
                console.log("DESargs[3] key: ", Memory.readByteArray(args[3], 256))
                console.log("DESargs[4]: iv", hexdump(args[4]))
            },
            onLeave: function(retval){
                //this.args1.writeByteArray(hexToBytes("0123456789abcdef0123456789abcdef"));
                console.log("DESretval: ",hexdump(this.arg1, {
                    length: 880
                }));
            }
        });
     }
     //
      var rsa = encrypt.add(0x1328)
        if(rsa != null){
        Interceptor.attach(rsa,{
            onEnter: function(args){
                console.log("RSAargs[0] length: ",args[0])
                this.argR = args[2]
                console.log("RSAargs[1] data : ", hexdump(args[1]))
                // console.log("RSAargs[2]: ",hexdump(args[2]))
                console.log("RSAargs[3] key: ",args[3].readCString())
            },
            onLeave: function(retval){
                //this.args1.writeByteArray(hexToBytes("0123456789abcdef0123456789abcdef"));
                console.log("RSAretval: ",hexdump( this.argR, {
                    length: 880
                }));
            }
        });
     }
     // 打印 RSAasize

     var rsaSize = encrypt.add(0x0131C)
    print( rsaSize)
    if (rsaSize != null){
        Interceptor.attach(rsaSize, {
        onEnter: function (args) {
            print("RSA秘钥的参数是 "+ hexdump(args[0]))
        },
        onLeave: function (retval) {
            print("RSA秘钥的长度是 "+ (retval))
        }
    })
    }

    var checked = encrypt.add(0x000012F8);
        if (checked != null){
        Interceptor.attach(checked, {
        onEnter: function (args) {
            print("DES秘钥转换前 "+ hexdump(args[0]) + args[0].readCString()  + "++ :" + args[0].readCString() + "\n")
            this.desKey = args[1]
        },
        onLeave: function (retval) {
            print("DES秘钥转换后 "+ hexdump(this.desKey))
        }
    })
    }

     //
     var base64 = encrypt.add(0x142C);
        if(base64 != null){
        Interceptor.attach(base64,{
            onEnter: function(args){
                console.log("Base64[0]: ",hexdump(args[0], {length:800}))
                this.argB = args[2]
                // console.log("Base64[2]: ",hexdump(args[2]))

            },
            onLeave: function(retval){
                //this.args1.writeByteArray(hexToBytes("0123456789abcdef0123456789abcdef"));
                console.log("Base64RET",this.argB.readCString())
            }
        });
     }
     //
     //    var getRSA = encrypt.add(0x01BD4);
     //            if(getRSA != null){
     //    Interceptor.attach(getRSA,{
     //        onEnter: function(args){
     //            console.log("RSAGet[0]: ",hexdump(args[0], {length:800}))
     //            this.tmp = args[0]
     //            // console.log("Base64[2]: ",hexdump(args[2]))
     //
     //        },
     //        onLeave: function(retval){
     //            //this.args1.writeByteArray(hexToBytes("0123456789abcdef0123456789abcdef"));
     //            console.log("RSAGet",hexdump(retval, {length: 700}))
     //            console.log("RSAGet[2]",hexdump(this.tmp, {length: 700}))
     //        }
     //    });
     // }



})

