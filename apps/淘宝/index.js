function print(val){
    console.log(val+"\n")
}

Java.perform(
    function(){
        print('开始Hook反抓包')

        var SwitchConfig = Java.use('mtopsdk.mtop.global.SwitchConfig')
        SwitchConfig.isGlobalSpdySwitchOpen.implementation = function(){
            //send('SwitchConfig')
            return false
        }
        print('可以开始抓包了')
        var lll = Java.use("tb.lll");
        lll.a.overload('java.util.HashMap', 'java.util.HashMap', 'java.lang.String', 'java.lang.String', 'boolean').implementation = function (a,b,c,d,e) {
            print("a: "+ a);
            print("b: "+ b);
            print("c: "+ c);
            print("d: "+ d);
            print("e: "+ e);
            var res = this.a(a,b,c,d,e)
            print("Result: " + res);
            return res
        }



    }
)
