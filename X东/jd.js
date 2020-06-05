window = global
// global.document = window.document
global.navigator = {
    userAgent: "node.js"
}
const JSEncrypt = require('jsencrypt')
let JS = JSEncrypt.JSEncrypt
function getEntryptPwd(pwd){
    // var pubKey = $('#pubKey').val();
    if(!pwd || !pubKey || !true){
        return pwd;
    }
    let encrypt = new JS();
    encrypt.setPublicKey(pubKey);
    return encrypt.encrypt(pwd);
}
let pubKey = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDC7kw8r6tq43pwApYvkJ5laljaN9BZb21TAIfT/vexbobzH7Q8SUdP5uDPXEBKzOjx2L28y7Xs1d9v3tdPfKI2LR7PAzWBmDMn8riHrDDNpUpJnlAGUqJG9ooPn8j7YNpcxCa1iybOlc2kEhmJn5uwoanQq+CA6agNkqly2H4j6wIDAQAB"
let pwd = 123456

let result = getEntryptPwd(pwd)

console.log(result);
// console.log(this==global);