Java.perform(function () {
var main = Java.use("net.xinhuamm.xwm.mvp.app.XwmConstants")
var main2 = Java.use("net.xinhuamm.xwm.mvp.app.utils.XwmAccountUtil")
   // console.log(JSON.stringify(main2.mToken))
    main2.getToken.implementation = function () {
        var res  = this.getToken()
        conosle.log(res)
        return res
    }
    //XwmAccountUtil.getToken()
    var main3 = Java.use("net.xinhuamm.xwm.mvp.app.config.GlobalHttpHandlerImpl")

    main3.onHttpRequestBefore.implementation = function () {
            var res = this.onHttpRequestBefore();
            console.log(res)
        return res
    }

})