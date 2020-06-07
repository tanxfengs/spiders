

Java.perform(function(){
    var main = Java.use("ip")
    console.log(main)
    main.a.implementation = function (a) {
                console.log("a: ",JSON.stringify(a))

        var res = this.a(a);
        console.log("res: " ,res)
        return res
    }
});
