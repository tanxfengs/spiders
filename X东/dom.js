const jsdom = require("jsdom");
const { JSDOM } = jsdom;


const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
let document = dom.window.document
let window = dom.window


 let clickWrap = document.createElement("a")

clickWrap.setAttribute("href", "javascript;")
clickWrap.setAttribute("class", "jbtn-img btn-entry")
clickWrap.setAttribute("id", "loginsubmit")
clickWrap.setAttribute("tabindex", "6")
clickWrap.setAttribute("clstag", "pageclick|keycount|login_pc_201804112|12")
clickWrap.style = "outline: rgb(109, 109, 109) none 0px;"
clickWrap.innerText = "登    录"
console.log(clickWrap.getBoundingClientRect())