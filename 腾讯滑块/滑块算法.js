function t(n,t){var r=(65535&n)+(65535&t),u=(n>>16)+(t>>16)+(r>>16);return u<<16|65535&r}
function r(n,t){return n<<t|n>>>32-t}
function u(n,u,e,o,c,f){return t(r(t(t(u,n),t(o,f)),c),e)}
function e(n,t,r,e,o,c,f){return u(t&r|~t&e,n,t,o,c,f)}
function o(n,t,r,e,o,c,f){return u(t&e|r&~e,n,t,o,c,f)}
function c(n,t,r,e,o,c,f){return u(t^r^e,n,t,o,c,f)}
function f(n,t,r,e,o,c,f){return u(r^(t|~e),n,t,o,c,f)}
function i(n,r){n[r>>5]|=128<<r%32,n[(r+64>>>9<<4)+14]=r;var u,i,a,h,g,l=1732584193,d=-271733879,v=-1732584194,C=271733878;for(u=0;u<n.length;u+=16)i=l,a=d,h=v,g=C,l=e(l,d,v,C,n[u],7,-680876936),C=e(C,l,d,v,n[u+1],12,-389564586),v=e(v,C,l,d,n[u+2],17,606105819),d=e(d,v,C,l,n[u+3],22,-1044525330),l=e(l,d,v,C,n[u+4],7,-176418897),C=e(C,l,d,v,n[u+5],12,1200080426),v=e(v,C,l,d,n[u+6],17,-1473231341),d=e(d,v,C,l,n[u+7],22,-45705983),l=e(l,d,v,C,n[u+8],7,1770035416),C=e(C,l,d,v,n[u+9],12,-1958414417),v=e(v,C,l,d,n[u+10],17,-42063),d=e(d,v,C,l,n[u+11],22,-1990404162),l=e(l,d,v,C,n[u+12],7,1804603682),C=e(C,l,d,v,n[u+13],12,-40341101),v=e(v,C,l,d,n[u+14],17,-1502002290),d=e(d,v,C,l,n[u+15],22,1236535329),l=o(l,d,v,C,n[u+1],5,-165796510),C=o(C,l,d,v,n[u+6],9,-1069501632),v=o(v,C,l,d,n[u+11],14,643717713),d=o(d,v,C,l,n[u],20,-373897302),l=o(l,d,v,C,n[u+5],5,-701558691),C=o(C,l,d,v,n[u+10],9,38016083),v=o(v,C,l,d,n[u+15],14,-660478335),d=o(d,v,C,l,n[u+4],20,-405537848),l=o(l,d,v,C,n[u+9],5,568446438),C=o(C,l,d,v,n[u+14],9,-1019803690),v=o(v,C,l,d,n[u+3],14,-187363961),d=o(d,v,C,l,n[u+8],20,1163531501),l=o(l,d,v,C,n[u+13],5,-1444681467),C=o(C,l,d,v,n[u+2],9,-51403784),v=o(v,C,l,d,n[u+7],14,1735328473),d=o(d,v,C,l,n[u+12],20,-1926607734),l=c(l,d,v,C,n[u+5],4,-378558),C=c(C,l,d,v,n[u+8],11,-2022574463),v=c(v,C,l,d,n[u+11],16,1839030562),d=c(d,v,C,l,n[u+14],23,-35309556),l=c(l,d,v,C,n[u+1],4,-1530992060),C=c(C,l,d,v,n[u+4],11,1272893353),v=c(v,C,l,d,n[u+7],16,-155497632),d=c(d,v,C,l,n[u+10],23,-1094730640),l=c(l,d,v,C,n[u+13],4,681279174),C=c(C,l,d,v,n[u],11,-358537222),v=c(v,C,l,d,n[u+3],16,-722521979),d=c(d,v,C,l,n[u+6],23,76029189),l=c(l,d,v,C,n[u+9],4,-640364487),C=c(C,l,d,v,n[u+12],11,-421815835),v=c(v,C,l,d,n[u+15],16,530742520),d=c(d,v,C,l,n[u+2],23,-995338651),l=f(l,d,v,C,n[u],6,-198630844),C=f(C,l,d,v,n[u+7],10,1126891415),v=f(v,C,l,d,n[u+14],15,-1416354905),d=f(d,v,C,l,n[u+5],21,-57434055),l=f(l,d,v,C,n[u+12],6,1700485571),C=f(C,l,d,v,n[u+3],10,-1894986606),v=f(v,C,l,d,n[u+10],15,-1051523),d=f(d,v,C,l,n[u+1],21,-2054922799),l=f(l,d,v,C,n[u+8],6,1873313359),C=f(C,l,d,v,n[u+15],10,-30611744),v=f(v,C,l,d,n[u+6],15,-1560198380),d=f(d,v,C,l,n[u+13],21,1309151649),l=f(l,d,v,C,n[u+4],6,-145523070),C=f(C,l,d,v,n[u+11],10,-1120210379),v=f(v,C,l,d,n[u+2],15,718787259),d=f(d,v,C,l,n[u+9],21,-343485551),l=t(l,i),d=t(d,a),v=t(v,h),C=t(C,g);return[l,d,v,C]}
function a(n){var t,r="";for(t=0;t<32*n.length;t+=8)r+=String.fromCharCode(n[t>>5]>>>t%32&255);return r}
function h(n){var t,r=[];for(r[(n.length>>2)-1]=void 0,t=0;t<r.length;t+=1)r[t]=0;for(t=0;t<8*n.length;t+=8)r[t>>5]|=(255&n.charCodeAt(t/8))<<t%32;return r}
function g(n){return a(i(h(n),8*n.length))}
function l(n,t){var r,u,e=h(n),o=[],c=[];for(o[15]=c[15]=void 0,e.length>16&&(e=i(e,8*n.length)),r=0;r<16;r+=1)o[r]=909522486^e[r],c[r]=1549556828^e[r];return u=i(o.concat(h(t)),512+8*t.length),a(i(c.concat(u),640))}
function d(n){var t,r,u="0123456789abcdef",e="";for(r=0;r<n.length;r+=1)t=n.charCodeAt(r),e+=u.charAt(t>>>4&15)+u.charAt(15&t);return e}
function v(n){return unescape(encodeURIComponent(n))}
function C(n){return g(v(n))}
function A(n){return d(C(n))}
function m(n,t){return l(v(n),v(t))}
function s(n,t){return d(m(n,t))}
function md5(n,t,r){return t?r?m(t,n):s(t,n):r?C(n):A(n)}
function cdata(y){if("string"==typeof y&&""!=y){var r=0;y=y.replace(/"/g,'"'),y=y.replace(/'/g,"'");var n;try{n=eval('('+y+')')}catch(e){};if("object"==typeof n&&"string"==typeof n.randstr&&("string"==typeof n.M||"number"==typeof n.M)&&"string"==typeof n.ans){n.ans=n.ans.toLowerCase(),n.M=parseInt(n.M);for(var s=0;s<n.M&&s<1e3;s++){var i=n.randstr+s,c=md5(i);if(n.ans==c.toLowerCase()){r=s;return r;}}}}};
function rnd() {
    return Math.floor(1e6 * Math.random())
};
function random() {
    return + new Date();
};
var x = 0;
var blockSize = 4;
var key = '0123456789abcdef';
var _map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
var screenInfo = '414-736-1040-24-*-*-*';
var resolutionx = 414;
var resolutiony = 736;
var winSize = new Array(414, 736);
var ratio = 1.6;
var ft = '63_7Pfn7H';
var jshook = 5;
var os = 'IOS';
var a = 774696253;
var index = 0;
var tokenid = 774696253;
var tokents = 1515642445;
var coordinate = new Array(0, 0, 0.6304);
var elapsed = 1000;
var mouseUpCnt = 3;
var user_Agent = 'safari/602.1';
var mousemove = new Array();
var slideValue = new Array(11,22);
var param = new Array();
var _keySchedule = new Array();
var _invKeySchedule = new Array();
var _prevBlock = new Array();
var words = new Array();
var sigBytes = 0;
var _nRounds;
var begintime;
var endtime;
var _iv;
var sigBytes;
//QQ：1608626143
var $_0x286c9e = new Array();
var $_0x2cf70f = new Array();
var $_0xcf4d11 = new Array();
var $_0x1561c2 = new Array();
var $_0xb9cfe = new Array();
var $_0x8abaa8 = new Array();
var $_0x54c473 = new Array();
var $_0x8c33af = new Array();
var $_0x33af7c = new Array();
var $_0x4143fa = new Array();
var $_0x4905e3 = new Array();
var $_0x53e3d2 = new Array();
var $_0x9dba = new Array();

for(var $i = 0; $i < 0x100; $i++) {
    $_0xcf4d11[$i] = 0x80 > $i ? $i << 0x1 : $i << 0x1 ^ 0x11b;
}
for (var $_0x99928e = 0x0, $_0xcb565d = 0x0, $_0x41480e = 0x0; 0x100 > $_0x41480e; $_0x41480e++) {
    $_0x503272 = $_0xcb565d ^ $_0xcb565d << 0x1 ^ $_0xcb565d << 0x2 ^ $_0xcb565d << 0x3 ^ $_0xcb565d << 0x4;
    $_0x503272 = ($_0x503272 >>> 0x8) ^ $_0x503272 & 0xff ^ 0x63;
    $_0x286c9e[$_0x99928e] = $_0x503272;
    $_0x2cf70f[$_0x503272] = $_0x99928e;
    $_0xd9e496 = $_0xcf4d11[$_0x99928e];
    $_0x130879 = $_0xcf4d11[$_0xd9e496];
    $_0x21e846 = $_0xcf4d11[$_0x130879];
    $_0x49c899 = 0x101 * $_0xcf4d11[$_0x503272] ^ 0x1010100 * $_0x503272;
    $_0x1561c2[$_0x99928e] = $_0x49c899 << 0x18 | ($_0x49c899 >>> 0x8);
    $_0xb9cfe[$_0x99928e] = $_0x49c899 << 0x10 | ($_0x49c899 >>> 0x10);
    $_0x8abaa8[$_0x99928e] = $_0x49c899 << 0x8 | ($_0x49c899 >>> 0x18);
    $_0x54c473[$_0x99928e] = $_0x49c899;
    $_0x49c899 = 0x1010101 * $_0x21e846 ^ 0x10001 * $_0x130879 ^ 0x101 * $_0xd9e496 ^ 0x1010100 * $_0x99928e;
    $_0x8c33af[$_0x503272] = $_0x49c899 << 0x18 | ($_0x49c899 >>> 0x8);
    $_0x33af7c[$_0x503272] = $_0x49c899 << 0x10 | ($_0x49c899 >>> 0x10);
    $_0x4143fa[$_0x503272] = $_0x49c899 << 0x8 | ($_0x49c899 >>> 0x18);
    $_0x4905e3[$_0x503272] = $_0x49c899;
    if($_0x99928e) {
        $_0x99928e = $_0xd9e496 ^ $_0xcf4d11[$_0xcf4d11[$_0xcf4d11[$_0x21e846 ^ $_0xd9e496]]];
        $_0xcb565d ^= $_0xcf4d11[$_0xcf4d11[$_0xcb565d]];
    } else {
        $_0x99928e = $_0xcb565d = 0x1;
    }
}
var _0x53e3d2 = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
var $sha256Key = $_0x286c9e;
var $sha256Key1 = $_0x8c33af;
var $sha256Key2 = $_0x33af7c;
var $sha256Key3 = $_0x4143fa;
var $sha256Key4 = $_0x4905e3;
var $sha256Key5= $_0x1561c2;
var $sha256Key6 = $_0xb9cfe;
var $sha256Key7 = $_0x8abaa8;
var $sha256Key8 = $_0x54c473;
var $sha256Key9 = $_0x2cf70f;
function getKey($x) {
    x = $x;
    var strJson = JSON.stringify(paramArr());
    var strJsonSpace = strSpace(strJson);
    param['keyvalue'] = new Array();
    var key = encrypt(strJsonSpace);
    return (key);
}
function encrypt($strJsonSpace) {
    var $init = encUtf8Parse(key);
    $init = getKeySchedule($init);
    var $_keySchedule = $init[_keySchedule];
    var $_invKeySchedule = $init[_invKeySchedule];
    $init = getLatin1Parse($strJsonSpace);
    var $words = $init[0];
    var $sigBytes  = $init[1];
    var _0x462a54 = $words,
        _0x3a8f2e = $sigBytes,
        _0x134566 = _map,
        _0x1d1639 = [];
    for (var i = 0; i < _0x3a8f2e; i += 3) {
        for ( j = 0; 4 > j && i + 0.75 * j < _0x3a8f2e; j++) {
            var a = (_0x462a54[i >>> 2] >>> 24 - 8 * (i % 4) & 255) << 16 | (_0x462a54[i + 1 >>> 2] >>> 24 - 8 * ((i + 1) % 4) & 255) << 8 | _0x462a54[i + 0x2 >>> 2] >>> 24 - 8 * ((i + 2) % 4) & 255;
            _0x1d1639.push(_0x134566.charAt(a >>> 6 * (3 - j) & 63));
        }
    }
    if (_0x462a54 = _0x134566.charAt(64)) {
        for (; _0x1d1639.length % 4;) {
            _0x1d1639.push(_0x462a54);
        }
    }
    return _0x1d1639.join("");
}
function getLatin1Parse($str) {
    var $length = $str.length;
    var $words = [];
    var $ret = [];
    var $sigBytes = [];
    for($length, $words = [], $i = 0; $i < $length; $i++) {
        $words[($i >>> 2)] |= ($str.charCodeAt($i) & 255) << 24 - 8 * ($i % 4);
    }
    var $ret = concat($words, $i);
    $words = $ret[0];
    $sigBytes = $ret[1];
    return getLatin2Parse($words, $sigBytes);
}
function getLatin2Parse($words, $sigBytes, $reform = true) {
    $blockSize = blockSize;
    $_minBufferSize = 0;
    $multiple = $sigBytes / (0x4 * $blockSize);
    $multiple = $reform ? Math.ceil($multiple) : Math.max(($multiple | 0x0) - $_minBufferSize, 0x0);
    $reform = $multiple * $blockSize;
    $sigBytes = Math.min(0x4 * $reform, $sigBytes);
    if($reform) {
        for (var $j = 0; $j < $reform; $j += $blockSize) {
            $words = processBlock($words, $j, $blockSize, $j);
        }
        $j = $words.splice(0x0, $reform);
        sigBytes -= $sigBytes;
    }
    return [$j ? $j : $words, $sigBytes];
}
function processBlock($words, $num, $blockSize, $j) {
    $words = processCall($words, $num, $blockSize);
    $words = encryptBlock($words, $num, $j);
    _prevBlock = $words.slice($num, $num + $blockSize);
    return $words;
}
function encryptBlock($words, $num, $j) {
    $_keySchedule = _keySchedule;
    $words = _doCryptBlock($words, $num, $_keySchedule, $sha256Key5, $sha256Key6, $sha256Key7, $sha256Key8, $sha256Key);
    return $words;
}
function _doCryptBlock($_0x2ed1ef, $_0xe958f0, $_0x4d0751, $_0x23edf6, $_0x1f2851, $_0x53eec4, $_0x1fe9e4, $_0x285fa8) {
    for ($_0x4011da = _nRounds, $_0x2d963e = $_0x2ed1ef[$_0xe958f0] ^ $_0x4d0751[0x0], $_0x300ddb = $_0x2ed1ef[$_0xe958f0 + 0x1] ^ $_0x4d0751[0x1], $_0x126e2e = $_0x2ed1ef[$_0xe958f0 + 0x2] ^ $_0x4d0751[0x2], $_0xeb9a7b = $_0x2ed1ef[$_0xe958f0 + 0x3] ^ $_0x4d0751[0x3], $_0x5b1f2a = 0x4, $_0x1b1efd = 0x1; $_0x1b1efd < $_0x4011da; $_0x1b1efd++) {
        $_0x3298ca = $_0x23edf6[($_0x2d963e >>> 0x18)] ^ $_0x1f2851[($_0x300ddb >>> 0x10) & 0xff] ^ $_0x53eec4[($_0x126e2e >>> 0x8) & 0xff] ^ $_0x1fe9e4[$_0xeb9a7b & 0xff] ^ $_0x4d0751[$_0x5b1f2a++];
        $_0x4462a4 = $_0x23edf6[($_0x300ddb >>> 0x18)] ^ $_0x1f2851[($_0x126e2e >>> 0x10) & 0xff] ^ $_0x53eec4[($_0xeb9a7b >>> 0x8) & 0xff] ^ $_0x1fe9e4[$_0x2d963e & 0xff] ^ $_0x4d0751[$_0x5b1f2a++];
        $_0x193b01 = $_0x23edf6[($_0x126e2e >>> 0x18)] ^ $_0x1f2851[($_0xeb9a7b >>> 0x10) & 0xff] ^ $_0x53eec4[($_0x2d963e >>> 0x8) & 0xff] ^ $_0x1fe9e4[$_0x300ddb & 0xff] ^ $_0x4d0751[$_0x5b1f2a++];
        $_0xeb9a7b = $_0x23edf6[($_0xeb9a7b >>> 0x18)] ^ $_0x1f2851[($_0x2d963e >>> 0x10) & 0xff] ^ $_0x53eec4[($_0x300ddb >>> 0x8) & 0xff] ^ $_0x1fe9e4[$_0x126e2e & 0xff] ^ $_0x4d0751[$_0x5b1f2a++];
        $_0x2d963e = $_0x3298ca;
        $_0x300ddb = $_0x4462a4;
        $_0x126e2e = $_0x193b01;
    }
    $_0x3298ca = ($_0x285fa8[($_0x2d963e >>> 0x18)] << 0x18 | $_0x285fa8[($_0x300ddb >>> 0x10) & 0xff] << 0x10 | $_0x285fa8[($_0x126e2e >>> 0x8) & 0xff] << 0x8 | $_0x285fa8[$_0xeb9a7b & 0xff]) ^ $_0x4d0751[$_0x5b1f2a++];
    $_0x4462a4 = ($_0x285fa8[($_0x300ddb >>> 0x18)] << 0x18 | $_0x285fa8[($_0x126e2e >>> 0x10) & 0xff] << 0x10 | $_0x285fa8[($_0xeb9a7b >>> 0x8) & 0xff] << 0x8 | $_0x285fa8[$_0x2d963e & 0xff]) ^ $_0x4d0751[$_0x5b1f2a++];
    $_0x193b01 = ($_0x285fa8[($_0x126e2e >>> 0x18)] << 0x18 | $_0x285fa8[($_0xeb9a7b >>> 0x10) & 0xff] << 0x10 | $_0x285fa8[($_0x2d963e >>> 0x8) & 0xff] << 0x8 | $_0x285fa8[$_0x300ddb & 0xff]) ^ $_0x4d0751[$_0x5b1f2a++];
    $_0xeb9a7b = ($_0x285fa8[($_0xeb9a7b >>> 0x18)] << 0x18 | $_0x285fa8[($_0x2d963e >>> 0x10) & 0xff] << 0x10 | $_0x285fa8[($_0x300ddb >>> 0x8) & 0xff] << 0x8 | $_0x285fa8[$_0x126e2e & 0xff]) ^ $_0x4d0751[$_0x5b1f2a++];
    $_0x2ed1ef[$_0xe958f0] = $_0x3298ca;
    $_0x2ed1ef[$_0xe958f0 + 0x1] = $_0x4462a4;
    $_0x2ed1ef[$_0xe958f0 + 0x2] = $_0x193b01;
    $_0x2ed1ef[$_0xe958f0 + 0x3] = $_0xeb9a7b;
    return $_0x2ed1ef;
}
function processCall($words, $num, $blockSize) {
    var $_0x4e3e46 = "";
    $_iv = _iv;
    $_iv ? _iv = $_0x4e3e46 : $_iv = _prevBlock;
    for ($i = 0; $i < $blockSize; $i++) {
        $words[$num + $i] ^= $_iv[$i];
    }
    return $words;
}
function concat($words, $sigBytes) {
    var $ret = pad($sigBytes);
    var $_0x923cd9 = $ret[0];
    var $_0x2e8f86 = $ret[1];
    $_0x478e37 = $words;
    $_0x1b3944 = $sigBytes;
    if ($_0x1b3944 % 0x4) {
        for ($_0x34e219 = 0; $_0x34e219 < $_0x2e8f86; $_0x34e219++) {
            $_0x478e37[$_0x1b3944 + $_0x34e219 >> 0x2] |= (($_0x923cd9[$_0x34e219 >> 0x2] >> (0x18 - 0x8 * ($_0x34e219 % 0x4))) & 0xff) << 0x18 - 0x8 * (($_0x1b3944 + $_0x34e219) % 0x4);
        }
    } else if(0xffff < count($_0x923cd9)) {
        for ($_0x34e219 = 0x0; $_0x34e219 < $_0x2e8f86; $_0x34e219 += 0x4) {
            $_0x478e37[$_0x1b3944 + $_0x34e219 >> 0x2] = $_0x923cd9[$_0x34e219 >> 0x2];
        }
    } else {
        $_0x478e37.push($_0x923cd9);
    }
    $_0x1b3944 += $_0x2e8f86;
    return [$_0x478e37, $_0x1b3944];
}
function pad( $_0x5556a9, $_0x244650 = 4) {
    for (var $_0x4999d5 = 0x4 * $_0x244650, $_0x4999d5 = $_0x4999d5 - $_0x5556a9 % $_0x4999d5, $_0x151982 = $_0x4999d5 << 0x18 | $_0x4999d5 << 0x10 | $_0x4999d5 << 0x8 | $_0x4999d5, $_0x329c6c = [], $_0x1d6a43 = 0x0; $_0x1d6a43 < $_0x4999d5; $_0x1d6a43 += 0x4) {
        $_0x329c6c.push($_0x151982);
    }
    return [$_0x329c6c, $_0x4999d5];
}
function encUtf8Parse($key) {
    $key = unescape($key);
    var length = $key.length
    for (var i = length, _arr = [], _0x167c53 = 0; _0x167c53 < i; _0x167c53++) {
        _arr[_0x167c53 >>> 2] |= ($key.charCodeAt(_0x167c53) & 255) << 24 - 8 * (_0x167c53 % 4);
    }
    _iv = _arr;
    sigBytes = i;
    return [_arr,i];
}
function getKeySchedule($init) {
    $_iv = $init[0];
    $sigBytes = ($init[1] / 4);
    $byte = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
    for ( var $j, $_iv, $sigBytes, $j = 4 * ((_nRounds = $sigBytes + 6 ) + 1), $_keySchedule = [], $i = 0; $i < $j; $i++) {
        if ($i < $sigBytes) {
            $_keySchedule[$i] =  $_iv[$i];
        } else {
            $arr1 = $_keySchedule[$i - 1];
            if($i % $sigBytes) {
                0x6 < $sigBytes && 0x4 == $i % $sigBytes && ($arr1 = $sha256Key[$arr1 >> 24] << 24 | $sha256Key[$arr1 >> 16 & 255] << 16 | $sha256Key[$arr1 >> 8 & 255] << 8 | $sha256Key[$arr1 & 255]);
            } else {
                $arr1 = $arr1 << 8 | ($arr1 >>> 24); $arr1 = $sha256Key[($arr1 >>> 0x18)] << 0x18 | $sha256Key[($arr1 >>> 0x10) & 0xff] << 0x10 | $sha256Key[($arr1 >>> 0x8) & 0xff] << 0x8 | $sha256Key[$arr1 & 255]; $arr1 ^= $byte[$i / $sigBytes | 0] << 24;
            }
            $_keySchedule[$i]  = $_keySchedule[$i - $sigBytes] ^ $arr1;
        }
    }
    for($sigBytes = 0, $_invKeySchedule = []; $sigBytes < $j; $sigBytes++) {
        $i = $j - $sigBytes;
        $arr1 = $sigBytes % 0x4 ? $_keySchedule[$i] : $_keySchedule[$i - 0x4];
        $_invKeySchedule[$sigBytes] = 0x4 > $sigBytes || 0x4 >= $i ? $arr1 : $sha256Key1[$sha256Key[($arr1 >>> 0x18)]] ^ $sha256Key2[$sha256Key[($arr1 >>> 0x10) & 0xff]] ^  $sha256Key3[$sha256Key[($arr1 >>> 0x8) & 0xff]] ^ $sha256Key4[$sha256Key[$arr1 & 0xff]];
    }
    _keySchedule = $_keySchedule;
    _invKeySchedule = $_invKeySchedule;
    return {'_keySchedule':$_keySchedule,'_invKeySchedule':$_invKeySchedule}

}
function paramArr() {
    var arr = {};
    if(mousemove.length == 0) setMousemove();
    arr['mouseclick'] = new Array();
    arr['keyvalue'] = new Array();
    arr['user_Agent'] = user_Agent;
    arr['resolutionx'] = resolutionx;
    arr['resolutiony'] = resolutiony;
    arr['winSize'] = winSize;
    arr['url'] = 'file:///C:/Users/Administrator/Desktop/cap4/%E9%AA%8C%E8%AF%81%E7%A0%81.htm';
    arr['refer'] = '';
    arr['begintime'] = begintime;
    arr['endtime'] = endtime;
    arr['platform'] = 2;
    arr['os'] = os;
    arr['keyboards'] = rand(0,1);
    arr['flash'] = 0;
    arr['pluginNum'] = 0;
    arr['index'] = index;
    arr['ptcz'] = "";
    arr['tokenid'] = tokenid;
    arr['a'] = a;
    arr['btokenid'] = null;
    arr['tokents'] = tokents;
    arr['ips'] = new Array();
    arr['colorDepth'] = 24;
    arr['cookieEnabled'] = true;
    arr['timezone'] = 8;
    arr['wDelta'] = 0;
    arr['mousemove'] = mousemove;
    arr['keyUpCnt'] = 0;
    arr['keyUpValue'] = new Array();
    arr['mouseUpValue'] = new Array();
    arr['mouseUpCnt'] = index;
    arr['mouseDownValue'] = new Array();
    arr['mouseDownCnt'] = 0;
    arr['orientation'] = new Array();
    arr['bSimutor'] = 0;
    arr['focusBlur'] = {'in':[],'out':[],'t':[]};
    arr['fVersion'] = 0;
    arr['charSet'] = 'UTF-8';
    arr['resizeCnt'] = 0;
    arr['errors'] = new Array();
    arr['screenInfo'] = screenInfo;
    arr['elapsed'] = elapsed;

    arr['clientType'] = '1';
    arr['coordinate'] = coordinate;
    arr['ft'] = ft;
    arr['jshook'] = jshook;
    arr['refreshcnt'] = 0;
    arr['slideValue'] = slideValue;
    arr['trycnt'] = index;
//ksort(arr);
    param = arr;
    return arr;
}
function setMousemove() {
    $x = x;
    var $diff_x = $x / ratio;
    $start_x = rand(31,79);
    var $end_x = Math.round($start_x + $diff_x);
    $y = rand(210,260);
    $deviation_y =  Math.round($x/mt_rand(95,105));
    $start_diff_t = mt_rand(3,9);
    $begintime = time() - $start_diff_t;
    $endtime = time();
    $t = mt_rand($start_diff_t * 1000, $start_diff_t * 1000 + 999) ;
    $total_t = 0;

    var $mousemove = new Array();
    for($j = 0, $i = $start_x; $i < $end_x; $i = $i + mt_rand(1,2)) {
        $x = $i;
        if($i > Math.round($end_x/0.8)) {
            $rand_t = mt_rand(60,180);
        } else if($i > Math.round($end_x/1.5)) {
            $rand_t = mt_rand(5,10);
        } else if($i > Math.round($end_x/3)) {
            $rand_t = mt_rand(2,9);
        } else {
            $rand_t = mt_rand(2,5);
        }
        $t += $rand_t;
        $total_t += $rand_t;
        if($y <  mt_rand($y-3,$y+1) && $j <= $deviation_y ) {
            $j++;
            $y++;
        }
        $mousemove.push([$x, $y, $t])
    }
    begintime = Math.round($begintime);
    endtime = Math.round($endtime);
    index =  Math.round($start_diff_t/2);
    var $mousemove = formatMousemove($mousemove);
    mousemove = $mousemove;
    var $slideValue = setSlideValue($mousemove);
    slideValue = $slideValue;
}
function setSlideValue(mou) {
    mou = JSON.parse(JSON.stringify(mou));//obj不值得为什么，会修改别的数值
    var $total_t = 0;
    for(var $i = 0; $i < mou.length; $i++) {
        if($i !== 0) {
            $total_t += mou[$i][2];
        }
    }
    mou[0][2] = mt_rand(10,35);
    mou[1][2] = mou[1][2] - 1;
    mou[2][2] = mou[2][2] + 1;
    mou.push([0,0,111])
    return mou;
}
function formatMousemove(_0x2e7bb2) {
    var _0x5b5d45;
    var _0x14114c = [];
    for (var _0x43051a = 0x0; _0x43051a < _0x2e7bb2.length; _0x43051a++) {
        var _0xe5a3c8 = _0x2e7bb2[_0x43051a];
        if (_0x43051a == 0x0) {
            _0x14114c.push([_0xe5a3c8[0], _0xe5a3c8[1], _0xe5a3c8[2]]);
        } else {
            _0x14114c.push([_0xe5a3c8[0] - _0x5b5d45[0], _0xe5a3c8[1] - _0x5b5d45[1], Number((_0xe5a3c8[2] - _0x5b5d45[2])["toFixed"](0x3))]);
        }
        _0x5b5d45 = _0xe5a3c8;
    }
    return _0x14114c;
}
function mt_rand(minNum,maxNum){
    switch(arguments.length){
        case 1:
            return parseInt(Math.random()*minNum+1,10);
            break;
        case 2:
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
            break;
        default:
            return 0;
            break;
    }
}
//‘滑块算法QQ群：704573445
function rand(minNum,maxNum){
    switch(arguments.length){
        case 1:
            return parseInt(Math.random()*minNum+1,10);
            break;
        case 2:
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
            break;
        default:
            return 0;
            break;
    }
}
function time() {
    var real_time = new Date() / 1000;
    return real_time;
}
function strSpace($str) {
    $strLen = 15 - $str.length % 16;
    for (var $i = 0; $i < $strLen; $i++) {
        $str += " ";
    }
    return $str;
}

console.log(setMousemove())