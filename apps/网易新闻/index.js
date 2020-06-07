var print = console.log
Java.perform(function () {
    var af = Java.use("com.netease.newsreader.a.a.a$f")
    af.a.implementation = function (a,b,c,d,e,f) {
        print("[a] :\t", a)
        print("[b] :\t", b)
        print("[c] :\t", c)
        print("[d] :\t", d)
        print("[e] :\t", e)
        print("[f] :\t", f)
        var res = this.a(a,b,c,d,e,f)
        console.log(res)
        return res
    }
    /*
    var c = Java.use("com.netease.newsreader.support.request.b.c")
    c.a.overload('java.lang.String', 'java.util.List', 'boolean').implementation = function (a,b,c) {
        print("c.a[a]\t",a)
        //print("c.a[b]\t",b)
        print("c.a[c]\t",c)
        var res = this.a(a,b,c);
        print(b)
        print(b.length)
        print("c.a[ret]\t", res)
        return res
    }

     */
    var c = Java.use("com.netease.newsreader.framework.e.a.c")
    c.b.overload('java.lang.String').implementation = function (a) {
        print("a\t", a)
        var res = this.b(a)
        print(res)
        return res

    }
    /*
    var ka = Java.use("com.netease.newsreader.support.utils.k.b")
    ka.a.overload("java.lang.String").implementation = function (a) {
        print("ka\t", a)
         var res = this.a(a)
        print("ka res\t",res)
        return res
    }
    */
    var encrypt = Java.use("com.netease.nr.biz.pc.sync.Encrypt")
    encrypt.getEncryptedParams.overload('java.lang.String', 'int').implementation = function (a, b) {
        print("encypt a\t", a)
           var res = this.getEncryptedParams(a, b)
        print("encypt res\t",res)
        return res

    }
    var str = Java.use("java.lang.String")
  var key = Java.use("javax.crypto.spec.SecretKeySpec")
  key.$init.overload('[B', 'java.lang.String').implementation = function (a,b) {
        print("加密key1\t",a)
        print("加密key2\t",b)
      print("加密key明文\t",JSON.stringify(a))


  }
  //AES/ECB/PKCS7Padding

  var cipher = Java.use("javax.crypto.Cipher")
    cipher.getInstance.overload('java.lang.String','java.lang.String').implementation = function (a,b) {
        print('cipher.getInstance a\t',a)
        print('cipher.getInstance b\t',b)
        return this.getInstance(a,b)
    }

 function byteToString(arr) {
    if(typeof arr === 'string') {
        return arr;
    }
    var str = '',
        _arr = arr;
    for(var i = 0; i < _arr.length; i++) {
        var one = _arr[i].toString(2),
            v = one.match(/^1+?(?=0)/);
        if(v && one.length == 8) {
            var bytesLength = v[0].length;
            var store = _arr[i].toString(2).slice(7 - bytesLength);
            for(var st = 1; st < bytesLength; st++) {
                store += _arr[st + i].toString(2).slice(2);
            }
            str += String.fromCharCode(parseInt(store, 2));
            i += bytesLength - 1;
        } else {
            str += String.fromCharCode(_arr[i]);
        }
    }
    return str;
}

})