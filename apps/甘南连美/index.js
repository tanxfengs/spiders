Java.perform(function () {

var main = Java.use("com.gdtv.common.network.c")
var main2 = Java.use("com.gdtv.common.network.f")
var key = Java.use("com.gdtv.common.util.h")
var mac = Java.use("javax.crypto.Mac")

main.a.overload('java.lang.String', 'java.lang.String', 'java.lang.String').implementation = function (a,b,c) {

    var res = this.a(a,b,c)
    console.log(res)
    return res

}



key.b.implementation = function(){
    var res = this.b()


    console.log("key的值为:", "|"+res)
    return res
}


main2.b.overload('java.lang.String').implementation = function (a) {
    console.log("参数A: ","|"+ a +"|")

    var res = this.b(a)
    console.log("结果为:","|"+JSON.stringify(res))
    return res

}


})

