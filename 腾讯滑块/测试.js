var mouseEvent = {pageX: 0, pageY: 299}
var _0x24b8f7 = 1;

function _0x40898a(mouseEvent) {
    mouseEvent = mouseEvent || window["event"];

    if (_0x24b8f7 <= 0xc8) {
        var _0x4d4018;

        _0x4d4018 = {x: mouseEvent["pageX"], x: mouseEvent["pageY"]};


        _0x57d4a2["push"]({
            "t": new Date()["getTime"]() - _0x45c51d,
            "x": Math["round"](_0x4d4018["x"]),
            "y": Math["round"](_0x4d4018["y"])
        });

        _0x24b8f7++;
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function randSlide(start, end, _y) {
    // 滑块轨迹
    let current = new Date().getTime()
    var arr = []
    let x, y, t;
    let tmpX = start
    let tmpY = _y
    while (tmpX < end) {
        x = getRndInteger(0, 2);
        y = getRndInteger(-1, 1);
        t = getRndInteger(3, 25)
        tmpX += x
        tmpY += y
        arr.push([tmpX, tmpY, t])
    }
    console.log(arr)
    return arr
}


let arr = randSlide(40, 100, 290)

/*
function getData() {

    var n = "----"
    try {
        var t = getT()
            , r = t[Hr.ZippS(Mama, Hr.GIhFo)];
        t[Mama(Hr.dCHjT)] = undefined;
        var u = D(t);
        u = u[Mama(Hr.kMleN(Hr.kMleN(Un + On, y), "GE"))](1, Hr.dHvTx(u.length, 1)),
            n = r + E(u),
            Hr.fyJAp(_0x1eabbd)
    } catch (e) {
        return Hr.tagHF(encodeURIComponent, Mama(Hr.pEnuO) + Hr.htvOQ(o, 29)(e))
    }
    return n.replace(q, function (n) {
        return Mama("P%") + J[n]
    })

}

let i = {}
const b = 971448393;
const S = 1588452687,
    B = 1588452687,
    yn = -88356

var m = "yw"
    , M = "+vu"
    , s = "GLEV~SHI|"
    , l = "4"
    , x = "C"
    , p = "DG"
    , g = "X", G = -1588035338


let I = {}

function getT() {
    I["cd"] = "";
    for (var n, t = '{"cd":', r = "", u = !0, e = 0; e < N.length; e++) {
        var o = N[e];
        if (o) {
            var c = (n = o["get"]())[0]
                , a = n[1] //undefine
                , i = n[2] //undefine
                , f = typeof c; //number
            if (u || (t += ","), // true
                u = !1,  //false
            2 !== i) {
                //  false || false ? t += "null" : (f === "number") ? t += c || 0 : Z.hJSJM(1, i) ? t += c : t = (t + '"' + c + '"'),
                Z.hJSJM(1, i) ? t += c : t = (t + '"' + c + '"'), typeof a === "number" && (t = Z.cMcfM(t + ",", a || 0))
                var m = _0x565283(t); // m = false ; t = '{"cd":[],,"0"0'
                m && (r += E(m), //TODO E是加密函数
                    t = "")
            } else {
                var M = _0x565283(t, !0);
                r = Z.cMcfM(r, M ? Z.DtHIp(E, M) : "") + c,
                    t = ""
            }
        }
    }
    return t += "]",
        r += E(_0x565283(t, !0)),
        I["cd"] = r,
        I
}

//================================测试===========================
//1.
function _0x27cda4(n) {
    for (var t = 0, r = 0; r < 4; r++)
        t |= n.charCodeAt(r) << (8 * r);
    console.log(t)
    return t
}

//2.
var H = [1195852885, 1113936203, 1296460378, 1750349898]
K = -148264920,
    It = -65145,
    D = 148724183,
    F = 1588452687,
    A = -1588035338,
    wn = 1588452687,
    N = 132874,
    Pn = 24208


function _0x5695ef(n, t) {
  // for( var r = n[0], u = n[1], e = C.hYwpR(C.fYiOp(S, 94534689), b), o = C.oGmUA(e, C.oGmUA(C.MVLpz(a, 51), C.OYFWa(a, 69))), c = a(45); c != o;
    for (var r = n[0], u = n[1], e = 2654435769, o = 32 * e, c = 0; c != o;){
      //  (1 === (c & 3)) ? r += (u << 4 ^ (u >>> 5)) + u ^ (c + (H[(c & 3)] + (yn + B) + G))  : 3 === (c & 3) ? r += (u << 4 ^ (u >>> 5) + u) ^ (c + H[c & 3] + ((A + 1588452687) + wn) + -1587817358) : r += ((u << 4) ^ u >>> 5) + u ^ (c + H[(c & 3)])
     //   1==(c&3) ? r += (u<<4 ^ (u>>>5))+ u ^ (c + (H[c&3])+ (328993)): 3 == (c&3)? r += (((u<<4)^(u>>>5)+u), (c + (H[c&3] + 1052678) )): r +=  ((u<<4) ^ ( u >>> 5)) + (u ^(c + H[c&3]) )
        1==(c&3) ? r += ((u<<4) ^ (u>>>5))+ u ^ (c + (H[c&3])+ (328993)): 3 == (c&3)? r += (((u<<4)^(u>>>5) ^u), (c + (H[c&3] + 1052678) )): r +=  ((u<<4) ^ ( u >>> 5)) + (u ^(c + H[c&3]) )
        1 === ((c += e >>> 11) & 3) ? u += (((r << 4) ^ (r >>> 5)) + r) ^ (c + (H[(c >>> 11) & 3] + 328993)) : 3 === ((c >>> 11) & 3) ? u += ((((r << 4) ^ (r >>> 5)) + r) ^ (c + H[((c >>> 11) & 3)] + (F + -1587400009))) : u += (((r << 4) ^ (r >>> 5) + r) ^ (c + H[((c >>> 11) & 3)]))


    }

  //  1==(c&3) ? r += (u<<4 ^ (u>>>5))                                  + u ^ (c + (H[c&3]), (yb+B+G))                                     : 3 == (c&3)                     ? r += (((u<<4)^(u>>>5)+u), (c + (H[c&3] + (A+1588452687+wn + -1587817358)) ))                                                                          : r +=  ((u<<4)^ ( u >>> 5)) + (u ^(c + H[c&3]) ),
           //  ? r += (u << C.EKBXx(a, 51) ^ C.Tmfel(u, C.EKBXx(a, 3))) + u ^ C.BJzha(c, C.BJzha(H[C.sWelF(c, a(7))], C.BJzha(yn, B) + G)) : 3 == C.SHCQb(c, C.EKBXx(a, 7)) ? r += C.NLbvx(C.IQCyE(u << a(51) ^ C.Tmfel(u, a(3)), u), C.MTaiK(c, H[c & C.jRzAh(a, 7)] + C.mWGoK(C.mWGoK(C.hnnkT(A, 1588452687), wn), -1587817358))) : r += C.NLbvx(C.QqkxP(u, C.jRzAh(a, 51)), u >>> a(3)) + u ^ C.pBEtO(c, H[C.rIOYM(c, a(7))]),

       // C.bcaHW(1, c & C.EKBXx(a, 7)) ? r += (u << C.EKBXx(a, 51) ^ C.Tmfel(u, C.EKBXx(a, 3))) + u ^ C.BJzha(c, C.BJzha(H[C.sWelF(c, a(7))], C.BJzha(yn, B) + G)) : 3 == C.SHCQb(c, C.EKBXx(a, 7)) ? r += C.NLbvx(C.IQCyE(u << a(51) ^ C.Tmfel(u, a(3)), u), C.MTaiK(c, H[c & C.jRzAh(a, 7)] + C.mWGoK(C.mWGoK(C.hnnkT(A, 1588452687), wn), -1587817358))) : r += C.NLbvx(C.QqkxP(u, C.jRzAh(a, 51)), u >>> a(3)) + u ^ C.pBEtO(c, H[C.rIOYM(c, a(7))]),
   //                 1 == C.rIOYM(C.Tmfel(c += e, C.GezxT(a(7), a(69))), C.jRzAh(a, 7)) ? u += C.GezxT(C.NLbvx(r << C.gWrIj(a, 51), C.Tmfel(r, C.gWrIj(a, 61) + C.gWrIj(a, 51))), r) ^ C.prZND(c, C.DADzc(H[C.QMLmc(c, a(3) + C.gWrIj(a, 41)) & C.gWrIj(a, 7)], C.NQnpW(C.iQAhS(C.iQAhS(N, 152610), Pn), 19301))) : 3 == (C.uruLP(c, a(7) + C.iUpKj(a, 69)) & C.iUpKj(a, 7)) ? u += C.FUzlg((C.QqkxP(r, a(51)) ^ C.uruLP(r, C.iQAhS(C.iUpKj(a, 61), a(51)))) + r, C.iQAhS(c, H[C.ZPkyB(C.uruLP(c, C.AVaPh(a(3), C.KzsTG(a, 41))), C.KzsTG(a, 7))] + C.AVaPh(F, -1587400009))) : u += C.FUzlg(C.lfgAc(C.QqkxP(r, a(51)) ^ C.tyWKC(r, C.jBgbm(C.KzsTG(a, 61), C.ToPxb(a, 51))), r), c + H[C.ZPkyB(c >>> C.mNzmM(a(3), a(41)), a(7))]);




    //u改r a改c
    n[0] = r,
        n[1] = u
}


/*
3.
function _0x4c00c4(n) {
    return String[C.gLzDe(Mama, C.mNzmM(C.CARed(C.HSHhb(r, u), C.bojjU), e) + ln)](255 & n, C.ZPkyB(n >> a(69), 255), 255 & C.vOzhm(n, 16), n >> 24 & 255)
}*/

/*
var n = ',"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 Edg/81.0.416.72",24       '
var c = ""
let u = []

function E(n) {
    for (r = 0; r < n.length; r += 8) {

        u[0] = _0x27cda4(n.slice(r, r + 4)),
            u[1] = _0x27cda4(n.slice(r + 4, r + 8))
        _0x5695ef(u)

        c += (_0x4c00c4(u[0]) + _0x4c00c4(u[1]));
        console.log(u)

    }


}

//E(n)
var t = [1684218491, 811285026]
_0x5695ef(t)

*/

/*setDate 三次
*
* 1. coordinate: [Math.ceil(o.left), Math.ceil(o.top), Number(y.rate.toFixed(4))]
*   o = {top: 61.42045211791992, left: 9.588068008422852}
*   Math.ceil(o.left), Math.ceil(o.top) 为固定值
*   y = {
  "htdocsPath": "https://captcha.gtimg.com/2",
  "lang": "2052",
  "fpHtdocsPath": "https://captcha.gtimg.com/public/2",
  "fpFileName": "tokenidiframe.web-token.0.0.2.js",
  "color": "1a79ff",
  "tdcHtdocsPath": "https://ssl.captcha.qq.com",
  "dcFileName": "tdc.js?t=1589850445",
  "vmFileName": "dc_vx.js",
  "noheader": "0",
  "showtype": "popup",
  "theme": "",
  "uid": "",
  "subcapclass": "15",
  "aid": "2005597573",
  "uip": "1880522540",
  "clientype": "2",
  "websig": "0a71134743fe7c4de5625de8336917a6abaf4ad0c2dae2581448d393c83216c4333752287bbdecf850b184ff9d4d7a0d4a96dc91dc10bbc728f491d4a89d63fd",
  "collectdata": "abceee",
  "asig": "",
  "buid": "",
  "vmData": "vmData",
  "vsig": "c01GFNTCrjyBvvA7GV6_ArPCSg6kv9hpcCgKcUUSyJBLrRjbiBW-yb63UcNK8YnccYz6TH7tF4O1a8YbiDntxnvqvAELwMYQmqHGXm3rpJvhXmy_4ygULuwiWF_BULcLE_NW_48emzSq52IBd-6bWTg-HUtrxk3dINhlBbFLHtqm7g*",
  "dst": "",
  "capSrc": "capFrame",
  "spt": "45",
  "curenv": "inner",
  "fwidth": "0",
  "slink": "",
  "cdnPic1": "https://hy.captcha.qq.com/hycdn_1_937389266937660160_0",
  "cdnPic2": "https://hy.captcha.qq.com/hycdn_2_937389266937660160_0",
  "iscdn": "1",
  "vmByteCode": "11e",
  "vmAvailable": "",
  "TuCao": "https://support.qq.com/products/2136",
  "capChallenge": {
    "randstr": "2BXX",
    "M": 100,
    "ans": "b4e8248bd0a790c79df0ce124581122a"
  },
  "rate": 0.5
}
*
* https://ssl.captcha.qq.com/cap_union_new_getsig 可以由此请求得到一部分参数
*
* 2. 轨迹数组
* {"trycnt": 15,
  "refreshcnt": 4,
  "slideValue": 轨迹数组
  "dragobj": 1
}
*
* 3. 这次是在getData之前{ft: "qX_7P7n_H"}
* */