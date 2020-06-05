const c = require("crypto-js")


function Encrypt(l) {
                        var t = c.enc.Utf8.parse("t171420100302rsa")
                          , n = c.enc.Utf8.parse("t171420100302rsa")
                          , e = c.enc.Utf8.parse(l)
                          , a = c.AES.encrypt(e, t, {
                            iv: n,
                            mode: c.mode.CBC,
                            padding: c.pad.Pkcs7
                        });
                        return c.enc.Base64.stringify(a.ciphertext)
                    }

//this.crypto.Encrypt(JSON.stringify(b));

let ret = Encrypt('{"body":{"loginMethod":"1","name":"18584858272","password":"as123455"},"head":{"userCode":null,"channelCode":"101","transTime":1586759234200,"transToken":"","customerId":null,"transSerialNumber":""}}')
console.log(ret)