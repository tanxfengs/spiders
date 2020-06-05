// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;
//
//
// const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
// let document = dom.window.document
//
let navigator = {
    appCodeName: "Mozilla",
    appMinorVersion: "0",
    appName: "Netscape",
    appVersion: "5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; InfoPath.3; rv:11.0) like Gecko",
    browserLanguage: "zh-CN",
    cookieEnabled: true,
    cpuClass: "x86",
    language: "zh-CN",
    maxTouchPoints: 0,
    msManipulationViewsEnabled: true,
    msMaxTouchPoints: 0,
    msPointerEnabled: true,
    onLine: true,
    platform: "Win32",
    pointerEnabled: true,
    product: "Gecko",
    systemLanguage: "zh-CN",
    userAgent: "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; InfoPath.3; rv:11.0) like Gecko",
    userLanguage: "zh-CN",
    vendor: "",
    vendorSub: "",
    webdriver: false
}, window = this
window.navigator = navigator,
    document = {
        location:{
            protocol: "https://",
            href: "https://accounts.douban.com/passport/login"
        }
    }



    var m = ["clstag", "id", "tdtag", "class"]
      , u = 0
      , v = ""
      , w = "click blur focus change scroll input keydown keypress keyup".split(" ")
      , x = "onclick onblur onfocus onchange onscroll onpropertychange onkeydown onkeypress onkeyup".split(" ")
      , A = ("https:" == document.location.protocol ? "https://" : "http://") + "seq.jd.com/jseq.html"
      , k = "click input change focus blur scroll keydown keypress keyup sniffV sniffL".split(" ")
      , B = {
        49: "a",
        50: "a",
        51: "a",
        52: "a",
        53: "a",
        54: "a",
        55: "a",
        56: "a",
        57: "a",
        48: "a",
        96: "a",
        97: "a",
        98: "a",
        99: "a",
        100: "a",
        101: "a",
        102: "a",
        103: "a",
        104: "a",
        105: "a",
        81: "b",
        87: "b",
        69: "b",
        82: "b",
        84: "b",
        89: "b",
        85: "b",
        73: "b",
        79: "b",
        80: "b",
        65: "b",
        83: "b",
        68: "b",
        70: "b",
        71: "b",
        90: "b",
        88: "b",
        72: "b",
        74: "b",
        75: "b",
        76: "b",
        67: "b",
        86: "b",
        66: "b",
        78: "b",
        77: "b",
        192: "c",
        189: "c",
        187: "c",
        219: "c",
        221: "c",
        220: "c",
        186: "c",
        222: "c",
        188: "c",
        190: "c",
        191: "c",
        111: "c",
        106: "c",
        109: "c",
        107: "c",
        110: "c",
        32: "c"
    };
    this.init = function() {
        if (!("undefined" == typeof _jdtdseq_config_data || null == _jdtdseq_config_data || 0 >= _jdtdseq_config_data.length)) {
            var a = _jdtdseq_config_data.bizId;
            globalUnixstamp(a);
            scrollSeq(window, joinReturnObj(null, null, a, "0", k[5]));
            for (var b = _jdtdseq_config_data.seqs, e = 0; e < b.length; e++) {
                var c = b[e];
                var d = null;
                var g = c.selVal;
                switch (c.selType) {
                case m[0]:
                    d = y("[" + m[0] + "='" + g + "']")[0];
                    break;
                case m[1]:
                    d = document.getElementById(g);
                    break;
                case m[2]:
                    d = y("[" + m[2] + "='" + g + "']")[0];
                    break;
                case m[3]:
                    d = g;
                    if (document.getElementsByClassName)
                        d = document.getElementsByClassName(d);
                    else {
                        g = document.getElementsByTagName("*");
                        for (var h = [], f = 0; f < g.length; f++)
                            for (var z = g[f], q = z.className.split(" "), p = 0; p < q.length; p++)
                                if (q[p] == d) {
                                    h.push(z);
                                    break
                                }
                        d = h
                    }
                    d = d[0]
                }
                if (null != d && void 0 != d)
                    for (g = 0; g < c.seq.length; g++)
                        switch (h = c.seq[g],
                        f = {},
                        f.bizId = a,
                        f.elementId = c.elementId,
                        f.seq = h,
                        f.sessionId = _jdtdmap_sessionId,
                        f.special = c.special,
                        h) {
                        case k[0]:
                            clickCount(d, f);
                            break;
                        case k[1]:
                            inputEvent(d, f);
                            break;
                        case k[2]:
                            changeEvent(d, f);
                            break;
                        case k[3]:
                            focusEvent(d, f);
                            break;
                        case k[4]:
                            blurEvent(d, f);
                            break;
                        case k[5]:
                            scrollSeq(d, f);
                            break;
                        case k[6]:
                            keyDownEvent(d, f);
                            break;
                        case k[7]:
                            keyPressEvent(d, f);
                            break;
                        case k[8]:
                            keyUpEvent(d, f);
                            break;
                        case k[9]:
                            sniffV(d, f);
                            break;
                        case k[10]:
                            sniffL(d, f)
                        }
            }
        }
    }
    ;
    this.globalUnixstamp = function(a) {
        var b = joinReturnObj(null, "1", a, "0", k[3]);
        n(b);
        l(window, 2, function() {
            return joinReturnObj(null, "1", a, "0", k[3])
        });
        l(window, 1, function() {
            return joinReturnObj(null, "1", a, "0", k[4])
        })
    }
    ;
    this.clickCount = function(a, b) {
        l(a, 0, function() {
            return b = joinReturnObj(b, "1")
        })
    }
    ;
    this.focusEvent = function(a, b) {
        l(a, 2, function() {
            return b = joinReturnObj(b, "1")
        })
    }
    ;
    this.blurEvent = function(a, b) {
        l(a, 1, function() {
            return b = joinReturnObj(b, "1")
        })
    }
    ;
    this.changeEvent = function(a, b) {
        l(a, 3, function() {
            return b = joinReturnObj(b, a.value.length)
        })
    }
    ;
    this.inputEvent = function(a, b) {
        l(a, 5, function() {
            return b = joinReturnObj(b, a.value.length)
        })
    }
    ;
    this.scrollSeq = function(a, b) {
        l(a, 4, function() {
            return b = joinReturnObj(b, document.documentElement.scrollTop || document.body.scrollTop)
        })
    }
    ;
    this.keyDownEvent = function(a, b) {
        l(a, 6, function(a, c) {
            c = c || window.event;
            a = c.keyCode && 0 < c.keyCode ? c.keyCode : c.which;
            a = "undefined" == typeof a ? c.charCode : a;
            "1" == b.special && (a = r(a));
            return joinReturnObj(b, a)
        })
    }
    ;
    this.keyPressEvent = function(a, b) {
        l(a, 7, function(a, c) {
            c = c || window.event;
            a = c.keyCode && 0 < c.keyCode ? c.keyCode : c.which;
            a = "undefined" == typeof a ? c.charCode : a;
            "1" == b.special && (a = r(a));
            return joinReturnObj(b, a)
        })
    }
    ;
    this.keyUpEvent = function(a, b) {
        l(a, 8, function(a, c) {
            c = c || window.event;
            a = c.keyCode && 0 < c.keyCode ? c.keyCode : c.which;
            a = "undefined" == typeof a ? c.charCode : a;
            "1" == b.special && (a = r(a));
            return joinReturnObj(b, a)
        })
    }
    ;
    this.sniffV = function(a, b) {
        a = a ? a.value : "unknow";
        commonFn();
        b = joinReturnObj(b, a);
        n(b)
    }
    ;
    this.sniffL = function(a, b) {
        function e(b) {
            b = b || event;
            1 == ++g && (t() ? document.documentElement.detachEvent("onmousedown", e) : document.documentElement.removeEventListener("mousedown", e),
            d = a.value,
            c(b.clientX, b.clientY))
        }
        function c(a, c) {
            commonFn();
            a = joinReturnObj(b, ("unknow" == d ? d : d.length) + "_" + a + "_" + c);
            n(a)
        }
        var d = a ? a.value : "unknow"
          , g = 0;
        "" == d ? t() ? document.documentElement.attachEvent("onmousedown", e) : document.documentElement.addEventListener("mousedown", e) : c("a", "a")
    }
    ;
    this.commonFn = function() {
        ++u
    }
    ;
    this.joinReturnObj = function(a, b, e, c, d) {
        function g() {
            function a() {
                try {
                    var a = getJdEid();
                    if (void 0 != a && null != a && "object" == typeof a)
                        var b = a.eid
                } catch (p) {}
                return b
            }
            var b = function() {
                var a;
                try {
                    getJdEid(function(b) {
                        a = b
                    })
                } catch (q) {}
                return a
            }();
            if (void 0 == b || null == b || "" == b)
                b = a();
            return b
        }
        try {
            v = g()
        } catch (h) {}
        void 0 == a && null == a && (a = {
            version: "1.0"
        },
        a.bizId = e,
        a.elementId = c,
        a.seq = d);
        a.sessionId = _jdtdmap_sessionId;
        a.sp = u;
        a.version = "1.0";
        a.eid = v;
        a.val = b;
        a.ctime = (new Date).getTime();
        return a
    }
    ;
    var t = function() {
        if (window.attachEvent)
            return !0
    }
      , l = function(a, b, e) {
        t() ? 0 < x[b].length && a.attachEvent(x[b], function(b) {
            commonFn();
            b = e(a, b);
            n(b)
        }) : 0 < w[b].length && a.addEventListener(w[b], function(b) {
            commonFn();
            b = e(a, b);
            n(b)
        })
    }
      , n = function(a) {
        if ("undefined" == typeof _jdtdseq_config_s || "false" != _jdtdseq_config_s && 0 != _jdtdseq_config_s) {
            a = C(a);
            var b = "";
            "undefined" != typeof pin && (b = pin);
            var e = "";
            try {
                e = encodeURI(window.location.href)
            } catch (c) {}
            D(A, {
                d: a,
                p: b,
                loc: e
            }, "callback", function(a) {})
        }
    }
      , D = function(a, b, e, c, d) {
        var g = "jsonp_" + Math.random();
        g = g.replace(".", "");
        window[g] = function(a) {
            clearTimeout(h);
            window[g] = null;
            l.removeChild(k);
            c(a)
        }
        ;
        var h = setTimeout(function() {
            window[g] = null;
            l.removeChild(k);
            d && d()
        }, 1E4);
        b[e] = g;
        e = [];
        for (var f in b)
            e.push(f + "=" + b[f]);
        a = a + "?" + e.join("&");
        var k = document.createElement("script");
        k.src = a;
        k.type = "text/javascript";
        var l = document.getElementsByTagName("head")[0];
        l.appendChild(k)
    }
      , y = function(a, b) {
        var e = /([\*a-zA-Z1-6]*)?(\[(\w+)\s*(\^|\$|\*|\||~|!)?=?\s*([\w\u00C0-\uFFFF\s\-_\.]+)?\])?/
          , c = b || document
          , d = a.match(e);
        e = d[1] || "*";
        b = d[3];
        var g = d[4] + "="
          , h = d[5]
          , f = {
            "class": "className",
            "for": "htmlFor"
        };
        d = [];
        e = "*" === e && c.all ? c.all : c.getElementsByTagName(e);
        c = e.length;
        if (document.querySelectorAll && "!=" != g) {
            e = document.querySelectorAll(a);
            b = 0;
            for (c = e.length; b < c; b++)
                d.push(e[b]);
            return d
        }
        for (+"\v1" || (b = f[b] ? f[b] : b); 0 <= --c; )
            a = e[c],
            f = +"\v1" ? a.getAttribute(b) : a[b],
            "string" === typeof f && 0 < f.length && (h ? ("=" === g ? f === h : "!=" === g ? f != h : "*=" === g ? 0 <= f.indexOf(h) : "~=" === g ? 0 <= (" " + f + " ").indexOf(h) : "^=" === g ? 0 === f.indexOf(h) : "$=" === g ? f.slice(-f.length) === h : "|=" === g && (f === h || f.substring(0, h.length + 1) === h + "-")) && d.push(a) : d.push(a));
        return d
    }
      , E = function(a) {
        this.tdmovebit = function() {
            var a = 10
              , b = 20
              , c = 30;
            ++a;
            a++;
            a = ++a + ++b + c++ + a++;
            return d + a - 76
        }
        ;
        var b = "23IL";
        a = encodeURIComponent(a);
        var e = ""
          , c = "";
        b += "<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-";
        var d = 0;
        var g = "";
        do {
            var h = a.charCodeAt(d);
            d = this.tdmovebit(d);
            var f = a.charCodeAt(d);
            d = this.tdmovebit(d);
            e = a.charCodeAt(d);
            d = this.tdmovebit(d);
            var k = h >> Math.round(((19 << 43) / 90 ^ 34) / 214);
            h = (h & 3) << 4 | f >> 4;
            var l = (f & 15) << 2 | e >> 6;
            c = e & Math.round(((19 << 43) / 90 ^ 34) / 6) - 4;
            isNaN(f) ? l = c = Math.round(((19 << 43) / 90 ^ 34) / 6) - 3 : isNaN(e) && (c = Math.round(((19 << 43) / 90 ^ 34) / 6) - 3);
            g = g + b.charAt(k) + b.charAt(h) + b.charAt(l) + b.charAt(c);
            k = h = l = c = h = f = e = ""
        } while (d <= a.length);return g + "/"
    }
      , C = function(a) {
        if (void 0 == a || null == a)
            return null;
        var b = "{", e;
        for (e in a)
            b += "'" + e + "':",
            b = "string" == typeof a[e] ? b + ("'" + a[e] + "'") : b + a[e],
            b += ",";
        b = b.substring(0, b.length - 1);
        return E(b + "}")
    }
      , r = function(a) {
        var b = B[a];
        return b ? b : a
    };
    this.init()



function get_d(sessionId){
    let d =  C({version: "1.0",
bizId: "passport_jd_com_login_pc",
elementId: "loginsubmit",
seq: "click",
sessionId: sessionId,
sp: 77,
eid: "HLVHJHUYSX6QASSMRU4JTRZ74N7WWKC2VRZLCVD4YPB4TIL4ESN53MH5HBJ5UV6MGKMYIT26JWJXQZASCS4TR6ON3I",
val: "1",
ctime: new Date().getTime()
})

    return d
}


get_d(sessionId)

