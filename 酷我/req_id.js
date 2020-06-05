
function c(t, e) {
        for (var r = [], i = 0; i < 256; ++i)
            r[i] = (i + 256).toString(16).substr(1);

            var i = e || 0
              , n = r;
            return [n[t[i++]], n[t[i++]], n[t[i++]], n[t[i++]], "-", n[t[i++]], n[t[i++]], "-", n[t[i++]], n[t[i++]], "-", n[t[i++]], n[t[i++]], "-", n[t[i++]], n[t[i++]], n[t[i++]], n[t[i++]], n[t[i++]], n[t[i++]]].join("")

    }


function rr(t, e) {
        var r = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
        if (r) {
            var n = new Uint8Array(16);
            t.exports = function() {
                return r(n),
                n
            }
        } else {
            var o = new Array(16);
            t.exports = function() {
                for (var t, i = 0; i < 16; i++)
                    0 == (3 & i) && (t = 4294967296 * Math.random()),
                    o[i] = t >>> ((3 & i) << 3) & 255;
                return o
            }
        }
    }

 //var n, o, l = r(233), c = r(234), h = 0, d = 0;
var n = [1, 55, 24, 73, 73, 159], o = 14235, l= function () {
    
},d=0, h=0
function getReqId(t, e, r) {
            var i = e && r || 0
              , b = e || []
              , f = (t = t || {}).node || n
              , v = void 0 !== t.clockseq ? t.clockseq : o;
            if (null == f || null == v) {
                var m = l();
                null == f && (f = n = [1 | m[0], m[1], m[2], m[3], m[4], m[5]]),
                null == v && (v = o = 16383 & (m[6] << 8 | m[7]))
            }
            var y = void 0 !== t.msecs ? t.msecs : (new Date).getTime()
              , w = void 0 !== t.nsecs ? t.nsecs : d + 1
              , dt = y - h + (w - d) / 1e4;
            if (dt < 0 && void 0 === t.clockseq && (v = v + 1 & 16383),
            (dt < 0 || y > h) && void 0 === t.nsecs && (w = 0),
            w >= 1e4)
                throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
            h = y,
            d = w,
            o = v;
            var A = (1e4 * (268435455 & (y += 122192928e5)) + w) % 4294967296;
            b[i++] = A >>> 24 & 255,
            b[i++] = A >>> 16 & 255,
            b[i++] = A >>> 8 & 255,
            b[i++] = 255 & A;
            var T = y / 4294967296 * 1e4 & 268435455;
            b[i++] = T >>> 8 & 255,
            b[i++] = 255 & T,
            b[i++] = T >>> 24 & 15 | 16,
            b[i++] = T >>> 16 & 255,
            b[i++] = v >>> 8 | 128,
            b[i++] = 255 & v;
            for (var x = 0; x < 6; ++x)
                b[i + x] = f[x];
            return e || c(b)
        }

      //  getReqId({})

getReqId(234)


