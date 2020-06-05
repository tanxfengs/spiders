const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const tdc = require("./tdc2")

const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`,{
    url : "https://ssl.captcha.qq.com/cap_union_new_show?aid=2005597573&protocol=https&accver=1&showtype=popup&ua=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzgxLjAuNDA0NC45MiBTYWZhcmkvNTM3LjM2&noheader=1&fb=1&enableDarkMode=0&grayscale=1&clientype=2&subsid=2&sess=NVoS1IwvObmGKtCNiQAZtRX4dW02IUJiqmHqSjvNKwden0l4pElzmtJiaVtXwTiwplRd6mwbvUnq1cTtC82YK2L5rGeoKVEvs4ktLfILPm1R_Ob6cDkNzNP6u8sdh64VVJ741yu8yUXIYLuUBuiNiIIdlywHVmfhplVTPl9J6RyRxt5OPdrLkqkhpKu3FAp504LUyUMgkzbY3U8d-QqNCw**&fwidth=0&sid=6815152220295268716&forcestyle=undefined&wxLang=&tcScale=1&uid=&cap_cd=&rnd=40728&TCapIframeLoadTime=undefined&prehandleLoadTime=92&createIframeStart=1586776278773"
});
let document = dom.window.document
let window = dom.window,
    navigator = window.navigator,
    history = window.history,
    location = window.location,
    addEventListener = window.addEventListener,
    performance = window.performance;
window.TDC = tdc.TDC;

window.captchaConfig = {
    "htdocsPath": "https://captcha.gtimg.com/2",
    "lang": "2052",
    "fpHtdocsPath": "https://captcha.gtimg.com/public/2",
    "fpFileName": "tokenidiframe.web-token.0.0.2.js",
    "color": "1a79ff",
    "tdcHtdocsPath": "https://ssl.captcha.qq.com",
    "dcFileName": "tdc.js?t=1586776278",
    "vmFileName": "dc_vx.js",
    "noheader": "0",
    "showtype": "popup",
    "theme": "",
    "uid": "",
    "subcapclass": "15",
    "aid": "2005597573",
    "uip": "1880522304",
    "clientype": "2",
    "websig": "ce9f44af30878c8e0b56999b238149d0b7782ecee6d17b59304692d648f729714ea176ce19325f1a271e783f07da9f979eebacc86d24491af48a5f37f3681b12",
    "collectdata": "acaace",
    "asig": "",
    "buid": "",
    "vmData": "vmData",
    "vsig": "c017qDd0GhExgfRXLV8d-O33V4Gzcl9RDDzTijwoUBNHhribi4q1ZTfLkhY_cc2fuXz7MiclpKHaTbOHKWsldRhhVFLmuIzmUueiOWdJRymoHplI_MXdjcSW3Z2G9NObCzUsv9JbX4CwdsBcDZmHYx4O09gI-jkju4D73bzT2psCMA*",
    "dst": "",
    "capSrc": "capFrame",
    "spt": "90",
    "curenv": "inner",
    "fwidth": "0",
    "slink": "",
    "cdnPic1": "https://hy.captcha.qq.com/hycdn_1_937598049868888576_0",
    "cdnPic2": "https://hy.captcha.qq.com/hycdn_2_937598049868888576_0",
    "iscdn": "1",
    "vmByteCode": "11e",
    "vmAvailable": "",
    "TuCao": "https://support.qq.com/products/2136",
    "capChallenge": {
        "randstr": "o25b",
        "M": 100,
        "ans": "756a9305bc55222f85341c092f7db1d8"
    },
    "rate": 0.5
}


!function(e) {
    var t = {};
    function n(i) {
        if (t[i])
            return t[i].exports;
        var r = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(r.exports, r, r.exports, n),
        r.l = !0,
        r.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var i = Object.create(null);
        if (n.r(i),
        Object.defineProperty(i, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var r in e)
                n.d(i, r, function(t) {
                    return e[t]
                }
                .bind(null, r));
        return i
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "",
    n(n.s = 41)


    n(11).setData([10, 62, 0.5])
    console.log(n(11).getData())
    n(11).setData({
        "trycnt": 8,
        "refreshcnt": 2,
        "slideValue": [
            [
                70,
                276,
                15
            ],
            [
                0,
                1,
                2
            ],
            [
                1,
                0,
                0
            ],
            [
                1,
                0,
                6
            ],
            [
                1,
                0,
                3
            ],
            [
                1,
                0,
                5
            ],
            [
                1,
                0,
                1
            ],
            [
                1,
                0,
                3
            ],
            [
                1,
                0,
                3
            ],
            [
                0,
                1,
                1
            ],
            [
                1,
                0,
                0
            ],
            [
                1,
                0,
                3
            ],
            [
                1,
                0,
                2
            ],
            [
                1,
                0,
                1
            ],
            [
                1,
                0,
                2
            ],
            [
                1,
                0,
                1
            ],
            [
                1,
                0,
                2
            ],
            [
                2,
                0,
                2
            ],
            [
                1,
                0,
                3
            ],
            [
                2,
                0,
                0
            ],
            [
                1,
                0,
                3
            ],
            [
                1,
                0,
                0
            ],
            [
                1,
                0,
                1
            ],
            [
                1,
                0,
                0
            ],
            [
                1,
                0,
                2
            ],
            [
                2,
                0,
                2
            ],
            [
                1,
                0,
                1
            ],
            [
                2,
                0,
                2
            ],
            [
                1,
                0,
                0
            ],
            [
                1,
                0,
                2
            ],
            [
                1,
                0,
                0
            ],
            [
                2,
                0,
                1
            ],
            [
                2,
                0,
                3
            ],
            [
                2,
                0,
                0
            ],
            [
                1,
                0,
                3
            ],
            [
                2,
                0,
                0
            ],
            [
                1,
                0,
                2
            ],
            [
                2,
                0,
                2
            ],
            [
                1,
                0,
                1
            ],
            [
                1,
                0,
                0
            ],
            [
                2,
                0,
                0
            ],
            [
                1,
                0,
                3
            ],
            [
                2,
                0,
                0
            ],
            [
                1,
                0,
                2
            ],
            [
                1,
                0,
                1
            ],
            [
                1,
                0,
                0
            ],
            [
                1,
                0,
                1
            ],
            [
                1,
                0,
                1
            ],
            [
                1,
                0,
                1
            ],
            [
                1,
                0,
                1
            ],
            [
                1,
                0,
                1
            ],
            [
                1,
                0,
                1
            ],
            [
                2,
                0,
                2
            ],
            [
                1,
                0,
                1
            ],
            [
                1,
                0,
                1
            ],
            [
                1,
                0,
                3
            ],
            [
                1,
                0,
                0
            ],
            [
                1,
                0,
                3
            ],
            [
                1,
                0,
                0
            ],
            [
                1,
                0,
                3
            ],
            [
                2,
                0,
                2
            ],
            [
                1,
                0,
                4
            ],
            [
                0,
                -1,
                0
            ],
            [
                1,
                0,
                1
            ],
            [
                1,
                0,
                5
            ],
            [
                1,
                0,
                2
            ],
            [
                0,
                -1,
                3
            ],
            [
                1,
                0,
                2
            ],
            [
                1,
                0,
                9
            ],
            [
                1,
                0,
                7
            ],
            [
                0,
                -1,
                8
            ],
            [
                1,
                0,
                0
            ],
            [
                1,
                0,
                2
            ],
            [
                1,
                0,
                6
            ],
            [
                1,
                0,
                8
            ],
            [
                0,
                -1,
                0
            ],
            [
                1,
                0,
                4
            ],
            [
                1,
                0,
                2
            ],
            [
                1,
                -1,
                5
            ],
            [
                1,
                0,
                7
            ],
            [
                0,
                -1,
                5
            ],
            [
                1,
                0,
                0
            ],
            [
                1,
                0,
                6
            ],
            [
                0,
                -1,
                8
            ],
            [
                1,
                0,
                8
            ],
            [
                1,
                0,
                33
            ],
            [
                0,
                -1,
                6
            ],
            [
                1,
                0,
                6
            ],
            [
                1,
                0,
                3
            ],
            [
                1,
                0,
                6
            ],
            [
                1,
                0,
                7
            ],
            [
                1,
                0,
                3
            ],
            [
                1,
                0,
                3
            ],
            [
                1,
                0,
                4
            ],
            [
                1,
                0,
                3
            ],
            [
                1,
                0,
                3
            ],
            [
                1,
                0,
                2
            ],
            [
                1,
                -1,
                3
            ],
            [
                1,
                0,
                4
            ],
            [
                1,
                0,
                3
            ],
            [
                1,
                0,
                2
            ],
            [
                1,
                0,
                3
            ],
            [
                1,
                0,
                3
            ],
            [
                1,
                0,
                4
            ],
            [
                1,
                0,
                4
            ],
            [
                1,
                0,
                2
            ],
            [
                1,
                0,
                4
            ],
            [
                1,
                -1,
                7
            ],
            [
                1,
                0,
                6
            ],
            [
                1,
                0,
                7
            ],
            [
                1,
                0,
                20
            ],
            [
                1,
                0,
                7
            ],
            [
                1,
                0,
                6
            ],
            [
                1,
                0,
                3
            ],
            [
                1,
                0,
                4
            ],
            [
                0,
                -1,
                1
            ],
            [
                1,
                0,
                2
            ],
            [
                1,
                0,
                5
            ],
            [
                1,
                0,
                4
            ],
            [
                1,
                0,
                3
            ],
            [
                1,
                0,
                3
            ],
            [
                1,
                0,
                3
            ],
            [
                1,
                0,
                2
            ],
            [
                1,
                0,
                3
            ],
            [
                0,
                -1,
                5
            ],
            [
                1,
                0,
                0
            ],
            [
                1,
                0,
                6
            ],
            [
                1,
                0,
                3
            ],
            [
                1,
                0,
                8
            ],
            [
                1,
                0,
                56
            ],
            [
                1,
                0,
                11
            ],
            [
                1,
                0,
                7
            ],
            [
                1,
                0,
                7
            ],
            [
                1,
                0,
                6
            ],
            [
                1,
                0,
                11
            ],
            [
                1,
                0,
                103
            ],
            [
                0,
                0,
                36
            ]
        ],
        "dragobj": 1
    })
    console.log("rhmxSxocvjuG1ffmHw117OJQa5oe%2Bk9l14Fru0u1460zWQPrsvX7z%2BPcHer2Sg6bcsX8Xquc4Rm6WhOQoAjGjw2O7F%2BaF8ceV0gFIUxkmlaW7BxLTSY3W%2B18ezEKDdgjtgfp67Jw1T1%2FI8cmbEEETQaHABJy0T2sPgH76zj0rS1Wz0plVrWmDCDY2Xgkwo6rBfcVuPh%2FARSJmL61dS%2F9fPzYfl0R8A5mlVoNTPmJeGuU3jrkjNOhXra8F65EQ6FrNU4jTfK%2BsmK2iizhSkCsZo6B3L%2B436WhFDvSZUMM06ilSdYvuhyfAgQ4cxbACvDgOLKTyUubPVcUHZwfwgG5TBC0j17tv8tW7R2lyfdJeYoRXDl53nJPLfdP4r5h%2BC0CX%2F0nneSVaBrnLxvy%2FoUg8hJXiii2aH2616q25hlhWRiGXuXbLGvGtIXO3716rFNbUqu5UXi0M6ujpvAuHsgmH574JNuydOmZ6lQmK6Fgo654YLS%2BozXk9PdP4r5h%2BC0CoNmuSgYi9L33T%2BK%2BYfgtAvdP4r5h%2BC0CfvsLkXsVK9o4QJYzE00WRvdP4r5h%2BC0CXo2UUM9zV73pV%2FOLVWZK%2FHEULYcWj%2BCtDS%2BSMIY0EwkJ4CbL2QUmesC3FVIsI0OwkFO1ldX6Zu7ByBH12IzMDywMWdOMEbPMHTOYjtoRASnaTgbnDxpZ%2FZoqpPrObUPYk9xdUxr1qi2L%2FzWHskLTxp9iIIOTAUtng49dGDV4Kkj9NkRQfpcKR4f8fj%2BAlVnxM2PrD7Ff0YuzvAkgwnxxn3t8TwUhZVUeXr7RFR%2BZpPtWhJrWGXATUwI%2FVMpkQeCFnGhL8X273vsLbOwuUHK5ubtUWgWkCOCJ49SxEzTN9KBjAp97wMP9%2BfjFuNdxKKgKUDj5zDIM89afeykiOTL2yivD7bPza8Nu7HNqkU1Qu3KzUhkC02s8hfdP4r5h%2BC0CjNL9Jj4Z6ESindHRQ%2BlJsvdP4r5h%2BC0C3IivkUWHDMci1EZ25iW5ICPL5%2FZJzGMqU5bcdhbKGzxAKJNANf7PFIQOk1RMgZ%2Foh9CyiyBJe5XbfWnJsYstak4qmtid51ED1e2jVa5Uff37jkksOftA3nPEzLzXNq%2Bv5hTLrYtth1iRfO%2FhtxJogolUUdJOYcGjG3LdIF2JtI8tVcWDJCpiTAGTFM3ZW5J0R7mmqmCleqC%2BgizqVYGbWKSkx49OyFEVR7mmqmCleqDhEBrETC7mvuEQGsRMLua%2BV81nszXo04uud5KViUmFAGXKgcfWpwrsvoIs6lWBm1i%2BgizqVYGbWL6CLOpVgZtYZcqBx9anCuzhEBrETC7mvke5pqpgpXqgZcqBx9anCuzhEBrETC7mvqSkx49OyFEVvoIs6lWBm1i%2BgizqVYGbWL6CLOpVgZtYZcqBx9anCuzhEBrETC7mvm8ZpZ%2Fg1wnl4RAaxEwu5r7hEBrETC7mvuEQGsRMLua%2B4RAaxEwu5r7NKPNpYFMSLuEQGsRMLua%2Bbxmln%2BDXCeXhEBrETC7mvm8ZpZ%2Fg1wnlbxmln%2BDXCeVvGaWf4NcJ5a53kpWJSYUAtscCJvDSEe5RTrcgzAPV2eEQGsRMLua%2BUU63IMwD1dm%2BgizqVYGbWIrVY90SOOdv4RAaxEwu5r5vGaWf4NcJ5bbHAibw0hHuZcqBx9anCuwcoX8qK%2FwgneEQGsRMLua%2Bbxmln%2BDXCeXhEBrETC7mvm8ZpZ%2Fg1wnlbxmln%2BDXCeXhEBrETC7mvrbHAibw0hHu4RAaxEwu5r5RTrcgzAPV2eEQGsRMLua%2Bbxmln%2BDXCeXhEBrETC7mvm8ZpZ%2Fg1wnl4RAaxEwu5r5vGaWf4NcJ5b6CLOpVgZtY4RAaxEwu5r7hEBrETC7mvm8ZpZ%2Fg1wnl4RAaxEwu5r5vGaWf4NcJ5b6CLOpVgZtYpKTHj07IURVlyoHH1qcK7OEQGsRMLua%2B4RAaxEwu5r7hEBrETC7mvuEQGsRMLua%2BvoIs6lWBm1jhEBrETC7mvuEQGsRMLua%2BvoIs6lWBm1i%2BgizqVYGbWEe5pqpgpXqg4RAaxEwu5r5HuaaqYKV6oC1VxYMkKmJMsahWbAvUZGEbV1vrYo3phxtXW%2BtijemHG1db62KN6YfGgnAgEfvkbEHkmCAlSVt3d%2BEFnweUSUMR2agPa6ocqbk2OUoeyIf1xoJwIBH75Gw%2F9%2B%2FI8ejw%2FI9qKrzAmVulvrJ%2FOFwMOcBknZ1FxJU4ChtXW%2BtijemHeSnBkc75b0XJijA0kWY0rMmKMDSRZjSsyYowNJFmNKxs0orgdR%2B6mWzSiuB1H7qZXg5kGpsgTwDJijA0kWY0rJiQB1AD3eiBXg5kGpsgTwBs0orgdR%2B6mQZw8ZGFVeSFbNKK4HUfupnJijA0kWY0rFw3RZs0WC33Xg5kGpsgTwDJijA0kWY0rLGOblasXCDlbNKK4HUfupkVzXelNN7QG7GOblasXCDlXg5kGpsgTwBeDmQamyBPAMmKMDSRZjSsyYowNJFmNKyxjm5WrFwg5acTH%2BsrDZf%2FbNKK4HUfupl4fq2iZYs4XDbrpFU2G5HE9mJDjlK8qCDgcPwgjmRjJICtHqV6WZnTkIYLhSRCjILvMnkBYFJv3rcTQCAjUCNIm%2F4wBuq7fZttXOZvFvEeJxsU9CSM6iH3BblgUGZ%2FPkUV0fEo1%2BuDpLIKoQlDv3TKTx2AUxQepXeQtx%2FlpSMA7Q%3D%3D")
    console.log(n(11).getData())

}([function(e, t, n) {
    "use strict";
    function i() {
        return Math.floor(1e8 * Math.random())
    }
    var r = function(e) {
        e = e ? 1 : 0;
        try {
            return location.search.substr(e)
        } catch (i) {
            try {
                var t = document.URL
                  , n = t.indexOf("?");
                if (n >= 0)
                    return t.substr(n + e)
            } catch (i) {}
        }
        return ""
    }
      , o = {};
    !function() {
        for (var e = r(!0).split("&"), t = 0; t < e.length; t++) {
            var n = /(.*?)=(.*)/.exec(e[t]);
            n && (o[n[1]] = n[2])
        }
    }();
    e.exports = {
        href: function() {
            try {
                return location.href
            } catch (e) {
                try {
                    return document.URL
                } catch (e) {}
            }
            return ""
        },
        getQuery: function(e) {
            var t = r();
            return t = t ? t.replace(/&rand=[^&]+/, "") + "&rand=" + i() : "?rand=" + i(),
            e = e ? 1 : 0,
            t.substr(e)
        },
        queryParam: function(e) {
            return o[e]
        },
        queryMap: function() {
            return $.extend({}, o)
        },
        parse2rgb: function(e) {
            if (!e || "string" != typeof e)
                return null;
            e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, n, i) {
                return t + t + n + n + i + i
            });
            var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
            return t ? {
                r: parseInt(t[1], 16),
                g: parseInt(t[2], 16),
                b: parseInt(t[3], 16),
                s: "#" + t[1] + t[2] + t[3]
            } : null
        },
        arrIndexOf: function(e, t) {
            if ("function" == typeof e.indexOf)
                return e.indexOf(t);
            for (var n = 0; n < e.length; n++)
                if (e[n] === t)
                    return n;
            return -1
        }
    }
}
, function(e, t, n) {
    "use strict";
    var i = function() {
        var e = 1
          , t = /subsid=(\d+)/.exec(location.href);
        t && (e = parseInt(t[1], 10) + 1);
        var n = function(t, n) {
            var i = n || e;
            return t = /subsid=\d+/.test(t) ? t.replace(/subsid=\d+/g, "subsid=" + i) : t + "&subsid=" + i,
            n || e++,
            t
        };
        return n.get = function() {
            return e
        }
        ,
        n.bind = function() {
            var t = e++;
            return function(e) {
                return n(e, t)
            }
        }
        ,
        n
    }();
    e.exports = i
}
, function(e, t, n) {
    "use strict";
    var i = Object.prototype.hasOwnProperty
      , r = Object.prototype.toString
      , o = Object.defineProperty
      , a = Object.getOwnPropertyDescriptor
      , s = function(e) {
        return "function" == typeof Array.isArray ? Array.isArray(e) : "[object Array]" === r.call(e)
    }
      , c = function(e) {
        if (!e || "[object Object]" !== r.call(e))
            return !1;
        var t, n = i.call(e, "constructor"), o = e.constructor && e.constructor.prototype && i.call(e.constructor.prototype, "isPrototypeOf");
        if (e.constructor && !n && !o)
            return !1;
        for (t in e)
            ;
        return void 0 === t || i.call(e, t)
    }
      , u = function(e, t) {
        o && "__proto__" === t.name ? o(e, t.name, {
            enumerable: !0,
            configurable: !0,
            value: t.newValue,
            writable: !0
        }) : e[t.name] = t.newValue
    }
      , l = function(e, t) {
        if ("__proto__" === t) {
            if (!i.call(e, t))
                return;
            if (a)
                return a(e, t).value
        }
        return e[t]
    };
    e.exports = function f() {
        var e, t, n, i, r, o, a = arguments[0], d = 1, p = arguments.length, h = !1;
        for ("boolean" == typeof a && (h = a,
        a = arguments[1] || {},
        d = 2),
        (null == a || "object" != typeof a && "function" != typeof a) && (a = {}); d < p; ++d)
            if (null != (e = arguments[d]))
                for (t in e)
                    n = l(a, t),
                    a !== (i = l(e, t)) && (h && i && (c(i) || (r = s(i))) ? (r ? (r = !1,
                    o = n && s(n) ? n : []) : o = n && c(n) ? n : {},
                    u(a, {
                        name: t,
                        newValue: f(h, o, i)
                    })) : void 0 !== i && u(a, {
                        name: t,
                        newValue: i
                    }));
        return a
    }
}
, , function(e, t, n) {
    "use strict";
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
      , r = Object.assign || n(2)
      , o = function(e) {
        return function(t) {
            return Object.prototype.toString.call(t) == "[object " + e + "]"
        }
    }
      , a = o("Object")
      , s = o("Function")
      , c = function() {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    }
      , u = function() {
        return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }
      , l = function(e, t, n) {
        if (-1 != e.indexOf("?")) {
            var i = new RegExp("(\\?|&" + t + ")=[^&]*");
            e = i.test(e) ? e.replace(i, "$1=" + n) : e + "&" + t + "=" + n
        } else
            e = e + "?" + t + "=" + n;
        return e
    }
      , f = function(e, t) {
        return e.currentStyle ? e.currentStyle[t] : document.defaultView.getComputedStyle(e, !1)[t]
    }
      , d = function(e, t) {
        if (e && t) {
            if (a(t)) {
                for (var n in t)
                    e.style[n] = t[n];
                return t
            }
            return f(e, t)
        }
    }
      , p = /(iPhone|iPad|iPod|Android|ios|SymbianOS|Mobile)/i.test(navigator.userAgent)
      , h = /chrome\/7[567]/i.test(navigator.userAgent)
      , m = function() {
        var e = 1
          , t = void 0;
        if (document.querySelector)
            t = document.querySelector('meta[name="viewport"]');
        else
            for (var n = document.getElementsByTagName("meta"), i = 0, r = n.length; i < r; i++) {
                "viewport" == n[i].getAttribute("name") && (t = n[i])
            }
        if (t) {
            var o = t.getAttribute("content").match(/initial\-scale=([\d\.]+)/);
            o && (e = parseFloat(o[1]))
        }
        return e
    }
      , g = ["absolute", "fixed", "static", "relative"]
      , v = !!window.ActiveXObject && 8 == document.documentMode;
    e.exports = {
        extend: r,
        isObject: a,
        isFunction: s,
        isHorizontal: function(e, t) {
            if ("number" == typeof window.orientation && "object" === i(window.onorientationchange) && (-90 == window.orientation || 90 == window.orientation))
                return !0;
            if (e) {
                if (t.windowHeight < t.windowWidth)
                    return !0
            } else if (window.innerHeight < window.innerWidth)
                return !0;
            return !1
        },
        callbackExecutor: function(e, t) {
            e.closeSecurityCode(),
            setTimeout(function() {
                for (var n = 0, i = e.listenFunc.length; n < i; n++)
                    try {
                        e.listenFunc[n](t)
                    } catch (r) {}
            }, 0)
        },
        addUrlParam: function(e, t) {
            for (var n in t)
                e = l(e, encodeURIComponent(n), encodeURIComponent(t[n]));
            return e
        },
        removeIfExist: function(e) {
            for (var t = window.document.getElementById(e); t; )
                t.parentNode.removeChild(t),
                t = window.document.getElementById(e)
        },
        createElement: function(e) {
            return document.createElement(e)
        },
        CSS: d,
        computeBaseFontSize: function() {
            var e = c()
              , t = u()
              , n = 0;
            "orientation"in window ? n = window.orientation : screen && screen.orientation && (n = screen.orientation.angle);
            var i = (90 === Math.abs(n) ? t : e) / 375
              , r = void 0
              , o = m();
            return i = (i = 0 == o || 1 == o ? i > 1.3 ? 1.3 : i : o >= .5 ? i > 2 ? 2 : i : i > 3 ? 3 : i) < .85 ? .85 : i,
            r = parseInt(1e4 * i) / 1e4 * 16,
            r = p ? r : 16
        },
        isMobileUa: p,
        getWindowWidth: c,
        getWindowHeight: u,
        getParentScale: m,
        getPosStyle: function(e) {
            var t = "embed" == e.type ? "relative" : "absolute";
            if ("popup" == e.type && e.pos && e.pos.length > 0)
                for (var n = 0; n < g.length; n++)
                    if (e.pos === g[n]) {
                        t = e.pos;
                        break
                    }
            return t
        },
        initColor: function(e) {
            var t = "#4886ff";
            if (e) {
                var n = decodeURIComponent(e);
                n && -1 == n.indexOf("#") && 6 == n.length && /^[0-9a-fA-F]{6}$/g.test(n) && (t = "#" + n)
            }
            return t
        },
        getCSS: f,
        isIEVer: function(e) {
            var t = document.createElement("b");
            return t.innerHTML = "\x3c!--[if IE " + e + "]><i></i><![endif]--\x3e",
            t.getElementsByTagName("i") && 1 === t.getElementsByTagName("i").length
        },
        getPos: function(e) {
            if ("undefined" != typeof e.offsetParent) {
                for (var t = 0, n = 0; e; e = e.offsetParent) {
                    var i = f(e, "borderLeftWidth");
                    i = i && i.indexOf("px") > -1 ? parseInt(i, 10) : 0;
                    var r = f(e, "borderTopWidth");
                    r = r && r.indexOf("px") > -1 ? parseInt(r, 10) : 0,
                    v && (i = r = 0),
                    t += e.offsetLeft + i,
                    n += e.offsetTop + r
                }
                return [t, n]
            }
            return [e.x, e.y]
        },
        getSize: function(e) {
            var t = d(e, "width")
              , n = d(e, "height");
            return [parseInt(t, 10), parseInt(n, 10)]
        },
        getScrollTop: function() {
            return document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
        },
        isLowIE: function() {
            var e, t, n = navigator.userAgent.toLowerCase(), i = n.indexOf("msie") > -1;
            if (i) {
                if (e = n.match(/msie ([\d.]+)/)[1],
                t = i && document.documentMode,
                e && e <= 8)
                    return !0;
                if (t && t < 9)
                    return !0
            }
            return !1
        },
        getCapType: function(e, t) {
            e = parseInt(e, 10),
            t = parseInt(t, 10);
            var n = "defaultSize";
            if (0 != e && 1 != e || 0 != t) {
                if (1 == e || 2 == e)
                    switch (t) {
                    case 1:
                        n = "click";
                        break;
                    case 4:
                        n = "piece";
                        break;
                    case 7:
                        n = "coordinate";
                        break;
                    case 8:
                        n = "slide";
                        break;
                    case 9:
                        n = "slidepuzzle";
                        break;
                    case 11:
                        n = "vtt";
                        break;
                    case 12:
                        n = "f_limit";
                        break;
                    case 10:
                    case 13:
                    case 14:
                        n = "slidepuzzle_new";
                        break;
                    case 15:
                        n = "slidepuzzle_opt";
                        break;
                    default:
                        n = "defaultSize"
                    }
            } else
                n = "char";
            return n
        },
        setPopPosition: function(e, t, n, i) {
            var r = 0
              , o = 0
              , a = c()
              , s = u();
            return i && i.width || (r = Math.floor((s - n - 2) / 2),
            o = Math.floor((a - t - 2) / 2)),
            d(e, {
                top: r + "px",
                left: o + "px",
                width: t + "px",
                height: n + "px"
            })
        },
        addClass: function(e, t) {
            var n = e.className
              , i = n + ("" != n ? " " : "") + t;
            e.className = i
        },
        removeClass: function(e, t) {
            var n = " " + e.className + " "
              , i = (n = n.replace(/(\s+)/gi, " ")).replace(" " + t + " ", " ");
            i = i.replace(/(^\s+)|(\s+$)/g, ""),
            e.className = i
        },
        isChrome75: h,
        isDarkMode: function() {
            return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
        }
    }
}
, , , , , , function(e, t, n) {
    "use strict";
    var i, r, o = n(11), a = n(0), s = n(1), c = window.captchaConfig, u = (i = document.referrer,
    r = a.href(),
    i = i.length > 512 ? i.substr(0, 512) : i,
    r = r.length > 1024 ? r.substr(0, 1024) : r,
    ["appid=" + c.aid, "uid=" + c.uid, "sid=" + a.queryParam("sid"), "referer=" + encodeURIComponent(i), "href=" + encodeURIComponent(r)].join("&"));
    e.exports = {
        type: {
            ERROR_TYPE_TDC_DOWNLOAD_FAIL: 20,
            ERROR_TYPE_TDC_RUN_FAIL: 21,
            ERROR_TYPE_TDC_DOWNLOAD_RETRY_SUCCESS: 22,
            ERROR_TYPE_TDC_RUN_RETRY_SUCCESS: 23,
            ERROR_TYPE_TOUCH_CANCEL: 14,
            ERROR_TYPE_TWICE_IMAGE_ONERROR: 13,
            ERROR_TYPE_CGI_IMAGE_ONERROR: 12,
            ERROR_TYPE_IMAGE_ONERROR: 11,
            ERROR_TYPE_AJAX_GETSIG: 9,
            ERROR_TYPE_AJAX_VERIFY: 8,
            ERROR_TYPE_IMAGE_BEYONDSIZE: 7,
            ERROR_TYPE_MB_FP_REGISTER_TIMEOUT: 6,
            ERROR_TYPE_MB_FPJS_DOWNLOAD_FAIL: 5,
            ERROR_TYPE_PC_FP_REGISTER_TIMEOUT: 4,
            ERROR_TYPE_PC_FPJS_DOWNLOAD_FAIL: 3,
            ERROR_TYPE_BADJS_DOWNLOAD_FAIL: 2,
            ERROR_TYPE_BADJS_REPORT: 1
        },
        send: function(e, t, n, i) {
            try {
                t = (t = t && t.length > 1024 ? t.substr(0, 1024) : t) || "";
                var r = ["type=" + e, "errType=" + (n = n || c.subcapclass), "tokenid=" + o.getToken(), "timing=" + (i || ""), "reason=" + encodeURIComponent(t)]
                  , a = "https://aq.qq.com/cn2/manage/mbtoken/cap_monitor?" + u + "&" + r.join("&");
                (new Image).src = s(a)
            } catch (l) {}
        }
    }
}
, function(e, t, n) {
    "use strict";
    var i = n(34)
      , r = n(0).arrIndexOf
      , o = n(43)
      , a = {}
      , s = !1;
    function c(e) {
        (a = window.TDC || {}).initReport || (setTimeout(function() {
            !function(e) {
                if (!e)
                    return;
                var t = window.scriptSuccess.tdc
                  , n = "number" == typeof t && t > 1;
                1 !== t || f() || (m(e),
                window.scriptRunFailure = {
                    tdc: 1
                });
                n && (f() || m(e),
                h(e),
                p(e, t));
                d() && h(e)
            }(e)
        }, 1200),
        a.initReport = !0)
    }
    function u(e) {
        window.TDC.setData && window.TDC.setData(e)
    }
    function l() {
        return "function" == typeof a.getInfo && a.getInfo() || {}
    }
    function f() {
        return "undefined" != typeof window.TDC && "function" == typeof a.getData
    }
    function d() {
        return r(window.scriptErrors, "tdc") > -1
    }
    function p(e, t) {
        e && e.send(e.type.ERROR_TYPE_TDC_DOWNLOAD_RETRY_SUCCESS, t)
    }
    function h(e) {
        e && e.send(e.type.ERROR_TYPE_TDC_DOWNLOAD_FAIL)
    }
    function m(e) {
        e && e.send(e.type.ERROR_TYPE_TDC_RUN_FAIL)
    }
    e.exports = {
        link: c,
        setData: u,
        getData: function() {
            u({
                ft: i()
            });
            var e = window.scriptErrors || []
              , t = r(e, "tdc") > -1;
            return "function" == typeof window.TDC.getData ? window.TDC.getData(!0) || "---" : t ? "------" : "---"
        },
        clearData: function() {
            a.clearTc && a.clearTc()
        },
        getInfo: l,
        getToken: function() {
            return (l() || {}).tokenid || ""
        },
        getEks: function() {
            return (l() || {}).info || ""
        },
        getTlg: function() {
            return "undefined" == typeof window.TDC ? 0 : 1
        },
        checkTdcSuccess: f,
        retryLoad: function(e) {
            try {
                if (window.TDC || s || !e)
                    return;
                var t = window.captchaConfig.tdcHtdocsPath + "/" + window.captchaConfig.dcFileName;
                s = !0,
                o(t, function(t) {
                    s = !1,
                    t || setTimeout(function() {
                        c(),
                        d() && (function() {
                            for (var e = void 0, t = 0; t < window.scriptErrors.length; t++)
                                if ("tdc" === window.scriptErrors[t]) {
                                    e = t;
                                    break
                                }
                            "number" == typeof e && window.scriptErrors.splice(e, 1)
                        }(),
                        p(e, 4)),
                        f() ? window.scriptRunFailure && 1 === window.scriptRunFailure.tdc && function(e) {
                            e && e.send(e.type.ERROR_TYPE_TDC_RUN_RETRY_SUCCESS)
                        }(e) : window.scriptRunFailure = {
                            tdc: 1
                        }
                    }, 500)
                })
            } catch (n) {}
        }
    }
}
, function(e, t, n) {
    "use strict";
    var i = n(4)
      , r = navigator.userAgent
      , o = /nettype\/(4g|wifi)/i.test(r)
      , a = /iphone|ipad|ipod/gi.test(r) ? "ios" : "android"
      , s = "https:" === location.protocol ? "https" : "http"
      , c = window.captchaConfig;
    i.isMobileUa || (a = "pc"),
    e.exports = {
        ua: r,
        loadState: {
            ready: 0,
            fail: 1,
            mixing: 2
        },
        cgiImg: "/cap_union_new_getcapbysig",
        isFastNet: o,
        loadImgTimeout: o ? 8e3 : 15e3,
        platform: a,
        protocol: s,
        config: c,
        popup: "popup" === c.showtype,
        corsAttr: {
            attrs: {
                crossorigin: "anonymous"
            }
        },
        companyInfo: "1" === c.slink && "2052" === c.lang,
        needFp: "tokenidiframe_d.js" !== c.fpFileName,
        needVm: "dc_vx.js" !== c.vmFileName
    }
}
, , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    var i = n(44)
      , r = n(12)
      , o = new i("securityCode")
      , a = 1;
    o.addTarget(window.parent, "parent"),
    o.listen(function(e) {});
    var s = function(e, t) {
        try {
            t && (e = {
                message: e
            }),
            o.targets.parent.send(JSON.stringify(e))
        } catch (n) {}
    }
      , c = {
        adjustStyle: function() {
            s({
                type: 7
            }, !0)
        },
        capClose: function() {
            s({
                type: 6
            }, !0)
        },
        loadMsg: function(e, t, n, i) {
            s({
                type: 10,
                loadstate: e,
                info: t || "",
                fwidth: n,
                fheight: i
            }, !0)
        },
        loadReady: function() {
            try {
                c.loadMsg(r.loadState.ready)
            } catch (e) {}
        },
        loadFailure: function(e) {
            c.loadMsg(r.loadState.fail, e)
        },
        loadChange: function(e, t) {
            c.loadMsg(r.loadState.mixing, null, e, t)
        },
        hybridVerify: function(e, t) {
            s({
                type: 8,
                sess: e,
                subsid: t
            }, !0)
        },
        sessionTimeout: function() {
            s({
                type: 12
            }, !0)
        },
        verifySuccess: function(e, t) {
            s({
                type: 3,
                ticket: e,
                randstr: t
            }, !0)
        },
        frequencyLimit: function() {
            s({
                type: 11
            }, !0)
        },
        goBack: function() {
            s({
                type: 4
            }, !0)
        },
        otherBack: function() {
            s({
                type: 2,
                seq: a++
            })
        }
    };
    e.exports = c
}
, function(e, t, n) {
    "use strict";
    var i = n(0)
      , r = ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10", "c11", "c12", "c13", "c14", "c15", "c16", "c17", "c18", "c19", "c20", "puzzle1", "puzzle2", "puzzle3", "puzzle4", "puzzle5", "puzzle6", "puzzle7", "puzzle8", "puzzle9", "puzzle10", "c21", "c22", "c23"]
      , o = {
        "zh-cn": ["\u70b9\u51fb\u5f00\u59cb\u9a8c\u8bc1", "\u5b89\u5168\u9a8c\u8bc1", "\u9a8c\u8bc1\u6210\u529f\uff0c\u7cbe\u51c6\u65e0\u654c\u4e86\uff01", "\u95ee\u9898\u53cd\u9988", "\u6362\u4e00\u5f20\u56fe\u7247", "\u9a8c\u8bc1", "\u8bf7\u70b9\u51fb\u91cd\u65b0\u52a0\u8f7d", "\u7f51\u7edc\u8d85\u65f6\uff0c\u8bf7\u91cd\u8bd5", "\u9a8c\u8bc1\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u9a8c\u8bc1", "\u9a8c\u8bc1\u7801", "\u8fd4\u56de", "\u6b63\u5728\u9a8c\u8bc1...", "\u5f53\u524d\u7f51\u7edc\u8f83\u5dee\uff0c\u8bf7\u70b9\u51fb\u5237\u65b0\u6309\u94ae\u91cd\u8bd5", "\u56fe\u7247\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u70b9\u51fb\u5237\u65b0", "\u6b63\u5728\u9a8c\u8bc1", ["\u53ea\u7528\u4e86+s\uff0c\u7b80\u76f4\u6bd4\u95ea\u7535\u8fd8\u5feb", "\u53ea\u7528\u4e86+s\uff0c\u8fd9\u901f\u5ea6\u7b80\u76f4\u5b8c\u7f8e", "\u9a8c\u8bc1\u6210\u529f\uff0c\u7cbe\u51c6\u65e0\u654c\u4e86\uff01"], "\u5237\u65b0", "\u5173\u95ed", "\u53cd\u9988", "\u5237\u65b0\u8fc7\u591a\uff0c\u8bf7\u70b9\u51fb\u91cd\u8bd5", "\u8bf7\u5411\u53f3\u62d6\u52a8\u6ed1\u5757\u5b8c\u6210\u62fc\u56fe", "\u9a8c\u8bc1\u9519\u8bef\uff0c\u8bf7\u91cd\u8bd5", "\u62d6\u52a8\u6ed1\u5757\u5230\u6700\u53f3\u8fb9", "\u8bf7\u518d\u6b21\u62d6\u52a8\u6ed1\u5757\u5230\u6700\u53f3\u8fb9", "\u8bf7\u62d6\u52a8\u6ed1\u5757\u5230\u6700\u53f3\u8fb9", "\u62d6\u52a8\u4e0b\u65b9\u6ed1\u5757\u5b8c\u6210\u62fc\u56fe", "\u8bf7\u63a7\u5236\u62fc\u56fe\u5757\u5bf9\u9f50\u7f3a\u53e3", "\u8fd9\u9898\u6709\u70b9\u96be\u5462\uff0c\u5df2\u4e3a\u60a8\u66f4\u6362\u9898\u76ee", ["\u62fc\u56fe\u5757\u534a\u8def\u4e22\u4e86\uff0c\u518d\u8bd5\u4e00\u6b21\u5427", "\u518d\u8bd5\u4e00\u6b21\uff0c\u62fc\u5f97\u6bd4\u4e0a\u6b21\u66f4\u51c6\u4e9b", "\u7f51\u7edc\u604d\u60da\u4e86\u4e00\u4e0b\uff0c\u518d\u8bd5\u4e00\u6b21\u5427"], "\u56fe\u7247\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u70b9\u51fb\u5237\u65b0", "\u9a8c\u8bc1\u6210\u529f", "\u5237\u65b0\u8fc7\u591a", "\u7f51\u7edc\u604d\u60da\u4e86\u4e00\u4e0b(+)\uff0c\u518d\u8bd5\u4e00\u6b21\u5427"],
        "zh-hk": ["\u9ede\u64ca\u958b\u59cb\u9a57\u8b49", "\u5b89\u5168\u9a57\u8b49", "\u9a57\u8b49\u6210\u529f\uff0c\u767e\u5206\u767e\u7cbe\u6e96\uff01", "\u554f\u984c\u610f\u898b\u53cd\u6620", "\u63db\u4e00\u5f35\u5716\u7247", "\u9a57\u8b49", "\u8acb\u9ede\u64ca\u91cd\u65b0\u52a0\u8f09", "\u7db2\u7d61\u903e\u6642\uff0c\u8acb\u91cd\u8a66", "\u9a57\u8b49\u932f\u8aa4\uff0c\u8acb\u91cd\u65b0\u9a57\u8b49", "\u9a57\u8b49\u78bc", "\u8fd4\u56de", "\u6b63\u5728\u9a57\u8b49\u22ef", "\u76ee\u524d\u7db2\u7d61\u8f03\u5dee\uff0c\u8acb\u9ede\u64ca\u5237\u65b0\u6309\u9215\u91cd\u8a66", "\u7121\u6cd5\u52a0\u8f09\u5716\u7247\uff0c\u8acb\u9ede\u64ca\u5237\u65b0", "\u6b63\u5728\u9a57\u8b49", ["\u53ea\u7528\u4e86+s\uff0c\u7c21\u76f4\u5feb\u5982\u9583\u96fb", "\u53ea\u7528\u4e86+s\uff0c\u901f\u5ea6\u7c21\u76f4\u5b8c\u7f8e", "\u9a57\u8b49\u6210\u529f\uff0c\u767e\u5206\u767e\u7cbe\u6e96\uff01"], "\u5237\u65b0", "\u95dc\u9589", "\u610f\u898b\u53cd\u6620", "\u5237\u65b0\u6b21\u6578\u904e\u591a\uff0c\u8acb\u9ede\u64ca\u91cd\u8a66", "\u8acb\u5411\u53f3\u62d6\u52d5\u6ed1\u584a\u5b8c\u6210\u62fc\u5716", "\u9a57\u8b49\u932f\u8aa4\uff0c\u8acb\u91cd\u8a66", "\u62d6\u52d5\u6ed1\u584a\u5230\u6700\u53f3\u908a", "\u8acb\u518d\u6b21\u62d6\u52d5\u6ed1\u584a\u5230\u6700\u53f3\u908a", "\u8acb\u62d6\u52d5\u6ed1\u584a\u5230\u6700\u53f3\u908a", "\u62d6\u52d5\u4e0b\u65b9\u6ed1\u584a\u5b8c\u6210\u62fc\u5716", "\u8acb\u63a7\u5236\u62fc\u5716\u584a\u5c0d\u9f4a\u7f3a\u53e3", "\u9019\u984c\u6709\u9ede\u96e3\uff0c\u5df2\u70ba\u4f60\u66f4\u63db\u984c\u76ee", ["\u62fc\u5716\u584a\u534a\u8def\u6389\u4e0b\u4e86\uff0c\u518d\u8a66\u4e00\u6b21\u5427", "\u518d\u8a66\u4e00\u6b21\uff0c\u8981\u62fc\u5f97\u6bd4\u4e0a\u6b21\u66f4\u6e96", "\u7db2\u7d61\u505c\u9813\u4e86\u4e00\u4e0b\uff0c\u518d\u8a66\u4e00\u6b21\u5427"], "\u7121\u6cd5\u52a0\u8f09\u5716\u7247\uff0c\u8acb\u9ede\u64ca\u5237\u65b0", "\u9a57\u8b49\u6210\u529f", "\u5237\u65b0\u6b21\u6578\u904e\u591a", "\u7db2\u7d61\u505c\u9813\u4e86\u4e00\u4e0b(+)\uff0c\u518d\u8a66\u4e00\u6b21\u5427"],
        "zh-tw": ["\u9ede\u64ca\u958b\u59cb\u9a57\u8b49", "\u5b89\u5168\u9a57\u8b49", "\u9a57\u8b49\u6210\u529f\uff0c\u7cbe\u6e96\u7121\u6575\u4e86\uff01", "\u554f\u984c\u53cd\u6620\u610f\u898b", "\u63db\u4e00\u5f35\u5716\u7247", "\u9a57\u8b49", "\u8acb\u9ede\u64ca\u91cd\u65b0\u8f09\u5165", "\u7db2\u8def\u903e\u6642\uff0c\u8acb\u91cd\u8a66", "\u9a57\u8b49\u932f\u8aa4\uff0c\u8acb\u91cd\u65b0\u9a57\u8b49", "\u9a57\u8b49\u78bc", "\u8fd4\u56de", "\u6b63\u5728\u9a57\u8b49...", "\u76ee\u524d\u7db2\u8def\u4e0d\u7a69\uff0c\u8acb\u9ede\u64ca\u91cd\u65b0\u6574\u7406\u6309\u9215\u91cd\u8a66", "\u5716\u7247\u8f09\u5165\u5931\u6557\uff0c\u8acb\u9ede\u64ca\u91cd\u65b0\u6574\u7406", "\u6b63\u5728\u9a57\u8b49", ["\u53ea\u7528\u4e86+s\uff0c\u7c21\u76f4\u6bd4\u9583\u96fb\u9084\u5feb", "\u53ea\u7528\u4e86+s\uff0c\u9019\u901f\u5ea6\u7c21\u76f4\u5b8c\u7f8e", "\u9a57\u8b49\u6210\u529f\uff0c\u7cbe\u6e96\u7121\u6575\u4e86\uff01"], "\u91cd\u65b0\u6574\u7406", "\u95dc\u9589", "\u53cd\u6620\u610f\u898b", "\u91cd\u65b0\u6574\u7406\u6b21\u6578\u904e\u591a\uff0c\u8acb\u9ede\u64ca\u91cd\u8a66", "\u8acb\u5411\u53f3\u62d6\u66f3\u6ed1\u584a\u5b8c\u6210\u62fc\u5716", "\u9a57\u8b49\u932f\u8aa4\uff0c\u8acb\u91cd\u8a66", "\u5c07\u6ed1\u584a\u62d6\u66f3\u5230\u6700\u53f3\u908a", "\u8acb\u518d\u6b21\u5c07\u6ed1\u584a\u62d6\u66f3\u5230\u6700\u53f3\u908a", "\u8acb\u5c07\u6ed1\u584a\u62d6\u66f3\u5230\u6700\u53f3\u908a", "\u62d6\u66f3\u4e0b\u65b9\u6ed1\u584a\u5b8c\u6210\u62fc\u5716", "\u8acb\u63a7\u5236\u62fc\u5716\u7247\u5c0d\u9f4a\u7f3a\u53e3", "\u9019\u984c\u6709\u9ede\u96e3\uff0c\u5df2\u70ba\u4f60\u66f4\u63db\u984c\u76ee", ["\u62fc\u5716\u7247\u907a\u5931\u4e86\uff0c\u8acb\u518d\u8a66\u4e00\u6b21", "\u518d\u8a66\u4e00\u6b21\uff0c\u62fc\u5f97\u6bd4\u4e0a\u6b21\u66f4\u6e96\u4e9b", "\u7db2\u8def\u4e2d\u65b7\u4e86\u4e00\u4e0b\uff0c\u518d\u8a66\u4e00\u6b21\u5427"], "\u5716\u7247\u8f09\u5165\u5931\u6557\uff0c\u8acb\u9ede\u64ca\u91cd\u65b0\u6574\u7406", "\u9a57\u8b49\u6210\u529f", "\u5617\u8a66\u6b21\u6578\u904e\u591a", "\u7db2\u8def\u4e2d\u65b7\u4e86\u4e00\u4e0b(+)\uff0c\u518d\u8a66\u4e00\u6b21\u5427"],
        en: ["Tap to verify", "Security Verification", "Verification is successful", "Feedback", "Refresh", "Verify", "Tap to reload", "Timeout. Try again.", "Verification error. Try again.", "Verification Code", "Back", "Verifying...", "Unstable network. Tap Refresh to retry.", "Loading failed. Tap the image to refresh.", "Verifying", ["+s spent. You beat the Flash!", "+s spent. Perfect!", "Verification is successful"], "Refresh", "Close", "Feedback", "Refreshing too often. Tap to retry.", "Drag the slider to the right to fix the puzzle.", "Verification error. Try again.", "Drag the slider to the rightmost slot", "Drag it once more", "Drag the slider to the rightmost slot", "Drag the slider below to fit the puzzle piece", "Put the piece right into the slot", "That one seems a bit tough. Try this one.", ["The piece got lost. Try again.", "Try again and make it fit in more precisely", "Unstable network. Try again."], "Loading failed. Tap the image to refresh.", "Verification is successful", "Refreshing too often", "Unstable network(+). Try again."],
        "en-o": ["Click here to verify", "Security Verification", "Verification success", "Feedback", "Refresh", "Verify", "Click to refresh", "Network timed out. Please try again", "Verification failed. Please try again", "Captcha", "Back", "Verify...", "Network is poor. Please try again later", "Fail to load image, click to refresh", "Verifying", ["Wow, only +s, blazing speed!", "Wow, only +s, near perfection!", "Success! Great precision."], "Refresh", "Close", "Help", "Click to reopen captcha", "Slide to complete the jigsaw", "Verification failed. Please try again", "Drag this arrow to the far right", "Drag this arrow to the far right again", "Please drag this arrow to the far right", "Drag to complete the jigsaw", "Please piece together the jigsaw", "Try agian with refreshed image", ["Something went wrong, please try again", "Bad network connection, please try again", "Our mistake, sorry to ask you try again"], "Fail to load image, click to refresh", "Verification is successful", "Refreshing too often", "Our mistake(+), sorry to ask you try again"],
        ar: ["\u0627\u0646\u0642\u0631 \u0644\u0644\u062a\u062d\u0642\u0642", "\u0627\u0644\u062a\u062d\u0642\u0642 \u0645\u0646 \u0627\u0644\u062d\u0645\u0627\u064a\u0629", "\u0646\u062c\u0627\u062d \u0627\u0644\u062a\u062d\u0642\u0642", "\u062a\u0639\u0642\u064a\u0628", "\u062a\u062d\u062f\u064a\u062b", "\u062a\u062d\u0642\u0642", "\u0627\u0646\u0642\u0631 \u0644\u0625\u0639\u0627\u062f\u0629 \u0627\u062a\u062d\u0645\u064a\u0644", "\u0627\u0646\u062a\u0647\u062a \u0627\u0644\u0645\u0647\u0644\u0629. \u062d\u0627\u0648\u0644 \u0645\u062c\u062f\u062f\u0627", "\u062e\u0644\u0644 \u0641\u064a \u0627\u0644\u062a\u062d\u0642\u0642. \u0623\u0639\u062f \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629", "\u0643\u0648\u062f \u0627\u0644\u062a\u062d\u0642\u0642", "\u0639\u0648\u062f\u0629", "\u062c\u0627\u0631\u064a \u0627\u0644\u062a\u062d\u0642\u0642...", "\u0634\u0628\u0643\u0629 \u0645\u0636\u0637\u0631\u0628\u0629. \u0627\u0646\u0642\u0631 \u0639\u0644\u0649 \u062a\u062d\u062f\u064a\u062b \u0644\u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629", "\u0641\u0634\u0644 \u0627\u0644\u062a\u062d\u0645\u064a\u0644. \u0627\u0646\u0642\u0631 \u0639\u0644\u0649 \u0627\u0644\u0635\u0648\u0631\u0629 \u0644\u0644\u062a\u062d\u062f\u064a\u062b", "\u062c\u0627\u0631\u064a \u0627\u0644\u062a\u062d\u0642\u0642", ["+\u062b\u0627 \u0645\u0636\u062a. \u0647\u0632\u0645\u062a \u0627\u0644\u0641\u0644\u0627\u0634!", "+\u062b\u0627 \u0645\u0636\u062a. \u0631\u0627\u0626\u0639!", "\u0646\u062c\u0627\u062d \u0627\u0644\u062a\u062d\u0642\u0642"], "\u062a\u062d\u062f\u064a\u062b", "\u0625\u063a\u0644\u0627\u0642", "\u062a\u0639\u0642\u064a\u0628", "\u0643\u062b\u0631\u0629 \u0627\u0644\u062a\u062d\u062f\u064a\u062b. \u0627\u0646\u0642\u0631 \u0644\u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629", "\u0627\u0633\u062d\u0628 \u0627\u0644\u0645\u0646\u0632\u0644\u0642\u0629 \u0644\u0644\u064a\u0645\u064a\u0646 \u0644\u0625\u062a\u0645\u0627\u0645 \u0627\u0644\u0644\u063a\u0632", "\u062e\u0644\u0644 \u0641\u064a \u0627\u0644\u062a\u062d\u0642\u0642. \u0623\u0639\u062f \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629", "\u0627\u0633\u062d\u0628 \u0627\u0644\u0645\u0646\u0632\u0644\u0642\u0629 \u0625\u0644\u0649 \u0627\u0644\u0641\u062a\u062d\u0629 \u0641\u064a \u0623\u0642\u0635\u0649 \u0627\u0644\u064a\u0645\u064a\u0646", "\u0627\u0633\u062d\u0628\u0647\u0627 \u0645\u0631\u0629 \u0623\u062e\u0631\u0649", "\u0627\u0633\u062d\u0628 \u0627\u0644\u0645\u0646\u0632\u0644\u0642\u0629 \u0625\u0644\u0649 \u0627\u0644\u0641\u062a\u062d\u0629 \u0641\u064a \u0623\u0642\u0635\u0649 \u0627\u0644\u064a\u0645\u064a\u0646", "\u0627\u0633\u062d\u0628 \u0627\u0644\u0645\u0646\u0632\u0644\u0642\u0629 \u0623\u0633\u0641\u0644\u0647 \u0644\u0625\u062a\u0645\u0627\u0645 \u0627\u0644\u0644\u063a\u0632", "\u0636\u0639 \u0627\u0644\u0642\u0637\u0639\u0629 \u0645\u0628\u0627\u0634\u0631\u0629 \u0641\u064a \u0627\u0644\u0641\u062a\u062d\u0629", "\u0647\u0630\u0647 \u062a\u0628\u062f\u0648 \u0635\u0639\u0628\u0629 \u0642\u0644\u064a\u0644\u0627 \u062c\u0631\u0651\u0628 \u0647\u0630\u0647", ["\u0644\u0642\u062f \u0636\u0627\u0639\u062a \u0647\u0630\u0647 \u0627\u0644\u0642\u0637\u0639\u0629. \u062d\u0627\u0648\u0644 \u0645\u062c\u062f\u062f\u0627", "\u0623\u0639\u062f \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0648 \u0627\u062c\u0639\u0644\u0647\u0627 \u062a\u062a\u0646\u0627\u0633\u0628 \u0628\u0634\u0643\u0644 \u0623\u062f\u0642", "\u0634\u0628\u0643\u0629 \u0645\u0636\u0637\u0631\u0628\u0629. \u0623\u0639\u062f \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629"], "\u0641\u0634\u0644 \u0627\u0644\u062a\u062d\u0645\u064a\u0644. \u0627\u0646\u0642\u0631 \u0639\u0644\u0649 \u0627\u0644\u0635\u0648\u0631\u0629 \u0644\u0644\u062a\u062d\u062f\u064a\u062b", "\u0646\u062c\u0627\u062d \u0627\u0644\u062a\u062d\u0642\u0642", "\u0643\u062b\u0631\u0629 \u0627\u0644\u062a\u062d\u062f\u064a\u062b", "\u0634\u0628\u0643\u0629 \u0645\u0636\u0637\u0631\u0628\u0629.(+) \u0623\u0639\u062f \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629"],
        my: ["\u1021\u1010\u100a\u1039\u103b\u1015\u1033\u101b\u1014\u1039\u108f\u103d\u102d\u1015\u1039\u1015\u102b", "\u101c\u1036\u102f\u107f\u1001\u1036\u1033\u1031\u101b\u1038\u1021\u1010\u100a\u1039\u103b\u1015\u1033\u103b\u1001\u1004\u1039\u1038", "\u1021\u1010\u100a\u1039\u103b\u1015\u1033\u1019\u1088 \u1031\u1021\u102c\u1004\u1039\u103b\u1019\u1004\u1039\u1015\u102b\u101e\u100a\u1039", "\u1010\u102f\u1036\u1094\u103b\u1015\u1014\u1039\u1001\u103a\u1000\u1039", "\u103b\u1015\u1014\u1039\u1016\u103c\u1004\u1039\u1037\u101b\u1014\u1039", "\u1021\u1010\u100a\u1039\u103b\u1015\u1033\u101b\u1014\u1039", "\u103b\u1015\u1014\u1039\u1016\u103c\u1004\u1039\u1037\u101b\u1014\u1039\u108f\u103d\u102d\u1015\u1039\u1015\u102b", "\u1011\u1015\u1039\u1019\u1036\u1080\u1000\u102d\u1033\u1038\u1005\u102c\u1038\u1015\u102b", "\u1021\u1019\u103d\u102c\u1038\u1021\u101a\u103c\u1004\u1039\u1038\u101b\u103d\u102d\u101e\u103b\u1016\u1004\u1039\u1037 \u1011\u1015\u1039\u1019\u1036\u1080\u1000\u102d\u1033\u1038\u1005\u102c\u1038\u1015\u102b", "\u1021\u1010\u100a\u1039\u103b\u1015\u1033\u101b\u1014\u1039 Code", "\u1031\u1014\u102c\u1000\u1039\u101e\u102d\u102f\u1094", "\u1021\u1010\u100a\u1039\u103b\u1015\u1033\u1031\u1014\u101e\u100a\u1039...", "\u1000\u103c\u1014\u1039\u101b\u1000\u1039\u1019\u1010\u100a\u1039\u107f\u1004\u102d\u1019\u1039\u1015\u102b\u104a \u103b\u1015\u1014\u1039\u1016\u103c\u1004\u1039\u1037\u101b\u1014\u1039\u1000\u102d\u102f \u108f\u103d\u102d\u1015\u1039\u1015\u102b", "\u1031\u1012\u1010\u102c\u101b\u101a\u1030\u1019\u1088 \u1019\u1031\u1021\u102c\u1004\u1039\u103b\u1019\u1004\u1039\u1015\u102b\u104b \u103b\u1015\u1014\u1039\u1016\u103c\u1004\u1039\u1037\u101b\u1014\u1039\u1015\u1036\u102f\u1000\u102d\u102f\u108f\u103d\u102d\u1015\u1039\u1015\u102b", "\u1021\u1010\u100a\u1039\u103b\u1015\u1033\u1031\u1014\u101e\u100a\u1039", ["+s \u101e\u1036\u102f\u1038\u1005\u103c\u1032\u107f\u1015\u102e\u1038\u104b \u101e\u1004\u1039 Flash \u1000\u102d\u102f \u1021\u108f\u102d\u102f\u1004\u1039\u101a\u1030\u101c\u102d\u102f\u1000\u1039\u1015\u102b\u107f\u1015\u102e!", "+s \u101e\u1036\u102f\u1038\u1005\u103c\u1032\u107f\u1015\u102e\u1038\u104b \u107f\u1015\u102e\u1038\u103b\u1015\u100a\u1039\u1037\u1005\u1036\u102f\u1015\u102b\u1010\u101a\u1039!", "\u1021\u1010\u100a\u1039\u103b\u1015\u1033\u1019\u1088 \u1031\u1021\u102c\u1004\u1039\u103b\u1019\u1004\u1039\u1015\u102b\u101e\u100a\u1039"], "\u103b\u1015\u1014\u1039\u1016\u103c\u1004\u1039\u1037\u101b\u1014\u1039", "\u1015\u102d\u1010\u1039\u101b\u1014\u1039", "\u1010\u102f\u1036\u1094\u103b\u1015\u1014\u1039\u1001\u103a\u1000\u1039", "\u1019\u107e\u1000\u102c\u1001\u1014\u103b\u1015\u1014\u1039\u1016\u103c\u1004\u1039\u1037\u1031\u1014\u101b\u101e\u100a\u1039\u104b \u1011\u1015\u1039\u1019\u1036\u1080\u1000\u102d\u1033\u1038\u1005\u102c\u1038\u101b\u1014\u1039\u108f\u103d\u102d\u1015\u1039\u1015\u102b", "\u1015\u1031\u101f\u1020\u102d\u103b\u1015\u100a\u1039\u1037\u1005\u1036\u102f\u1031\u1005\u101b\u1014\u1039 \u1005\u101c\u102d\u102f\u1000\u1039\u1012\u102b\u1000\u102d\u102f \u100a\u102c\u1018\u1000\u1039\u101e\u102d\u102f\u1094\u1006\u103c\u1032\u1015\u102b", "\u1021\u1019\u103d\u102c\u1038\u1021\u101a\u103c\u1004\u1039\u1038\u101b\u103d\u102d\u101e\u103b\u1016\u1004\u1039\u1037 \u1011\u1015\u1039\u1019\u1036\u1080\u1000\u102d\u1033\u1038\u1005\u102c\u1038\u1015\u102b", "\u1005\u101c\u102d\u102f\u1000\u1039\u1012\u102b\u1000\u102d\u102f \u100a\u102c\u1018\u1000\u1039\u1021\u1005\u103c\u1014\u1039\u1006\u1036\u102f\u1038\u1000\u103c\u1000\u1039\u101e\u102d\u102f\u1094 \u1006\u103c\u1032\u1015\u102b", "\u1031\u1014\u102c\u1000\u1039\u1010\u1005\u1039\u1080\u1000\u102d\u1019\u1039\u1011\u1015\u1039\u1006\u103c\u1032\u1015\u102b", "\u1005\u101c\u102d\u102f\u1000\u1039\u1012\u102b\u1000\u102d\u102f \u100a\u102c\u1018\u1000\u1039\u1021\u1005\u103c\u1014\u1039\u1006\u1036\u102f\u1038\u1000\u103c\u1000\u1039\u101e\u102d\u102f\u1094 \u1006\u103c\u1032\u1015\u102b", "\u1015\u1031\u101f\u1020\u102d\u103b\u1015\u100a\u1039\u1037\u1005\u1036\u102f\u1031\u1005\u101b\u1014\u1039 \u1005\u101c\u102d\u102f\u1000\u1039\u1012\u102b\u1000\u102d\u102f \u1031\u1021\u102c\u1000\u1039\u101e\u102f\u102d\u1094\u1006\u103c\u1032\u1015\u102b", "\u1021\u1000\u103c\u1000\u1039\u1010\u103c\u1004\u1039\u1038\u101e\u102d\u102f\u1094 \u1019\u103d\u1014\u1039\u1000\u1014\u1039\u1031\u1021\u102c\u1004\u1039 \u1011\u100a\u1039\u1037\u101e\u103c\u1004\u1039\u1038\u1015\u102b", "\u1011\u102d\u102f\u1010\u1005\u1039\u1001\u102f\u1000 \u1001\u1000\u1039\u1001\u1032\u108f\u102d\u102f\u1004\u1039\u101e\u103b\u1016\u1004\u1039\u1037 \u1024\u1010\u1005\u1039\u1001\u102f\u1000\u102d\u102f \u1080\u1000\u102d\u1033\u1038\u1005\u102c\u1038\u107e\u1000\u100a\u1039\u1037\u1015\u102b", ["\u1011\u100a\u1039\u1037\u101b\u1019\u100a\u1039\u1037\u1021\u1015\u102d\u102f\u1004\u1039\u1038\u1031\u1015\u103a\u102c\u1000\u1039\u101e\u103c\u102c\u1038\u101e\u100a\u1039\u104b \u1011\u1015\u1039\u1019\u1036\u1080\u1000\u102d\u1033\u1038\u1005\u102c\u1038\u1015\u102b", "\u1011\u1015\u1039\u1019\u1036\u1080\u1000\u102d\u1033\u1038\u1005\u102c\u1038\u1015\u102b\u104a \u1031\u1014\u101b\u102c\u1015\u102d\u102f\u1019\u102d\u102f\u1010\u102d\u1000\u103a\u1015\u102b\u1031\u1005", "\u1000\u103c\u1014\u1039\u101b\u1000\u1039\u1019\u1010\u100a\u1039\u107f\u1004\u102d\u1019\u1039\u1015\u102b\u104a \u1011\u1015\u1039\u1019\u1036\u1080\u1000\u102d\u1033\u1038\u1005\u102c\u1038\u1015\u102b"], "\u1031\u1012\u1010\u102c\u101b\u101a\u1030\u1019\u1088 \u1019\u1031\u1021\u102c\u1004\u1039\u103b\u1019\u1004\u1039\u1015\u102b\u104b \u103b\u1015\u1014\u1039\u1016\u103c\u1004\u1039\u1037\u101b\u1014\u1039\u1015\u1036\u102f\u1000\u102d\u102f\u108f\u103d\u102d\u1015\u1039\u1015\u102b", "\u1021\u1010\u100a\u1039\u103b\u1015\u1033\u1019\u1088 \u1031\u1021\u102c\u1004\u1039\u103b\u1019\u1004\u1039\u1015\u102b\u101e\u100a\u1039", "\u1019\u107e\u1000\u102c\u1001\u1014\u103b\u1015\u1014\u1039\u1016\u103c\u1004\u1039\u1037\u1031\u1014\u101b\u101e\u100a\u1039\u104b", "\u1000\u103c\u1014\u1039\u101b\u1000\u1039\u1019\u1010\u100a\u1039\u107f\u1004\u102d\u1019\u1039\u1015\u102b\u104a \u1011\u1015\u1039\u1019\u1036\u1080\u1000\u102d\u1033\u1038\u1005\u102c\u1038\u1015\u102b(+)"],
        fr: ["Touchez pour v\xe9rifier", "V\xe9rification de s\xe9curit\xe9", "La v\xe9rification est r\xe9ussie", "Commentaire", "Actualiser", "V\xe9rifier", "Touchez pour recharger", "Session expir\xe9e. R\xe9essayez.", "Erreur de v\xe9rification. R\xe9essayez.", "Code de v\xe9rification", "Retour", "V\xe9rification...", "R\xe9seau instable. Touchez Actualiser pour r\xe9essayer.", "Chargement \xe9chou\xe9. Touchez l'image pour actualiser.", "V\xe9rification", ["+s. Vous avez battu Lucky Luke\xa0!", "+s. Parfait\xa0!", "La v\xe9rification est r\xe9ussie"], "Actualiser", "Fermer", "Commentaire", "Trop actualis\xe9. Touchez pour r\xe9essayer.", "Glissez le curseur vers la droite pour terminer le puzzle.", "Erreur de v\xe9rification. R\xe9essayez.", "Glissez le curseur le plus \xe0 droite possible", "Glissez-la encore une fois", "Glissez le curseur le plus \xe0 droite possible", "Glissez le curseur ci-dessous pour terminer le puzzle", "Embo\xeetez la pi\xe8ce au bon endroit", "Celui-ci \xe9tait un peu dur. Essayez celui-l\xe0.", ["La pi\xe8ce a disparu. R\xe9essayez.", "R\xe9essayez de mieux l'embo\xeeter", "R\xe9seau instable. R\xe9essayez."], "Chargement \xe9chou\xe9. Touchez l'image pour actualiser.", "La v\xe9rification est r\xe9ussie", "Trop actualis\xe9", "R\xe9seau instable(+). R\xe9essayez."],
        de: ["Tippen zum Best\xe4tigen", "Sicherheitsbest\xe4tigung", "Verifizierung erfolgreich", "Feedback", "Aktualisieren", "Verifizieren", "Tippen zum Neuladen", "Zeit\xfcberschreitung. Bitte nochmal versuchen.", "Fehler bei Verifizierung. Bitte nochmal versuchen.", "Verifzierung", "Zur\xfcck", "Wird verifziert\xa0\u2026", "Netzwerk instabil. Zum Wiederholen \u201eAktualisieren\u201c.", "Ladefehler. Zum Aktualisieren Bild antippen.", "Wird verifiziert", ["+s verbraucht. Schneller als der Blitz!", "+s verbraucht. Perfekt!", "Verifizierung erfolgreich"], "Aktualisieren", "Schlie\xdfen", "Feedback", "Zu oft aktualisiert. Tippen zum Wiederholen.", "Um das Puzzle abzuschlie\xdfen, Schieber nach rechts ziehen.", "Fehler bei Verifizierung. Bitte nochmal versuchen.", "Schieber in die Position ganz rechts ziehen", "Noch einmal ziehen", "Schieber in die Position ganz rechts ziehen", "Zum Abschlie\xdfen des Puzzles den Schieber unten bewegen", "Das St\xfcck rechts ins Fach stecken", "Das scheint zu schwer zu sein. Versuchen Sie es hiermit.", ["Das St\xfcck ist verlorengegangen. Bitte nochmal versuchen.", "Versuchen Sie es nochmal, so dass es genauer passt.", "Netzwerk instabil. Bitte nochmal versuchen."], "Ladefehler. Zum Aktualisieren Bild antippen.", "Verifizierung erfolgreich", "Zu oft aktualisiert", "Netzwerk instabil(+). Bitte nochmal versuchen."],
        he: ["\u05dc\u05d7\u05e6\u05d5 \u05d1\u05db\u05d3\u05d9 \u05dc\u05d0\u05de\u05ea", "\u05d0\u05d9\u05de\u05d5\u05ea \u05d0\u05d1\u05d8\u05d7\u05d4", "\u05d4\u05d0\u05d9\u05de\u05d5\u05ea \u05e2\u05d1\u05e8 \u05d1\u05d4\u05e6\u05dc\u05d7\u05d4", "\u05de\u05e9\u05d5\u05d1", "\u05e8\u05e2\u05e0\u05df", "\u05dc\u05d0\u05de\u05ea", "\u05dc\u05d7\u05e6\u05d5 \u05d1\u05db\u05d3\u05d9 \u05dc\u05d8\u05e2\u05d5\u05df \u05de\u05d7\u05d3\u05e9", "\u05e9\u05d2\u05d9\u05d0\u05ea \u05d6\u05de\u05df. \u05d0\u05e0\u05d0 \u05e0\u05e1\u05d5 \u05e9\u05d5\u05d1", "\u05d8\u05e2\u05d5\u05ea \u05d1\u05d0\u05d9\u05de\u05d5\u05ea. \u05d0\u05e0\u05d0 \u05e0\u05e1\u05d5 \u05e9\u05d5\u05d1", "\u05e7\u05d5\u05d3 \u05d0\u05d9\u05de\u05d5\u05ea", "\u05d7\u05d6\u05e8\u05d4", "\u05de\u05d0\u05de\u05ea", "\u05e8\u05e9\u05ea \u05dc\u05d0 \u05d9\u05e6\u05d9\u05d1\u05d4. \u05dc\u05d7\u05e6\u05d5 \u05e2\u05dc \u05e8\u05e2\u05e0\u05df \u05d1\u05db\u05d3\u05d9 \u05dc\u05e0\u05e1\u05d5\u05ea \u05e9\u05d5\u05d1", "\u05d4\u05d8\u05e2\u05d9\u05e0\u05d4 \u05e0\u05db\u05e9\u05dc\u05d4. \u05dc\u05d7\u05e6\u05d5 \u05e2\u05dc \u05d4\u05ea\u05de\u05d5\u05e0\u05d4 \u05d1\u05db\u05d3\u05d9 \u05dc\u05d8\u05e2\u05d5\u05df \u05de\u05d7\u05d3\u05e9", "\u05de\u05d0\u05de\u05ea", ["+s \u05d1\u05d5\u05d6\u05d1\u05d6. \u05e0\u05d9\u05e6\u05d7\u05ea \u05d0\u05ea \u05d4\u05d1\u05d6\u05e7!", "+s \u05d1\u05d5\u05d6\u05d1\u05d6. \u05de\u05d5\u05e9\u05dc\u05dd!", "\u05d4\u05d0\u05d9\u05de\u05d5\u05ea \u05e2\u05d1\u05e8 \u05d1\u05d4\u05e6\u05dc\u05d7\u05d4"], "\u05e8\u05e2\u05e0\u05df", "\u05e1\u05d2\u05d5\u05e8", "\u05de\u05e9\u05d5\u05d1", "\u05de\u05e8\u05e2\u05e0\u05df \u05dc\u05e2\u05ea\u05d9\u05dd \u05e7\u05e8\u05d5\u05d1\u05d5\u05ea \u05de\u05d9\u05d3\u05d9. \u05dc\u05d7\u05e6\u05d5 \u05d1\u05db\u05d3\u05d9 \u05dc\u05e0\u05e1\u05d5\u05ea \u05e9\u05d5\u05d1", "\u05d2\u05e8\u05e8\u05d5 \u05d0\u05ea \u05de\u05d7\u05d5\u05d5\u05df \u05dc\u05d9\u05de\u05d9\u05df \u05d1\u05db\u05d3\u05d9 \u05dc\u05d4\u05e9\u05dc\u05d9\u05dd \u05d0\u05ea \u05d4\u05e4\u05d0\u05d6\u05dc", "\u05d8\u05e2\u05d5\u05ea \u05d1\u05d0\u05d9\u05de\u05d5\u05ea. \u05d0\u05e0\u05d0 \u05e0\u05e1\u05d5 \u05e9\u05d5\u05d1", "\u05d2\u05e8\u05e8\u05d5 \u05d0\u05ea \u05d4\u05de\u05d7\u05d5\u05d5\u05df \u05dc\u05de\u05e9\u05d1\u05e6\u05ea \u05d1\u05d9\u05de\u05d9\u05df \u05d4\u05e7\u05d9\u05e6\u05d5\u05df", "\u05d2\u05e8\u05e8\u05d5 \u05d6\u05d0\u05ea \u05e2\u05d5\u05d3 \u05e4\u05e2\u05dd", "\u05d2\u05e8\u05e8\u05d5 \u05d0\u05ea \u05d4\u05de\u05d7\u05d5\u05d5\u05df \u05dc\u05de\u05e9\u05d1\u05e6\u05ea \u05d1\u05d9\u05de\u05d9\u05df \u05d4\u05e7\u05d9\u05e6\u05d5\u05df", "\u05d2\u05e8\u05e8\u05d5 \u05d0\u05ea \u05d4\u05de\u05d7\u05d5\u05d5\u05df \u05dc\u05de\u05d8\u05d4 \u05d1\u05db\u05d3\u05d9 \u05dc\u05d4\u05e9\u05dc\u05d9\u05dd \u05d0\u05ea \u05d4\u05e4\u05d0\u05d6\u05dc", "\u05d4\u05db\u05e0\u05d9\u05e1\u05d5 \u05d0\u05ea \u05d4\u05d7\u05ea\u05d9\u05db\u05d4 \u05d9\u05e9\u05e8 \u05d0\u05ea \u05d4\u05de\u05e9\u05d1\u05e6\u05ea", "\u05d6\u05d4 \u05e0\u05e8\u05d0\u05d4 \u05d8\u05d9\u05e4\u05d4 \u05e7\u05e9\u05d4. \u05e0\u05e1\u05d5 \u05d0\u05ea \u05d6\u05d4 \u05d1\u05de\u05e7\u05d5\u05dd", ["\u05d4\u05ea\u05d9\u05db\u05d4 \u05d4\u05dc\u05db\u05d4 \u05dc\u05d0\u05d9\u05d1\u05d5\u05d3. \u05e0\u05e1\u05d5 \u05e9\u05d5\u05d1", "\u05e0\u05e1\u05d5 \u05e9\u05d5\u05d1 \u05d5\u05d5\u05d3\u05d0\u05d5 \u05e9\u05d6\u05d4 \u05de\u05ea\u05d0\u05d9\u05dd \u05d9\u05d5\u05ea\u05e8 \u05d1\u05de\u05d3\u05d5\u05d9\u05e7", "\u05e8\u05e9\u05ea \u05dc\u05d0 \u05d9\u05e6\u05d9\u05d1\u05d4. \u05e0\u05e1\u05d5 \u05e9\u05d5\u05d1"], "\u05d4\u05d8\u05e2\u05d9\u05e0\u05d4 \u05e0\u05db\u05e9\u05dc\u05d4. \u05dc\u05d7\u05e6\u05d5 \u05e2\u05dc \u05d4\u05ea\u05de\u05d5\u05e0\u05d4 \u05d1\u05db\u05d3\u05d9 \u05dc\u05e8\u05e2\u05e0\u05df", "\u05d4\u05d0\u05d9\u05de\u05d5\u05ea \u05e2\u05d1\u05e8 \u05d1\u05d4\u05e6\u05dc\u05d7\u05d4", "\u05de\u05e8\u05e2\u05e0\u05df \u05dc\u05e2\u05ea\u05d9\u05dd \u05e7\u05e8\u05d5\u05d1\u05d5\u05ea \u05de\u05d9\u05d3\u05d9", "\u05e8\u05e9\u05ea \u05dc\u05d0 \u05d9\u05e6\u05d9\u05d1\u05d4. (+)\u05e0\u05e1\u05d5 \u05e9\u05d5\u05d1"],
        hi: ["\u0938\u0924\u094d\u092f\u093e\u092a\u093f\u0924 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u091f\u0948\u092a \u0915\u0930\u0947\u0902", "\u0938\u0941\u0930\u0915\u094d\u0937\u093e \u0938\u0924\u094d\u092f\u093e\u092a\u0928", "\u0938\u0924\u094d\u092f\u093e\u092a\u0928 \u0938\u092b\u0932", "\u092b\u0940\u0921\u092c\u0948\u0915", "\u0930\u0940\u092b\u094d\u0930\u0947\u0936 \u0915\u0930\u0947\u0902", "\u0938\u0924\u094d\u092f\u093e\u092a\u093f\u0924 \u0915\u0930\u0947\u0902", "\u0930\u0940\u0932\u094b\u0921 \u0915\u0930\u0947\u0902", "\u091f\u093e\u0907\u092e\u0906\u0909\u091f\u0964 \u092a\u0941\u0928\u0903 \u092a\u094d\u0930\u092f\u093e\u0938 \u0915\u0930\u0947\u0902", "\u0938\u0924\u094d\u092f\u093e\u092a\u0928 \u0924\u094d\u0930\u0941\u091f\u093f\u0964 \u092a\u0941\u0928\u0903 \u092a\u094d\u0930\u092f\u093e\u0938 \u0915\u0930\u0947\u0902", "\u0938\u0924\u094d\u092f\u093e\u092a\u0928 \u0915\u094b\u0921", "\u092a\u0940\u091b\u0947", "\u0938\u0924\u094d\u092f\u093e\u092a\u0928 \u091c\u093e\u0930\u0940...", "\u0905\u0938\u094d\u0925\u093e\u0908 \u0928\u0947\u091f\u0935\u0930\u094d\u0915\u0964 \u0930\u0940\u092b\u094d\u0930\u0947\u0936 \u091f\u0948\u092a \u0915\u0930 \u0926\u0941\u092c\u093e\u0930\u093e \u0915\u094b\u0936\u093f\u0936 \u0915\u0930\u0947\u0902", "\u0932\u094b\u0921 \u0928\u0939\u0940\u0902 \u0913 \u092a\u093e\u092f\u093e\u0964 \u091a\u093f\u0924\u094d\u0930 \u092a\u0930 \u091f\u0948\u092a \u0915\u0930 \u0930\u0940\u092b\u094d\u0930\u0947\u0936 \u0915\u0930\u0947\u0902", "\u0938\u0924\u094d\u092f\u093e\u092a\u093f\u0924 \u0939\u094b \u0930\u0939\u093e \u0939\u0948", ["+s \u0916\u0930\u094d\u091a \u0939\u0941\u0906\u0964 \u0906\u092a\u0928\u0947 \u092b\u094d\u0932\u0948\u0936 \u0915\u094b \u0939\u0930\u093e \u0926\u093f\u092f\u093e!", "+s \u0916\u0930\u094d\u091a \u0939\u0941\u0906\u0964 \u092c\u0939\u0941\u0924 \u0905\u091a\u094d\u091b\u093e!", "\u0938\u0924\u094d\u092f\u093e\u092a\u0928 \u0938\u092b\u0932 \u0939\u0941\u0906"], "\u0930\u0940\u092b\u094d\u0930\u0947\u0936 \u0915\u0930\u0947\u0902", "\u092c\u0902\u0926 \u0915\u0930\u0947\u0902", "\u0938\u0941\u091d\u093e\u0935", "\u0905\u0915\u094d\u0938\u0930 \u0930\u0940\u092b\u094d\u0930\u0947\u0936 \u0939\u094b \u0930\u0939\u093e \u0939\u0948\u0964 \u091f\u0948\u092a \u0915\u0930 \u0926\u0941\u092c\u093e\u0930\u093e \u0915\u094b\u0936\u093f\u0936 \u0915\u0930\u0947\u0902\u0964", "\u092a\u0939\u0947\u0932\u0940 \u092a\u0942\u0930\u093e \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u0938\u094d\u0932\u093e\u0907\u0921\u0930 \u0926\u093e\u090f\u0902 \u0916\u0940\u0902\u091a\u0947\u0902", "\u0938\u0924\u094d\u092f\u093e\u092a\u0928 \u0924\u094d\u0930\u0941\u091f\u093f\u0964 \u092a\u0941\u0928\u0903 \u0915\u094b\u0936\u093f\u0936 \u0915\u0930\u0947\u0902", "\u0938\u092c\u0938\u0947 \u0926\u093e\u090f\u0902 \u0935\u093e\u0932\u0947 \u0916\u093e\u0928\u0947 \u092e\u0947\u0902 \u0938\u094d\u0932\u093e\u0908\u0921\u0930 \u0916\u0940\u0902\u091a\u0947\u0902", "\u0907\u0938\u0947 \u090f\u0915 \u092c\u093e\u0930 \u092b\u093f\u0930 \u0938\u0947 \u0916\u0940\u0902\u091a\u0947", "\u0938\u092c\u0938\u0947 \u0926\u093e\u090f\u0902 \u0916\u093e\u0928\u0947 \u092e\u0947\u0902 \u0938\u094d\u0932\u093e\u0907\u0921\u0930 \u0916\u0940\u0902\u091a \u0915\u0947 \u0932\u0947 \u091c\u093e\u090f\u0902", "\u092a\u0939\u0947\u0932\u0940 \u092a\u0942\u0930\u093e \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u0938\u094d\u0932\u093e\u0907\u0921\u0930 \u0928\u0940\u091a\u0947 \u0916\u0940\u0902\u091a\u0947\u0902", "\u0907\u0938 \u091f\u0941\u0915\u095c\u0947 \u0915\u094b \u0926\u093e\u090f\u0902 \u0915\u0947 \u0916\u093e\u0928\u0947 \u092e\u0947\u0902 \u0930\u0916\u0947\u0902", "\u092f\u0939 \u0925\u094b\u095c\u093e \u0915\u0920\u093f\u0928 \u0939\u0948\u0964 \u0907\u0938\u0947 \u0906\u091c\u092e\u093e\u090f\u0902", ["\u092f\u0939 \u091f\u0941\u0915\u095c\u093e \u0916\u094b \u0917\u092f\u093e \u0939\u0948\u0964 \u092a\u0941\u0928\u0903 \u092a\u094d\u0930\u092f\u093e\u0938 \u0915\u0930\u0947\u0902", "\u0926\u0941\u092c\u093e\u0930\u093e \u0915\u094b\u0936\u093f\u0936 \u0915\u0930\u0947\u0902 \u0914\u0930 \u0907\u0938\u0947 \u092c\u0947\u0939\u0924\u0930 \u0924\u0930\u0940\u0915\u0947 \u0938\u0947 \u092e\u093f\u0932\u093e\u090f\u0902", "\u0905\u0938\u094d\u0925\u093e\u0908 \u0928\u0947\u091f\u0935\u0930\u094d\u0915\u0964 \u092a\u0941\u0928\u0903 \u092a\u094d\u0930\u092f\u093e\u0938 \u0915\u0930\u0947\u0902"], "\u0932\u094b\u0921 \u0928\u0939\u0940\u0902 \u0939\u094b \u092a\u093e\u092f\u093e\u0964 \u0930\u0940\u092b\u094d\u0930\u0947\u0936 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u091f\u0948\u092a \u0915\u0930\u0947\u0902", "\u0938\u0924\u094d\u092f\u093e\u092a\u0928 \u0938\u092b\u0932", "\u0905\u0915\u094d\u0938\u0930 \u0930\u0940\u092b\u094d\u0930\u0947\u0936 \u0939\u094b \u0930\u0939\u093e \u0939\u0948\u0964", "\u0905\u0938\u094d\u0925\u093e\u0908 \u0928\u0947\u091f\u0935\u0930\u094d\u0915\u0964 \u092a\u0941\u0928\u0903 \u092a\u094d\u0930\u092f\u093e\u0938 \u0915\u0930\u0947\u0902(+)"],
        id: ["Ketuk untuk memverifikasi", "Verifikasi Keamanan", "Verifikasi berhasil", "Masukan", "Refresh", "Verifikasi", "Ketuk untuk memuat ulang", "Waktu habis. Coba lagi.", "Error verifikasi. Coba lagi.", "Kode Verifikasi", "Kembali", "Memverifikasi...", "Jaringan tidak stabil. Ketuk Refresh.", "Gagal memuat. Ketuk gambar untuk merefresh.", "Memverifikasi", ["+s dihabiskan. Flash pun Anda kalahkan!", "+s dihabiskan. Sempurna!", "Verifikasi berhasil"], "Refresh", "Tutup", "Masukan", "Terlalu sering merefresh. Ketuk untuk mencoba lagi.", "Geser slider ke kanan untuk menyelesaikan puzzle.", "Verifikasi gagal. Coba lagi.", "Geser slider ke slot paling kanan", "Geser sekali lagi", "Geser slider ke slot paling kanan", "Geser slider di bawah untuk menyelesaikan puzzle", "Letakkan potongan puzzle ke dalam slot", "Sepertinya agak sulit. Coba yang ini.", ["Potongannya tidak sesuai. Coba lagi.", "Coba lagi, pastikan lebih pas", "Jaringan tidak stabil. Coba lagi."], "Gagal memuat. Ketuk gambar untuk merefresh.", "Verifikasi berhasil", "Terlalu sering merefresh.", "Jaringan tidak stabil(+). Coba lagi."],
        it: ["Tocca per verificare", "Verifica di sicurezza", "Verifica completata", "Opinioni", "Aggiorna", "Verifica", "Tocca per ricaricare", "Scaduto, riprova.", "Errore di verifica, riprova", "Codice di verifica", "Indietro", "Verifica in corso", "Rete instabile. Tocca Aggiorna per riprovare.", "Caricamento fallito. Tocca immagine per aggiornare.", "Verifica in corso", ["+s spesi. Hai battuto il Flash!", "+s spesi. Perfetto!", "Verifica completata"], "Aggiorna", "Chiudi", "Opinioni", "Aggiornam. troppo frequente, tocca per riprovare.", "Trascina dispos. scorrim. a destra per completare il puzzle.", "Errore di verifica, riprova.", "Trascina dispos. di scorrimento verso lo slot pi\xf9 a destra", "Trascinalo un'altra volta", "Trascina dispos. di scorrimento verso lo slot pi\xf9 a destra", "Trascina dispos. scorrim. in basso per completare il puzzle", "Inserisci il pezzo nello slot", "Quello sembra difficile, prova con questo.", ["Il pezzo si \xe8 perso, riprova.", "Riprova e fallo entrare meglio", "Rete instabile, riprova."], "Caricamento non riuscito, tocca l'immagine per aggiornare.", "Verifica completata", "Troppo frequente", "Rete instabile(+), riprova."],
        ja: ["\u30bf\u30c3\u30d7\u3057\u3066\u8a8d\u8a3c\u3057\u3066\u304f\u3060\u3055\u3044", "\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u8a8d\u8a3c", "\u8a8d\u8a3c\u304c\u6b63\u5e38\u306b\u5b8c\u4e86", "\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af", "\u66f4\u65b0", "\u8a8d\u8a3c", "\u30bf\u30c3\u30d7\u3057\u3066\u518d\u5ea6\u8aad\u307f\u8fbc\u3093\u3067\u304f\u3060\u3055\u3044", "\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u3057\u307e\u3057\u305f\uff0c\u3082\u3046\u4e00\u5ea6\u304a\u8a66\u3057\u304f\u3060\u3055\u3044", "\u8a8d\u8a3c\u30a8\u30e9\u30fc\uff0c\u3082\u3046\u4e00\u5ea6\u304a\u8a66\u3057\u304f\u3060\u3055\u3044", "\u8a8d\u8a3c\u30b3\u30fc\u30c9", "\u623b\u308b", "\u8a8d\u8a3c\u4e2d\u2026", "\u63a5\u7d9a\u304c\u4e0d\u5b89\u5b9a\u3067\u3059\uff0c\u66f4\u65b0\u3092\u30bf\u30c3\u30d7\u3057\u3066\u304f\u3060\u3055\u3044", "\u8aad\u307f\u8fbc\u307f\u5931\u6557\uff0c\u753b\u50cf\u3092\u30bf\u30c3\u30d7\u3057\u3066\u66f4\u65b0\u3057\u3066\u304f\u3060\u3055\u3044", "\u8a8d\u8a3c\u4e2d", ["+s\u79d2\u3067\u5b8c\u6210\u3002\u96fb\u5149\u77f3\u706b\u306e\u901f\u3055\uff01", "+s\u79d2\u3067\u5b8c\u6210\u3002\u5b8c\u74a7\uff01", "\u8a8d\u8a3c\u304c\u6b63\u5e38\u306b\u5b8c\u4e86"], "\u66f4\u65b0", "\u9589\u3058\u308b", "\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af", "\u66f4\u65b0\u983b\u5ea6\u304c\u9ad8\u3059\u304e\u307e\u3059\uff0c\u30bf\u30c3\u30d7\u3057\u3066\u518d\u8a66\u884c\u3057\u3066\u304f\u3060\u3055\u3044", "\u30b9\u30e9\u30a4\u30c0\u30fc\u3092\u53f3\u306b\u30c9\u30e9\u30c3\u30b0\u3057\u3066\u30d1\u30ba\u30eb\u3092\u5b8c\u6210\u3055\u305b\u307e\u3059", "\u8a8d\u8a3c\u30a8\u30e9\u30fc\uff0c\u3082\u3046\u4e00\u5ea6\u304a\u8a66\u3057\u304f\u3060\u3055\u3044", "\u30b9\u30e9\u30a4\u30c0\u30fc\u3092\u53f3\u7aef\u306e\u30b9\u30ed\u30c3\u30c8\u306b\u30c9\u30e9\u30c3\u30b0\u3057\u3066\u304f\u3060\u3055\u3044", "\u3082\u3046\u4e00\u5ea6\u30c9\u30e9\u30c3\u30b0\u3057\u3066\u304f\u3060\u3055\u3044", "\u30b9\u30e9\u30a4\u30c0\u30fc\u3092\u53f3\u7aef\u306e\u30b9\u30ed\u30c3\u30c8\u306b\u30c9\u30e9\u30c3\u30b0\u3057\u3066\u304f\u3060\u3055\u3044", "\u30b9\u30e9\u30a4\u30c0\u30fc\u3092\u30c9\u30e9\u30c3\u30b0\u3057\u3066\u30d1\u30ba\u30eb\u3092\u5b8c\u6210\u3055\u305b\u3066\u304f\u3060\u3055\u3044", "\u30d4\u30fc\u30b9\u3092\u30b9\u30ed\u30c3\u30c8\u306b\u306f\u3081\u3066\u304f\u3060\u3055\u3044", "\u5c11\u3057\u96e3\u3057\u3044\u3088\u3046\u3067\u3059\u306d\uff0c\u3053\u3061\u3089\u3092\u304a\u8a66\u3057\u304f\u3060\u3055\u3044", ["\u30d4\u30fc\u30b9\u304c\u5931\u308f\u308c\u307e\u3057\u305f\uff0c\u3082\u3046\u4e00\u5ea6\u304a\u8a66\u3057\u304f\u3060\u3055\u3044", "\u3082\u3046\u4e00\u5ea6\u304a\u8a66\u3057\u306b\u306a\u308a\uff0c\u3082\u3063\u3068\u6b63\u78ba\u306b\u306f\u3081\u3066\u304f\u3060\u3055\u3044", "\u63a5\u7d9a\u304c\u4e0d\u5b89\u5b9a\u3067\u3059\uff0c\u3082\u3046\u4e00\u5ea6\u304a\u8a66\u3057\u304f\u3060\u3055\u3044"], "\u8aad\u307f\u8fbc\u307f\u5931\u6557\uff0c\u753b\u50cf\u3092\u30bf\u30c3\u30d7\u3057\u3066\u66f4\u65b0\u3057\u3066\u304f\u3060\u3055\u3044", "\u8a8d\u8a3c\u304c\u6b63\u5e38\u306b\u5b8c\u4e86", "\u66f4\u65b0\u983b\u5ea6\u304c\u9ad8\u3059\u304e\u307e\u3059", "\u63a5\u7d9a\u304c\u4e0d\u5b89\u5b9a\u3067\u3059(+)\uff0c\u3082\u3046\u4e00\u5ea6\u304a\u8a66\u3057\u304f\u3060\u3055\u3044"],
        ko: ["\ud0ed\ud574\uc11c \uc778\uc99d", "\ubcf4\uc548 \uc778\uc99d", "\uc778\uc99d \uc131\uacf5", "\ud53c\ub4dc\ubc31", "\uc0c8\ub85c\uace0\uce68", "\uc778\uc99d", "\ud0ed\ud574\uc11c \ub9ac\ub85c\ub4dc", "\uc2dc\uac04 \ucd08\uacfc. \ub2e4\uc2dc \uc2dc\ub3c4\ud558\uc138\uc694. ", "\uc778\uc99d \uc624\ub958. \ub2e4\uc2dc \uc2dc\ub3c4\ud558\uc138\uc694. ", "\uc778\uc99d \ucf54\ub4dc", "\ub4a4\ub85c\uac00\uae30", "\uc778\uc99d \uc911...", "\ub124\ud2b8\uc6cc\ud06c\uac00 \ubd88\uc548\uc815\ud569\ub2c8\ub2e4. \uc0c8\ub85c\uace0\uce68\uc744 \ud0ed\ud574\uc11c \uc7ac\uc2dc\ub3c4. ", "\ub85c\ub529\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4. \uc774\ubbf8\uc9c0\ub97c \ud0ed\ud574\uc11c \uc0c8\ub85c\uace0\uce68. ", "\uc778\uc99d \uc911", ["+s\uc744/\ub97c \uc37c\uc2b5\ub2c8\ub2e4. Flash\uc5d0\uac8c \uc774\uae30\uc168\uc5b4\uc694!", "+s\uc744/\ub97c \uc37c\uc2b5\ub2c8\ub2e4. \uc644\ubcbd\ud569\ub2c8\ub2e4!", "\uc778\uc99d \uc131\uacf5"], "\uc0c8\ub85c\uace0\uce68", "\ub2eb\uae30", "\ud53c\ub4dc\ubc31", "\uc0c8\ub85c\uace0\uce68\uc774 \ub108\ubb34 \uc7a6\uc2b5\ub2c8\ub2e4. \ud0ed\ud574\uc11c \uc7ac\uc2dc\ub3c4. ", "\uc2ac\ub77c\uc774\ub354\ub97c \uc6b0\uce21\uc73c\ub85c \ub4dc\ub798\uadf8\ud574\uc11c \ud37c\uc990\uc744 \uc644\ub8cc\ud558\uc138\uc694", "\uc778\uc99d \uc624\ub958. \ub2e4\uc2dc \uc2dc\ub3c4\ud558\uc138\uc694. ", "\uc2ac\ub77c\uc774\ub354\ub97c \uc6b0\uce21 \ub05d \uc2ac\ub86f\uc73c\ub85c \ub4dc\ub798\uadf8\ud558\uc138\uc694", "\ud55c \ubc88 \ub354 \ub4dc\ub798\uadf8\ud558\uc138\uc694", "\uc2ac\ub77c\uc774\ub354\ub97c \uc6b0\uce21 \ub05d \uc2ac\ub86f\uc73c\ub85c \ub4dc\ub798\uadf8\ud558\uc138\uc694", "\uc544\ub798 \uc2ac\ub77c\uc774\ub354\ub97c \ub4dc\ub798\uadf8\ud574\uc11c \ud37c\uc990\uc744 \uc644\ub8cc\ud558\uc138\uc694", "\uc870\uac01\uc744 \uc2ac\ub86f\uc5d0 \uc815\ud655\ud788 \ub123\uc73c\uc138\uc694", "\uadf8\uac74 \uc880 \uc5b4\ub824\uc6cc \ubcf4\uc774\ub124\uc694. \uc774\uac78 \ud574 \ubcf4\uc138\uc694. ", ["\uc870\uac01\uc774 \uc5c6\uc5b4\uc84c\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud558\uc138\uc694. ", "\ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc11c \uc815\ud655\ud788 \ub9de\ucdb0 \ubcf4\uc138\uc694", "\ub124\ud2b8\uc6cc\ud06c\uac00 \ubd88\uc548\uc815\ud569\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud558\uc138\uc694. "], "\ub85c\ub529\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4. \uc774\ubbf8\uc9c0\ub97c \ud0ed\ud574\uc11c \uc0c8\ub85c\uace0\uce68. ", "\uc778\uc99d \uc131\uacf5", "\uc0c8\ub85c\uace0\uce68\uc774 \ub108\ubb34 \uc7a6\uc2b5\ub2c8\ub2e4", "\ub124\ud2b8\uc6cc\ud06c\uac00 \ubd88\uc548\uc815\ud569\ub2c8\ub2e4(+). \ub2e4\uc2dc \uc2dc\ub3c4\ud558\uc138\uc694. "],
        lo: ["\u0ec1\u0e95\u0eb0\u0ec0\u0e9e\u0eb7\u0ec8\u0ead\u0ea2\u0eb7\u0e99\u0ea2\u0eb1\u0e99", "\u0e81\u0eb2\u0e99\u0ea2\u0eb7\u0e99\u0ea2\u0eb1\u0e99\u0e84\u0ea7\u0eb2\u0ea1\u0e9b\u0ead\u0e94\u0ec4\u0e9e", "\u0e81\u0eb2\u0e99\u0ea2\u0eb7\u0e99\u0ea2\u0eb1\u0e99\u0ec4\u0e94\u0ec9\u0eaa\u0eb3\u0ec0\u0ea5\u0eb1\u0e94\u0ec1\u0ea5\u0ec9\u0ea7", "\u0e82\u0ecd\u0ec9\u0eaa\u0eb0\u0ec0\u0edc\u0eb5\u0ec1\u0e99\u0eb0", "\u0e9f\u0eb7\u0ec9\u0e99\u0e9f\u0eb9\u0e84\u0eb7\u0e99", "\u0ea2\u0eb7\u0e99\u0ea2\u0eb1\u0e99", "\u0ec1\u0e95\u0eb0\u0ec0\u0e9e\u0eb7\u0ec8\u0ead\u0ec2\u0eab\u0ebc\u0e94", "\u0edd\u0ebb\u0e94\u0ec0\u0ea7\u0ea5\u0eb2. \u0e81\u0eb0\u0ea5\u0eb8\u0e99\u0eb2\u0ea5\u0ead\u0e87\u0ec3\u0edd\u0ec8\u0ead\u0eb5\u0e81\u0e84\u0eb1\u0ec9\u0e87", "\u0e81\u0eb2\u0e99\u0ea2\u0eb7\u0e99\u0ea2\u0eb1\u0e99\u0e9a\u0ecd\u0ec8\u0e96\u0eb7\u0e81\u0e95\u0ec9\u0ead\u0e87. \u0e81\u0eb0\u0ea5\u0eb8\u0e99\u0eb2\u0ea5\u0ead\u0e87\u0ec3\u0edd\u0ec8\u0ead\u0eb5\u0e81\u0e84\u0eb1\u0ec9\u0e87", "\u0e81\u0eb2\u0e99\u0ea2\u0eb7\u0e99\u0ea2\u0eb1\u0e99\u0ea5\u0eb0\u0eab\u0eb1\u0e94\u0e9c\u0ec8\u0eb2\u0e99", "\u0e81\u0eb1\u0e9a\u0e84\u0eb7\u0e99", "\u0e81\u0eb3\u0ea5\u0eb1\u0e87\u0ea2\u0eb7\u0e99\u0ea2\u0eb1\u0e99...", "\u0ec0\u0e84\u0eb7\u0ead\u0e82\u0ec8\u0eb2\u0e8d\u0e9a\u0ecd\u0ec8\u0e96\u0eb7\u0e81\u0e95\u0ec9\u0ead\u0e87. \u0ec1\u0e97\u0eb1\u0e9a\u0ec3\u0eaa\u0ec8\u0e9f\u0eb7\u0ec9\u0e99\u0e9f\u0eb9\u0e84\u0eb7\u0e99\u0ec0\u0e9e\u0eb7\u0ec8\u0ead\u0ea5\u0ead\u0e87\u0ec3\u0edd\u0ec8\u0ead\u0eb5\u0e81\u0e84\u0eb1\u0ec9\u0e87", "\u0e81\u0eb2\u0e99\u0e94\u0eb2\u0ea7\u0ec2\u0eab\u0ebc\u0e94\u0eab\u0ebc\u0ebb\u0ec9\u0ea1\u0ec0\u0eab\u0ebc\u0ea7. \u0ec1\u0e95\u0eb0\u0ec3\u0eaa\u0ec8\u0eae\u0eb9\u0e9a\u0e9e\u0eb2\u0e9a\u0ec0\u0e9e\u0eb7\u0ec8\u0ead\u0e9f\u0eb7\u0ec9\u0e99\u0e9f\u0eb9\u0e84\u0eb7\u0e99\u0ec3\u0edd\u0ec8", "\u0e81\u0eb3\u0ea5\u0eb1\u0e87\u0ea2\u0eb7\u0e99\u0ea2\u0eb1\u0e99", ["+\u0ec3\u0e8a\u0ec9\u0e88\u0ec8\u0eb2\u0e8d\u0eae\u0ebd\u0e9a\u0eae\u0ec9\u0ead\u0e8d\u0ec1\u0ea5\u0ec9\u0ea7. \u0e97\u0ec8\u0eb2\u0e99\u0e8a\u0eb0\u0e99\u0eb0\u0ec1\u0e9f\u0ea5\u0e8a!", "+\u0ec3\u0e8a\u0ec9\u0e88\u0ec8\u0eb2\u0e8d\u0eae\u0ebd\u0e9a\u0eae\u0ec9\u0ead\u0e8d\u0ec1\u0ea5\u0ec9\u0ea7. \u0eaa\u0ebb\u0ea1\u0e9a\u0eb9\u0e99\u0ec1\u0e9a\u0e9a!", "\u0e81\u0eb2\u0e99\u0ea2\u0eb7\u0e99\u0ea2\u0eb1\u0e99\u0ec4\u0e94\u0ec9\u0eaa\u0eb3\u0ec0\u0ea5\u0eb1\u0e94\u0ec1\u0ea5\u0ec9\u0ea7"], "\u0e9f\u0eb7\u0ec9\u0e99\u0e9f\u0eb9\u0e84\u0eb7\u0e99", "\u0e9b\u0eb4\u0e94", "\u0e82\u0ecd\u0ec9\u0eaa\u0eb0\u0ec0\u0edc\u0eb5\u0ec1\u0e99\u0eb0", "\u0e9f\u0eb7\u0ec9\u0e99\u0e9f\u0eb9\u0e84\u0eb7\u0e99\u0ec0\u0ea5\u0eb7\u0ec9\u0ead\u0e8d\u0ec6. \u0ec1\u0e97\u0eb1\u0e9a\u0ec3\u0eaa\u0ec8\u0ea5\u0ead\u0e87\u0ec3\u0edd\u0ec8\u0ead\u0eb5\u0e81\u0e84\u0eb1\u0ec9\u0e87", "\u0ea5\u0eb2\u0e81\u0ec1\u0e96\u0e9a\u0ec0\u0ea5\u0eb7\u0ec8\u0ead\u0e99\u0ec4\u0e9b\u0e97\u0eb2\u0e87\u0e82\u0ea7\u0eb2\u0ec0\u0e9e\u0eb7\u0ec8\u0ead\u0eaa\u0eb3\u0ec0\u0ea5\u0eb1\u0e94\u0e81\u0eb2\u0e99\u0e9b\u0eb4\u0e94", "\u0e81\u0eb2\u0e99\u0ea2\u0eb7\u0e99\u0ea2\u0eb1\u0e99\u0e9a\u0ecd\u0ec8\u0e96\u0eb7\u0e81\u0e95\u0ec9\u0ead\u0e87. \u0e81\u0eb0\u0ea5\u0eb8\u0e99\u0eb2\u0ea5\u0ead\u0e87\u0ec3\u0edd\u0ec8\u0ead\u0eb5\u0e81\u0e84\u0eb1\u0ec9\u0e87", "\u0ea5\u0eb2\u0e81\u0ec1\u0e96\u0e9a\u0ec0\u0ea5\u0eb7\u0ec8\u0ead\u0e99\u0ec4\u0e9b\u0e8d\u0eb1\u0e87\u0e8a\u0ec8\u0ead\u0e87\u0e82\u0ea7\u0eb2\u0eaa\u0eb8\u0e94", "\u0ea5\u0eb2\u0e81\u0ec4\u0e9b\u0ead\u0eb5\u0e81\u0e84\u0eb1\u0ec9\u0e87\u0edc\u0eb6\u0ec8\u0e87", "\u0ea5\u0eb2\u0e81\u0ec1\u0e96\u0e9a\u0ec0\u0ea5\u0eb7\u0ec8\u0ead\u0e99\u0ec4\u0e9b\u0e8d\u0eb1\u0e87\u0e8a\u0ec8\u0ead\u0e87\u0e82\u0ea7\u0eb2\u0eaa\u0eb8\u0e94", "\u0ea5\u0eb2\u0e81\u0ec1\u0e96\u0e9a\u0ec0\u0ea5\u0eb7\u0ec8\u0ead\u0e99\u0ec4\u0e9b\u0e97\u0eb2\u0e87\u0e82\u0ea7\u0eb2\u0ec0\u0e9e\u0eb7\u0ec8\u0ead\u0eaa\u0eb3\u0ec0\u0ea5\u0eb1\u0e94\u0e81\u0eb2\u0e99\u0e9b\u0eb4\u0e94", "\u0ea7\u0eb2\u0e87\u0e8a\u0eb4\u0ec9\u0e99\u0eaa\u0ec8\u0ea7\u0e99\u0ec4\u0ea7\u0ec9\u0ec3\u0e99\u0e8a\u0ec8\u0ead\u0e87\u0ea7\u0ec8\u0eb2\u0e87", "\u0eaa\u0eb4\u0ec8\u0e87\u0e99\u0eb1\u0ec9\u0e99\u0ec0\u0e9a\u0eb4\u0ec8\u0e87\u0e84\u0eb7\u0ea7\u0ec8\u0eb2\u0e9a\u0eb4\u0e94\u0e8d\u0eb2\u0e81. \u0e81\u0eb0\u0ea5\u0eb8\u0e99\u0eb2\u0ea5\u0ead\u0e87\u0ead\u0eb1\u0e99\u0ec3\u0edd\u0ec8", ["\u0e8a\u0eb4\u0ec9\u0e99\u0eaa\u0ec8\u0ea7\u0e99\u0eab\u0eb2\u0e8d\u0ec4\u0e9b. \u0e81\u0eb0\u0ea5\u0eb8\u0e99\u0eb2\u0ea5\u0ead\u0e87\u0ec3\u0edd\u0ec8\u0ead\u0eb5\u0e81\u0e84\u0eb1\u0ec9\u0e87", "\u0e81\u0eb0\u0ea5\u0eb8\u0e99\u0eb2\u0ea5\u0ead\u0e87\u0ec3\u0edd\u0ec8\u0ead\u0eb5\u0e81\u0e84\u0eb1\u0ec9\u0e87 \u0ec1\u0ea5\u0eb0\u0ec0\u0eae\u0eb1\u0e94\u0ec3\u0eab\u0ec9\u0ea1\u0eb1\u0e99\u0e81\u0eb1\u0e9a\u0ec0\u0e82\u0ebb\u0ec9\u0eb2\u0eab\u0eb2\u0e81\u0eb1\u0e99\u0ea2\u0ec8\u0eb2\u0e87\u0e96\u0eb7\u0e81\u0e95\u0ec9\u0ead\u0e87", "\u0ec0\u0e84\u0eb7\u0ead\u0e99\u0e82\u0ec8\u0eb2\u0e8d\u0e9a\u0ecd\u0ec8\u0e96\u0eb7\u0e81\u0e95\u0ec9\u0ead\u0e87. \u0e81\u0eb0\u0ea5\u0eb8\u0e99\u0eb2\u0ea5\u0ead\u0e87\u0ec3\u0edd\u0ec8\u0ead\u0eb5\u0e81\u0e84\u0eb1\u0ec9\u0e87"], "\u0e81\u0eb2\u0e99\u0e94\u0eb2\u0ea7\u0ec2\u0eab\u0ebc\u0e94\u0eab\u0ebc\u0ebb\u0ec9\u0ea1\u0ec0\u0eab\u0ebc\u0ea7. \u0ec1\u0e95\u0eb0\u0ec3\u0eaa\u0ec8\u0eae\u0eb9\u0e9a\u0e9e\u0eb2\u0e9a\u0ec0\u0e9e\u0eb7\u0ec8\u0ead\u0e9f\u0eb7\u0ec9\u0e99\u0e9f\u0eb9\u0e84\u0eb7\u0e99\u0ec3\u0edd\u0ec8", "\u0e81\u0eb2\u0e99\u0ea2\u0eb7\u0e99\u0ea2\u0eb1\u0e99\u0ec4\u0e94\u0ec9\u0eaa\u0eb3\u0ec0\u0ea5\u0eb1\u0e94\u0ec1\u0ea5\u0ec9\u0ea7", "\u0e9f\u0eb7\u0ec9\u0e99\u0e9f\u0eb9\u0e84\u0eb7\u0e99\u0ec0\u0ea5\u0eb7\u0ec9\u0ead\u0e8d\u0ec6", "\u0ec0\u0e84\u0eb7\u0ead\u0e99\u0e82\u0ec8\u0eb2\u0e8d\u0e9a\u0ecd\u0ec8\u0e96\u0eb7\u0e81\u0e95\u0ec9\u0ead\u0e87(+). \u0e81\u0eb0\u0ea5\u0eb8\u0e99\u0eb2\u0ea5\u0ead\u0e87\u0ec3\u0edd\u0ec8\u0ead\u0eb5\u0e81\u0e84\u0eb1\u0ec9\u0e87"],
        ms: ["Ketik untuk sahkan", "Pengesahan Keselamatan", "Pengesahan berjaya", "Maklum balas", "Segar Semula", "Sahkan", "Ketik untuk muat semula", "Tamat masa. Cuba lagi.", "Ralat pengesahan. Cuba lagi.", "Kod Pengesahan", "Kembali", "Mengesahkan...", "Rangkaian tak stabil. Ketik Segar Semula utk cuba.", "Gagal memuatkan. Ketik imej untuk segar semula.", "Mengesahkan", ["+s dibelanjakan. Anda sangat Pantas!", "+s dibelanjakan. Sempurna!", "Pengesahan berjaya"], "Segar Semula", "Tutup", "Maklum balas", "Terlalu kerap segar semula. Ketik utk cuba semula.", "Seret peluncur ke kanan untuk selesaikan teka-teki", "Ralat pengesahan. Cuba lagi.", "Seret peluncur ke slot paling kanan", "Seret sekali lagi", "Seret peluncur ke slot paling kanan", "Seret peluncur di bawah untuk selesaikan teka-teki", "Letakkan kepingan ke dalam slot", "Nampaknya yang itu agak sukar. Cuba yang ini.", ["Kepingan telah hilang. Cuba lagi.", "Cuba lagi dan jadikannya sesuai dengan lebih tepat", "Rangkaian tak stabil. Cuba lagi."], "Gagal memuatkan. Ketik imej untuk segar semula.", "Pengesahan berjaya", "Terlalu kerap segar semula", "Rangkaian tak stabil(+). Cuba lagi."],
        pl: ["Dotknij, aby zweryfikowa\u0107", "Weryfikacja bezpiecze\u0144stwa", "Weryfikacja powiod\u0142a si\u0119", "Opinia", "Od\u015bwie\u017c", "Weryfikuj", "Dotknij, aby wczyta\u0107 ponownie", "Przekroczono limit czasu. Spr\xf3buj ponownie.", "B\u0142\u0105d weryfikacji. Spr\xf3buj ponownie.", "Kod weryfikacyjny", "Wstecz", "Weryfikowanie...", "Niestabilna sie\u0107. Dotknij \u201eOd\u015bwie\u017c\u201d, aby ponowi\u0107.", "B\u0142\u0105d wczytywania. Dotknij obrazu, aby od\u015bwie\u017cy\u0107.", "Weryfikowanie", ["+s wydano. Pokona\u0142e\u015b(-a\u015b) Flasha!", "+s wydano. Idealnie!", "Pomy\u015blnie zweryfikowano"], "Od\u015bwie\u017c", "Zamknij", "Opinia", "Za cz\u0119sto od\u015bwie\u017casz. Dotknij, aby ponowi\u0107.", "Przeci\u0105gnij suwak w prawo, aby doko\u0144czy\u0107 uk\u0142adank\u0119", "B\u0142\u0105d weryfikacji. Spr\xf3buj ponownie.", "Przeci\u0105gnij suwak do miejsca najdalej po prawej", "Przeci\u0105gnij jeszcze raz", "Przeci\u0105gnij suwak do miejsca najdalej po prawej", "Przeci\u0105gnij poni\u017cszy suwak, aby doko\u0144czy\u0107 uk\u0142adank\u0119", "W\u0142\xf3\u017c kawa\u0142ek na jego miejsce", "Ta wydaje si\u0119 troch\u0119 za trudna. Spr\xf3buj tej.", ["Kawa\u0142ek si\u0119 zgubi\u0142. Spr\xf3buj ponownie.", "Spr\xf3buj ponownie i spr\xf3buj dopasowa\u0107 dok\u0142adniej", "Niestabilna sie\u0107. Spr\xf3buj ponownie."], "Logowanie nie powiod\u0142o si\u0119. Dotknij obrazu, aby od\u015bwie\u017cy\u0107.", "Weryfikacja powiod\u0142a si\u0119", "Za cz\u0119sto od\u015bwie\u017casz", "Niestabilna sie\u0107(+). Spr\xf3buj ponownie."],
        pt: ["Toque para verificar", "Verifica\xe7\xe3o de Seguran\xe7a", "Verificado com sucesso", "Feedback", "Atualizar", "Verificar", "Toque para recarregar", "Tempo esgotado. Tente de novo.", "Erro na verifica\xe7\xe3o. Tente de novo.", "C\xf3digo de Verifica\xe7\xe3o", "Voltar", "Verificando...", "Rede inst\xe1vel. Toque em Atualizar e tente de novo.", "Falha ao carregar. Toque na imagem para atualizar.", "Verificando", ["+s gasto. Mais r\xe1pido que o Flash!", "+s gasto. Perfeito!", "Verificado com sucesso"], "Atualizar", "Fechar", "Feedback", "Atualizando muito. Toque para tentar de novo.", "Arrastre o slider para a direita para completar o puzzle.", "Erro de verifica\xe7\xe3o. Tente de novo.", "Arrastre o slider para o slot mais \xe0 direita", "Arrastre mais uma vez", "Arrastre o slider para o slot mais \xe0 direita", "Arrastre o slider abaixo para completar o puzzle", "Coloque a pe\xe7a na sua posi\xe7\xe3o", "Esse parece ser dif\xedcil. Tente este.", ["A pe\xe7a foi perdida. Tente de novo.", "Tente de novo e encaixe com mais precis\xe3o", "Rede inst\xe1vel. Tente de novo."], "Falha ao carregar. Toque na imagem para atualizar.", "Verificado com sucesso", "Atualizando muito", "Rede inst\xe1vel(+). Tente de novo."],
        ru: ["\u0414\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435", "\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0432 \u0446\u0435\u043b\u044f\u0445 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438", "\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043f\u0440\u043e\u0439\u0434\u0435\u043d\u0430", "\u041e\u0442\u0437\u044b\u0432", "\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c", "\u041f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c", "\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u0434\u043b\u044f \u043f\u043e\u0432\u0442\u043e\u0440\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438", "\u0412\u0440\u0435\u043c\u044f \u0432\u044b\u0448\u043b\u043e. \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443.", "\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0435. \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443.", "\u041f\u0440\u043e\u0432\u0435\u0440\u043e\u0447\u043d\u044b\u0439 \u043a\u043e\u0434", "\u041d\u0430\u0437\u0430\u0434", "\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430...", "\u041d\u0435\u0441\u0442\u0430\u0431\u0438\u043b\u044c\u043d\u0430\u044f \u0441\u0435\u0442\u044c. \u0414\u043b\u044f \u043f\u043e\u0432\u0442\u043e\u0440\u0430 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c.", "\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438. \u0427\u0442\u043e\u0431\u044b \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443.", "\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430", ["\u041f\u043e\u0442\u0440\u0430\u0447\u0435\u043d\u043e +s. \u0412\u044b \u0431\u044b\u0441\u0442\u0440\u0435\u0435 \u043c\u043e\u043b\u043d\u0438\u0438!", "\u041f\u043e\u0442\u0440\u0430\u0447\u0435\u043d\u043e +s. \u041e\u0442\u043b\u0438\u0447\u043d\u043e!", "\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043f\u0440\u043e\u0439\u0434\u0435\u043d\u0430"], "\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c", "\u0417\u0430\u043a\u0440\u044b\u0442\u044c", "\u041e\u0442\u0437\u044b\u0432", "\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u0447\u0430\u0441\u0442\u043e\u0435 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435. \u0414\u043b\u044f \u043f\u043e\u0432\u0442\u043e\u0440\u0430 \u043d\u0430\u0436\u043c\u0438\u0442\u0435.", "\u041f\u0435\u0440\u0435\u0434\u0432\u0438\u043d\u044c\u0442\u0435 \u0431\u0435\u0433\u0443\u043d\u043e\u043a \u0432\u043f\u0440\u0430\u0432\u043e, \u0447\u0442\u043e\u0431\u044b \u0441\u043b\u043e\u0436\u0438\u0442\u044c \u043f\u0430\u0437\u0437\u043b", "\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0435. \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443.", "\u041f\u0435\u0440\u0435\u0434\u0432\u0438\u043d\u044c\u0442\u0435 \u0431\u0435\u0433\u0443\u043d\u043e\u043a \u0432 \u0441\u0430\u043c\u043e\u0435 \u043f\u0440\u0430\u0432\u043e\u0435 \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435", "\u041f\u0435\u0440\u0435\u0434\u0432\u0438\u043d\u044c\u0442\u0435 \u0435\u0433\u043e \u0435\u0449\u0435 \u0440\u0430\u0437", "\u041f\u0435\u0440\u0435\u0434\u0432\u0438\u043d\u044c\u0442\u0435 \u0431\u0435\u0433\u0443\u043d\u043e\u043a \u0432 \u0441\u0430\u043c\u043e\u0435 \u043f\u0440\u0430\u0432\u043e\u0435 \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435", "\u041f\u0435\u0440\u0435\u0434\u0432\u0438\u043d\u044c\u0442\u0435 \u0431\u0435\u0433\u0443\u043d\u043e\u043a \u043d\u0438\u0436\u0435, \u0447\u0442\u043e\u0431\u044b \u0441\u043b\u043e\u0436\u0438\u0442\u044c \u043f\u0430\u0437\u0437\u043b", "\u041f\u043e\u043c\u0435\u0441\u0442\u0438\u0442\u0435 \u0434\u0435\u0442\u0430\u043b\u044c \u0442\u043e\u0447\u043d\u043e \u043d\u0430 \u0435\u0435 \u043c\u0435\u0441\u0442\u043e", "\u041f\u043e\u0445\u043e\u0436\u0435, \u0447\u0442\u043e \u044d\u0442\u0430 \u043d\u0435 \u0432\u0445\u043e\u0434\u0438\u0442. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0434\u0440\u0443\u0433\u0443\u044e.", ["\u042d\u0442\u0430 \u0434\u0435\u0442\u0430\u043b\u044c \u043f\u043e\u0442\u0435\u0440\u044f\u043b\u0430\u0441\u044c. \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443.", "\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443 \u0438 \u043f\u043e\u0434\u0431\u0435\u0440\u0438\u0442\u0435 \u0435\u0435 \u0442\u043e\u0447\u043d\u0435\u0435.", "\u041d\u0435\u0441\u0442\u0430\u0431\u0438\u043b\u044c\u043d\u0430\u044f \u0441\u0435\u0442\u044c. \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443."], "\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438. \u0427\u0442\u043e\u0431\u044b \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443.", "\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043f\u0440\u043e\u0439\u0434\u0435\u043d\u0430", "\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u0447\u0430\u0441\u0442\u043e\u0435 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435", "\u041d\u0435\u0441\u0442\u0430\u0431\u0438\u043b\u044c\u043d\u0430\u044f \u0441\u0435\u0442\u044c(+). \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443."],
        es: ["Toca para verificar", "Verificaci\xf3n de seguridad", "Verificaci\xf3n correcta", "Comentarios", "Actualizar", "Verificar", "Toca para volver a cargar", "Tiempo agotado. Intenta de nuevo.", "Error de verificaci\xf3n. Intenta de nuevo.", "C\xf3digo de verificaci\xf3n", "Atr\xe1s", "Verificando...", "Red inestable. Toca Actualizar para reintentar.", "Error de carga. Toca la imagen para actualizar.", "Verificando", ["+s usados. \xa1Has vencido al rel\xe1mpago!", "+s usados. \xa1Perfecto!", "Verificaci\xf3n correcta"], "Actualizar", "Cerrar", "Comentarios", "Actualizaci\xf3n muy frecuente. Toca para reintentar.", "Arrastra el deslizador a la derecha para completar el puzzle", "Error de verificaci\xf3n. Intenta de nuevo.", "Arrastra el deslizador al espacio de la derecha", "Arrastra una vez m\xe1s", "Arrastra el deslizador al espacio de la derecha", "Arrastra el siguiente deslizador para completar el puzzle", "Coloca la pieza justo en el espacio", "Ese parece un poco dif\xedcil. Prueba con este.", ["La pieza se ha perdido. Intenta de nuevo.", "Intenta de nuevo y hazla encajar con m\xe1s precisi\xf3n", "Red inestable. Intenta de nuevo."], "Error de carga. Toca la imagen para actualizar.", "Verificaci\xf3n correcta", "Actualizaci\xf3n muy frecuente", "Red inestable(+). Intenta de nuevo."],
        th: ["\u0e41\u0e15\u0e30\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19", "\u0e01\u0e32\u0e23\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19\u0e04\u0e27\u0e32\u0e21\u0e1b\u0e25\u0e2d\u0e14\u0e20\u0e31\u0e22", "\u0e01\u0e32\u0e23\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08\u0e41\u0e25\u0e49\u0e27", "\u0e04\u0e33\u0e15\u0e34\u0e0a\u0e21", "\u0e23\u0e35\u0e40\u0e1f\u0e23\u0e0a", "\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19", "\u0e41\u0e15\u0e30\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e42\u0e2b\u0e25\u0e14\u0e0b\u0e49\u0e33", "\u0e2b\u0e21\u0e14\u0e40\u0e27\u0e25\u0e32 \u0e25\u0e2d\u0e07\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07", "\u0e02\u0e49\u0e2d\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14\u0e43\u0e19\u0e01\u0e32\u0e23\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19 \u0e25\u0e2d\u0e07\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07", "\u0e23\u0e2b\u0e31\u0e2a\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19", "\u0e01\u0e25\u0e31\u0e1a", "\u0e01\u0e33\u0e25\u0e31\u0e07\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19...", "\u0e40\u0e04\u0e23\u0e37\u0e2d\u0e02\u0e48\u0e32\u0e22\u0e44\u0e21\u0e48\u0e40\u0e2a\u0e16\u0e35\u0e22\u0e23 \u0e41\u0e15\u0e30\u0e23\u0e35\u0e40\u0e1f\u0e23\u0e0a\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e25\u0e2d\u0e07\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07", "\u0e01\u0e32\u0e23\u0e42\u0e2b\u0e25\u0e14\u0e25\u0e49\u0e21\u0e40\u0e2b\u0e25\u0e27 \u0e41\u0e15\u0e30\u0e17\u0e35\u0e48\u0e23\u0e39\u0e1b\u0e20\u0e32\u0e1e\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e23\u0e35\u0e40\u0e1f\u0e23\u0e0a", "\u0e01\u0e33\u0e25\u0e31\u0e07\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19", ["\u0e43\u0e0a\u0e49\u0e44\u0e1b\u0e41\u0e25\u0e49\u0e27 +s \u0e04\u0e38\u0e13\u0e0a\u0e19\u0e30\u0e41\u0e1f\u0e25\u0e0a!", "\u0e43\u0e0a\u0e49\u0e44\u0e1b\u0e41\u0e25\u0e49\u0e27 +s \u0e40\u0e1e\u0e2d\u0e23\u0e4c\u0e40\u0e1f\u0e04!", "\u0e01\u0e32\u0e23\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08\u0e41\u0e25\u0e49\u0e27"], "\u0e23\u0e35\u0e40\u0e1f\u0e23\u0e0a", "\u0e1b\u0e34\u0e14", "\u0e04\u0e33\u0e15\u0e34\u0e0a\u0e21", "\u0e23\u0e35\u0e40\u0e1f\u0e23\u0e0a\u0e1a\u0e48\u0e2d\u0e22\u0e40\u0e01\u0e34\u0e19\u0e44\u0e1b \u0e41\u0e15\u0e30\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e25\u0e2d\u0e07\u0e43\u0e2b\u0e21\u0e48", "\u0e25\u0e32\u0e01\u0e41\u0e16\u0e1a\u0e40\u0e25\u0e37\u0e48\u0e2d\u0e19\u0e44\u0e1b\u0e17\u0e32\u0e07\u0e02\u0e27\u0e32\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e15\u0e2d\u0e1a\u0e1b\u0e23\u0e34\u0e28\u0e19\u0e32\u0e43\u0e2b\u0e49\u0e40\u0e2a\u0e23\u0e47\u0e08\u0e2a\u0e34\u0e49\u0e19", "\u0e02\u0e49\u0e2d\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14\u0e43\u0e19\u0e01\u0e32\u0e23\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19 \u0e25\u0e2d\u0e07\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07", "\u0e25\u0e32\u0e01\u0e41\u0e16\u0e1a\u0e40\u0e25\u0e37\u0e48\u0e2d\u0e19\u0e44\u0e1b\u0e17\u0e35\u0e48\u0e0a\u0e48\u0e2d\u0e07\u0e14\u0e49\u0e32\u0e19\u0e02\u0e27\u0e32\u0e2a\u0e38\u0e14", "\u0e25\u0e32\u0e01\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07", "\u0e25\u0e32\u0e01\u0e41\u0e16\u0e1a\u0e40\u0e25\u0e37\u0e48\u0e2d\u0e19\u0e44\u0e1b\u0e17\u0e35\u0e48\u0e0a\u0e48\u0e2d\u0e07\u0e14\u0e49\u0e32\u0e19\u0e02\u0e27\u0e32\u0e2a\u0e38\u0e14", "\u0e25\u0e32\u0e01\u0e41\u0e16\u0e1a\u0e40\u0e25\u0e37\u0e48\u0e2d\u0e19\u0e14\u0e49\u0e32\u0e19\u0e25\u0e48\u0e32\u0e07\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e15\u0e2d\u0e1a\u0e1b\u0e23\u0e34\u0e28\u0e19\u0e32\u0e43\u0e2b\u0e49\u0e40\u0e2a\u0e23\u0e47\u0e08\u0e2a\u0e34\u0e49\u0e19", "\u0e27\u0e32\u0e07\u0e0a\u0e34\u0e49\u0e19\u0e2a\u0e48\u0e27\u0e19\u0e43\u0e19\u0e0a\u0e48\u0e2d\u0e07\u0e17\u0e35\u0e48\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07", "\u0e2d\u0e31\u0e19\u0e19\u0e31\u0e49\u0e19\u0e14\u0e39\u0e40\u0e2b\u0e21\u0e37\u0e2d\u0e19\u0e08\u0e30\u0e22\u0e32\u0e01\u0e2b\u0e19\u0e48\u0e2d\u0e22 \u0e25\u0e2d\u0e07\u0e2d\u0e31\u0e19\u0e19\u0e35\u0e49", ["\u0e0a\u0e34\u0e49\u0e19\u0e2a\u0e48\u0e27\u0e19\u0e2b\u0e32\u0e22\u0e44\u0e1b \u0e25\u0e2d\u0e07\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07", "\u0e25\u0e2d\u0e07\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07\u0e41\u0e25\u0e30\u0e17\u0e33\u0e43\u0e2b\u0e49\u0e21\u0e31\u0e19\u0e1e\u0e2d\u0e14\u0e35\u0e22\u0e34\u0e48\u0e07\u0e02\u0e36\u0e49\u0e19", "\u0e40\u0e04\u0e23\u0e37\u0e2d\u0e02\u0e48\u0e32\u0e22\u0e44\u0e21\u0e48\u0e40\u0e2a\u0e16\u0e35\u0e22\u0e23 \u0e25\u0e2d\u0e07\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07"], "\u0e01\u0e32\u0e23\u0e42\u0e2b\u0e25\u0e14\u0e25\u0e49\u0e21\u0e40\u0e2b\u0e25\u0e27 \u0e41\u0e15\u0e30\u0e17\u0e35\u0e48\u0e23\u0e39\u0e1b\u0e20\u0e32\u0e1e\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e23\u0e35\u0e40\u0e1f\u0e23\u0e0a", "\u0e01\u0e32\u0e23\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08\u0e41\u0e25\u0e49\u0e27", "\u0e23\u0e35\u0e40\u0e1f\u0e23\u0e0a\u0e1a\u0e48\u0e2d\u0e22\u0e40\u0e01\u0e34\u0e19\u0e44\u0e1b", "\u0e40\u0e04\u0e23\u0e37\u0e2d\u0e02\u0e48\u0e32\u0e22\u0e44\u0e21\u0e48\u0e40\u0e2a\u0e16\u0e35\u0e22\u0e23(+) \u0e25\u0e2d\u0e07\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07"],
        tr: ["Do\u011frulamak i\xe7in dokun", "G\xfcvenlik Do\u011frulamas\u0131", "Do\u011frulama ba\u015far\u0131l\u0131", "Geri bildirim", "Yenile", "Do\u011frula", "Yeniden y\xfcklemek i\xe7in dokun", "Zaman a\u015f\u0131m\u0131. Tekrar dene.", "Do\u011frulama hatas\u0131. Tekrar dene.", "Do\u011frulama Kodu", "Geri", "Do\u011frulan\u0131yor", "\u0130stikrars\u0131z ba\u011flant\u0131. Denemek i\xe7in Yenile'ye dokun.", "Y\xfckleme ba\u015far\u0131s\u0131z. Yenilemek i\xe7in g\xf6rsele dokun.", "Do\u011frulan\u0131yor", ["+s harcand\u0131. Flash'i ge\xe7tin!", "+s harcand\u0131. M\xfckemmel!", "Do\u011frulama ba\u015far\u0131l\u0131"], "Yenile", "Kapat", "Geri bildirim", "Yenilemeler \xe7ok s\u0131k. Tekrar denemek i\xe7in dokun.", "Bulmacay\u0131 \xe7\xf6zmek i\xe7in kayd\u0131r\u0131c\u0131y\u0131 sa\u011fa s\xfcr\xfckle", "Do\u011frulama hatas\u0131. Tekrar dene.", "Kayd\u0131r\u0131c\u0131y\u0131 en sa\u011fdaki yuvaya kadar s\xfcr\xfckle", "Bir kez daha s\xfcr\xfckle", "Kayd\u0131r\u0131c\u0131y\u0131 en sa\u011fdaki yuvaya kadar s\xfcr\xfckle", "Bulmacay\u0131 tamamlamak i\xe7in alttaki kayd\u0131r\u0131c\u0131y\u0131 s\xfcr\xfckle", "Par\xe7ay\u0131 yuvaya tam olarak yerle\u015ftir", "Bu biraz zor g\xf6r\xfcn\xfcyor. \u015eunu dene.", ["Par\xe7a kayboldu. Tekrar dene.", "Tekrar dene ve daha iyi yerle\u015ftirmeye \xe7al\u0131\u015f", "\u0130stikrars\u0131z ba\u011flant\u0131. Tekrar dene."], "Y\xfckleme ba\u015far\u0131s\u0131z. Yenilemek i\xe7in g\xf6rsele dokun.", "Do\u011frulama ba\u015far\u0131l\u0131", "Yenilemeler \xe7ok s\u0131k", "\u0130stikrars\u0131z ba\u011flant\u0131(+). Tekrar dene."],
        vi: ["Nh\u1ea5n \u0111\u1ec3 x\xe1c minh", "X\xe1c minh b\u1ea3o m\u1eadt", "X\xe1c minh th\xe0nh c\xf4ng", "Ph\u1ea3n h\u1ed3i", "L\xe0m m\u1edbi", "X\xe1c minh", "Nh\u1ea5n \u0111\u1ec3 t\u1ea3i l\u1ea1i", "\u0110\xe3 h\u1ebft gi\u1edd. H\xe3y th\u1eed l\u1ea1i.", "C\xf3 l\u1ed7i x\xe1c minh. H\xe3y th\u1eed l\u1ea1i.", "M\xe3 x\xe1c minh", "Quay l\u1ea1i", "\u0110ang x\xe1c minh...", "M\u1ea1ng kh\xf4ng \u1ed5n \u0111\u1ecbnh. H\xe3y nh\u1ea5n L\xe0m m\u1edbi \u0111\u1ec3 th\u1eed l\u1ea1i.", "T\u1ea3i kh\xf4ng th\xe0nh c\xf4ng. H\xe3y nh\u1ea5n v\xe0o h\xecnh \u0111\u1ec3 l\xe0m m\u1edbi.", "\u0110ang x\xe1c minh", ["+s \u0111\xe3 s\u1eed d\u1ee5ng. B\u1ea1n \u0111\xe3 th\u1eafng The Flash!", "+s \u0111\xe3 s\u1eed d\u1ee5ng. Th\u1eadt ho\xe0n h\u1ea3o!", "X\xe1c minh th\xe0nh c\xf4ng"], "L\xe0m m\u1edbi", "\u0110\xf3ng", "Ph\u1ea3n h\u1ed3i", "L\xe0m m\u1edbi qu\xe1 th\u01b0\u1eddng xuy\xean. H\xe3y nh\u1ea5n \u0111\u1ec3 th\u1eed l\u1ea1i.", "K\xe9o thanh tr\u01b0\u1ee3t sang ph\u1ea3i \u0111\u1ec3 ho\xe0n t\u1ea5t c\xe2u \u0111\u1ed1", "C\xf3 l\u1ed7i x\xe1c minh. H\xe3y th\u1eed l\u1ea1i.", "K\xe9o thanh tr\u01b0\u1ee3t sang v\u1ecb tr\xed ngo\xe0i c\xf9ng b\xean ph\u1ea3i", "H\xe3y k\xe9o n\xf3 m\u1ed9t l\u1ea7n n\u1eefa", "K\xe9o thanh tr\u01b0\u1ee3t sang v\u1ecb tr\xed ngo\xe0i c\xf9ng b\xean ph\u1ea3i", "K\xe9o thanh tr\u01b0\u1ee3t b\xean d\u01b0\u1edbi \u0111\u1ec3 ho\xe0n t\u1ea5t c\xe2u \u0111\u1ed1", "\u0110\u1eb7t mi\u1ebfng gh\xe9p v\xe0o \u0111\xfang v\u1ecb tr\xed", "C\xe1i \u0111\xf3 c\xf3 v\u1ebb h\u01a1i kh\xf3. H\xe3y th\u1eed c\xe1i n\xe0y.", ["M\u1ea3nh gh\xe9p \u0111\xe3 b\u1ecb th\u1ea5t l\u1ea1c. H\xe3y th\u1eed l\u1ea1i.", "H\xe3y th\u1eed l\u1ea1i v\xe0 gh\xe9p n\xf3 v\xe0o ch\xednh x\xe1c h\u01a1n", "M\u1ea1ng kh\xf4ng \u1ed5n \u0111\u1ecbnh. H\xe3y th\u1eed l\u1ea1i."], "T\u1ea3i kh\xf4ng th\xe0nh c\xf4ng. H\xe3y nh\u1ea5n v\xe0o h\xecnh \u0111\u1ec3 l\xe0m m\u1edbi.", "X\xe1c minh th\xe0nh c\xf4ng", "L\xe0m m\u1edbi qu\xe1 th\u01b0\u1eddng xuy\xean", "M\u1ea1ng kh\xf4ng \u1ed5n \u0111\u1ecbnh(+). H\xe3y th\u1eed l\u1ea1i."]
    };
    o.zh = o["zh-cn"],
    o.iw = o.he,
    o["in"] = o.id;
    var a = {
        2052: "zh-cn",
        1028: "zh-hk",
        1033: "en"
    }
      , s = "zh";
    /MicroMessenger/.test(navigator.userAgent) && (s = "en");
    var c = navigator.languages && navigator.languages[0] ? navigator.languages[0] : navigator.language || navigator.userLanguage || ""
      , u = {
        rightToLeft: !1
    };
    u.total = o,
    u.langExist = function(e) {
        var t = e;
        return /-/.test(e) && (t = e.split("-")[0]),
        o[e] ? e : !!o[t] && t
    }
    ,
    u.init = function(e) {
        var t = (e || c || s).toLowerCase().replace(/_/, "-")
          , n = u.langExist(t);
        n || (n = "en"),
        "embed" == window.captchaConfig.showtype && ("en" === n && (n = "en-o"),
        "zh-hk" != n && "zh-tw" != n || (n = "zh-hk"));
        for (var i = o[n], a = 0; a < r.length; a++)
            u[r[a]] = i[a] || o[s][a];
        "embed" == window.captchaConfig.showtype && "zh-hk" == n && (u.c19 = "\u53cd\u994b"),
        "ar" !== n && "he" !== n && "iw" !== n || (u.rightToLeft = !0),
        u.currentLanguage = n
    }
    ,
    u.initWxLang = function() {
        try {
            var e = i.queryParam("wxLang");
            e ? u.init(e) : (e = window.captchaConfig.lang,
            a[e] ? u.init(a[e]) : u.init())
        } catch (t) {}
    }
    ,
    u.initWxLang(),
    e.exports = u
}
, function(e, t, n) {
    "use strict";
    var i = (window.lib || {}).flexible || {}
      , r = /rem$/;
    e.exports = {
        dpr: i.dpr || 0,
        rem: i.rem || 0,
        px2rem: function(e) {
            return i.px2rem ? i.px2rem(e) : e
        },
        rem2px: function(e) {
            return i.rem2px ? i.rem2px(e) : e
        },
        px2remU: function(e) {
            return i.px2rem ? i.px2rem(e) + "rem" : e + "px"
        },
        rem2pxU: function(e) {
            return r.test(e) ? i.rem2px(parseFloat(e)) || 0 : parseFloat(e) || 0
        },
        refreshRem: i.refreshRem,
        listen: function(e, t) {
            i.resizeCb && i.resizeCb.splice(e, 0, t)
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = {
        doc: $(document.body),
        captcha: $("#tcWrap"),
        body: $("#bodyWrap"),
        fullScreenHead: $("#tcWrapHeader"),
        operation: $("#tcOperation"),
        status: $("#tcStatus"),
        imgBg: $("#slideBg"),
        imgSlide: $("#slideBlock"),
        close: $("#captcha_close"),
        btnBack: $("#btnBack"),
        guideWrap: $("#guideWrap"),
        guideText: $("#guideText"),
        title: $("#pHeaderTitle,#fsHeaderTitle"),
        statusFail: $("#statusFail"),
        txtSuccess: $("#statusSuccess"),
        txtError: $("#statusError"),
        txtErrorNote: $("#tcaptcha_note"),
        txtBack: $("#txtBack"),
        feedback: $(".show-FB"),
        site007: $("#tcaptcha_site_click"),
        btnReload: $(".show-reload"),
        btnCoverReload: $("#coverReload"),
        btnSlide: $("#tcaptcha_drag_button"),
        btnThumb: $("#tcaptcha_drag_thumb"),
        btnIconfont: $("#t_iconfont"),
        iconError: $("#errorIcon"),
        iconGoback: $("#iconGoback")
    }
}
, , , , function(e, t, n) {
    "use strict";
    function i(e) {
        return document.createElement(e)
    }
    function r() {
        return "history"in window && "pushState"in history
    }
    !function() {
        var e = 0
    }();
    var o, a, s = (o = [],
    a = [],
    {
        add: function(e) {
            Array.prototype.push.apply(o, e)
        },
        get: function() {
            for (var e = 0; e < o.length; e++)
                a[e] = o[e]();
            return a
        }
    });
    s.add([function() {
        return "matches"in i("div")
    }
    , function() {
        return "msMatchesSelector"in i("div")
    }
    , function() {
        return "webkitMatchesSelector"in i("div")
    }
    , function() {
        return !!(window.matchMedia && window.matchMedia("(min-width: 400px)") && window.matchMedia("(min-width: 400px)").matches)
    }
    , function() {
        return !!(window.CSS && CSS.supports && CSS.supports("display", "block"))
    }
    , function() {
        return !!document.createRange
    }
    , function() {
        return !!window.CustomEvent
    }
    , function() {
        return "scrollIntoView"in i("div")
    }
    , function() {
        return "getUserMedia"in window.navigator
    }
    , function() {
        return !!window.IntersectionObserver
    }
    , function() {
        return "ontouchstart"in i("div")
    }
    , function() {
        return "performance"in window
    }
    , function() {
        return !(!window.performance || !performance.timing)
    }
    , function() {
        return "MediaSource"in window
    }
    , function() {
        return "onpageshow"in window
    }
    , function() {
        return "onhashchange"in window
    }
    , function() {
        return !(!window.crypto || !window.crypto.getRandomValues)
    }
    , function() {
        return !!window.screen.orientation
    }
    , function() {
        return "WebSocket"in window
    }
    , function() {
        return !1
    }
    , function() {
        return "FileReader"in window
    }
    , function() {
        return !!window.atob
    }
    , function() {
        return !(!window.JSON || !JSON.parse)
    }
    , function() {
        return "postMessage"in window
    }
    , function() {
        return "EventSource"in window
    }
    , function() {
        return "onLine"in navigator
    }
    , function() {
        return "Promise"in window
    }
    , function() {
        return "setImmediate"in window
    }
    , function() {
        return "isInfinite"in Number
    }
    , function() {
        return "indexedDB"in window
    }
    , function() {
        return "Proxy"in window
    }
    , function() {
        return "serviceWorker"in navigator
    }
    , function() {
        return "postMessage"in window
    }
    , function() {
        return "Crypto"in window
    }
    , function() {
        return "openDatabase"in window
    }
    , function() {
        return "Notification"in window
    }
    , function() {
        return "currentScript"in document
    }
    , function() {
        var e = !1;
        return "number" == typeof window.screenX && ["webkit", "moz", "ms", "o", ""].forEach(function(t) {
            0 == e && document[t + (t ? "H" : "h") + "idden"] + "" != "undefined" && (e = !0)
        }),
        e
    }
    , function() {
        var e = !1;
        try {
            e = "localStorage"in g && "setItem"in localStorage
        } catch (t) {}
        return e
    }
    , function() {
        var e = !1;
        try {
            e = "sessionStorage"in g && "setItem"in sessionStorage
        } catch (t) {}
        return e
    }
    , function() {
        return "console"in window
    }
    , function() {
        return "requestAnimationFrame"in window
    }
    , function() {
        return "geolocation"in window.navigator
    }
    , function() {
        return "webkitSpeechRecognition"in window
    }
    , r, function() {
        return "TextEncoder"in window
    }
    , r, r, function() {
        var e = !1
          , t = "https://aq.qq.com/";
        try {
            new URL("/",t).href == t && (e = !0)
        } catch (n) {}
        return e
    }
    , function() {
        try {
            "a".localeCompare("b", "i")
        } catch (e) {
            return "RangeError" === e.name
        }
        return !1
    }
    ]);
    for (var c = new function() {
        var e = [];
        this.set = function(t) {
            e[t] = !0
        }
        ,
        this.encode = function() {
            for (var t = [], n = 0; n < e.length; n++)
                e[n] && (t[Math.floor(n / 6)] ^= 1 << n % 6);
            for (n = 0; n < t.length; n++)
                t[n] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(t[n] || 0);
            return t.join("")
        }
    }
    , u = s.get(), l = 0; l < u.length; l++)
        u[l] && c.set(l + 1);
    var f = c.encode();
    e.exports = function() {
        return f
    }
}
, function(e, t, n) {
    "use strict";
    var i = window.timing;
    i.log("jsInit"),
    n(65);
    var r = n(28)
      , o = n(47)
      , a = n(27)
      , s = n(48)
      , c = n(12)
      , u = n(51)
      , l = n(55)
      , f = n(29)
      , d = n(0)
      , p = n(1)
      , h = n(37)
      , m = n(36)
      , g = n(10)
      , v = n(30)
      , y = window.captchaConfig
      , w = void 0
      , b = 0
      , k = 0
      , E = function() {
        var e = y.color || "";
        if (!(e.indexOf("007aff") >= 0)) {
            var t = d.parse2rgb(e);
            t && (v.txtBack.css("color", t.s),
            v.btnThumb.css({
                "background-color": t.s,
                "box-shadow": "0 0 10px  1px rgba(" + parseInt(t.r) + "," + parseInt(t.g) + "," + parseInt(t.b) + ", .52)"
            }),
            v.btnIconfont.css({
                color: t.s
            }),
            v.txtError.css("color", t.s),
            $("line", v.iconError).css("stroke", t.s),
            $("line", v.iconGoback).css("stroke", t.s))
        }
    };
    function x() {
        v.captcha.removeClass("loading"),
        v.guideText.text("ABCopq");
        var e = v.guideWrap.height();
        "popup" !== y.showtype ? (e -= 5,
        v.txtBack.html(r.c11),
        $("#e_showFB").html(r.c19),
        $("#e_reload").html(r.c17)) : a.adjustStyle(),
        "0" === d.queryParam("fb") && v.status.addClass("hide-feedback"),
        v.title.html(r.c2),
        v.guideText.html(r.puzzle6),
        v.statusFail.html(r.puzzle10),
        r.rightToLeft && v.guideText.addClass("right-to-left"),
        c.companyInfo && v.status.addClass("show-company-note"),
        v.guideText.height() > e && (v.guideText.addClass("middle-fontsize"),
        v.guideText.height() > e && v.guideText.addClass("small-fontsize"),
        v.guideText.height() > e && v.guideText.addClass("multi-line")),
        v.iconError.attr({
            width: 37 * f.dpr,
            height: 25 * f.dpr
        }),
        v.iconGoback.attr({
            width: 10 * f.dpr,
            height: 20 * f.dpr
        }),
        u.tdc.setData({
            clientType: y.clientype
        }),
        w = o(v.operation, [v.imgSlide, v.btnSlide], function() {
            h.clearErrorNote()
        }, function(e, t, n) {
            w.movable(!1);
            var r = v.imgSlide.offset()
              , o = v.imgBg.offset()
              , s = [{
                left: Math.floor((r.left - v.operation.offset().left) / y.rate),
                top: Math.floor(parseInt(y.spt, 10))
            }];
            u.tdc.setData({
                coordinate: [Math.ceil(o.left), Math.ceil(o.top), Number(y.rate.toFixed(4))]
            }),
            function(e, t, n) {
                var r = void 0
                  , o = void 0
                  , s = 0;
                function l() {
                    3 === s && function(e, t, n, r, o) {
                        for (var s = "", c = 0; c < e.length; c++)
                            s += Math.floor(e[c].left) + "," + Math.floor(e[c].top) + ";";
                        var l = d.queryMap();
                        i.log("verify");
                        var f = u.challenge();
                        n.push([0, 0, f]),
                        u.tdc.setData({
                            trycnt: ++k,
                            refreshcnt: b,
                            slideValue: n,
                            dragobj: t
                        }),
                        l.ans = s,
                        l.vsig = y.vsig,
                        l.cdata = f,
                        l.websig = y.websig,
                        l.subcapclass = y.subcapclass,
                        l[y.collectdata] = decodeURIComponent(u.tdc.getData()),
                        "inner" !== y.curenv && (l.asig = y.asig,
                        l.buid = y.buid);
                        l.fpinfo = r,
                        l.eks = u.tdc.getEks(),
                        l.tlg = l[y.collectdata].length,
                        $.extend(l, o),
                        u.tdc.checkTdcSuccess() || u.tdc.retryLoad(g);
                        var v = $.ajax({
                            type: "POST",
                            url: "/cap_union_new_verify",
                            data: l,
                            timeout: 15e3,
                            dataType: "json",
                            success: function(e) {
                                if (e) {
                                    var t = parseInt(e.errorCode, 10);
                                    switch (t) {
                                    case 0:
                                        m.push(48, i.logEnd("verifyDuration")),
                                        h.showSuccess(w.dragDuration, function() {
                                            a.verifySuccess(e.ticket, e.randstr)
                                        });
                                        break;
                                    case 9:
                                        h.showErrorNote("puzzle8", 3e3, y.showtype),
                                        h.shake(S);
                                        break;
                                    case 12:
                                        h.showCoverError("puzzle9", null, S, u.tdc.getToken());
                                        break;
                                    case 16:
                                    case 20:
                                    case 21:
                                        a.sessionTimeout();
                                        break;
                                    case 50:
                                        h.showErrorNote("puzzle7", 3e3, y.showtype),
                                        h.shake(function() {
                                            w.moveBack(!0)
                                        });
                                        break;
                                    case 51:
                                        a.hybridVerify(e.sess, p.get());
                                        break;
                                    default:
                                        h.showCoverError("c23", e.errorCode, S, u.tdc.getToken())
                                    }
                                    m.push(27, i.logEnd("verify")),
                                    m.send()
                                }
                            },
                            error: function(e, t, n) {
                                T = !1;
                                var r = "";
                                r += e && e.status ? e.status + ";" : "",
                                r += t ? t + ":" : "",
                                r += n || "",
                                g.send(g.type.ERROR_TYPE_AJAX_VERIFY, r),
                                v.abort(),
                                h.showErrorNote("c8", 3e3, y.showtype),
                                "timeout" === t || "abort" === t || "error" === t && (m.push(27, i.logEnd("verify")),
                                m.send()),
                                S()
                            }
                        })
                    }(e, t, n, r, o)
                }
                (function f(e, t) {
                    if (!c.needFp)
                        return e("");
                    if (!window.getFPVryData)
                        return g.send(g.type.ERROR_TYPE_MB_FPJS_DOWNLOAD_FAIL, ""),
                        e("");
                    if (t >= 5)
                        return g.send(g.type.ERROR_TYPE_MB_FP_REGISTER_TIMEOUT, ""),
                        e("");
                    var n = window.getFPVryData();
                    n ? e(n) : setTimeout(function() {
                        f(e, (t || 1) + 1)
                    }, 100)
                }
                )(function(e) {
                    r = e,
                    s |= 1,
                    l()
                }),
                u.vm.run(function(e) {
                    o = e,
                    s |= 2,
                    l()
                })
            }(s, t, n)
        }),
        s(C),
        E(),
        /TCSDK\//.test(c.ua) && n(56).sdk();
        var t = Math.round(v.txtBack.css("font-size"));
        t % 2 == 1 && (t += 1),
        v.txtBack.css("font-size", f.px2remU(t)),
        v.operation.addClass("show-loading")
    }
    var T = !1;
    function S() {
        T || (T = !0,
        b++,
        i.log("refresh"),
        h.showLoading(),
        w.moveBack(!1),
        u.tdc.clearData(),
        u.vm.init(),
        u.tdc.checkTdcSuccess() || u.tdc.retryLoad(g),
        $.ajax({
            type: "POST",
            url: "/cap_union_new_getsig",
            data: d.getQuery(!0),
            dataType: "json",
            error: function(e, t, n) {
                T = !1,
                h.loadImgFailed();
                var i = "";
                i += e && e.status ? e.status + ";" : "",
                i += t ? t + ":" : "",
                i += n || "",
                g.send(g.type.ERROR_TYPE_AJAX_GETSIG, i)
            },
            success: function(e) {
                return e ? (m.push(26, i.logEnd("refresh")),
                e.ret = parseInt(e.ret, 10),
                52 === e.ret ? a.frequencyLimit() : (y.capChallenge = e.chlg || {},
                void (e.vsig ? (y.vsig = e.vsig,
                e.cdnPic1 && e.cdnPic2 && e.iscdn ? (y.iscdn = e.iscdn,
                y.cdnPic1 = e.cdnPic1,
                y.cdnPic2 = e.cdnPic2) : (y.iscdn = !1,
                y.cdnPic1 = null,
                y.cdnPic2 = null),
                y.spt = e.inity,
                T = !1,
                s(C)) : T = !1))) : (h.loadImgFailed(),
                g.send(g.type.ERROR_TYPE_AJAX_GETSIG, "response error."))
            }
        }))
    }
    function C() {
        w.boundaryCalc(),
        w.movable(!0),
        v.operation.removeClass("show-loading"),
        T = !1,
        m.push(46, i.point("now")),
        m.send()
    }
    e.exports = function() {
        u.tdc.link(g),
        u.vm.init(),
        v.close.on("click", function() {
            a.capClose()
        }),
        v.btnBack.on("click", function() {
            var e = y.dst;
            e ? window.location = e : "capFrame" === y.capSrc ? a.goBack() : a.otherBack()
        }),
        v.feedback.on("click", function() {
            /(iPhone|iPad|iPod|Android|ios|SymbianOS|Mobile)/i.test(navigator.userAgent) ? window.open(y.TuCao + "&" + l()) : window.open(y.TuCao + "?" + l())
        }),
        v.site007.on("click", function() {
            1 === parseInt(y.iscdn) ? window.open("https://007.qq.com/?ADTAG=self.link&Tucao=cdn_h5&" + l()) : window.open("https://007.qq.com/?ADTAG=self.link&Tucao=slide_h5&" + l())
        }),
        v.site007.on("touchstart", function() {
            $(this).addClass("show-site-underline")
        }),
        v.site007.on("touchend", function() {
            $(this).removeClass("show-site-underline")
        }),
        v.btnReload.on("click", S),
        v.btnCoverReload.on("click", S),
        x()
    }
}
, function(e, t, n) {
    "use strict";
    var i = n(11)
      , r = n(1)
      , o = n(0)
      , a = n(12)
      , s = window.captchaConfig
      , c = !0
      , u = {}
      , l = (window.performance || {}).timing || {}
      , f = ["unloadEventStart", "unloadEventEnd", "redirectStart", "redirectEnd", "fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "requestStart", "responseStart", "responseEnd", "domLoading", "domInteractive", "domContentLoadedEventStart", "domContentLoadedEventEnd", "domComplete", "loadEventStart", "loadEventEnd", ["loadEventEnd", "fetchStart"], ["domComplete", "responseEnd"], ["domainLookupEnd", "domainLookupStart"], ["responseStart", "fetchStart"], ["connectEnd", "connectStart"]]
      , d = {
        1: {
            inner: {
                http: 21406,
                https: 21408
            },
            open: {
                http: 21407,
                https: 21412
            }
        },
        2: 3,
        3: {
            cdn: 14,
            cgi: 13
        }
    };
    function p() {
        if (c) {
            for (var e = new Date, t = 0; t < f.length; t++) {
                var n = f[t];
                u[t + 1] = "string" == typeof n ? l[f[t]] || 0 : (l[f[t][0]] || e) - l[f[t][1]] || 0
            }
            !function() {
                if (u[42] = parseInt(o.queryParam("TCapIframeLoadTime")) || "0",
                u[43] = parseInt(o.queryParam("prehandleLoadTime")) || "0",
                u[44] = l.fetchStart - parseInt(o.queryParam("createIframeStart")) || "0",
                u[46] = u[46] - l.fetchStart || 0,
                u[47] = timing.point("domLoaded") - l.fetchStart || 0,
                u[49] = timing.logEnd("jsInit") || 0,
                window.performance && "function" == typeof window.performance.getEntries) {
                    var e = window.performance.getEntries();
                    if (e.length > 0) {
                        for (var t = 1 << 30, n = -1, i = 0, r = e.length; i < r; i++) {
                            var a = e[i]
                              , s = a.initiatorType;
                            if (s && ("link" === s || "script" === s)) {
                                var c = a.fetchStart
                                  , f = a.responseEnd;
                                c && f && (t = Math.min(t, c),
                                n = Math.max(n, f))
                            }
                        }
                        u[45] = Math.ceil(n) - Math.ceil(t)
                    }
                }
            }(),
            c = !1
        } else
            u[46] = 0
    }
    e.exports = {
        push: function(e, t) {
            u[e] = t || 0
        },
        send: function() {
            p(),
            u[29] = s.aid,
            u[31] = i.getToken(),
            u[33] = s.uid,
            u[34] = o.queryParam("sid"),
            u.platform = a.platform,
            u.flag1 = d[1][s.curenv][a.protocol],
            u.flag2 = d[2],
            u.flag3 = d[3]["1" === s.iscdn ? "cdn" : "cgi"],
            u[32] = u[32] - l.fetchStart || 0,
            u[37] = u[37] - l.fetchStart || 0;
            var e = [];
            for (var t in u)
                e.push(t + "=" + u[t]);
            u = {};
            var n = s.tdcHtdocsPath + "/caplog?appid=20128&" + e.join("&");
            (new Image).src = r(n)
        }
    }
}
, function(e, t, n) {
    "use strict";
    var i = n(30)
      , r = n(28)
      , o = function() {
        var e = document.createElement("fake")
          , t = {
            animation: "animationend",
            mozAnimation: "mozAnimationEnd",
            webkitAnimation: "webkitAnimationEnd"
        };
        for (var n in t)
            if (e.style[n] !== undefined)
                return t[n];
        return !1
    }()
      , a = void 0
      , s = function() {
        i.status.removeClass("show-error-tip")
    };
    e.exports = {
        showErrorNote: function(e, t, n) {
            clearTimeout(a),
            n && "embed" == n ? (i.guideText.html(r[e]).css({
                color: "#ec1313"
            }),
            a = setTimeout(function() {
                i.guideText.html(r.puzzle6).css({
                    color: "#000000"
                })
            }, t)) : (i.txtErrorNote.html(r[e]),
            i.status.addClass("show-error-tip"),
            a = setTimeout(function() {
                s()
            }, t))
        },
        clearErrorNote: s,
        showCoverError: function(e, t, n, o) {
            e = r[e],
            "[object Array]" === Object.prototype.toString.call(e) && (e = e[Math.floor(Math.random() * e.length)]),
            t && (e = e.replace(/\+/g, t)),
            o && (e += '<div class="tc-token">' + $("<div>").text(o).html() + "</div>"),
            i.txtError.html(e),
            i.operation.addClass("show-error"),
            setTimeout(function() {
                i.operation.removeClass("show-error"),
                n()
            }, 1e3)
        },
        loadImgFailed: function() {
            i.operation.removeClass("show-loading"),
            i.operation.addClass("show-fail")
        },
        showLoading: function() {
            i.operation.addClass("show-loading"),
            i.operation.removeClass("show-fail show-success show-error")
        },
        hideLoading: function() {
            i.operation.removeClass("show-loading")
        },
        showSuccess: function(e, t) {
            i.operation.addClass("show-success"),
            r.c16 = r.c16.join("%^").replace(/\+/g, (e / 1e3).toFixed(1)).split("%^"),
            e <= 4e3 ? i.txtSuccess.html(r.c16[Math.floor(2 * Math.random())]) : i.txtSuccess.html(r.c16[2]),
            setTimeout(function() {
                t()
            }, 800)
        },
        shake: function(e) {
            i.imgSlide.addClass("shake"),
            i.btnSlide.addClass("shake"),
            o ? i.imgSlide.one(o, function() {
                i.imgSlide.removeClass("shake"),
                i.btnSlide.removeClass("shake"),
                e()
            }) : setTimeout(function() {
                i.imgSlide.removeClass("shake"),
                i.btnSlide.removeClass("shake"),
                e()
            }, 400)
        }
    }
}
, , , , function(e, t, n) {
    "use strict";
    n(42),
    n(27).loadReady();
    n(45),
    n(4).isLowIE;
    var i = /(iPhone|iPad|iPod|Android|ios|SymbianOS|Mobile)/i.test(navigator.userAgent);
    if (!window.addEventListener || !document.querySelector) {
        var r = document.getElementById("inlineCaptchaStyle");
        r.parentNode.removeChild(r)
    }
    if (i)
        window.$ = n(46),
        n(35)();
    else {
        var o = function(e) {
            (e && "load" === e.type || /^(loaded|complete)$/.test(this.readyState)) && function t() {
                window.$ ? n(35)() : setTimeout(t, 20)
            }()
        }
          , a = window.document.createElement("script");
        a.type = "text/javascript",
        a.async = !0,
        "onload"in a ? a.onload = o : a.onreadystatechange = o,
        a.src = window.captchaConfig.htdocsPath + "/jquery-1.11.3.min.js",
        window.document.getElementsByTagName("body").item(0).appendChild(a)
    }
    window.TCaptchaLoaded = !0
}
, function(e, t, n) {
    "use strict";
    var i = n(10)
      , r = {}
      , o = function(e) {
        var t = "";
        e && e.stack && (t = e.stack.replace(/\n/gi, "").split(/\bat\b/).join("\n").replace(/\?[^:]+/gi, ""));
        try {
            var n = e.toString();
            t.indexOf(n) < 0 && (t = n + "@" + t)
        } catch (i) {}
        return t
    }
      , a = function(e) {
        var t = o(e);
        r[t] || (r[t] = !0,
        i.send(1, t))
    };
    window.addEventListener ? addEventListener("error", function(e) {
        a(e.error)
    }) : window.onerror = function(e, t, n, a, s) {
        var c = "";
        c = s && s.stack ? o(s) : e,
        r[c] || (r[c] = !0,
        i.send(1, c, 20))
    }
    ,
    e.exports = a
}
, function(e, t) {
    function n(e, t) {
        e.onload = function() {
            this.onerror = this.onload = null,
            t(null, e)
        }
        ,
        e.onerror = function() {
            this.onerror = this.onload = null,
            t(new Error("Failed to load " + this.src), e)
        }
    }
    function i(e, t) {
        e.onreadystatechange = function() {
            "complete" != this.readyState && "loaded" != this.readyState || (this.onreadystatechange = null,
            t(null, e))
        }
    }
    e.exports = function(e, t, r) {
        var o = document.head || document.getElementsByTagName("head")[0]
          , a = document.createElement("script");
        "function" == typeof t && (r = t,
        t = {}),
        t = t || {},
        r = r || function() {}
        ,
        a.type = t.type || "text/javascript",
        a.charset = t.charset || "utf8",
        a.async = !("async"in t) || !!t.async,
        a.src = e,
        t.attrs && function(e, t) {
            for (var n in t)
                e.setAttribute(n, t[n])
        }(a, t.attrs),
        t.text && (a.text = "" + t.text),
        ("onload"in a ? n : i)(a, r),
        a.onload || n(a, r),
        o.appendChild(a)
    }
}
, function(e, t, n) {
    "use strict";
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
      , r = "[CODE_VERIFY]"
      , o = "postMessage"in window;
    function a(e, t, n) {
        var r = "";
        if (arguments.length < 2 ? r = "[Msger] error 1" : "object" != (void 0 === e ? "undefined" : i(e)) ? r = "[Msger] error 2" : "string" != typeof t && (r = "[Msger] error 3"),
        r)
            throw new Error(r);
        this.target = e,
        this.name = t,
        this.domain = n || "*"
    }
    function s(e, t) {
        this.targets = {},
        this.name = e,
        this.listenFunc = [],
        "string" != typeof (r = t || r) && (r = r.toString()),
        this.initListen()
    }
    a.prototype.send = o ? function(e) {
        this.target.postMessage(e, this.domain)
    }
    : function(e) {
        var t = window.navigator[r + this.name];
        if ("function" != typeof t)
            throw new Error("target callback function is not defined");
        t(e, window)
    }
    ,
    s.prototype.addTarget = function(e, t, n) {
        var i = new a(e,t,n);
        this.targets[t] = i
    }
    ,
    s.prototype.initListen = function() {
        var e = this
          , t = function(t) {
            "object" == (void 0 === t ? "undefined" : i(t)) && t.data && (t = t.data);
            for (var n = 0; n < e.listenFunc.length; n++)
                e.listenFunc[n](t)
        };
        o ? "addEventListener"in document ? window.addEventListener("message", t, !1) : "attachEvent"in document && window.attachEvent("onmessage", t) : window.navigator[r + this.name] = t
    }
    ,
    s.prototype.listen = function(e) {
        this.listenFunc.push(e)
    }
    ,
    s.prototype.clear = function() {
        this.listenFunc = []
    }
    ,
    s.prototype.send = function(e) {
        var t, n = this.targets;
        for (t in n)
            n.hasOwnProperty(t) && n[t].send(e)
    }
    ,
    e.exports = s
}
, function(e, t, n) {
    "use strict";
    e.exports = function() {
        var e = document.body || document.getElementsByTagName("body")[0]
          , t = document.createElement("div");
        try {
            t.style.fontSize = "1rem",
            t.innerText = "REM TEST",
            e.appendChild(t);
            var n = t.clientHeight > 0;
            return e.removeChild(t),
            n
        } catch (i) {}
        return !1
    }
}
, function(e, t, n) {
    "use strict";
    var i, r, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    ;
    r = window,
    (i = function() {
        return e = r,
        t = function() {
            var t, n, i, r, a, s, c = [], u = c.concat, l = c.filter, f = c.slice, d = e.document, p = {}, h = {}, m = {
                "column-count": 1,
                columns: 1,
                "font-weight": 1,
                "line-height": 1,
                opacity: 1,
                "z-index": 1,
                zoom: 1
            }, g = /^\s*<(\w+|!)[^>]*>/, v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, w = /^(?:body|html)$/i, b = /([A-Z])/g, k = ["val", "css", "html", "text", "data", "width", "height", "offset"], E = d.createElement("table"), x = d.createElement("tr"), T = {
                tr: d.createElement("tbody"),
                tbody: E,
                thead: E,
                tfoot: E,
                td: x,
                th: x,
                "*": d.createElement("div")
            }, S = /^[\w-]*$/, C = {}, z = C.toString, R = {}, _ = d.createElement("div"), P = {
                tabindex: "tabIndex",
                readonly: "readOnly",
                "for": "htmlFor",
                "class": "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            }, j = Array.isArray || function(e) {
                return e instanceof Array
            }
            ;
            function O(e) {
                return null == e ? String(e) : C[z.call(e)] || "object"
            }
            function A(e) {
                return "function" == O(e)
            }
            function I(e) {
                return null != e && e == e.window
            }
            function D(e) {
                return null != e && e.nodeType == e.DOCUMENT_NODE
            }
            function M(e) {
                return "object" == O(e)
            }
            function L(e) {
                return M(e) && !I(e) && Object.getPrototypeOf(e) == Object.prototype
            }
            function F(e) {
                var t = !!e && "length"in e && e.length
                  , n = i.type(e);
                return "function" != n && !I(e) && ("array" == n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
            }
            function N(e) {
                return e.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
            }
            function V(e) {
                return e in h ? h[e] : h[e] = new RegExp("(^|\\s)" + e + "(\\s|$)")
            }
            function $(e, t) {
                return "number" != typeof t || m[N(e)] ? t : t + "px"
            }
            function B(e) {
                return "children"in e ? f.call(e.children) : i.map(e.childNodes, function(e) {
                    if (1 == e.nodeType)
                        return e
                })
            }
            function q(e, t) {
                var n, i = e ? e.length : 0;
                for (n = 0; n < i; n++)
                    this[n] = e[n];
                this.length = i,
                this.selector = t || ""
            }
            function Y(e, t) {
                return null == t ? i(e) : i(e).filter(t)
            }
            function W(e, t, n, i) {
                return A(t) ? t.call(e, n, i) : t
            }
            function H(e, t, n) {
                null == n ? e.removeAttribute(t) : e.setAttribute(t, n)
            }
            function U(e, n) {
                var i = e.className || ""
                  , r = i && i.baseVal !== t;
                if (n === t)
                    return r ? i.baseVal : i;
                r ? i.baseVal = n : e.className = n
            }
            function G(e) {
                try {
                    return e ? "true" == e || "false" != e && ("null" == e ? null : +e + "" == e ? +e : /^[\[\{]/.test(e) ? i.parseJSON(e) : e) : e
                } catch (t) {
                    return e
                }
            }
            return R.matches = function(e, t) {
                if (!t || !e || 1 !== e.nodeType)
                    return !1;
                var n = e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.oMatchesSelector || e.matchesSelector;
                if (n)
                    return n.call(e, t);
                var i, r = e.parentNode, o = !r;
                return o && (r = _).appendChild(e),
                i = ~R.qsa(r, t).indexOf(e),
                o && _.removeChild(e),
                i
            }
            ,
            a = function(e) {
                return e.replace(/-+(.)?/g, function(e, t) {
                    return t ? t.toUpperCase() : ""
                })
            }
            ,
            s = function(e) {
                return l.call(e, function(t, n) {
                    return e.indexOf(t) == n
                })
            }
            ,
            R.fragment = function(e, n, r) {
                var o, a, s;
                return v.test(e) && (o = i(d.createElement(RegExp.$1))),
                o || (e.replace && (e = e.replace(y, "<$1></$2>")),
                n === t && (n = g.test(e) && RegExp.$1),
                n in T || (n = "*"),
                (s = T[n]).innerHTML = "" + e,
                o = i.each(f.call(s.childNodes), function() {
                    s.removeChild(this)
                })),
                L(r) && (a = i(o),
                i.each(r, function(e, t) {
                    k.indexOf(e) > -1 ? a[e](t) : a.attr(e, t)
                })),
                o
            }
            ,
            R.Z = function(e, t) {
                return new q(e,t)
            }
            ,
            R.isZ = function(e) {
                return e instanceof R.Z
            }
            ,
            R.init = function(e, n) {
                var r, o;
                if (!e)
                    return R.Z();
                if ("string" == typeof e)
                    if ("<" == (e = e.trim())[0] && g.test(e))
                        r = R.fragment(e, RegExp.$1, n),
                        e = null;
                    else {
                        if (n !== t)
                            return i(n).find(e);
                        r = R.qsa(d, e)
                    }
                else {
                    if (A(e))
                        return i(d).ready(e);
                    if (R.isZ(e))
                        return e;
                    if (j(e))
                        o = e,
                        r = l.call(o, function(e) {
                            return null != e
                        });
                    else if (M(e))
                        r = [e],
                        e = null;
                    else if (g.test(e))
                        r = R.fragment(e.trim(), RegExp.$1, n),
                        e = null;
                    else {
                        if (n !== t)
                            return i(n).find(e);
                        r = R.qsa(d, e)
                    }
                }
                return R.Z(r, e)
            }
            ,
            (i = function(e, t) {
                return R.init(e, t)
            }
            ).extend = function(e) {
                var i, r = f.call(arguments, 1);
                return "boolean" == typeof e && (i = e,
                e = r.shift()),
                r.forEach(function(r) {
                    !function o(e, i, r) {
                        for (n in i)
                            r && (L(i[n]) || j(i[n])) ? (L(i[n]) && !L(e[n]) && (e[n] = {}),
                            j(i[n]) && !j(e[n]) && (e[n] = []),
                            o(e[n], i[n], r)) : i[n] !== t && (e[n] = i[n])
                    }(e, r, i)
                }),
                e
            }
            ,
            R.qsa = function(e, t) {
                var n, i = "#" == t[0], r = !i && "." == t[0], o = i || r ? t.slice(1) : t, a = S.test(o);
                return e.getElementById && a && i ? (n = e.getElementById(o)) ? [n] : [] : 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType ? [] : f.call(a && !i && e.getElementsByClassName ? r ? e.getElementsByClassName(o) : e.getElementsByTagName(t) : e.querySelectorAll(t))
            }
            ,
            i.contains = d.documentElement.contains ? function(e, t) {
                return e !== t && e.contains(t)
            }
            : function(e, t) {
                for (; t && (t = t.parentNode); )
                    if (t === e)
                        return !0;
                return !1
            }
            ,
            i.type = O,
            i.isFunction = A,
            i.isWindow = I,
            i.isArray = j,
            i.isPlainObject = L,
            i.isEmptyObject = function(e) {
                var t;
                for (t in e)
                    return !1;
                return !0
            }
            ,
            i.isNumeric = function(e) {
                var t = Number(e)
                  , n = void 0 === e ? "undefined" : o(e);
                return null != e && "boolean" != n && ("string" != n || e.length) && !isNaN(t) && isFinite(t) || !1
            }
            ,
            i.inArray = function(e, t, n) {
                return c.indexOf.call(t, e, n)
            }
            ,
            i.camelCase = a,
            i.trim = function(e) {
                return null == e ? "" : String.prototype.trim.call(e)
            }
            ,
            i.uuid = 0,
            i.support = {},
            i.expr = {},
            i.noop = function() {}
            ,
            i.map = function(e, t) {
                var n, r, o, a, s = [];
                if (F(e))
                    for (r = 0; r < e.length; r++)
                        null != (n = t(e[r], r)) && s.push(n);
                else
                    for (o in e)
                        null != (n = t(e[o], o)) && s.push(n);
                return (a = s).length > 0 ? i.fn.concat.apply([], a) : a
            }
            ,
            i.each = function(e, t) {
                var n, i;
                if (F(e)) {
                    for (n = 0; n < e.length; n++)
                        if (!1 === t.call(e[n], n, e[n]))
                            return e
                } else
                    for (i in e)
                        if (!1 === t.call(e[i], i, e[i]))
                            return e;
                return e
            }
            ,
            i.grep = function(e, t) {
                return l.call(e, t)
            }
            ,
            e.JSON && (i.parseJSON = JSON.parse),
            i.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
                C["[object " + t + "]"] = t.toLowerCase()
            }),
            i.fn = {
                constructor: R.Z,
                length: 0,
                forEach: c.forEach,
                reduce: c.reduce,
                push: c.push,
                sort: c.sort,
                splice: c.splice,
                indexOf: c.indexOf,
                concat: function() {
                    var e, t, n = [];
                    for (e = 0; e < arguments.length; e++)
                        t = arguments[e],
                        n[e] = R.isZ(t) ? t.toArray() : t;
                    return u.apply(R.isZ(this) ? this.toArray() : this, n)
                },
                map: function(e) {
                    return i(i.map(this, function(t, n) {
                        return e.call(t, n, t)
                    }))
                },
                slice: function() {
                    return i(f.apply(this, arguments))
                },
                ready: function(t) {
                    if ("complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll)
                        setTimeout(function() {
                            t(i)
                        }, 0);
                    else {
                        var n = function r() {
                            d.removeEventListener("DOMContentLoaded", r, !1),
                            e.removeEventListener("load", r, !1),
                            t(i)
                        };
                        d.addEventListener("DOMContentLoaded", n, !1),
                        e.addEventListener("load", n, !1)
                    }
                    return this
                },
                get: function(e) {
                    return e === t ? f.call(this) : this[e >= 0 ? e : e + this.length]
                },
                toArray: function() {
                    return this.get()
                },
                size: function() {
                    return this.length
                },
                remove: function() {
                    return this.each(function() {
                        null != this.parentNode && this.parentNode.removeChild(this)
                    })
                },
                each: function(e) {
                    return c.every.call(this, function(t, n) {
                        return !1 !== e.call(t, n, t)
                    }),
                    this
                },
                filter: function(e) {
                    return A(e) ? this.not(this.not(e)) : i(l.call(this, function(t) {
                        return R.matches(t, e)
                    }))
                },
                add: function(e, t) {
                    return i(s(this.concat(i(e, t))))
                },
                is: function(e) {
                    return "string" == typeof e ? this.length > 0 && R.matches(this[0], e) : e && this.selector == e.selector
                },
                not: function(e) {
                    var n = [];
                    if (A(e) && e.call !== t)
                        this.each(function(t) {
                            e.call(this, t) || n.push(this)
                        });
                    else {
                        var r = "string" == typeof e ? this.filter(e) : F(e) && A(e.item) ? f.call(e) : i(e);
                        this.forEach(function(e) {
                            r.indexOf(e) < 0 && n.push(e)
                        })
                    }
                    return i(n)
                },
                has: function(e) {
                    return this.filter(function() {
                        return M(e) ? i.contains(this, e) : i(this).find(e).size()
                    })
                },
                eq: function(e) {
                    return -1 === e ? this.slice(e) : this.slice(e, +e + 1)
                },
                first: function() {
                    var e = this[0];
                    return e && !M(e) ? e : i(e)
                },
                last: function() {
                    var e = this[this.length - 1];
                    return e && !M(e) ? e : i(e)
                },
                find: function(e) {
                    var t = this;
                    return e ? "object" == (void 0 === e ? "undefined" : o(e)) ? i(e).filter(function() {
                        var e = this;
                        return c.some.call(t, function(t) {
                            return i.contains(t, e)
                        })
                    }) : 1 == this.length ? i(R.qsa(this[0], e)) : this.map(function() {
                        return R.qsa(this, e)
                    }) : i()
                },
                closest: function(e, t) {
                    var n = []
                      , r = "object" == (void 0 === e ? "undefined" : o(e)) && i(e);
                    return this.each(function(i, o) {
                        for (; o && !(r ? r.indexOf(o) >= 0 : R.matches(o, e)); )
                            o = o !== t && !D(o) && o.parentNode;
                        o && n.indexOf(o) < 0 && n.push(o)
                    }),
                    i(n)
                },
                parents: function(e) {
                    for (var t = [], n = this; n.length > 0; )
                        n = i.map(n, function(e) {
                            if ((e = e.parentNode) && !D(e) && t.indexOf(e) < 0)
                                return t.push(e),
                                e
                        });
                    return Y(t, e)
                },
                parent: function(e) {
                    return Y(s(this.pluck("parentNode")), e)
                },
                children: function(e) {
                    return Y(this.map(function() {
                        return B(this)
                    }), e)
                },
                contents: function() {
                    return this.map(function() {
                        return this.contentDocument || f.call(this.childNodes)
                    })
                },
                siblings: function(e) {
                    return Y(this.map(function(e, t) {
                        return l.call(B(t.parentNode), function(e) {
                            return e !== t
                        })
                    }), e)
                },
                empty: function() {
                    return this.each(function() {
                        this.innerHTML = ""
                    })
                },
                pluck: function(e) {
                    return i.map(this, function(t) {
                        return t[e]
                    })
                },
                show: function() {
                    return this.each(function() {
                        var e, t, n;
                        "none" == this.style.display && (this.style.display = ""),
                        "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = (e = this.nodeName,
                        p[e] || (t = d.createElement(e),
                        d.body.appendChild(t),
                        n = getComputedStyle(t, "").getPropertyValue("display"),
                        t.parentNode.removeChild(t),
                        "none" == n && (n = "block"),
                        p[e] = n),
                        p[e]))
                    })
                },
                replaceWith: function(e) {
                    return this.before(e).remove()
                },
                wrap: function(e) {
                    var t = A(e);
                    if (this[0] && !t)
                        var n = i(e).get(0)
                          , r = n.parentNode || this.length > 1;
                    return this.each(function(o) {
                        i(this).wrapAll(t ? e.call(this, o) : r ? n.cloneNode(!0) : n)
                    })
                },
                wrapAll: function(e) {
                    if (this[0]) {
                        var t;
                        for (i(this[0]).before(e = i(e)); (t = e.children()).length; )
                            e = t.first();
                        i(e).append(this)
                    }
                    return this
                },
                wrapInner: function(e) {
                    var t = A(e);
                    return this.each(function(n) {
                        var r = i(this)
                          , o = r.contents()
                          , a = t ? e.call(this, n) : e;
                        o.length ? o.wrapAll(a) : r.append(a)
                    })
                },
                unwrap: function() {
                    return this.parent().each(function() {
                        i(this).replaceWith(i(this).children())
                    }),
                    this
                },
                clone: function() {
                    return this.map(function() {
                        return this.cloneNode(!0)
                    })
                },
                hide: function() {
                    return this.css("display", "none")
                },
                toggle: function(e) {
                    return this.each(function() {
                        var n = i(this);
                        (e === t ? "none" == n.css("display") : e) ? n.show() : n.hide()
                    })
                },
                prev: function(e) {
                    return i(this.pluck("previousElementSibling")).filter(e || "*")
                },
                next: function(e) {
                    return i(this.pluck("nextElementSibling")).filter(e || "*")
                },
                html: function(e) {
                    return 0 in arguments ? this.each(function(t) {
                        var n = this.innerHTML;
                        i(this).empty().append(W(this, e, t, n))
                    }) : 0 in this ? this[0].innerHTML : null
                },
                text: function(e) {
                    return 0 in arguments ? this.each(function(t) {
                        var n = W(this, e, t, this.textContent);
                        this.textContent = null == n ? "" : "" + n
                    }) : 0 in this ? this.pluck("textContent").join("") : null
                },
                attr: function(e, i) {
                    var r;
                    return "string" != typeof e || 1 in arguments ? this.each(function(t) {
                        if (1 === this.nodeType)
                            if (M(e))
                                for (n in e)
                                    H(this, n, e[n]);
                            else
                                H(this, e, W(this, i, t, this.getAttribute(e)))
                    }) : 0 in this && 1 == this[0].nodeType && null != (r = this[0].getAttribute(e)) ? r : t
                },
                removeAttr: function(e) {
                    return this.each(function() {
                        1 === this.nodeType && e.split(" ").forEach(function(e) {
                            H(this, e)
                        }, this)
                    })
                },
                prop: function(e, t) {
                    return "string" != typeof (e = P[e] || e) || 1 in arguments ? this.each(function(i) {
                        if (M(e))
                            for (n in e)
                                this[P[n] || n] = e[n];
                        else
                            this[e] = W(this, t, i, this[e])
                    }) : this[0] && this[0][e]
                },
                removeProp: function(e) {
                    return e = P[e] || e,
                    this.each(function() {
                        delete this[e]
                    })
                },
                data: function(e, n) {
                    var i = "data-" + e.replace(b, "-$1").toLowerCase()
                      , r = 1 in arguments ? this.attr(i, n) : this.attr(i);
                    return null !== r ? G(r) : t
                },
                val: function(e) {
                    return 0 in arguments ? (null == e && (e = ""),
                    this.each(function(t) {
                        this.value = W(this, e, t, this.value)
                    })) : this[0] && (this[0].multiple ? i(this[0]).find("option").filter(function() {
                        return this.selected
                    }).pluck("value") : this[0].value)
                },
                offset: function(t) {
                    if (t)
                        return this.each(function(e) {
                            var n = i(this)
                              , r = W(this, t, e, n.offset())
                              , o = n.offsetParent().offset()
                              , a = {
                                top: r.top - o.top,
                                left: r.left - o.left
                            };
                            "static" == n.css("position") && (a.position = "relative"),
                            n.css(a)
                        });
                    if (!this.length)
                        return null;
                    if (d.documentElement !== this[0] && !i.contains(d.documentElement, this[0]))
                        return {
                            top: 0,
                            left: 0
                        };
                    var n = this[0].getBoundingClientRect();
                    return {
                        left: n.left + e.pageXOffset,
                        top: n.top + e.pageYOffset,
                        width: Math.round(n.width),
                        height: Math.round(n.height)
                    }
                },
                css: function(e, t) {
                    if (arguments.length < 2) {
                        var r = this[0];
                        if ("string" == typeof e) {
                            if (!r)
                                return;
                            return r.style[a(e)] || getComputedStyle(r, "").getPropertyValue(e)
                        }
                        if (j(e)) {
                            if (!r)
                                return;
                            var o = {}
                              , s = getComputedStyle(r, "");
                            return i.each(e, function(e, t) {
                                o[t] = r.style[a(t)] || s.getPropertyValue(t)
                            }),
                            o
                        }
                    }
                    var c = "";
                    if ("string" == O(e))
                        t || 0 === t ? c = N(e) + ":" + $(e, t) : this.each(function() {
                            this.style.removeProperty(N(e))
                        });
                    else
                        for (n in e)
                            e[n] || 0 === e[n] ? c += N(n) + ":" + $(n, e[n]) + ";" : this.each(function() {
                                this.style.removeProperty(N(n))
                            });
                    return this.each(function() {
                        this.style.cssText += ";" + c
                    })
                },
                index: function(e) {
                    return e ? this.indexOf(i(e)[0]) : this.parent().children().indexOf(this[0])
                },
                hasClass: function(e) {
                    return !!e && c.some.call(this, function(e) {
                        return this.test(U(e))
                    }, V(e))
                },
                addClass: function(e) {
                    return e ? this.each(function(t) {
                        if ("className"in this) {
                            r = [];
                            var n = U(this)
                              , o = W(this, e, t, n);
                            o.split(/\s+/g).forEach(function(e) {
                                i(this).hasClass(e) || r.push(e)
                            }, this),
                            r.length && U(this, n + (n ? " " : "") + r.join(" "))
                        }
                    }) : this
                },
                removeClass: function(e) {
                    return this.each(function(n) {
                        if ("className"in this) {
                            if (e === t)
                                return U(this, "");
                            r = U(this),
                            W(this, e, n, r).split(/\s+/g).forEach(function(e) {
                                r = r.replace(V(e), " ")
                            }),
                            U(this, r.trim())
                        }
                    })
                },
                toggleClass: function(e, n) {
                    return e ? this.each(function(r) {
                        var o = i(this)
                          , a = W(this, e, r, U(this));
                        a.split(/\s+/g).forEach(function(e) {
                            (n === t ? !o.hasClass(e) : n) ? o.addClass(e) : o.removeClass(e)
                        })
                    }) : this
                },
                scrollTop: function(e) {
                    if (this.length) {
                        var n = "scrollTop"in this[0];
                        return e === t ? n ? this[0].scrollTop : this[0].pageYOffset : this.each(n ? function() {
                            this.scrollTop = e
                        }
                        : function() {
                            this.scrollTo(this.scrollX, e)
                        }
                        )
                    }
                },
                scrollLeft: function(e) {
                    if (this.length) {
                        var n = "scrollLeft"in this[0];
                        return e === t ? n ? this[0].scrollLeft : this[0].pageXOffset : this.each(n ? function() {
                            this.scrollLeft = e
                        }
                        : function() {
                            this.scrollTo(e, this.scrollY)
                        }
                        )
                    }
                },
                position: function() {
                    if (this.length) {
                        var e = this[0]
                          , t = this.offsetParent()
                          , n = this.offset()
                          , r = w.test(t[0].nodeName) ? {
                            top: 0,
                            left: 0
                        } : t.offset();
                        return n.top -= parseFloat(i(e).css("margin-top")) || 0,
                        n.left -= parseFloat(i(e).css("margin-left")) || 0,
                        r.top += parseFloat(i(t[0]).css("border-top-width")) || 0,
                        r.left += parseFloat(i(t[0]).css("border-left-width")) || 0,
                        {
                            top: n.top - r.top,
                            left: n.left - r.left
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var e = this.offsetParent || d.body; e && !w.test(e.nodeName) && "static" == i(e).css("position"); )
                            e = e.offsetParent;
                        return e
                    })
                }
            },
            i.fn.detach = i.fn.remove,
            ["width", "height"].forEach(function(e) {
                var n = e.replace(/./, function(e) {
                    return e[0].toUpperCase()
                });
                i.fn[e] = function(r) {
                    var o, a = this[0];
                    return r === t ? I(a) ? a["inner" + n] : D(a) ? a.documentElement["scroll" + n] : (o = this.offset()) && o[e] : this.each(function(t) {
                        (a = i(this)).css(e, W(this, r, t, a[e]()))
                    })
                }
            }),
            ["after", "prepend", "before", "append"].forEach(function(n, r) {
                var o = r % 2;
                i.fn[n] = function() {
                    var n, a, s = i.map(arguments, function(e) {
                        var r = [];
                        return "array" == (n = O(e)) ? (e.forEach(function(e) {
                            return e.nodeType !== t ? r.push(e) : i.zepto.isZ(e) ? r = r.concat(e.get()) : void (r = r.concat(R.fragment(e)))
                        }),
                        r) : "object" == n || null == e ? e : R.fragment(e)
                    }), c = this.length > 1;
                    return s.length < 1 ? this : this.each(function(t, n) {
                        a = o ? n : n.parentNode,
                        n = 0 == r ? n.nextSibling : 1 == r ? n.firstChild : 2 == r ? n : null;
                        var u = i.contains(d.documentElement, a);
                        s.forEach(function(t) {
                            if (c)
                                t = t.cloneNode(!0);
                            else if (!a)
                                return i(t).remove();
                            a.insertBefore(t, n),
                            u && function r(e, t) {
                                t(e);
                                for (var n = 0, i = e.childNodes.length; n < i; n++)
                                    r(e.childNodes[n], t)
                            }(t, function(t) {
                                if (!(null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src)) {
                                    var n = t.ownerDocument ? t.ownerDocument.defaultView : e;
                                    n.eval.call(n, t.innerHTML)
                                }
                            })
                        })
                    })
                }
                ,
                i.fn[o ? n + "To" : "insert" + (r ? "Before" : "After")] = function(e) {
                    return i(e)[n](this),
                    this
                }
            }),
            R.Z.prototype = q.prototype = i.fn,
            R.uniq = s,
            R.deserializeValue = G,
            i.zepto = R,
            i
        }(),
        e.Zepto = t,
        e.$ === undefined && (e.$ = t),
        function(t) {
            var n, i = 1, r = Array.prototype.slice, o = t.isFunction, a = function(e) {
                return "string" == typeof e
            }, s = {}, c = {}, u = "onfocusin"in e, l = {
                focus: "focusin",
                blur: "focusout"
            }, f = {
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            };
            function d(e) {
                return e._zid || (e._zid = i++)
            }
            function p(e, t, n, i) {
                if ((t = h(t)).ns)
                    var r = (o = t.ns,
                    new RegExp("(?:^| )" + o.replace(" ", " .* ?") + "(?: |$)"));
                var o;
                return (s[d(e)] || []).filter(function(e) {
                    return e && (!t.e || e.e == t.e) && (!t.ns || r.test(e.ns)) && (!n || d(e.fn) === d(n)) && (!i || e.sel == i)
                })
            }
            function h(e) {
                var t = ("" + e).split(".");
                return {
                    e: t[0],
                    ns: t.slice(1).sort().join(" ")
                }
            }
            function m(e, t) {
                return e.del && !u && e.e in l || !!t
            }
            function g(e) {
                return f[e] || u && l[e] || e
            }
            function v(e, i, r, o, a, c, u) {
                var l = d(e)
                  , p = s[l] || (s[l] = []);
                i.split(/\s/).forEach(function(i) {
                    if ("ready" == i)
                        return t(document).ready(r);
                    var s = h(i);
                    s.fn = r,
                    s.sel = a,
                    s.e in f && (r = function(e) {
                        var n = e.relatedTarget;
                        if (!n || n !== this && !t.contains(this, n))
                            return s.fn.apply(this, arguments)
                    }
                    ),
                    s.del = c;
                    var l = c || r;
                    s.proxy = function(t) {
                        if (!(t = x(t)).isImmediatePropagationStopped()) {
                            t.data = o;
                            var i = l.apply(e, t._args == n ? [t] : [t].concat(t._args));
                            return !1 === i && (t.preventDefault(),
                            t.stopPropagation()),
                            i
                        }
                    }
                    ,
                    s.i = p.length,
                    p.push(s),
                    "addEventListener"in e && e.addEventListener(g(s.e), s.proxy, m(s, u))
                })
            }
            function y(e, t, n, i, r) {
                var o = d(e);
                (t || "").split(/\s/).forEach(function(t) {
                    p(e, t, n, i).forEach(function(t) {
                        delete s[o][t.i],
                        "removeEventListener"in e && e.removeEventListener(g(t.e), t.proxy, m(t, r))
                    })
                })
            }
            c.click = c.mousedown = c.mouseup = c.mousemove = "MouseEvents",
            t.event = {
                add: v,
                remove: y
            },
            t.proxy = function(e, n) {
                var i = 2 in arguments && r.call(arguments, 2);
                if (o(e)) {
                    var s = function() {
                        return e.apply(n, i ? i.concat(r.call(arguments)) : arguments)
                    };
                    return s._zid = d(e),
                    s
                }
                if (a(n))
                    return i ? (i.unshift(e[n], e),
                    t.proxy.apply(null, i)) : t.proxy(e[n], e);
                throw new TypeError("expected function")
            }
            ,
            t.fn.bind = function(e, t, n) {
                return this.on(e, t, n)
            }
            ,
            t.fn.unbind = function(e, t) {
                return this.off(e, t)
            }
            ,
            t.fn.one = function(e, t, n, i) {
                return this.on(e, t, n, i, 1)
            }
            ;
            var w = function() {
                return !0
            }
              , b = function() {
                return !1
            }
              , k = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/
              , E = {
                preventDefault: "isDefaultPrevented",
                stopImmediatePropagation: "isImmediatePropagationStopped",
                stopPropagation: "isPropagationStopped"
            };
            function x(e, i) {
                if (i || !e.isDefaultPrevented) {
                    i || (i = e),
                    t.each(E, function(t, n) {
                        var r = i[t];
                        e[t] = function() {
                            return this[n] = w,
                            r && r.apply(i, arguments)
                        }
                        ,
                        e[n] = b
                    });
                    try {
                        e.timeStamp || (e.timeStamp = Date.now())
                    } catch (r) {}
                    (i.defaultPrevented !== n ? i.defaultPrevented : "returnValue"in i ? !1 === i.returnValue : i.getPreventDefault && i.getPreventDefault()) && (e.isDefaultPrevented = w)
                }
                return e
            }
            function T(e) {
                var t, i = {
                    originalEvent: e
                };
                for (t in e)
                    k.test(t) || e[t] === n || (i[t] = e[t]);
                return x(i, e)
            }
            t.fn.delegate = function(e, t, n) {
                return this.on(t, e, n)
            }
            ,
            t.fn.undelegate = function(e, t, n) {
                return this.off(t, e, n)
            }
            ,
            t.fn.live = function(e, n) {
                return t(document.body).delegate(this.selector, e, n),
                this
            }
            ,
            t.fn.die = function(e, n) {
                return t(document.body).undelegate(this.selector, e, n),
                this
            }
            ,
            t.fn.on = function(e, i, s, c, u) {
                var l, f, d = this;
                return e && !a(e) ? (t.each(e, function(e, t) {
                    d.on(e, i, s, t, u)
                }),
                d) : (a(i) || o(c) || !1 === c || (c = s,
                s = i,
                i = n),
                c !== n && !1 !== s || (c = s,
                s = n),
                !1 === c && (c = b),
                d.each(function(n, o) {
                    u && (l = function(e) {
                        return y(o, e.type, c),
                        c.apply(this, arguments)
                    }
                    ),
                    i && (f = function(e) {
                        var n, a = t(e.target).closest(i, o).get(0);
                        if (a && a !== o)
                            return n = t.extend(T(e), {
                                currentTarget: a,
                                liveFired: o
                            }),
                            (l || c).apply(a, [n].concat(r.call(arguments, 1)))
                    }
                    ),
                    v(o, e, c, s, i, f || l)
                }))
            }
            ,
            t.fn.off = function(e, i, r) {
                var s = this;
                return e && !a(e) ? (t.each(e, function(e, t) {
                    s.off(e, i, t)
                }),
                s) : (a(i) || o(r) || !1 === r || (r = i,
                i = n),
                !1 === r && (r = b),
                s.each(function() {
                    y(this, e, r, i)
                }))
            }
            ,
            t.fn.trigger = function(e, n) {
                return (e = a(e) || t.isPlainObject(e) ? t.Event(e) : x(e))._args = n,
                this.each(function() {
                    e.type in l && "function" == typeof this[e.type] ? this[e.type]() : "dispatchEvent"in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, n)
                })
            }
            ,
            t.fn.triggerHandler = function(e, n) {
                var i, r;
                return this.each(function(o, s) {
                    (i = T(a(e) ? t.Event(e) : e))._args = n,
                    i.target = s,
                    t.each(p(s, e.type || e), function(e, t) {
                        if (r = t.proxy(i),
                        i.isImmediatePropagationStopped())
                            return !1
                    })
                }),
                r
            }
            ,
            "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e) {
                t.fn[e] = function(t) {
                    return 0 in arguments ? this.bind(e, t) : this.trigger(e)
                }
            }),
            t.Event = function(e, t) {
                a(e) || (e = (t = e).type);
                var n = document.createEvent(c[e] || "Events")
                  , i = !0;
                if (t)
                    for (var r in t)
                        "bubbles" == r ? i = !!t[r] : n[r] = t[r];
                return n.initEvent(e, i, !0),
                x(n)
            }
        }(t),
        function(t) {
            var n, i, r = +new Date, o = e.document, a = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, s = /^(?:text|application)\/javascript/i, c = /^(?:text|application)\/xml/i, u = "application/json", l = "text/html", f = /^\s*$/, d = o.createElement("a");
            function p(e, n, i, r) {
                if (e.global)
                    return function(e, n, i) {
                        var r = t.Event(n);
                        return t(e).trigger(r, i),
                        !r.isDefaultPrevented()
                    }(n || o, i, r)
            }
            function h(e, t) {
                var n = t.context;
                if (!1 === t.beforeSend.call(n, e, t) || !1 === p(t, n, "ajaxBeforeSend", [e, t]))
                    return !1;
                p(t, n, "ajaxSend", [e, t])
            }
            function m(e, t, n, i) {
                var r = n.context;
                n.success.call(r, e, "success", t),
                i && i.resolveWith(r, [e, "success", t]),
                p(n, r, "ajaxSuccess", [t, n, e]),
                v("success", t, n)
            }
            function g(e, t, n, i, r) {
                var o = i.context;
                i.error.call(o, n, t, e),
                r && r.rejectWith(o, [n, t, e]),
                p(i, o, "ajaxError", [n, i, e || t]),
                v(t, n, i)
            }
            function v(e, n, i) {
                var r = i.context;
                i.complete.call(r, n, e),
                p(i, r, "ajaxComplete", [n, i]),
                function(e) {
                    e.global && !--t.active && p(e, null, "ajaxStop")
                }(i)
            }
            function y() {}
            function w(e, t) {
                return "" == t ? e : (e + "&" + t).replace(/[&?]{1,2}/, "?")
            }
            function b(e, n, i, r) {
                return t.isFunction(n) && (r = i,
                i = n,
                n = undefined),
                t.isFunction(i) || (r = i,
                i = undefined),
                {
                    url: e,
                    data: n,
                    success: i,
                    dataType: r
                }
            }
            d.href = e.location.href,
            t.active = 0,
            t.ajaxJSONP = function(n, i) {
                if (!("type"in n))
                    return t.ajax(n);
                var a, s, c = n.jsonpCallback, u = (t.isFunction(c) ? c() : c) || "Zepto" + r++, l = o.createElement("script"), f = e[u], d = function(e) {
                    t(l).triggerHandler("error", e || "abort")
                }, p = {
                    abort: d
                };
                return i && i.promise(p),
                t(l).on("load error", function(r, o) {
                    clearTimeout(s),
                    t(l).off().remove(),
                    "error" != r.type && a ? m(a[0], p, n, i) : g(null, o || "error", p, n, i),
                    e[u] = f,
                    a && t.isFunction(f) && f(a[0]),
                    f = a = undefined
                }),
                !1 === h(p, n) ? (d("abort"),
                p) : (e[u] = function() {
                    a = arguments
                }
                ,
                l.src = n.url.replace(/\?(.+)=\?/, "?$1=" + u),
                o.head.appendChild(l),
                n.timeout > 0 && (s = setTimeout(function() {
                    d("timeout")
                }, n.timeout)),
                p)
            }
            ,
            t.ajaxSettings = {
                type: "GET",
                beforeSend: y,
                success: y,
                error: y,
                complete: y,
                context: null,
                global: !0,
                xhr: function() {
                    return new e.XMLHttpRequest
                },
                accepts: {
                    script: "text/javascript, application/javascript, application/x-javascript",
                    json: u,
                    xml: "application/xml, text/xml",
                    html: l,
                    text: "text/plain"
                },
                crossDomain: !1,
                timeout: 0,
                processData: !0,
                cache: !0,
                dataFilter: y
            },
            t.ajax = function(r) {
                var a, v, b = t.extend({}, r || {}), k = t.Deferred && t.Deferred();
                for (n in t.ajaxSettings)
                    b[n] === undefined && (b[n] = t.ajaxSettings[n]);
                !function(e) {
                    e.global && 0 == t.active++ && p(e, null, "ajaxStart")
                }(b),
                b.crossDomain || ((a = o.createElement("a")).href = b.url,
                a.href = a.href,
                b.crossDomain = d.protocol + "//" + d.host != a.protocol + "//" + a.host),
                b.url || (b.url = e.location.toString()),
                (v = b.url.indexOf("#")) > -1 && (b.url = b.url.slice(0, v)),
                function(e) {
                    e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)),
                    !e.data || e.type && "GET" != e.type.toUpperCase() && "jsonp" != e.dataType || (e.url = w(e.url, e.data),
                    e.data = undefined)
                }(b);
                var E = b.dataType
                  , x = /\?.+=\?/.test(b.url);
                if (x && (E = "jsonp"),
                !1 !== b.cache && (r && !0 === r.cache || "script" != E && "jsonp" != E) || (b.url = w(b.url, "_=" + Date.now())),
                "jsonp" == E)
                    return x || (b.url = w(b.url, b.jsonp ? b.jsonp + "=?" : !1 === b.jsonp ? "" : "callback=?")),
                    t.ajaxJSONP(b, k);
                var T, S = b.accepts[E], C = {}, z = function(e, t) {
                    C[e.toLowerCase()] = [e, t]
                }, R = /^([\w-]+:)\/\//.test(b.url) ? RegExp.$1 : e.location.protocol, _ = b.xhr(), P = _.setRequestHeader;
                if (k && k.promise(_),
                b.crossDomain || z("X-Requested-With", "XMLHttpRequest"),
                z("Accept", S || "*/*"),
                (S = b.mimeType || S) && (S.indexOf(",") > -1 && (S = S.split(",", 2)[0]),
                _.overrideMimeType && _.overrideMimeType(S)),
                (b.contentType || !1 !== b.contentType && b.data && "GET" != b.type.toUpperCase()) && z("Content-Type", b.contentType || "application/x-www-form-urlencoded"),
                b.headers)
                    for (i in b.headers)
                        z(i, b.headers[i]);
                if (_.setRequestHeader = z,
                _.onreadystatechange = function() {
                    if (4 == _.readyState) {
                        _.onreadystatechange = y,
                        clearTimeout(T);
                        var e, n = !1;
                        if (_.status >= 200 && _.status < 300 || 304 == _.status || 0 == _.status && "file:" == R) {
                            if (E = E || ((i = b.mimeType || _.getResponseHeader("content-type")) && (i = i.split(";", 2)[0]),
                            i && (i == l ? "html" : i == u ? "json" : s.test(i) ? "script" : c.test(i) && "xml") || "text"),
                            "arraybuffer" == _.responseType || "blob" == _.responseType)
                                e = _.response;
                            else {
                                e = _.responseText;
                                try {
                                    e = function(e, t, n) {
                                        if (n.dataFilter == y)
                                            return e;
                                        var i = n.context;
                                        return n.dataFilter.call(i, e, t)
                                    }(e, E, b),
                                    "script" == E ? (0,
                                    eval)(e) : "xml" == E ? e = _.responseXML : "json" == E && (e = f.test(e) ? null : t.parseJSON(e))
                                } catch (r) {
                                    n = r
                                }
                                if (n)
                                    return g(n, "parsererror", _, b, k)
                            }
                            m(e, _, b, k)
                        } else
                            g(_.statusText || null, _.status ? "error" : "abort", _, b, k)
                    }
                    var i
                }
                ,
                !1 === h(_, b))
                    return _.abort(),
                    g(null, "abort", _, b, k),
                    _;
                var j = !("async"in b) || b.async;
                if (_.open(b.type, b.url, j, b.username, b.password),
                b.xhrFields)
                    for (i in b.xhrFields)
                        _[i] = b.xhrFields[i];
                for (i in C)
                    P.apply(_, C[i]);
                return b.timeout > 0 && (T = setTimeout(function() {
                    _.onreadystatechange = y,
                    _.abort(),
                    g(null, "timeout", _, b, k)
                }, b.timeout)),
                _.send(b.data ? b.data : null),
                _
            }
            ,
            t.get = function() {
                return t.ajax(b.apply(null, arguments))
            }
            ,
            t.post = function() {
                var e = b.apply(null, arguments);
                return e.type = "POST",
                t.ajax(e)
            }
            ,
            t.getJSON = function() {
                var e = b.apply(null, arguments);
                return e.dataType = "json",
                t.ajax(e)
            }
            ,
            t.fn.load = function(e, n, i) {
                if (!this.length)
                    return this;
                var r, o = this, s = e.split(/\s/), c = b(e, n, i), u = c.success;
                return s.length > 1 && (c.url = s[0],
                r = s[1]),
                c.success = function(e) {
                    o.html(r ? t("<div>").html(e.replace(a, "")).find(r) : e),
                    u && u.apply(o, arguments)
                }
                ,
                t.ajax(c),
                this
            }
            ;
            var k = encodeURIComponent;
            t.param = function(e, n) {
                var i = [];
                return i.add = function(e, n) {
                    t.isFunction(n) && (n = n()),
                    null == n && (n = ""),
                    this.push(k(e) + "=" + k(n))
                }
                ,
                function r(e, n, i, o) {
                    var a, s = t.isArray(n), c = t.isPlainObject(n);
                    t.each(n, function(n, u) {
                        a = t.type(u),
                        o && (n = i ? o : o + "[" + (c || "object" == a || "array" == a ? n : "") + "]"),
                        !o && s ? e.add(u.name, u.value) : "array" == a || !i && "object" == a ? r(e, u, i, n) : e.add(n, u)
                    })
                }(i, e, n),
                i.join("&").replace(/%20/g, "+")
            }
        }(t),
        function(e, t) {
            var n, i, r, a, s, c, u, l, f, d, p = "", h = document.createElement("div"), m = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i, g = {};
            function v(e) {
                return n ? n + e : e.toLowerCase()
            }
            void 0 === h.style.transform && e.each({
                Webkit: "webkit",
                Moz: "",
                O: "o"
            }, function(e, t) {
                if (void 0 !== h.style[e + "TransitionProperty"])
                    return p = "-" + e.toLowerCase() + "-",
                    n = t,
                    !1
            }),
            i = p + "transform",
            g[r = p + "transition-property"] = g[a = p + "transition-duration"] = g[c = p + "transition-delay"] = g[s = p + "transition-timing-function"] = g[u = p + "animation-name"] = g[l = p + "animation-duration"] = g[d = p + "animation-delay"] = g[f = p + "animation-timing-function"] = "",
            e.fx = {
                off: void 0 === n && void 0 === h.style.transitionProperty,
                speeds: {
                    _default: 400,
                    fast: 200,
                    slow: 600
                },
                cssPrefix: p,
                transitionEnd: v("TransitionEnd"),
                animationEnd: v("AnimationEnd")
            },
            e.fn.animate = function(t, n, i, r, o) {
                return e.isFunction(n) && (r = n,
                i = void 0,
                n = void 0),
                e.isFunction(i) && (r = i,
                i = void 0),
                e.isPlainObject(n) && (i = n.easing,
                r = n.complete,
                o = n.delay,
                n = n.duration),
                n && (n = ("number" == typeof n ? n : e.fx.speeds[n] || e.fx.speeds._default) / 1e3),
                o && (o = parseFloat(o) / 1e3),
                this.anim(t, n, i, r, o)
            }
            ,
            e.fn.anim = function(t, n, p, h, v) {
                var y, w, b, k = {}, E = "", x = this, T = e.fx.transitionEnd, S = !1;
                if (void 0 === n && (n = e.fx.speeds._default / 1e3),
                void 0 === v && (v = 0),
                e.fx.off && (n = 0),
                "string" == typeof t)
                    k[u] = t,
                    k[l] = n + "s",
                    k[d] = v + "s",
                    k[f] = p || "linear",
                    T = e.fx.animationEnd;
                else {
                    for (y in w = [],
                    t)
                        m.test(y) ? E += y + "(" + t[y] + ") " : (k[y] = t[y],
                        w.push(y.replace(/([A-Z])/g, "-$1").toLowerCase()));
                    E && (k[i] = E,
                    w.push(i)),
                    n > 0 && "object" === (void 0 === t ? "undefined" : o(t)) && (k[r] = w.join(", "),
                    k[a] = n + "s",
                    k[c] = v + "s",
                    k[s] = p || "linear")
                }
                return b = function(t) {
                    if (void 0 !== t) {
                        if (t.target !== t.currentTarget)
                            return;
                        e(t.target).unbind(T, b)
                    } else
                        e(this).unbind(T, b);
                    S = !0,
                    e(this).css(g),
                    h && h.call(this)
                }
                ,
                n > 0 && (this.bind(T, b),
                setTimeout(function() {
                    S || b.call(x)
                }, 1e3 * (n + v) + 25)),
                this.size() && this.get(0).clientLeft,
                this.css(k),
                n <= 0 && setTimeout(function() {
                    x.each(function() {
                        b.call(this)
                    })
                }, 0),
                this
            }
            ,
            h = null
        }(t),
        t;
        var e, t
    }
    .call(t, n, t, e)) === undefined || (e.exports = i)
}
, function(e, t, n) {
    "use strict";
    var i = n(29)
      , r = 300
      , o = /^touch/
      , a = /^(relative|absolute)$/
      , s = !1
      , c = {
        x: "left",
        y: "top",
        "-x": "right",
        "-y": "bottom"
    }
      , u = {
        x: "width",
        y: "height"
    }
      , l = navigator.userAgent
      , f = /TCSDK\//.test(l) && /iphone|ipad|ipod/i.test(l)
      , d = /(iPhone|iPad|iPod|Android|ios|SymbianOS|Mobile)/i.test(navigator.userAgent)
      , p = document.body
      , h = {
        width: Math.max(p.clientWidth, p.offsetWidth),
        height: Math.max(p.clientHeight, p.offsetHeight, p.scrollHeight) - 10
    };
    e.exports = function(e, t, n, l) {
        var p = void 0
          , m = void 0
          , g = void 0
          , v = void 0
          , y = !1
          , w = -1
          , b = {}
          , k = -1
          , E = 1 << 30
          , x = []
          , T = []
          , S = "x"
          , C = c[S];
        function z() {
            x = [],
            k = -1,
            E = 1 << 30;
            for (var e = function(e) {
                var t = T[e]
                  , n = t.offset();
                n.width || (n.width = t.width());
                var i = u[S];
                t.parents().each(function(r, o) {
                    var s = $(o);
                    if (a.test(s.css("position"))) {
                        var c = s.offset();
                        return c.width || (c.width = s.width()),
                        0 === e ? (x[e] = b.left,
                        b.middle = b.left + n.width / 2,
                        b.min = c[C],
                        b.max = c[i] + c[C] - n[i],
                        t.css(C, b.left + "px")) : (x[e] = b.middle - n[i] / 2,
                        t.css(C, b.middle - n[i] / 2 + "px")),
                        !1
                    }
                })
            }, t = 0; t < T.length; t++)
                e(t)
        }
        function R(e) {
            if (o.test(e.type)) {
                var t = e;
                e.originalEvent && o.test(e.originalEvent.type) && (t = e.originalEvent);
                var n = t.touches[0];
                return n ? {
                    x: n.clientX,
                    y: n.clientY,
                    t: +new Date - g
                } : null
            }
            return {
                x: e.pageX,
                y: e.pageY,
                t: +new Date - g
            }
        }
        function _() {
            for (var e = 0; e < T.length; e++) {
                var t = T[e]
                  , n = x[e] + m[S] - p[S];
                t.css(C, n + "px")
            }
        }
        function P(e) {
            if (d || e && e.preventDefault && e.preventDefault(),
            y) {
                g = !1,
                w = -1;
                for (var t = 0; t < T.length; t++) {
                    var i = T[t];
                    if (i[0] === e.target || $(e.target).parents().index(i) >= 0) {
                        v = [],
                        g = +new Date,
                        w = t,
                        m = p = R(e);
                        var r = p[S] - i.offset()[c[S]]
                          , o = x[t] - x[0];
                        k = b.min + r + o,
                        E = b.max + r + o
                    }
                }
                g && s && s(D),
                setTimeout(function() {
                    n && n()
                }, 0)
            }
        }
        var j, O = void 0;
        function A(e) {
            var t, n;
            d || e && e.preventDefault && e.preventDefault(),
            g && (clearTimeout(O),
            f && (t = e.pageX,
            n = e.pageY,
            t < 0 || n < 0 || t > h.width || n > h.height) && (O = setTimeout(function() {
                I()
            }, 350)),
            m = R(e) || p,
            v.length < r && v.push(m),
            k > m[S] ? m[S] = k : E < m[S] && (m[S] = E),
            s || _())
        }
        function I() {
            if (g) {
                0 === v.length && v.push(p),
                M.dragDuration = +new Date - g,
                g = !1;
                for (var e = [], t = v.length - 1; t >= 0; t--)
                    t > 0 ? (v[t].x = Math.ceil(v[t].x - v[t - 1].x),
                    v[t].y = Math.ceil(v[t].y - v[t - 1].y),
                    v[t].t = v[t].t - v[t - 1].t) : (v[t].x = Math.ceil(v[t].x),
                    v[t].y = Math.ceil(v[t].y)),
                    0 == v[t].x && 0 == v[t].y || e.push([v[t].x, v[t].y, v[t].t]);
                setTimeout(function() {
                    "function" == typeof l && l(m, w, e.reverse())
                }, 0)
            }
        }
        function D() {
            g && (_(),
            s(D))
        }
        (j = $(e)).on("mousedown touchstart", P),
        j.on("mousemove touchmove", A),
        j.on("mouseup touchend touchcancel", I),
        $(document).on("mousemove", A),
        $(document).on("mouseup mouseleave", I),
        j.on("touchstart", function(e) {
            if ($(e.target).parents().index(j) >= 0 && "coverReload" != e.target.id)
                return !1
        }),
        i.listen(1, z),
        function() {
            var e = $(t[0]);
            b.left = parseInt(e.css("left")),
            T = [];
            for (var n = 0; n < t.length; n++)
                T.push($(t[n]))
        }();
        var M = {
            moveBack: function(e) {
                for (var t = 0; t < T.length; t++)
                    T[t].animate({
                        left: x[t] + "px"
                    }, 300, "linear", function() {});
                e !== undefined && (y = !!e)
            },
            boundaryCalc: z,
            movable: function(e) {
                y = e
            }
        };
        return M
    }
}
, function(e, t, n) {
    "use strict";
    var i = n(30)
      , r = n(29)
      , o = n(0)
      , a = n(36)
      , s = n(10)
      , c = n(49)
      , u = n(37)
      , l = n(12)
      , f = n(50)
      , d = n(27)
      , p = n(28)
      , h = window.captchaConfig
      , m = window.timing
      , g = 0
      , v = []
      , y = {
        1: i.imgBg,
        2: i.imgSlide
    }
      , w = {
        cgi: {
            img: [],
            onErrorCode: 12,
            timing: [null, 25, 28]
        },
        cdn: {
            retry: 2,
            img: [],
            timeout: l.loadImgTimeout,
            timing: [null, 35, 36],
            onErrorCode: 11,
            fallback: "cgi-retry"
        },
        "cgi-retry": {
            img: [],
            extParams: "&retry=1",
            onErrorCode: 13,
            timing: [null, 25, 28]
        }
    }
      , b = !0;
    function k(e, t, n) {
        var r = (e.img[t] || l.cgiImg) + e.params + "&img_index=" + t + (e.extParams || "")
          , o = {
            success: function(n, r) {
                a.push(e.timing[t], m.logEnd("imgLoad-" + e.loadIndex + "-" + t)),
                v[t] = n,
                function(e) {
                    if (v[1] && v[2] && g === e.loadIndex) {
                        h.rate = i.operation.width() / 680;
                        var t = parseInt(v[2].height * h.rate) + "px"
                          , n = parseInt(e.posY * h.rate) + "px";
                        i.imgSlide.css({
                            height: t,
                            width: t,
                            top: n
                        }),
                        b && (b = !1,
                        f.send(i.body, i.captcha),
                        setTimeout(function() {
                            $("#bodyWrap").addClass("body-wrap-show")
                        }, 16)),
                        e.callback && e.callback(),
                        u.hideLoading(),
                        m.log("verifyDuration")
                    }
                }(e)
            },
            error: function() {
                s.send(e.onErrorCode, t, null, m.logEnd("imgLoad-" + e.loadIndex + "-" + t)),
                n = n || 1,
                !e.retry || n >= e.retry ? function(e, t) {
                    e.fallback ? k(e = $.extend({
                        posY: e.posY,
                        params: e.params,
                        callback: e.callback,
                        loadIndex: e.loadIndex
                    }, w[e.fallback]), t) : (u.loadImgFailed(),
                    d.loadFailure(p.c14))
                }(e, t) : k(e, t, n + 1)
            }
        };
        m.log("imgLoad-" + e.loadIndex + "-" + t),
        c(y[t], r, o)
    }
    r.listen(0, function() {
        h.rate = i.operation.width() / 680;
        var e = r.px2remU(v[2].height * h.rate)
          , t = r.px2remU(h.spt * h.rate);
        i.imgSlide.css({
            height: e,
            width: e,
            top: t
        })
    }),
    e.exports = function(e) {
        g++,
        v[1] = v[2] = null;
        var t = $.extend({
            posY: parseInt(h.spt, 10)
        }, w[h.iscdn ? "cdn" : "cgi"]);
        t.img[1] = h.cdnPic1,
        t.img[2] = h.cdnPic2,
        t.callback = e,
        t.params = o.getQuery() + "&websig=" + h.websig + "&vsig=" + h.vsig,
        t.loadIndex = g,
        m.logEnd("jsInit"),
        k(t, 1),
        k(t, 2)
    }
}
, function(e, t, n) {
    "use strict";
    var i = n(1)
      , r = 0
      , o = function(e, t, n) {
        r++,
        t = i(t);
        var o = !1
          , a = void 0
          , s = function(e) {
            return function() {
                o || (clearTimeout(a),
                e())
            }
        }
          , c = new Image;
        c.onload = s(function() {
            e.attr("src", t),
            n.success && n.success(c, t)
        }),
        c.onerror = s(function() {
            n.error && n.error(null, t)
        }),
        n.timeout && (a = setTimeout(function() {
            o = !0,
            n.error && n.error(null, t)
        }, n.timeout)),
        c.src = t
    };
    o.loading = function() {
        return r
    }
    ,
    e.exports = o
}
, function(e, t, n) {
    "use strict";
    var i, r, o = n(10), a = window.document.documentElement, s = window.document.documentElement.style.fontSize, c = (r = "fontSize",
    (i = a).currentStyle ? i.currentStyle[r] : document.defaultView.getComputedStyle(i, !1)[r]), u = parseFloat(s), l = parseFloat(c), f = !0;
    var d = function(e, t) {
        o.send(capMonitor.type.ERROR_TYPE_IMAGE_BEYONDSIZE, beyondSizeReason),
        f && (f = !1,
        a.style.fontSize = u * u / l + "px",
        h(e, t))
    }
      , p = function(e) {
        return parseFloat(e.replace(/px/, ""))
    }
      , h = function(e, t) {
        try {
            var n = s + "," + c + ";" + t + "," + e + ";" + (screen && screen.availWidth || window.innerWidth) + ";" + (window.devicePixelRatio || "0");
            n = f ? "before;" + n : "after;" + n,
            e - t > 10 ? d(e, t) : s && c && p(c) - p(s) > 1 && d(e, t)
        } catch (i) {}
    };
    e.exports = {
        send: h
    }
}
, function(e, t, n) {
    "use strict";
    n(34);
    var i = n(11)
      , r = n(52)
      , o = n(53);
    e.exports = {
        vm: r,
        tdc: i,
        challenge: o
    }
}
, function(e, t, n) {
    "use strict";
    var i = window.timing
      , r = window.captchaConfig
      , o = void 0;
    e.exports = {
        init: function() {
            return o = null,
            "undefined" != typeof window.vm && window.vm.entry && (i.log("vmInit"),
            o = new window.vm.entry(r.vmByteCode),
            i.logEnd("vmInit")),
            o
        },
        run: function(e) {
            var t = {}
              , n = r.vmAvailable
              , a = r.vmByteCode;
            t.vlg = [n ? 1 : 0, a ? 1 : 0, 1].join("_"),
            n && a ? (i.log("vmRun"),
            o && o.run ? o.run(function(n) {
                t.vmData = n,
                t.vmtime = [i.logEnd("vmInit"), i.logEnd("vmRun")].join("_"),
                e(t)
            }) : e(t)) : e(t)
        }
    }
}
, function(e, t, n) {
    "use strict";
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
      , r = n(54)
      , o = window.captchaConfig;
    e.exports = function() {
        var e = 0
          , t = o.capChallenge;
        if ("object" === (void 0 === t ? "undefined" : i(t)) && "string" == typeof t.randstr && ("string" == typeof t.M || "number" == typeof t.M) && "string" == typeof t.ans) {
            t.ans = t.ans.toLowerCase(),
            t.M = parseInt(t.M);
            for (var n = 0; n < t.M && n < 1e3; n++) {
                var a = t.randstr + n
                  , s = r(a);
                if (t.ans === s.toLowerCase()) {
                    e = n;
                    break
                }
            }
        }
        return e
    }
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        var n = (65535 & e) + (65535 & t);
        return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
    }
    function r(e, t, n, r, o, a) {
        return i(function(e, t) {
            return e << t | e >>> 32 - t
        }(i(i(t, e), i(r, a)), o), n)
    }
    function o(e, t, n, i, o, a, s) {
        return r(t & n | ~t & i, e, t, o, a, s)
    }
    function a(e, t, n, i, o, a, s) {
        return r(t & i | n & ~i, e, t, o, a, s)
    }
    function s(e, t, n, i, o, a, s) {
        return r(t ^ n ^ i, e, t, o, a, s)
    }
    function c(e, t, n, i, o, a, s) {
        return r(n ^ (t | ~i), e, t, o, a, s)
    }
    function u(e, t) {
        e[t >> 5] |= 128 << t % 32,
        e[14 + (t + 64 >>> 9 << 4)] = t;
        var n, r, u, l, f, d = 1732584193, p = -271733879, h = -1732584194, m = 271733878;
        for (n = 0; n < e.length; n += 16)
            r = d,
            u = p,
            l = h,
            f = m,
            p = c(p = c(p = c(p = c(p = s(p = s(p = s(p = s(p = a(p = a(p = a(p = a(p = o(p = o(p = o(p = o(p, h = o(h, m = o(m, d = o(d, p, h, m, e[n], 7, -680876936), p, h, e[n + 1], 12, -389564586), d, p, e[n + 2], 17, 606105819), m, d, e[n + 3], 22, -1044525330), h = o(h, m = o(m, d = o(d, p, h, m, e[n + 4], 7, -176418897), p, h, e[n + 5], 12, 1200080426), d, p, e[n + 6], 17, -1473231341), m, d, e[n + 7], 22, -45705983), h = o(h, m = o(m, d = o(d, p, h, m, e[n + 8], 7, 1770035416), p, h, e[n + 9], 12, -1958414417), d, p, e[n + 10], 17, -42063), m, d, e[n + 11], 22, -1990404162), h = o(h, m = o(m, d = o(d, p, h, m, e[n + 12], 7, 1804603682), p, h, e[n + 13], 12, -40341101), d, p, e[n + 14], 17, -1502002290), m, d, e[n + 15], 22, 1236535329), h = a(h, m = a(m, d = a(d, p, h, m, e[n + 1], 5, -165796510), p, h, e[n + 6], 9, -1069501632), d, p, e[n + 11], 14, 643717713), m, d, e[n], 20, -373897302), h = a(h, m = a(m, d = a(d, p, h, m, e[n + 5], 5, -701558691), p, h, e[n + 10], 9, 38016083), d, p, e[n + 15], 14, -660478335), m, d, e[n + 4], 20, -405537848), h = a(h, m = a(m, d = a(d, p, h, m, e[n + 9], 5, 568446438), p, h, e[n + 14], 9, -1019803690), d, p, e[n + 3], 14, -187363961), m, d, e[n + 8], 20, 1163531501), h = a(h, m = a(m, d = a(d, p, h, m, e[n + 13], 5, -1444681467), p, h, e[n + 2], 9, -51403784), d, p, e[n + 7], 14, 1735328473), m, d, e[n + 12], 20, -1926607734), h = s(h, m = s(m, d = s(d, p, h, m, e[n + 5], 4, -378558), p, h, e[n + 8], 11, -2022574463), d, p, e[n + 11], 16, 1839030562), m, d, e[n + 14], 23, -35309556), h = s(h, m = s(m, d = s(d, p, h, m, e[n + 1], 4, -1530992060), p, h, e[n + 4], 11, 1272893353), d, p, e[n + 7], 16, -155497632), m, d, e[n + 10], 23, -1094730640), h = s(h, m = s(m, d = s(d, p, h, m, e[n + 13], 4, 681279174), p, h, e[n], 11, -358537222), d, p, e[n + 3], 16, -722521979), m, d, e[n + 6], 23, 76029189), h = s(h, m = s(m, d = s(d, p, h, m, e[n + 9], 4, -640364487), p, h, e[n + 12], 11, -421815835), d, p, e[n + 15], 16, 530742520), m, d, e[n + 2], 23, -995338651), h = c(h, m = c(m, d = c(d, p, h, m, e[n], 6, -198630844), p, h, e[n + 7], 10, 1126891415), d, p, e[n + 14], 15, -1416354905), m, d, e[n + 5], 21, -57434055), h = c(h, m = c(m, d = c(d, p, h, m, e[n + 12], 6, 1700485571), p, h, e[n + 3], 10, -1894986606), d, p, e[n + 10], 15, -1051523), m, d, e[n + 1], 21, -2054922799), h = c(h, m = c(m, d = c(d, p, h, m, e[n + 8], 6, 1873313359), p, h, e[n + 15], 10, -30611744), d, p, e[n + 6], 15, -1560198380), m, d, e[n + 13], 21, 1309151649), h = c(h, m = c(m, d = c(d, p, h, m, e[n + 4], 6, -145523070), p, h, e[n + 11], 10, -1120210379), d, p, e[n + 2], 15, 718787259), m, d, e[n + 9], 21, -343485551),
            d = i(d, r),
            p = i(p, u),
            h = i(h, l),
            m = i(m, f);
        return [d, p, h, m]
    }
    function l(e) {
        var t, n = "";
        for (t = 0; t < 32 * e.length; t += 8)
            n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
        return n
    }
    function f(e) {
        var t, n = [];
        for (n[(e.length >> 2) - 1] = void 0,
        t = 0; t < n.length; t += 1)
            n[t] = 0;
        for (t = 0; t < 8 * e.length; t += 8)
            n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
        return n
    }
    function d(e) {
        var t, n, i = "0123456789abcdef", r = "";
        for (n = 0; n < e.length; n += 1)
            t = e.charCodeAt(n),
            r += i.charAt(t >>> 4 & 15) + i.charAt(15 & t);
        return r
    }
    function p(e) {
        return unescape(encodeURIComponent(e))
    }
    function h(e) {
        return function(e) {
            return l(u(f(e), 8 * e.length))
        }(p(e))
    }
    function m(e, t) {
        return function(e, t) {
            var n, i, r = f(e), o = [], a = [];
            for (o[15] = a[15] = void 0,
            r.length > 16 && (r = u(r, 8 * e.length)),
            n = 0; n < 16; n += 1)
                o[n] = 909522486 ^ r[n],
                a[n] = 1549556828 ^ r[n];
            return i = u(o.concat(f(t)), 512 + 8 * t.length),
            l(u(a.concat(i), 640))
        }(p(e), p(t))
    }
    e.exports = function(e, t, n) {
        return t ? n ? m(t, e) : function(e, t) {
            return d(m(e, t))
        }(t, e) : n ? h(e) : function(e) {
            return d(h(e))
        }(e)
    }
}
, function(e, t, n) {
    "use strict";
    var i = n(11)
      , r = window.navigator.userAgent
      , o = window.captchaConfig
      , a = function() {
        var e = {
            info: "unknown",
            version: 0
        };
        try {
            /micromessenger/i.test(r) ? (e.info = "micromessenger",
            e.version = r.match(/micromessenger\/([\d.]+)/i)[1]) : /mqqbrowser/i.test(r) ? (e.info = "qqbroswer",
            e.version = r.match(/mqqbrowser\/([\d.]+)/i)[1]) : /ucbrowser/i.test(r) ? (e.info = "UCbrowser",
            e.version = r.match(/ucbrowser\/([\d.]+)/i)[1]) : /ucweb/i.test(r) ? (e.info = "UCWeb",
            e.version = r.match(/ucweb\/([\d.]+)/i)[1]) : /MiuiBrowser/i.test(r) ? (e.info = "MiuiBrowser",
            e.version = r.match(/miuibrowser\/([\d.]+)/i)[1]) : /hs-t929_td/i.test(r) ? (e.info = "HS-T929_TD",
            e.version = r.match(/hs-t929_td\/([\d.]+)/i)[1]) : /k-touch_tou_ch_2/i.test(r) ? (e.info = "k-touch_tou_ch_2",
            e.version = r.match(/k-touch_tou_ch_2\/([\s]+)/i)[1]) : /chrome/i.test(r) ? (e.info = "chrome",
            e.version = r.match(/chrome\/([\d.]+)/i)[1]) : /safari/i.test(r) && /iphone/i.test(r) ? (e.info = "safari",
            e.version = r.match(/safari\/([\d.]+)/i)[1]) : (e.info = "unknown",
            e.version = 0)
        } catch (t) {}
        return e
    }
      , s = {
        clientInfo: a().info,
        clientVersion: a().version,
        os: function() {
            var e = "";
            try {
                /android/i.test(r) ? e = "Android " + r.match(/android\s+([^\s]*)/i)[1] : /iphone/i.test(r) && (e = "IOS " + r.match(/iphone\s+os\s+([^\s]*)/i)[1].replace("_", "."))
            } catch (t) {}
            return e
        }(),
        osVersion: function() {
            try {
                if (/android/i.test(r))
                    return r.match(/([^;]+)\s+Build/i)[1];
                if (/iphone/i.test(r))
                    return r.match(/([^\(]*);/)[1]
            } catch (e) {}
            return ""
        }(),
        netType: o.aid,
        customInfo: "custominfo:clientIP:" + o.uip,
        "d-wx-push": 1
    };
    e.exports = function() {
        s.imei = i.getToken();
        var e = [];
        for (var t in s)
            e.push(t + "=" + s[t]);
        return e.join("&")
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = {
        sdk: function() {
            window.open = function(e) {
                var t = $('<a target="_blank">');
                t.attr("href", e),
                t.click()
            }
        }
    }
}
, , , , , , , , , function(e, t) {}
]);
