let arg1 = "/fe_api/burdock/v2/homefeed/notes?pageSize=20&oid=recommend&page=1WSUDD"
let arg2 = ""

r = {
    rotl: function (t, e) {
      return t << e | t >>> 32 - e
    },
    rotr: function (t, e) {
      return t << 32 - e | t >>> e
    },
    endian: function (t) {
      if (t.constructor == Number) return 16711935 & r.rotl(t, 8) | 4278255360 & r.rotl(t, 24);
      for (var e = 0; e < t.length; e++) t[e] = r.endian(t[e]);
      return t
    },
    randomBytes: function (t) {
      for (var e = [
      ]; t > 0; t--) e.push(Math.floor(256 * Math.random()));
      return e
    },
    bytesToWords: function (t) {
      for (var e = [
      ], n = 0, r = 0; n < t.length; n++, r += 8) e[r >>> 5] |= t[n] << 24 - r % 32;
      return e
    },
    wordsToBytes: function (t) {
      for (var e = [
      ], n = 0; n < 32 * t.length; n += 8) e.push(t[n >>> 5] >>> 24 - n % 32 & 255);
      return e
    },
    bytesToHex: function (t) {
      for (var e = [
      ], n = 0; n < t.length; n++) e.push((t[n] >>> 4).toString(16)),
      e.push((15 & t[n]).toString(16));
      return e.join('')
    },
    hexToBytes: function (t) {
      for (var e = [
      ], n = 0; n < t.length; n += 2) e.push(parseInt(t.substr(n, 2), 16));
      return e
    },
    bytesToBase64: function (t) {
      for (var e = [
      ], r = 0; r < t.length; r += 3) for (var o = t[r] << 16 | t[r + 1] << 8 | t[r + 2], i = 0; i < 4; i++) 8 * r + 6 * i <= 8 * t.length ? e.push(n.charAt(o >>> 6 * (3 - i) & 63))  : e.push('=');
      return e.join('')
    },
    base64ToBytes: function (t) {
      t = t.replace(/[^A-Z0-9+\/]/gi, '');
      for (var e = [
      ], r = 0, o = 0; r < t.length; o = ++r % 4) 0 != o && e.push((n.indexOf(t.charAt(r - 1)) & Math.pow(2, - 2 * o + 8) - 1) << 2 * o | n.indexOf(t.charAt(r)) >>> 6 - 2 * o);
      return e
    }
}  

s = function (t, e) {
    t.constructor == String ? t = e && 'binary' === e.encoding ? a.stringToBytes(t)  : o.stringToBytes(t)  : i(t) ? t = Array.prototype.slice.call(t, 0)  : Array.isArray(t) || (t = t.toString());
    for (var n = r.bytesToWords(t), c = 8 * t.length, u = 1732584193, f = - 271733879, l = - 1732584194, p = 271733878, d = 0; d < n.length; d++) n[d] = 16711935 & (n[d] << 8 | n[d] >>> 24) | 4278255360 & (n[d] << 24 | n[d] >>> 8);
    n[c >>> 5] |= 128 << c % 32,
    n[14 + (c + 64 >>> 9 << 4)] = c;
    var h = s._ff,
    v = s._gg,
    y = s._hh,
    m = s._ii;
    for (d = 0; d < n.length; d += 16) {
      var g = u,
      b = f,
      w = l,
      x = p;
      u = h(u, f, l, p, n[d + 0], 7, - 680876936),
      p = h(p, u, f, l, n[d + 1], 12, - 389564586),
      l = h(l, p, u, f, n[d + 2], 17, 606105819),
      f = h(f, l, p, u, n[d + 3], 22, - 1044525330),
      u = h(u, f, l, p, n[d + 4], 7, - 176418897),
      p = h(p, u, f, l, n[d + 5], 12, 1200080426),
      l = h(l, p, u, f, n[d + 6], 17, - 1473231341),
      f = h(f, l, p, u, n[d + 7], 22, - 45705983),
      u = h(u, f, l, p, n[d + 8], 7, 1770035416),
      p = h(p, u, f, l, n[d + 9], 12, - 1958414417),
      l = h(l, p, u, f, n[d + 10], 17, - 42063),
      f = h(f, l, p, u, n[d + 11], 22, - 1990404162),
      u = h(u, f, l, p, n[d + 12], 7, 1804603682),
      p = h(p, u, f, l, n[d + 13], 12, - 40341101),
      l = h(l, p, u, f, n[d + 14], 17, - 1502002290),
      u = v(u, f = h(f, l, p, u, n[d + 15], 22, 1236535329), l, p, n[d + 1], 5, - 165796510),
      p = v(p, u, f, l, n[d + 6], 9, - 1069501632),
      l = v(l, p, u, f, n[d + 11], 14, 643717713),
      f = v(f, l, p, u, n[d + 0], 20, - 373897302),
      u = v(u, f, l, p, n[d + 5], 5, - 701558691),
      p = v(p, u, f, l, n[d + 10], 9, 38016083),
      l = v(l, p, u, f, n[d + 15], 14, - 660478335),
      f = v(f, l, p, u, n[d + 4], 20, - 405537848),
      u = v(u, f, l, p, n[d + 9], 5, 568446438),
      p = v(p, u, f, l, n[d + 14], 9, - 1019803690),
      l = v(l, p, u, f, n[d + 3], 14, - 187363961),
      f = v(f, l, p, u, n[d + 8], 20, 1163531501),
      u = v(u, f, l, p, n[d + 13], 5, - 1444681467),
      p = v(p, u, f, l, n[d + 2], 9, - 51403784),
      l = v(l, p, u, f, n[d + 7], 14, 1735328473),
      u = y(u, f = v(f, l, p, u, n[d + 12], 20, - 1926607734), l, p, n[d + 5], 4, - 378558),
      p = y(p, u, f, l, n[d + 8], 11, - 2022574463),
      l = y(l, p, u, f, n[d + 11], 16, 1839030562),
      f = y(f, l, p, u, n[d + 14], 23, - 35309556),
      u = y(u, f, l, p, n[d + 1], 4, - 1530992060),
      p = y(p, u, f, l, n[d + 4], 11, 1272893353),
      l = y(l, p, u, f, n[d + 7], 16, - 155497632),
      f = y(f, l, p, u, n[d + 10], 23, - 1094730640),
      u = y(u, f, l, p, n[d + 13], 4, 681279174),
      p = y(p, u, f, l, n[d + 0], 11, - 358537222),
      l = y(l, p, u, f, n[d + 3], 16, - 722521979),
      f = y(f, l, p, u, n[d + 6], 23, 76029189),
      u = y(u, f, l, p, n[d + 9], 4, - 640364487),
      p = y(p, u, f, l, n[d + 12], 11, - 421815835),
      l = y(l, p, u, f, n[d + 15], 16, 530742520),
      u = m(u, f = y(f, l, p, u, n[d + 2], 23, - 995338651), l, p, n[d + 0], 6, - 198630844),
      p = m(p, u, f, l, n[d + 7], 10, 1126891415),
      l = m(l, p, u, f, n[d + 14], 15, - 1416354905),
      f = m(f, l, p, u, n[d + 5], 21, - 57434055),
      u = m(u, f, l, p, n[d + 12], 6, 1700485571),
      p = m(p, u, f, l, n[d + 3], 10, - 1894986606),
      l = m(l, p, u, f, n[d + 10], 15, - 1051523),
      f = m(f, l, p, u, n[d + 1], 21, - 2054922799),
      u = m(u, f, l, p, n[d + 8], 6, 1873313359),
      p = m(p, u, f, l, n[d + 15], 10, - 30611744),
      l = m(l, p, u, f, n[d + 6], 15, - 1560198380),
      f = m(f, l, p, u, n[d + 13], 21, 1309151649),
      u = m(u, f, l, p, n[d + 4], 6, - 145523070),
      p = m(p, u, f, l, n[d + 11], 10, - 1120210379),
      l = m(l, p, u, f, n[d + 2], 15, 718787259),
      f = m(f, l, p, u, n[d + 9], 21, - 343485551),
      u = u + g >>> 0,
      f = f + b >>> 0,
      l = l + w >>> 0,
      p = p + x >>> 0
    }
    return r.endian([u,
    f,
    l,
    p])
  }

s._ff = function (t, e, n, r, o, i, a) {
  var s = t + (e & n | ~e & r) + (o >>> 0) + a;
  return (s << i | s >>> 32 - i) + e
},
s._gg = function (t, e, n, r, o, i, a) {
  var s = t + (e & r | n & ~r) + (o >>> 0) + a;
  return (s << i | s >>> 32 - i) + e
},
s._hh = function (t, e, n, r, o, i, a) {
  var s = t + (e ^ n ^ r) + (o >>> 0) + a;
  return (s << i | s >>> 32 - i) + e
},
s._ii = function (t, e, n, r, o, i, a) {
  var s = t + (n ^ (e | ~r)) + (o >>> 0) + a;
  return (s << i | s >>> 32 - i) + e
},
s._blocksize = 16,
s._digestsize = 16

  var n = {
    utf8: {
      stringToBytes: function (t) {
        return n.bin.stringToBytes(unescape(encodeURIComponent(t)))
      },
      bytesToString: function (t) {
        return decodeURIComponent(escape(n.bin.bytesToString(t)))
      }
    },
    bin: {
      stringToBytes: function (t) {
        for (var e = [
        ], n = 0; n < t.length; n++) e.push(255 & t.charCodeAt(n));
        return e
      },
      bytesToString: function (t) {
        for (var e = [
        ], n = 0; n < t.length; n++) e.push(String.fromCharCode(t[n]));
        return e.join('')
      }
    }
  };

let o = n.utf8;
  
  

let getSign = function (t, e) {
    if (null == t) throw new Error('Illegal argument ' + t);
    var n = r.wordsToBytes(s(t, e));
    return e && e.asBytes ? n : e && e.asString ? a.bytesToString(n)  : r.bytesToHex(n)
  }


  let result = getSign(arg1)
  console.log(result);