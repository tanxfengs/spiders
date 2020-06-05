let time = new Date() - 1354 - 1515125653845;

let k = "00000008d78d46a";

let u =  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/"];

function aaa(t) {
    return u[t >> 18 & 63] + u[t >> 12 & 63] + u[t >> 6 & 63] + u[63 & t]
}
function sss(t, e, n) {
    for (var i, r = [], o = e; o < n; o += 3)
        i = (t[o] << 16 & 16711680) + (t[o + 1] << 8 & 65280) + (255 & t[o + 2]),
        r.push(aaa(i));
    return r.join("")
}


function  fromByteArray(t) {
    for (var e, n = t.length, i = n % 3, r = "", o = [], a = 16383, l = 0, c = n - i; l < c; l += a)
        o.push(sss(t, l, l + a > c ? c : l + a));
    return 1 === i ? (e = t[n - 1],
        r += u[e >> 2],
        r += u[e << 4 & 63],
        r += "==") : 2 === i && (e = (t[n - 2] << 8) + t[n - 1],
        r += u[e >> 10],
        r += u[e >> 4 & 63],
        r += u[e << 2 & 63],
        r += "="),
        o.push(r),
        o.join("")

}


function y(t, e, n) {
    var i = !1;
    if ((void 0 === e || e < 0) && (e = 0),
    e > this.length)
        return "";
    if ((void 0 === n || n > this.length) && (n = this.length),
    n <= 0)
        return "";
    if (n >>>= 0,
        e >>>= 0,
    n <= e)
        return "";
    for (t || (t = "utf8"); ;)
        switch (t) {
            case "hex":
                return L(this, e, n);
            case "utf8":
            case "utf-8":
                return D(this, e, n);
            case "ascii":
                return A(this, e, n);
            case "latin1":
            case "binary":
                return I(this, e, n);
            case "base64":
                return P(this, e, n);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return E(this, e, n);
            default:
                if (i)
                    throw new TypeError("Unknown encoding: " + t);
                t = (t + "").toLowerCase(),
                    i = !0
        }
}


Uint8Array.prototype.write = function (t, e, n, i) {
    if (void 0 === e)
        i = "utf8",
            n = this.length,
            e = 0;
    else if (void 0 === n && "string" == typeof e)
        i = e,
            n = this.length,
            e = 0;
    else {
        if (!isFinite(e))
            throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        e |= 0,
            isFinite(n) ? (n |= 0,
            void 0 === i && (i = "utf8")) : (i = n,
                n = void 0)
    }
    var r = this.length - e;
    if ((void 0 === n || n > r) && (n = r),
    t.length > 0 && (n < 0 || e < 0) || e > this.length)
        throw new RangeError("Attempt to write outside buffer bounds");
    i || (i = "utf8");
    for (var o = !1; ;)
        switch (i) {
            case "hex":
                return w(this, t, e, n);
            case "utf8":
            case "utf-8":
                return S(this, t, e, n);
            case "ascii":
                return M(this, t, e, n);
            case "latin1":
            case "binary":
                return C(this, t, e, n);
            case "base64":
                return T(this, t, e, n);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return k(this, t, e, n);
            default:
                if (o)
                    throw new TypeError("Unknown encoding: " + i);
                i = ("" + i).toLowerCase(),
                    o = !0
        }
}

Uint8Array.prototype.toString = function () {
    var t = 0 | this.length;
    return 0 === t ? "" : 0 === arguments.length ? D(this, 0, t) : y.apply(this, arguments)
}

function D(t, e, n) {
    n = Math.min(t.length, n);
    for (var i = [], r = e; r < n;) {
        var o = t[r]
            , a = null
            , s = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
        if (r + s <= n) {
            var l, u, c, d;
            switch (s) {
                case 1:
                    o < 128 && (a = o);
                    break;
                case 2:
                    l = t[r + 1],
                    128 == (192 & l) && (d = (31 & o) << 6 | 63 & l) > 127 && (a = d);
                    break;
                case 3:
                    l = t[r + 1],
                        u = t[r + 2],
                    128 == (192 & l) && 128 == (192 & u) && (d = (15 & o) << 12 | (63 & l) << 6 | 63 & u) > 2047 && (d < 55296 || d > 57343) && (a = d);
                    break;
                case 4:
                    l = t[r + 1],
                        u = t[r + 2],
                        c = t[r + 3],
                    128 == (192 & l) && 128 == (192 & u) && 128 == (192 & c) && (d = (15 & o) << 18 | (63 & l) << 12 | (63 & u) << 6 | 63 & c) > 65535 && d < 1114112 && (a = d)
            }
        }
        null === a ? (a = 65533,
            s = 1) : a > 65535 && (a -= 65536,
            i.push(a >>> 10 & 1023 | 55296),
            a = 56320 | 1023 & a),
            i.push(a),
            r += s
    }
    return O(i)
}

function O(t) {
    var e = t.length;
    if (e <= tt)
        return String.fromCharCode.apply(String, t);
    for (var n = "", i = 0; i < e;)
        n += String.fromCharCode.apply(String, t.slice(i, i += tt));
    return n
}

function P(t, e, n) {
    return 0 === e && n === t.length ? fromByteArray(t) : fromByteArray(t.slice(e, n))
}

function X(t, e, n, i) {
    for (var r = 0; r < i && !(r + n >= e.length || r >= t.length); ++r)
        e[r + n] = t[r];
    return r
}

function G(t) {
    for (var e = [], n = 0; n < t.length; ++n)
        e.push(255 & t.charCodeAt(n));
    return e
}

function MM(t, e, n, i) {
    return X(G(e), t, n, i)
}

function C(t, e, n, i) {
    return MM(t, e, n, i)
}


function m(t, e) {
    if (false)
        return t.length;
    if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer))
        return t.byteLength;
    "string" != typeof t && (t = "" + t);
    var n = t.length;
    if (0 === n)
        return 0;
    for (var i = !1; ;)
        switch (e) {
            case "ascii":
            case "latin1":
            case "binary":
                return n;
            case "utf8":
            case "utf-8":
            case void 0:
                return q(t).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return 2 * n;
            case "hex":
                return n >>> 1;
            case "base64":
                return Y(t).length;
            default:
                if (i)
                    return q(t).length;
                e = ("" + e).toLowerCase(),
                    i = !0
        }
}

function o(t, e) {
    var t = new Uint8Array(e);
    return t

}

function d(t, e, n) {


    var i = 0 | m(e, n);
    t = o(t, i);
    var r = t.write(e, n);
    return r !== i && (t = t.slice(0, r)),
        t
}

function ss(t, e, n, i) {
    if ("number" == typeof e)
        throw new TypeError('"value" argument must not be a number');
    return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? f(t, e, n, i) : "string" == typeof e ? d(t, e, n) : p(t, e)
}


function from(t, e, n) {
    return ss(null, t, e, n)
}

function ee(t) {
    var n;
    return n = from(t.toString(), "binary"),
        n.toString("base64")
}


function M() {
    return ee
}

//     function M(t) {
//             var n;
//             return n =from(t.toString(), "binary"),
//             n.toString("base64")
//
// }

function ssss(n) {
    //var a = o();
    return String.fromCharCode(n)
}

function Ha(n) {
    {
        return M()(encodeURIComponent(n).replace(/%([0-9A-F]{2})/g, function (t, n) {
            return ssss("0x"+ n)
        }))
    }
}


let func = function (n) {
    try {

        var e = e
            , r = ""
            , i = [];

        // i = i[ZD]()[qn](R),
        // i = t[nt](h[Ha])(i),
        // i += x + n[os][xa](n[p$], R),
        // i += x + e,
        // i += x + N,
        var i ="";
        i += Ha("12020-04-0236freeiphone")
        i += `@#/rank/globalrank@#${time}@#1`
        console.log(i)
        return r = Ha(g(i, k)),
            //r = t[nt](h[Ha])(t[nt](h[yR])(i, k)),
            //-N == n[os][ia](P) && (n[os] += (-N != n[os][ia](cs) ? yx : cs) + P + vx + t[Fe](r)),
            r
    } catch (n) {
        console.log(n)
    }
};


function s(n) {
    //var a = o();
    return String.fromCharCode(n)
}

function g(t, n) {
    n || (n = m()),
        t = t.split("");
    for (var a = t.length, e = n.length, r = "charCodeAt", i = 0; i < a; i++)
        t[i] = s(t[i].charCodeAt(0) ^ n[(i + 10) % 15].charCodeAt(0));
    return t.join("")
}

"dTB9QSxacUR9dGFEdSB%2BQipZbBhqZ2ZAU3dYTgZabVl0FU5CUV5bH1dcVwZWVBZVWApwEwcABggJDl0OAVMMdkIB"
"dTAgQSBacUQgdGFEdSB%2BQipZbCBqZ2YgU3dYTiBabVl0IE5CUSAgIFcgVyBWVCBVWCBwICAgICAgICAgIFIgdkIg"


console.log(encodeURIComponent(func({})))


