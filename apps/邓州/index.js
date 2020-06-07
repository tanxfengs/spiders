function showStack(){
    var log = Java.use("android.util.Log")
    var res = log.getStackTraceString(Java.use("java.lang.Exception").$new())
    console.log(res)
}
Java.perform(function () {
    var main = Java.use("com.founder.dengzhou.f.a.a")
    main.b.overload('java.lang.String', 'java.lang.String').implementation = function (a,b) {
        console.log("a:", a)
        console.log("b: ", b)
        var res = this.b(a,b)
        console.log("result: ",JSON.stringify(res))
        return res
    }

    main.a.overload('java.lang.String').implementation = function (a) {
        showStack()
        console.log("a:", a)


        return this.a(a)
    }

    main.b.overload('javax.crypto.spec.SecretKeySpec', '[B', '[B').implementation = function (a,b,c) {
        console.log("encrypt a:", a)
        console.log("encrypt b: ", JSON.stringify(b))
        console.log("encrypt c: ", JSON.stringify(b))
        var res = this.b(a,b,c)
        console.log("result: ",res)
        return res
    }



})
