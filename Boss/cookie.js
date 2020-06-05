let document = {
    cookie: ""
}

function c(a, b, c, e) {
    var f, g = "";
    e = "zhipin.com", d("__a"), d("__c"), d("__l"),
    c && (f = new Date, f.setTime(f.getTime() + 86400000 * c), g = "; expires=" + f.toGMTString()),
    c && e && d(a),
        a = a + "=" + b + g + "; path=/",
    e && (a += ";domain=" + e),
        document.cookie = a
}


function d(a) {
    var b = a + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;",
        c = ".kanzhun.com www.kanzhun.com .www.kanzhun.com bosszhipin.kanzhun.com .bosszhipin.kanzhun.com m.kanzhun.com .m.kanzhun.com t.kanzhun.com .t.kanzhun.com wx.kanzhun.com .wx.kanzhun.com t.bosszhipin.com .t.bosszhipin.com yushanapp.com zdzhushou.cc".split(" ");
    for (a = 0; a < c.length; a++) {
        document.cookie = b + "domain=" + c[a],
            document.cookie = b + "domain=" + c[a] + "; path=/"
    }
    document.cookie = b,
        document.cookie = b + "; path=/"
    console.log(document.cookie)
}

d("__a")