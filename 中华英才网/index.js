/*
*
* password: 05bf1658bfa43dd1ecf76bcb5a0ef94fcb9f99bdbe826d8a3ffdc101c2001bd4f2548d85974863fb625a575044305d4d631c917e9fc42f49e68366be83f579e3d29354f0a8865ce952199ac93551d2a9993205c9a2a943350c314a12c9d6e34e8589f421f88e4ccfab3d4eb4aac3c2ed8e3ec6294d107577cd9e64461c64be4c
isremember:
callback: window.CL.AsyncModules.successFun
fingerprint: B952F3F36AFE3ECB81D6F3BAC3A610D59954CA4653BCAA59_010
finger2: zh-CN|24|1.100000023841858|6|1920_1080|1920_1050|-480|1|1|1|undefined|1|unknown|Win32|unknown|3|false|false|false|false|false|0_false_false|d41d8cd98f00b204e9800998ecf8427e|a20dc2b3ae67482b699a214baa95447c
token: rTtQexJSUGaJcPpDAkD-3M-ylbbUFC0Q
* */
/*
* finger2 最后两个md5参数 (全是固定值)
* var canvasKey = md5(this.canvasKey(keys));  //空字符MD5固定值 d41d8cd98f00b204e9800998ecf8427e
    var webglKey = md5(this.webglKey(keys)); //a20dc2b3ae67482b699a214baa95447c
*
* */


let window = this;
let $w = {}
  var RSAUtils = $w.RSAUtils = {};
(function($w) {
    // if (typeof $w.RSAUtils === 'undefined')
    //     var RSAUtils = $w.RSAUtils = {};
    var biRadixBase = 2;
    var biRadixBits = 16;
    var bitsPerDigit = biRadixBits;
    var biRadix = 1 << 16;
    var biHalfRadix = biRadix >>> 1;
    var biRadixSquared = biRadix * biRadix;
    var maxDigitVal = biRadix - 1;
    var maxInteger = 9999999999999998;
    var maxDigits;
    var ZERO_ARRAY;
    var bigZero, bigOne;
    var BigInt = $w.BigInt = function(flag) {
        if (typeof flag == "boolean" && flag == true) {
            this.digits = null
        } else {
            this.digits = ZERO_ARRAY.slice(0)
        }
        this.isNeg = false
    }
    ;
    RSAUtils.setMaxDigits = function(value) {
        maxDigits = value;
        ZERO_ARRAY = new Array(maxDigits);
        for (var iza = 0; iza < ZERO_ARRAY.length; iza++)
            ZERO_ARRAY[iza] = 0;
        bigZero = new BigInt();
        bigOne = new BigInt();
        bigOne.digits[0] = 1
    }
    ;
    RSAUtils.setMaxDigits(20);
    var dpl10 = 15;
    RSAUtils.biFromNumber = function(i) {
        var result = new BigInt();
        result.isNeg = i < 0;
        i = Math.abs(i);
        var j = 0;
        while (i > 0) {
            result.digits[j++] = i & maxDigitVal;
            i = Math.floor(i / biRadix)
        }
        return result
    }
    ;
    var lr10 = RSAUtils.biFromNumber(1000000000000000);
    RSAUtils.biFromDecimal = function(s) {
        var isNeg = s.charAt(0) == '-';
        var i = isNeg ? 1 : 0;
        var result;
        while (i < s.length && s.charAt(i) == '0')
            ++i;
        if (i == s.length) {
            result = new BigInt()
        } else {
            var digitCount = s.length - i;
            var fgl = digitCount % dpl10;
            if (fgl == 0)
                fgl = dpl10;
            result = RSAUtils.biFromNumber(Number(s.substr(i, fgl)));
            i += fgl;
            while (i < s.length) {
                result = RSAUtils.biAdd(RSAUtils.biMultiply(result, lr10), RSAUtils.biFromNumber(Number(s.substr(i, dpl10))));
                i += dpl10
            }
            result.isNeg = isNeg
        }
        return result
    }
    ;
    RSAUtils.biCopy = function(bi) {
        var result = new BigInt(true);
        result.digits = bi.digits.slice(0);
        result.isNeg = bi.isNeg;
        return result
    }
    ;
    RSAUtils.reverseStr = function(s) {
        var result = "";
        for (var i = s.length - 1; i > -1; --i) {
            result += s.charAt(i)
        }
        return result
    }
    ;
    var hexatrigesimalToChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    RSAUtils.biToString = function(x, radix) {
        var b = new BigInt();
        b.digits[0] = radix;
        var qr = RSAUtils.biDivideModulo(x, b);
        var result = hexatrigesimalToChar[qr[1].digits[0]];
        while (RSAUtils.biCompare(qr[0], bigZero) == 1) {
            qr = RSAUtils.biDivideModulo(qr[0], b);
            digit = qr[1].digits[0];
            result += hexatrigesimalToChar[qr[1].digits[0]]
        }
        return (x.isNeg ? "-" : "") + RSAUtils.reverseStr(result)
    }
    ;
    RSAUtils.biToDecimal = function(x) {
        var b = new BigInt();
        b.digits[0] = 10;
        var qr = RSAUtils.biDivideModulo(x, b);
        var result = String(qr[1].digits[0]);
        while (RSAUtils.biCompare(qr[0], bigZero) == 1) {
            qr = RSAUtils.biDivideModulo(qr[0], b);
            result += String(qr[1].digits[0])
        }
        return (x.isNeg ? "-" : "") + RSAUtils.reverseStr(result)
    }
    ;
    var hexToChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    RSAUtils.digitToHex = function(n) {
        var mask = 0xf;
        var result = "";
        for (i = 0; i < 4; ++i) {
            result += hexToChar[n & mask];
            n >>>= 4
        }
        return RSAUtils.reverseStr(result)
    }
    ;
    RSAUtils.biToHex = function(x) {
        var result = "";
        var n = RSAUtils.biHighIndex(x);
        for (var i = RSAUtils.biHighIndex(x); i > -1; --i) {
            result += RSAUtils.digitToHex(x.digits[i])
        }
        return result
    }
    ;
    RSAUtils.charToHex = function(c) {
        var ZERO = 48;
        var NINE = ZERO + 9;
        var littleA = 97;
        var littleZ = littleA + 25;
        var bigA = 65;
        var bigZ = 65 + 25;
        var result;
        if (c >= ZERO && c <= NINE) {
            result = c - ZERO
        } else if (c >= bigA && c <= bigZ) {
            result = 10 + c - bigA
        } else if (c >= littleA && c <= littleZ) {
            result = 10 + c - littleA
        } else {
            result = 0
        }
        return result
    }
    ;
    RSAUtils.hexToDigit = function(s) {
        var result = 0;
        var sl = Math.min(s.length, 4);
        for (var i = 0; i < sl; ++i) {
            result <<= 4;
            result |= RSAUtils.charToHex(s.charCodeAt(i))
        }
        return result
    }
    ;
    RSAUtils.biFromHex = function(s) {
        var result = new BigInt();
        var sl = s.length;
        for (var i = sl, j = 0; i > 0; i -= 4,
        ++j) {
            result.digits[j] = RSAUtils.hexToDigit(s.substr(Math.max(i - 4, 0), Math.min(i, 4)))
        }
        return result
    }
    ;
    RSAUtils.biFromString = function(s, radix) {
        var isNeg = s.charAt(0) == '-';
        var istop = isNeg ? 1 : 0;
        var result = new BigInt();
        var place = new BigInt();
        place.digits[0] = 1;
        for (var i = s.length - 1; i >= istop; i--) {
            var c = s.charCodeAt(i);
            var digit = RSAUtils.charToHex(c);
            var biDigit = RSAUtils.biMultiplyDigit(place, digit);
            result = RSAUtils.biAdd(result, biDigit);
            place = RSAUtils.biMultiplyDigit(place, radix)
        }
        result.isNeg = isNeg;
        return result
    }
    ;
    RSAUtils.biDump = function(b) {
        return (b.isNeg ? "-" : "") + b.digits.join(" ")
    }
    ;
    RSAUtils.biAdd = function(x, y) {
        var result;
        if (x.isNeg != y.isNeg) {
            y.isNeg = !y.isNeg;
            result = RSAUtils.biSubtract(x, y);
            y.isNeg = !y.isNeg
        } else {
            result = new BigInt();
            var c = 0;
            var n;
            for (var i = 0; i < x.digits.length; ++i) {
                n = x.digits[i] + y.digits[i] + c;
                result.digits[i] = n % biRadix;
                c = Number(n >= biRadix)
            }
            result.isNeg = x.isNeg
        }
        return result
    }
    ;
    RSAUtils.biSubtract = function(x, y) {
        var result;
        if (x.isNeg != y.isNeg) {
            y.isNeg = !y.isNeg;
            result = RSAUtils.biAdd(x, y);
            y.isNeg = !y.isNeg
        } else {
            result = new BigInt();
            var n, c;
            c = 0;
            for (var i = 0; i < x.digits.length; ++i) {
                n = x.digits[i] - y.digits[i] + c;
                result.digits[i] = n % biRadix;
                if (result.digits[i] < 0)
                    result.digits[i] += biRadix;
                c = 0 - Number(n < 0)
            }
            if (c == -1) {
                c = 0;
                for (var i = 0; i < x.digits.length; ++i) {
                    n = 0 - result.digits[i] + c;
                    result.digits[i] = n % biRadix;
                    if (result.digits[i] < 0)
                        result.digits[i] += biRadix;
                    c = 0 - Number(n < 0)
                }
                result.isNeg = !x.isNeg
            } else {
                result.isNeg = x.isNeg
            }
        }
        return result
    }
    ;
    RSAUtils.biHighIndex = function(x) {
        var result = x.digits.length - 1;
        while (result > 0 && x.digits[result] == 0)
            --result;
        return result
    }
    ;
    RSAUtils.biNumBits = function(x) {
        var n = RSAUtils.biHighIndex(x);
        var d = x.digits[n];
        var m = (n + 1) * bitsPerDigit;
        var result;
        for (result = m; result > m - bitsPerDigit; --result) {
            if ((d & 0x8000) != 0)
                break;
            d <<= 1
        }
        return result
    }
    ;
    RSAUtils.biMultiply = function(x, y) {
        var result = new BigInt();
        var c;
        var n = RSAUtils.biHighIndex(x);
        var t = RSAUtils.biHighIndex(y);
        var u, uv, k;
        for (var i = 0; i <= t; ++i) {
            c = 0;
            k = i;
            for (j = 0; j <= n; ++j,
            ++k) {
                uv = result.digits[k] + x.digits[j] * y.digits[i] + c;
                result.digits[k] = uv & maxDigitVal;
                c = uv >>> biRadixBits
            }
            result.digits[i + n + 1] = c
        }
        result.isNeg = x.isNeg != y.isNeg;
        return result
    }
    ;
    RSAUtils.biMultiplyDigit = function(x, y) {
        var n, c, uv;
        result = new BigInt();
        n = RSAUtils.biHighIndex(x);
        c = 0;
        for (var j = 0; j <= n; ++j) {
            uv = result.digits[j] + x.digits[j] * y + c;
            result.digits[j] = uv & maxDigitVal;
            c = uv >>> biRadixBits
        }
        result.digits[1 + n] = c;
        return result
    }
    ;
    RSAUtils.arrayCopy = function(src, srcStart, dest, destStart, n) {
        var m = Math.min(srcStart + n, src.length);
        for (var i = srcStart, j = destStart; i < m; ++i,
        ++j) {
            dest[j] = src[i]
        }
    }
    ;
    var highBitMasks = [0x0000, 0x8000, 0xC000, 0xE000, 0xF000, 0xF800, 0xFC00, 0xFE00, 0xFF00, 0xFF80, 0xFFC0, 0xFFE0, 0xFFF0, 0xFFF8, 0xFFFC, 0xFFFE, 0xFFFF];
    RSAUtils.biShiftLeft = function(x, n) {
        var digitCount = Math.floor(n / bitsPerDigit);
        var result = new BigInt();
        RSAUtils.arrayCopy(x.digits, 0, result.digits, digitCount, result.digits.length - digitCount);
        var bits = n % bitsPerDigit;
        var rightBits = bitsPerDigit - bits;
        for (var i = result.digits.length - 1, i1 = i - 1; i > 0; --i,
        --i1) {
            result.digits[i] = ((result.digits[i] << bits) & maxDigitVal) | ((result.digits[i1] & highBitMasks[bits]) >>> (rightBits))
        }
        result.digits[0] = ((result.digits[i] << bits) & maxDigitVal);
        result.isNeg = x.isNeg;
        return result
    }
    ;
    var lowBitMasks = [0x0000, 0x0001, 0x0003, 0x0007, 0x000F, 0x001F, 0x003F, 0x007F, 0x00FF, 0x01FF, 0x03FF, 0x07FF, 0x0FFF, 0x1FFF, 0x3FFF, 0x7FFF, 0xFFFF];
    RSAUtils.biShiftRight = function(x, n) {
        var digitCount = Math.floor(n / bitsPerDigit);
        var result = new BigInt();
        RSAUtils.arrayCopy(x.digits, digitCount, result.digits, 0, x.digits.length - digitCount);
        var bits = n % bitsPerDigit;
        var leftBits = bitsPerDigit - bits;
        for (var i = 0, i1 = i + 1; i < result.digits.length - 1; ++i,
        ++i1) {
            result.digits[i] = (result.digits[i] >>> bits) | ((result.digits[i1] & lowBitMasks[bits]) << leftBits)
        }
        result.digits[result.digits.length - 1] >>>= bits;
        result.isNeg = x.isNeg;
        return result
    }
    ;
    RSAUtils.biMultiplyByRadixPower = function(x, n) {
        var result = new BigInt();
        RSAUtils.arrayCopy(x.digits, 0, result.digits, n, result.digits.length - n);
        return result
    }
    ;
    RSAUtils.biDivideByRadixPower = function(x, n) {
        var result = new BigInt();
        RSAUtils.arrayCopy(x.digits, n, result.digits, 0, result.digits.length - n);
        return result
    }
    ;
    RSAUtils.biModuloByRadixPower = function(x, n) {
        var result = new BigInt();
        RSAUtils.arrayCopy(x.digits, 0, result.digits, 0, n);
        return result
    }
    ;
    RSAUtils.biCompare = function(x, y) {
        if (x.isNeg != y.isNeg) {
            return 1 - 2 * Number(x.isNeg)
        }
        for (var i = x.digits.length - 1; i >= 0; --i) {
            if (x.digits[i] != y.digits[i]) {
                if (x.isNeg) {
                    return 1 - 2 * Number(x.digits[i] > y.digits[i])
                } else {
                    return 1 - 2 * Number(x.digits[i] < y.digits[i])
                }
            }
        }
        return 0
    }
    ;
    RSAUtils.biDivideModulo = function(x, y) {
        var nb = RSAUtils.biNumBits(x);
        var tb = RSAUtils.biNumBits(y);
        var origYIsNeg = y.isNeg;
        var q, r;
        if (nb < tb) {
            if (x.isNeg) {
                q = RSAUtils.biCopy(bigOne);
                q.isNeg = !y.isNeg;
                x.isNeg = false;
                y.isNeg = false;
                r = biSubtract(y, x);
                x.isNeg = true;
                y.isNeg = origYIsNeg
            } else {
                q = new BigInt();
                r = RSAUtils.biCopy(x)
            }
            return [q, r]
        }
        q = new BigInt();
        r = x;
        var t = Math.ceil(tb / bitsPerDigit) - 1;
        var lambda = 0;
        while (y.digits[t] < biHalfRadix) {
            y = RSAUtils.biShiftLeft(y, 1);
            ++lambda;
            ++tb;
            t = Math.ceil(tb / bitsPerDigit) - 1
        }
        r = RSAUtils.biShiftLeft(r, lambda);
        nb += lambda;
        var n = Math.ceil(nb / bitsPerDigit) - 1;
        var b = RSAUtils.biMultiplyByRadixPower(y, n - t);
        while (RSAUtils.biCompare(r, b) != -1) {
            ++q.digits[n - t];
            r = RSAUtils.biSubtract(r, b)
        }
        for (var i = n; i > t; --i) {
            var ri = (i >= r.digits.length) ? 0 : r.digits[i];
            var ri1 = (i - 1 >= r.digits.length) ? 0 : r.digits[i - 1];
            var ri2 = (i - 2 >= r.digits.length) ? 0 : r.digits[i - 2];
            var yt = (t >= y.digits.length) ? 0 : y.digits[t];
            var yt1 = (t - 1 >= y.digits.length) ? 0 : y.digits[t - 1];
            if (ri == yt) {
                q.digits[i - t - 1] = maxDigitVal
            } else {
                q.digits[i - t - 1] = Math.floor((ri * biRadix + ri1) / yt)
            }
            var c1 = q.digits[i - t - 1] * ((yt * biRadix) + yt1);
            var c2 = (ri * biRadixSquared) + ((ri1 * biRadix) + ri2);
            while (c1 > c2) {
                --q.digits[i - t - 1];
                c1 = q.digits[i - t - 1] * ((yt * biRadix) | yt1);
                c2 = (ri * biRadix * biRadix) + ((ri1 * biRadix) + ri2)
            }
            b = RSAUtils.biMultiplyByRadixPower(y, i - t - 1);
            r = RSAUtils.biSubtract(r, RSAUtils.biMultiplyDigit(b, q.digits[i - t - 1]));
            if (r.isNeg) {
                r = RSAUtils.biAdd(r, b);
                --q.digits[i - t - 1]
            }
        }
        r = RSAUtils.biShiftRight(r, lambda);
        q.isNeg = x.isNeg != origYIsNeg;
        if (x.isNeg) {
            if (origYIsNeg) {
                q = RSAUtils.biAdd(q, bigOne)
            } else {
                q = RSAUtils.biSubtract(q, bigOne)
            }
            y = RSAUtils.biShiftRight(y, lambda);
            r = RSAUtils.biSubtract(y, r)
        }
        if (r.digits[0] == 0 && RSAUtils.biHighIndex(r) == 0)
            r.isNeg = false;
        return [q, r]
    }
    ;
    RSAUtils.biDivide = function(x, y) {
        return RSAUtils.biDivideModulo(x, y)[0]
    }
    ;
    RSAUtils.biModulo = function(x, y) {
        return RSAUtils.biDivideModulo(x, y)[1]
    }
    ;
    RSAUtils.biMultiplyMod = function(x, y, m) {
        return RSAUtils.biModulo(RSAUtils.biMultiply(x, y), m)
    }
    ;
    RSAUtils.biPow = function(x, y) {
        var result = bigOne;
        var a = x;
        while (true) {
            if ((y & 1) != 0)
                result = RSAUtils.biMultiply(result, a);
            y >>= 1;
            if (y == 0)
                break;
            a = RSAUtils.biMultiply(a, a)
        }
        return result
    }
    ;
    RSAUtils.biPowMod = function(x, y, m) {
        var result = bigOne;
        var a = x;
        var k = y;
        while (true) {
            if ((k.digits[0] & 1) != 0)
                result = RSAUtils.biMultiplyMod(result, a, m);
            k = RSAUtils.biShiftRight(k, 1);
            if (k.digits[0] == 0 && RSAUtils.biHighIndex(k) == 0)
                break;
            a = RSAUtils.biMultiplyMod(a, a, m)
        }
        return result
    }
    ;
    $w.BarrettMu = function(m) {
        this.modulus = RSAUtils.biCopy(m);
        this.k = RSAUtils.biHighIndex(this.modulus) + 1;
        var b2k = new BigInt();
        b2k.digits[2 * this.k] = 1;
        this.mu = RSAUtils.biDivide(b2k, this.modulus);
        this.bkplus1 = new BigInt();
        this.bkplus1.digits[this.k + 1] = 1;
        this.modulo = BarrettMu_modulo;
        this.multiplyMod = BarrettMu_multiplyMod;
        this.powMod = BarrettMu_powMod
    }
    ;
    function BarrettMu_modulo(x) {
        var $dmath = RSAUtils;
        var q1 = $dmath.biDivideByRadixPower(x, this.k - 1);
        var q2 = $dmath.biMultiply(q1, this.mu);
        var q3 = $dmath.biDivideByRadixPower(q2, this.k + 1);
        var r1 = $dmath.biModuloByRadixPower(x, this.k + 1);
        var r2term = $dmath.biMultiply(q3, this.modulus);
        var r2 = $dmath.biModuloByRadixPower(r2term, this.k + 1);
        var r = $dmath.biSubtract(r1, r2);
        if (r.isNeg) {
            r = $dmath.biAdd(r, this.bkplus1)
        }
        var rgtem = $dmath.biCompare(r, this.modulus) >= 0;
        while (rgtem) {
            r = $dmath.biSubtract(r, this.modulus);
            rgtem = $dmath.biCompare(r, this.modulus) >= 0
        }
        return r
    }
    function BarrettMu_multiplyMod(x, y) {
        var xy = RSAUtils.biMultiply(x, y);
        return this.modulo(xy)
    }
    function BarrettMu_powMod(x, y) {
        var result = new BigInt();
        result.digits[0] = 1;
        var a = x;
        var k = y;
        while (true) {
            if ((k.digits[0] & 1) != 0)
                result = this.multiplyMod(result, a);
            k = RSAUtils.biShiftRight(k, 1);
            if (k.digits[0] == 0 && RSAUtils.biHighIndex(k) == 0)
                break;
            a = this.multiplyMod(a, a)
        }
        return result
    }
    var RSAKeyPair = function(encryptionExponent, decryptionExponent, modulus) {
        var $dmath = RSAUtils;
        this.e = $dmath.biFromHex(encryptionExponent);
        this.d = $dmath.biFromHex(decryptionExponent);
        this.m = $dmath.biFromHex(modulus);
        this.chunkSize = 2 * $dmath.biHighIndex(this.m);
        this.radix = 16;
        this.barrett = new $w.BarrettMu(this.m)
    };
    RSAUtils.getKeyPair = function(encryptionExponent, decryptionExponent, modulus) {
        return new RSAKeyPair(encryptionExponent,decryptionExponent,modulus)
    }
    ;
    if (typeof $w.twoDigit === 'undefined') {
        $w.twoDigit = function(n) {
            return (n < 10 ? "0" : "") + String(n)
        }
    }
    RSAUtils.encryptedString = function(key, s) {
        var a = [];
        var sl = s.length;
        var i = 0;
        while (i < sl) {
            a[i] = s.charCodeAt(i);
            i++
        }
        while (a.length % key.chunkSize != 0) {
            a[i++] = 0
        }
        var al = a.length;
        var result = "";
        var j, k, block;
        for (i = 0; i < al; i += key.chunkSize) {
            block = new BigInt();
            j = 0;
            for (k = i; k < i + key.chunkSize; ++j) {
                block.digits[j] = a[k++];
                block.digits[j] += a[k++] << 8
            }
            var crypt = key.barrett.powMod(block, key.e);
            var text = key.radix == 16 ? RSAUtils.biToHex(crypt) : RSAUtils.biToString(crypt, key.radix);
            result += text + " "
        }
        return result.substring(0, result.length - 1)
    }
    ;
    RSAUtils.decryptedString = function(key, s) {
        var blocks = s.split(" ");
        var result = "";
        var i, j, block;
        for (i = 0; i < blocks.length; ++i) {
            var bi;
            if (key.radix == 16) {
                bi = RSAUtils.biFromHex(blocks[i])
            } else {
                bi = RSAUtils.biFromString(blocks[i], key.radix)
            }
            block = key.barrett.powMod(bi, key.d);
            for (j = 0; j <= RSAUtils.biHighIndex(block); ++j) {
                result += String.fromCharCode(block.digits[j] & 255, block.digits[j] >> 8)
            }
        }
        if (result.charCodeAt(result.length - 1) == 0) {
            result = result.substring(0, result.length - 1)
        }
        return result
    }
    ;
    RSAUtils.setMaxDigits(130)
}
)(window);






let pwd = "as1234"
let e = "010001";
let m = "008baf14121377fc76eaf7794b8a8af17085628c3590df47e6534574efcfd81ef8635fcdc67d141c15f51649a89533df0db839331e30b8f8e4440ebf7ccbcc494f4ba18e9f492534b8aafc1b1057429ac851d3d9eb66e86fce1b04527c7b95a2431b07ea277cde2365876e2733325df04389a9d891c5d36b7bc752140db74cb69f"
let timeSign = new Date().getTime() + -178972809762
let str = timeSign + pwd


// password
function encryptString(str, e, m) {
    var key = RSAUtils.getKeyPair(e, '', m);
    return RSAUtils.encryptedString(key, str)
}
//token参数 从html中获取
//http://www.chinahr.com/home/wx/
console.log(encryptString(str, e, m))


//图片base64 + ~extensions:ANGLE_instanced_arrays;EXT_blend_minmax;EXT_color_buffer_half_float;EXT_disjoint_timer_query;EXT_float_blend;EXT_frag_depth;EXT_shader_texture_lod;EXT_texture_filter_anisotropic;WEBKIT_EXT_texture_filter_anisotropic;EXT_sRGB;KHR_parallel_shader_compile;OES_element_index_uint;OES_fbo_render_mipmap;OES_standard_derivatives;OES_texture_float;OES_texture_float_linear;OES_texture_half_float;OES_texture_half_float_linear;OES_vertex_array_object;WEBGL_color_buffer_float;WEBGL_compressed_texture_s3tc;WEBKIT_WEBGL_compressed_texture_s3tc;WEBGL_compressed_texture_s3tc_srgb;WEBGL_debug_renderer_info;WEBGL_debug_shaders;WEBGL_depth_texture;WEBKIT_WEBGL_depth_texture;WEBGL_draw_buffers;WEBGL_lose_context;WEBKIT_WEBGL_lose_context~webgl aliased line width range:[1, 1]~webgl aliased point size range:[1, 1024]~webgl alpha bits:8~webgl antialiasing:yes~webgl blue bits:8~webgl depth bits:24~webgl green bits:8~webgl max anisotropy:16~webgl max combined texture image units:32~webgl max cube map texture size:16384~webgl max fragment uniform vectors:1024~webgl max render buffer size:16384~webgl max texture image units:16~webgl max texture size:16384~webgl max varying vectors:30~webgl max vertex attribs:16~webgl max vertex texture image units:16~webgl max vertex uniform vectors:4095~webgl max viewport dims:[32767, 32767]~webgl red bits:8~webgl renderer:WebKit WebGL~webgl shading language version:WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)~webgl stencil bits:0~webgl vendor:WebKit~webgl version:WebGL 1.0 (OpenGL ES 2.0 Chromium)~webgl unmasked vendor:Google Inc.~webgl unmasked renderer:ANGLE (NVIDIA GeForce GTX 1050 Ti Direct3D11 vs_5_0 ps_5_0)~webgl vertex shader high float precision:23~webgl vertex shader high float precision rangeMin:127~webgl vertex shader high float precision rangeMax:127~webgl vertex shader medium float precision:23~webgl vertex shader medium float precision rangeMin:127~webgl vertex shader medium float precision rangeMax:127~webgl vertex shader low float precision:23~webgl vertex shader low float precision rangeMin:127~webgl vertex shader low float precision rangeMax:127~webgl fragment shader high float precision:23~webgl fragment shader high float precision rangeMin:127~webgl fragment shader high float precision rangeMax:127~webgl fragment shader medium float precision:23~webgl fragment shader medium float precision rangeMin:127~webgl fragment shader medium float precision rangeMax:127~webgl fragment shader low float precision:23~webgl fragment shader low float precision rangeMin:127~webgl fragment shader low float precision rangeMax:127~webgl vertex shader high int precision:0~webgl vertex shader high int precision rangeMin:31~webgl vertex shader high int precision rangeMax:30~webgl vertex shader medium int precision:0~webgl vertex shader medium int precision rangeMin:31~webgl vertex shader medium int precision rangeMax:30~webgl vertex shader low int precision:0~webgl vertex shader low int precision rangeMin:31~webgl vertex shader low int precision rangeMax:30~webgl fragment shader high int precision:0~webgl fragment shader high int precision rangeMin:31~webgl fragment shader high int precision rangeMax:30~webgl fragment shader medium int precision:0~webgl fragment shader medium int precision rangeMin:31~webgl fragment shader medium int precision rangeMax:30~webgl fragment shader low int precision:0~webgl fragment shader low int precision rangeMin:31~webgl fragment shader low int precision rangeMax:30

//data:image/png;base64,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~extensions:ANGLE_instanced_arrays;EXT_blend_minmax;EXT_color_buffer_half_float;EXT_disjoint_timer_query;EXT_float_blend;EXT_frag_depth;EXT_shader_texture_lod;EXT_texture_filter_anisotropic;WEBKIT_EXT_texture_filter_anisotropic;EXT_sRGB;KHR_parallel_shader_compile;OES_element_index_uint;OES_fbo_render_mipmap;OES_standard_derivatives;OES_texture_float;OES_texture_float_linear;OES_texture_half_float;OES_texture_half_float_linear;OES_vertex_array_object;WEBGL_color_buffer_float;WEBGL_compressed_texture_s3tc;WEBKIT_WEBGL_compressed_texture_s3tc;WEBGL_compressed_texture_s3tc_srgb;WEBGL_debug_renderer_info;WEBGL_debug_shaders;WEBGL_depth_texture;WEBKIT_WEBGL_depth_texture;WEBGL_draw_buffers;WEBGL_lose_context;WEBKIT_WEBGL_lose_context~webgl aliased line width range:[1, 1]~webgl aliased point size range:[1, 1024]~webgl alpha bits:8~webgl antialiasing:yes~webgl blue bits:8~webgl depth bits:24~webgl green bits:8~webgl max anisotropy:16~webgl max combined texture image units:32~webgl max cube map texture size:16384~webgl max fragment uniform vectors:1024~webgl max render buffer size:16384~webgl max texture image units:16~webgl max texture size:16384~webgl max varying vectors:30~webgl max vertex attribs:16~webgl max vertex texture image units:16~webgl max vertex uniform vectors:4095~webgl max viewport dims:[32767, 32767]~webgl red bits:8~webgl renderer:WebKit WebGL~webgl shading language version:WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)~webgl stencil bits:0~webgl vendor:WebKit~webgl version:WebGL 1.0 (OpenGL ES 2.0 Chromium)~webgl unmasked vendor:Google Inc.~webgl unmasked renderer:ANGLE (NVIDIA GeForce GTX 1050 Ti Direct3D11 vs_5_0 ps_5_0)~webgl vertex shader high float precision:23~webgl vertex shader high float precision rangeMin:127~webgl vertex shader high float precision rangeMax:127~webgl vertex shader medium float precision:23~webgl vertex shader medium float precision rangeMin:127~webgl vertex shader medium float precision rangeMax:127~webgl vertex shader low float precision:23~webgl vertex shader low float precision rangeMin:127~webgl vertex shader low float precision rangeMax:127~webgl fragment shader high float precision:23~webgl fragment shader high float precision rangeMin:127~webgl fragment shader high float precision rangeMax:127~webgl fragment shader medium float precision:23~webgl fragment shader medium float precision rangeMin:127~webgl fragment shader medium float precision rangeMax:127~webgl fragment shader low float precision:23~webgl fragment shader low float precision rangeMin:127~webgl fragment shader low float precision rangeMax:127~webgl vertex shader high int precision:0~webgl vertex shader high int precision rangeMin:31~webgl vertex shader high int precision rangeMax:30~webgl vertex shader medium int precision:0~webgl vertex shader medium int precision rangeMin:31~webgl vertex shader medium int precision rangeMax:30~webgl vertex shader low int precision:0~webgl vertex shader low int precision rangeMin:31~webgl vertex shader low int precision rangeMax:30~webgl fragment shader high int precision:0~webgl fragment shader high int precision rangeMin:31~webgl fragment shader high int precision rangeMax:30~webgl fragment shader medium int precision:0~webgl fragment shader medium int precision rangeMin:31~webgl fragment shader medium int precision rangeMax:30~webgl fragment shader low int precision:0~webgl fragment shader low int precision rangeMin:31~webgl fragment shader low int precision rangeMax:30
//data:image/png;base64,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~extensions:ANGLE_instanced_arrays;EXT_blend_minmax;EXT_color_buffer_half_float;EXT_disjoint_timer_query;EXT_float_blend;EXT_frag_depth;EXT_shader_texture_lod;EXT_texture_filter_anisotropic;WEBKIT_EXT_texture_filter_anisotropic;EXT_sRGB;KHR_parallel_shader_compile;OES_element_index_uint;OES_fbo_render_mipmap;OES_standard_derivatives;OES_texture_float;OES_texture_float_linear;OES_texture_half_float;OES_texture_half_float_linear;OES_vertex_array_object;WEBGL_color_buffer_float;WEBGL_compressed_texture_s3tc;WEBKIT_WEBGL_compressed_texture_s3tc;WEBGL_compressed_texture_s3tc_srgb;WEBGL_debug_renderer_info;WEBGL_debug_shaders;WEBGL_depth_texture;WEBKIT_WEBGL_depth_texture;WEBGL_draw_buffers;WEBGL_lose_context;WEBKIT_WEBGL_lose_context~webgl aliased line width range:[1, 1]~webgl aliased point size range:[1, 1024]~webgl alpha bits:8~webgl antialiasing:yes~webgl blue bits:8~webgl depth bits:24~webgl green bits:8~webgl max anisotropy:16~webgl max combined texture image units:32~webgl max cube map texture size:16384~webgl max fragment uniform vectors:1024~webgl max render buffer size:16384~webgl max texture image units:16~webgl max texture size:16384~webgl max varying vectors:30~webgl max vertex attribs:16~webgl max vertex texture image units:16~webgl max vertex uniform vectors:4095~webgl max viewport dims:[32767, 32767]~webgl red bits:8~webgl renderer:WebKit WebGL~webgl shading language version:WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)~webgl stencil bits:0~webgl vendor:WebKit~webgl version:WebGL 1.0 (OpenGL ES 2.0 Chromium)~webgl unmasked vendor:Google Inc.~webgl unmasked renderer:ANGLE (NVIDIA GeForce GTX 1050 Ti Direct3D11 vs_5_0 ps_5_0)~webgl vertex shader high float precision:23~webgl vertex shader high float precision rangeMin:127~webgl vertex shader high float precision rangeMax:127~webgl vertex shader medium float precision:23~webgl vertex shader medium float precision rangeMin:127~webgl vertex shader medium float precision rangeMax:127~webgl vertex shader low float precision:23~webgl vertex shader low float precision rangeMin:127~webgl vertex shader low float precision rangeMax:127~webgl fragment shader high float precision:23~webgl fragment shader high float precision rangeMin:127~webgl fragment shader high float precision rangeMax:127~webgl fragment shader medium float precision:23~webgl fragment shader medium float precision rangeMin:127~webgl fragment shader medium float precision rangeMax:127~webgl fragment shader low float precision:23~webgl fragment shader low float precision rangeMin:127~webgl fragment shader low float precision rangeMax:127~webgl vertex shader high int precision:0~webgl vertex shader high int precision rangeMin:31~webgl vertex shader high int precision rangeMax:30~webgl vertex shader medium int precision:0~webgl vertex shader medium int precision rangeMin:31~webgl vertex shader medium int precision rangeMax:30~webgl vertex shader low int precision:0~webgl vertex shader low int precision rangeMin:31~webgl vertex shader low int precision rangeMax:30~webgl fragment shader high int precision:0~webgl fragment shader high int precision rangeMin:31~webgl fragment shader high int precision rangeMax:30~webgl fragment shader medium int precision:0~webgl fragment shader medium int precision rangeMin:31~webgl fragment shader medium int precision rangeMax:30~webgl fragment shader low int precision:0~webgl fragment shader low int precision rangeMin:31~webgl fragment shader low int precision rangeMax:30


// fingerprint    var p = this.targetFingerprint(this.targetFingerprint(u, a), f);