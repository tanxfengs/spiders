

Java.perform(function(){
    var main = Java.use("com.example.obs.applibrary.util.MD5Util")
    console.log(main)
    main.md5.implementation = function (a) {

        console.log("a: ",a)
        var res = this.md5(a);
        console.log("res: " ,res)
        return res
    }
});
