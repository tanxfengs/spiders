const jsdom = require("jsdom");
const { JSDOM } = jsdom;


const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
let document = dom.window.document
let navigator = {
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36"
}
let window = dom.window


var JDJRValidate = function(a, b) {
    this.params = a;
    this.callback = b;
    this.ii()


};

JDJRValidate.prototype = {
    ii: function() {
        this.lang = this.params == undefined ? null : this.params.lang;
        this.slideTimer = null;
        this.mousePos = [];
        this.clickProductData = [];
        this.disX = 0;
        this.passValidate = false;
        this.validateID = null;
        this.isDraging = false;
        this.warp = this.gi(this.params.id);
        this.clickResult = false;
        this.i18nParams = this.i18n(this.lang);
        this.protocol = this.params.protocol ? (this.params.protocol + ":") : "";
        this.apiServer = this.protocol + (this.lang && this.lang != "zh_CN" ? "//iv.joybuy.com" : "//iv.jd.com");
        this.bottomSlide = this.params.bottomSlide !== false;
        this.ih();
        this.it()
    },
    i18n: function(b) {
        var a = {};
        a.zh_CN = {
            "default-placeholder": "向右滑动完成拼图",
            "default-title": "完成拼图验证",
            "default-refresh": "换一张",
            "default-click": "点击完成验证",
            "default-slide-success": "拼接成功",
            "default-suspend-success": "验证成功",
            "default-action-block": "操作过于频繁",
            "default-slide-fail": "没有对齐，请再来一次"
        };
        a.en_US = {
            "default-placeholder": "Swipe to complete puzzle",
            "default-title": "Complete the image",
            "default-refresh": "Refresh",
            "default-click": "Confirm registration",
            "default-slide-success": "Verification complete",
            "default-suspend-success": "Verification complete",
            "default-action-block": "You have performed this action too many times.",
            "default-slide-fail": "Incorrect. Please try again."
        };
        a.ru_RU = {
            "default-placeholder": "Проведите вправо",
            "default-title": "Завершите пазл",
            "default-refresh": "Обновить",
            "default-click": "Подтверждение регистрации",
            "default-slide-success": "Проверка успешно",
            "default-suspend-success": "Проверка успешно",
            "default-action-block": "Превышено допустимое количество попыток.",
            "default-slide-fail": "Ошибка. Попробуйте еще раз."
        };
        a.es_ES = {
            "default-placeholder": "completar la pieza",
            "default-title": "Completar la imagen",
            "default-refresh": "Actualizar",
            "default-click": "Haga clic para la verificación",
            "default-slide-success": "Verificado con éxito",
            "default-suspend-success": "Verificado con éxito",
            "default-action-block": "Has realizado esta acción muchas veces.",
            "default-slide-fail": "Incorrecto. Inténtalo de nuevo."
        };
        a.th_TH = {
            "default-placeholder": "เลื่อนชิ้นส่วนจิ๊กซอว์ให้เข้าที่",
            "default-title": "เล่มเกมเพื่อลงทะเบียน",
            "default-refresh": "เปลี่ยนรูป",
            "default-click": "ถัดไป",
            "default-slide-success": "ยินดีด้วย!",
            "default-suspend-success": "ยินดีด้วย!",
            "default-action-block": "You have performed this action too many times.",
            "default-slide-fail": "Incorrect. Please try again."
        };
        a.en_TH = {
            "default-placeholder": "Swipe to complete puzzle",
            "default-title": "Complete the puzzle",
            "default-refresh": "Change",
            "default-click": "Next",
            "default-slide-success": "Congratulations!",
            "default-suspend-success": "Congratulations!",
            "default-action-block": "You have performed this action too many times.",
            "default-slide-fail": "Incorrect. Please try again."
        };
        a.id_ID = {
            "default-placeholder": "Geser untuk teka-teki",
            "default-title": "Lengkapi gambarnya",
            "default-refresh": "Refresh",
            "default-click": "Klik verifikasi",
            "default-slide-success": "Verifikasi selesai",
            "default-suspend-success": "Verifikasi selesai",
            "default-action-block": "You have performed this action too many times.",
            "default-slide-fail": "Incorrect. Please try again."
        };
        if (a.hasOwnProperty(b)) {
            return a[b]
        } else {
            return a["zh_CN"]
        }
    },
    gi: function(a) {
        return document.getElementById(a)
    },
    ge: function(a) {
        a.getElementsByClassName = function(e) {
            var d = (a || document).getElementsByTagName("*");
            var f = new Array();
            for (var c = 0; c < d.length; c++) {
                var h = d[c];
                var g = h.className.split(" ");
                for (var b = 0; b < g.length; b++) {
                    if (g[b] == e) {
                        f.push(h);
                        break
                    }
                }
            }
            return f
        }
    },
    ih: function() {
        var k = this;
        var l = "JDJRV-" + (this.params.product ? this.params.product : "embed");
        var b = this.params.width ? this.params.width : "100%";
        var o = this.params.placeholder ? this.params.placeholder : k.i18nParams["default-placeholder"];
        var e = this.params.refreshRight ? this.params.refreshRight : "0px";
        var r = k.lang && k.lang != "zh_CN" ? "JDJRV-joybuy" : "";
        var f = this.protocol + (k.lang && k.lang != "zh_CN" ? "//static.joybuy.com/risk-cdn/iv/images/wait.gif" : "//ivs.jd.com/slide/i/wait.gif");
        var c = navigator.userAgent.indexOf("compatible") > -1 && navigator.userAgent.indexOf("MSIE") > -1;
        var i = "";
        if (this.params.product == "bind" || this.params.product == "popup" || this.params.product == "click-popup") {
            i += '<div id="JDJRV-wrap-' + this.params.id + '" class="JDJRV-pop-wrap JDValidate-wrap ' + r + '"><div class="JDJRV-pop-bg"></div><div class="JDJRV-pop-content"><a class="JDJRV-close"></a>';
            e = "15px"
        }
        if (this.params.product == "click-suspend") {
            i += '<div id="JDJRV-wrap-' + this.params.id + '" class="JDJRV-click-suspend-wrap JDValidate-wrap ' + r + '"><a class="JDJRV-close"></a><a class="JDJRV-arrow"></a>';
            e = "15px"
        }
        if (this.params.product == "click-bind-suspend") {
                let clickWrap = document.createElement("a")
clickWrap.setAttribute("href", "javascript;")
clickWrap.setAttribute("class", "jbtn-img btn-entry")
clickWrap.setAttribute("id", "loginsubmit")
clickWrap.setAttribute("tabindex", "6")
clickWrap.setAttribute("clstag", "pageclick|keycount|login_pc_201804112|12")
clickWrap.style = "outline: rgb(109, 109, 109) none 0px;"
clickWrap.innerText = "登    录"
    this.clickWarp = clickWrap


            var n = 672;
            var m = 372;
            b = b.indexOf("%") > 0 ? (b.replace("%", "") * 0.01 * this.clickWarp.offsetWidth + "px") : b;
            if (b.indexOf("px") > 0) {
                m -= 140 / (360 / (b.replace("px", "") - 24)) + 120
            }
            i += '<div class="JDJRV-suspend-warp JDJRV-bind-suspend-wrap ' + r + '" id="JDJRV-wrap-' + this.params.id + '" style="width: ' + b + ";top:" + (typeof (this.params.top) != "undefined" ? this.params.top : (m + "px")) + ";left:" + n + "px;height:" + (m + 112) + 'px"><div class="JDJRV-suspend-slide"><div style="" class=" JDValidate-wrap"><a class="JDJRV-close"></a>' + (typeof (this.params.top) != "undefined" ? "" : '<a class="JDJRV-arrow"></a>');
            e = "15px"
        }
        if (this.params.product == "i-dsc") {
            var n = 672;
            var m = 372;
            b = b.indexOf("%") > 0 ? (b.replace("%", "") * 0.01 * this.clickWarp.offsetWidth + "px") : b;
            if (b.indexOf("px") > 0) {
                m -= 140 / (360 / (b.replace("px", "") - 24)) + 120
            }
            i += '<div class="JDJRV-suspend-warp JDJRV-i-dsc-wrap ' + r + '" id="JDJRV-wrap-' + this.params.id + '" style="width: ' + b + ";top:" + (typeof (this.params.top) != "undefined" ? this.params.top : (m + "px")) + ";left:" + n + "px;height:" + (m + 112) + 'px"><div class="JDJRV-suspend-i-dsc"><div style="" class=" JDValidate-wrap"><a class="JDJRV-close"></a>' + (typeof (this.params.top) != "undefined" ? "" : '<a class="JDJRV-arrow"></a>');
            e = "15px"
        } else {
            if (this.params.product == "i-pic-click") {
                var n = 672;
                var m = 372;
                b = b.indexOf("%") > 0 ? (b.replace("%", "") * 0.01 * this.clickWarp.offsetWidth + "px") : b;
                if (b.indexOf("px") > 0) {
                    m -= 333 / (640 / (b.replace("px", "") - 24)) + 70
                }
                i += '<div class="JDJRV-suspend-warp JDJRV-i-pic-click-wrap ' + r + '" id="JDJRV-wrap-' + this.params.id + '" style="width: ' + b + ";top:" + (typeof (this.params.top) != "undefined" ? this.params.top : (m + "px")) + ";left:" + n + "px;height:" + (m + 112) + 'px"><div class="JDJRV-suspend-i-pic-click"><div style="" class=" JDValidate-wrap"><a class="JDJRV-close"></a>' + (typeof (this.params.top) != "undefined" ? "" : '<a class="JDJRV-arrow"></a>');
                e = "15px"
            }
        }
        if (this.params.product != "click" && this.params.product != "click-bind" && this.params.product != "suspend" && this.params.product != "bind-suspend" && this.params.product != "dsc" && this.params.product != "i-dsc" && this.params.product != "pic-click" && this.params.product != "i-pic-click") {
            var a = b;
            if (this.params.product == "bind" || this.params.product == "popup" || this.params.product == "click-popup" || this.params.product == "click-suspend" || this.params.product == "click-bind-suspend") {
                a = "auto"
            }
            i += '<div class="JDJRV-slide ' + r + '" style="width: ' + a + '">' + '<div class="JDJRV-img-panel ' + l + " " + (this.bottomSlide ? "" : "JDJRV-bottom-slide-hide") + '">' + '<div class="JDJRV-refresh" style="margin-right: ' + e + '"><div class="JDJRV-lable-refresh">' + k.i18nParams["default-title"] + '</div><div class="JDJRV-img-refresh"><span>' + k.i18nParams["default-refresh"] + "</span><div></div></div></div>" + '<div class="JDJRV-img-wrap">' + '<div class="JDJRV-bigimg"><img src="" ' + (c ? 'height="0px"' : "") + "></div>" + '<div class="JDJRV-smallimg"><img src="" ' + (c ? 'height="0px"' : "") + "></div>" + "</div>" + "</div>" + '<div class="JDJRV-slide-bg ' + (this.bottomSlide ? "" : "JDJRV-hide") + '">' + '<div class="JDJRV-slide-inner JDJRV-slide-text">' + '<div class="JDJRV-slide-left"></div>' + '<div class="JDJRV-slide-center">' + o + "</div>" + '<div class="JDJRV-slide-right"></div>' + "</div>" + '<div class="JDJRV-slide-inner JDJRV-slide-bar"><div class="JDJRV-slide-bar-left"></div><div class="JDJRV-slide-bar-center"></div><div class="JDJRV-slide-bar-right"></div></div>' + '<div class="JDJRV-slide-inner JDJRV-slide-btn"><!--<span class="JDJRV-slide-icon"></span>--></div></div>' + "</div>"
        }
        if (this.params.product == "dsc" || this.params.product == "i-dsc") {
            if (this.params.product == "i-dsc") {
                b = "100%"
            }
            i += '<div class="JDJRV-dsc" style="width: ' + b + '">' + '<div class="JDJRV-img-panel ' + l + '">' + '<div class="JDJRV-question"><div class="JDJRV-question-lable"></div><div class="JDJRV-question-refresh" style="right: ' + e + '"><span>' + k.i18nParams["default-refresh"] + "</span><div></div></div></div>" + '<div class="JDJRV-img-wrap">' + '<div class="JDJRV-bigimg"><img src="" ' + (c ? 'height="0px"' : "") + "></div>" + '<div class="JDJRV-dsc-result"></div>' + "</div>" + "</div>" + "</div>"
        }
        if (this.params.product == "pic-click" || this.params.product == "i-pic-click") {
            if (this.params.product == "i-pic-click") {
                b = "100%"
            }
            i += '<div class="JDJRV-pic-click" style="width: ' + b + '">' + '<div class="JDJRV-img-panel ' + l + '">' + '<div class="JDJRV-question"><div class="JDJRV-question-lable"></div><div class="JDJRV-smallimg"></div><div class="JDJRV-question-refresh" style="right: ' + e + '"><span>' + k.i18nParams["default-refresh"] + "</span><div></div></div></div>" + '<div class="JDJRV-img-wrap">' + '<div class="JDJRV-bigimg"><img src="" ' + (c ? 'height="0px"' : "") + "></div>" + '<div class="JDJRV-oper">' + '<div class="JDJRV-seq" data-i="1">1</div>' + '<div class="JDJRV-seq" data-i="2">2</div>' + '<div class="JDJRV-seq" data-i="3">3</div>' + '<div class="JDJRV-seq" data-i="4">4</div>' + '<div class="JDJRV-seq" data-i="5">5</div>' + '<div class="JDJRV-seq" data-i="6">6</div>' + '<div class="JDJRV-seq" data-i="7">7</div>' + '<div class="JDJRV-seq" data-i="8">8</div>' + '<div class="JDJRV-seq" data-i="9">9</div>' + "</div>" + '<div class="JDJRV-pic-click-result"></div>' + "</div>" + "</div>" + "</div>"
        }
        if (this.params.product == "bind" || this.params.product == "popup" || this.params.product == "click-popup") {
            i += "</div></div>";
            var p = document.createElement("div");
            p.innerHTML = i;
            var q = document.createDocumentFragment();
            while (p.firstChild) {
                q.appendChild(p.firstChild)
            }
            var j = this.gi("JDJRV-wrap-" + this.params.id);
            if (j) {
                document.body.removeChild(j)
            }
            document.body.appendChild(q);
            this.warp = this.gi("JDJRV-wrap-" + this.params.id);
            if (!this.warp.getElementsByClassName) {
                this.ge(this.warp)
            }
            this.closeBtn = this.warp.getElementsByClassName("JDJRV-close")[0];
            this.popContent = this.warp.getElementsByClassName("JDJRV-pop-content")[0];
            if (this.params.product == "popup") {
                this.clickWarp = this.gi(this.params.id);
                var d = '<div class="JDJRV-click-warp ' + r + '" style="width: ' + b + '"><img class="JDJRV-click-img" src="' + f + '"><div class="JDJRV-click-text">' + k.i18nParams["default-click"] + "</div></div>";
                this.clickWarp.innerHTML = d;
                if (!this.clickWarp.getElementsByClassName) {
                    this.ge(this.clickWarp)
                }
                this.clickContent = this.clickWarp.getElementsByClassName("JDJRV-click-warp")[0];
                this.clickImg = this.clickWarp.getElementsByClassName("JDJRV-click-img")[0];
                this.clickText = this.clickWarp.getElementsByClassName("JDJRV-click-text")[0]
            }
        } else {
            if (this.params.product == "click") {
                this.clickWarp = this.gi(this.params.id);
                var d = '<div class="JDJRV-click-warp ' + r + '" style="width: ' + b + '"><img class="JDJRV-click-img" src="' + f + '"><div class="JDJRV-click-text">' + k.i18nParams["default-click"] + "</div></div>";
                this.clickWarp.innerHTML = d;
                if (!this.clickWarp.getElementsByClassName) {
                    this.ge(this.clickWarp)
                }
                this.clickContent = this.clickWarp.getElementsByClassName("JDJRV-click-warp")[0];
                this.clickImg = this.clickWarp.getElementsByClassName("JDJRV-click-img")[0];
                this.clickText = this.clickWarp.getElementsByClassName("JDJRV-click-text")[0]
            } else {
                if (this.params.product == "click-bind" || this.params.product == "bind-suspend") {
                    this.clickWarp = this.gi(this.params.id);
                    if (!this.clickWarp.getElementsByClassName) {
                        this.ge(this.clickWarp)
                    }
                } else {
                    if (this.params.product == "suspend") {
                        this.warp = this.gi(this.params.id);
                        if (!this.warp.getElementsByClassName) {
                            this.ge(this.warp)
                        }
                        var g = this.params.height || "40px";
                        var d = '<div class="JDJRV-suspend-warp ' + r + '" style="width: ' + b + '"><div class="JDJRV-suspend-slide"></div><div class="JDJRV-suspend-click" style=";height:' + g + ";line-height:" + g + '">' + k.i18nParams["default-click"] + "</div></div>";
                        this.warp.innerHTML = d;
                        this.clickWarp = this.warp.getElementsByClassName("JDJRV-suspend-click")[0];
                        this.clickContent = this.warp.getElementsByClassName("JDJRV-suspend-click")[0];
                        this.clickText = this.warp.getElementsByClassName("JDJRV-suspend-click")[0];
                        this.suspendSlideWarp = this.warp.getElementsByClassName("JDJRV-suspend-slide")[0];
                        this.suspendSlideWarp.style.bottom = this.clickWarp.offsetHeight + 6 + "px"
                    } else {
                        if (this.params.product == "click-suspend") {
                            i += "</div></div>";
                            this.suspendSlideWarp.innerHTML = i;
                            this.suspendSlideWarp.style.display = "block";
                            this.closeBtn = this.warp.getElementsByClassName("JDJRV-close")[0]
                        } else {
                            if (this.params.product == "click-bind-suspend" || this.params.product == "i-dsc" || this.params.product == "i-pic-click") {
                                i += "</div></div></div></div>";
                                var p = document.createElement("div");
                                p.innerHTML = i;
                                var q = document.createDocumentFragment();
                                while (p.firstChild) {
                                    q.appendChild(p.firstChild)
                                }
                                var j = this.gi("JDJRV-wrap-" + this.params.id);
                                if (j) {
                                    document.body.removeChild(j)
                                }
                                document.body.appendChild(q);
                                this.warp = this.gi("JDJRV-wrap-" + this.params.id);
                                if (!this.warp.getElementsByClassName) {
                                    this.ge(this.warp)
                                }
                                this.closeBtn = this.warp.getElementsByClassName("JDJRV-close")[0];
                                if (this.params.product == "click-bind-suspend" || this.params.product == "i-dsc") {
                                    this.suspendSlideWarp = this.warp.getElementsByClassName("JDJRV-suspend-slide")[0]
                                } else {
                                    if (this.params.product == "i-pic-click") {
                                        this.suspendPicClickWarp = this.warp.getElementsByClassName("JDJRV-suspend-pic-click")[0]
                                    }
                                }
                            } else {
                                this.warp.innerHTML = i
                            }
                        }
                    }
                }
            }
        }
        if (this.params.product != "click" && this.params.product != "click-bind" && this.params.product != "suspend" && this.params.product != "bind-suspend" && this.params.product != "dsc" && this.params.product != "i-dsc" && this.params.product != "pic-click" && this.params.product != "i-pic-click") {
            if (this.params.product == "click-popup" || this.params.product == "click-suspend" || this.params.product == "click-bind-suspend") {
                k.iw()
            } else {
                setTimeout(function() {
                    k.iw()
                }, 50)
            }
        } else {
            if (this.params.product == "dsc" || this.params.product == "i-dsc") {
                setTimeout(function() {
                    k.id()
                }, 50)
            } else {
                if (this.params.product == "pic-click" || this.params.product == "i-pic-click") {
                    setTimeout(function() {
                        k.ip()
                    }, 50)
                } else {
                    setTimeout(function() {
                        k.ic()
                    }, 50)
                }
            }
        }
    },
    iw: function() {
        if (!this.warp.getElementsByClassName) {
            this.ge(this.warp)
        }
        this.slideWrap = this.warp.getElementsByClassName("JDJRV-slide")[0];
        this.width = this.slideWrap.offsetWidth;
        this.imgRatio = this.slideWrap.offsetWidth ? (360 / this.slideWrap.offsetWidth) : 1;
        this.slideBar = this.warp.getElementsByClassName("JDJRV-slide-bg")[0];
        this.slideBtn = this.warp.getElementsByClassName("JDJRV-slide-btn")[0];
        this.slideGreenBar = this.warp.getElementsByClassName("JDJRV-slide-bar")[0];
        this.slideGreenBarCenter = this.warp.getElementsByClassName("JDJRV-slide-bar-center")[0];
        this.slideSmallImg = this.warp.getElementsByClassName("JDJRV-smallimg")[0];
        this.slideBigImg = this.warp.getElementsByClassName("JDJRV-bigimg")[0];
        this.slideImgWrap = this.warp.getElementsByClassName("JDJRV-img-panel")[0];
        this.slideCenter = this.warp.getElementsByClassName("JDJRV-slide-center")[0];
        if (!this.slideImgWrap.getElementsByClassName) {
            this.ge(this.slideImgWrap)
        }
        this.refreshBtn = this.slideImgWrap.getElementsByClassName("JDJRV-img-refresh")[0];
        this.slideText = this.warp.getElementsByClassName("JDJRV-slide-text")[0];
        this.slideBigImg.style.height = 140 / (360 / this.slideWrap.offsetWidth) + "px";
        this.vi();
        this.be()
    },
    ic: function() {
        var c = this;
        c.vi();
        if (c.params.eventListener == false || c.params.eventListener == "false") {
            c.verify = b
        } else {
            c.clickWarp.onclick = b;
            if (c.params.formId) {
                document.getElementById(c.params.formId).onsubmit = function() {
                    b();
                    return false
                }
            }
        }
        document.onmousemove = a;
        document.ontouchmove = a;
        function a(e) {
            if (c.params.product == "click" || c.params.product == "click-bind" || c.params.product == "suspend" || c.params.product == "bind-suspend") {
                var d = e || event;
                if (d.touches) {
                    d = d.touches[0]
                }
                c.clickProductData.push([d.clientX.toFixed(0), d.clientY.toFixed(0), new Date().getTime()])
            }
        }
        function b() {
            if (!c.clickResult) {
                if (c.params.product == "click-popup") {
                    c.warp.style.display = "block";
                    c.rs()
                } else {
                    if (c.params.product == "click-suspend") {
                        c.suspendSlideWarp.style.display = "block";
                        c.rs()
                    } else {
                        if (c.params.product == "click-bind-suspend") {
                            c.warp.style.display = "block";
                            c.rs()
                        } else {
                            if (c.params.product == "i-dsc") {
                                c.warp.style.display = "block"
                            } else {
                                if (c.params.product == "i-pic-click") {
                                    c.warp.style.display = "block"
                                } else {
                                    if (c.validateID) {
                                        c.sb()
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    id: function() {
        if (!this.warp.getElementsByClassName) {
            this.ge(this.warp)
        }
        this.dscWrap = this.warp.getElementsByClassName("JDJRV-dsc")[0];
        this.width = this.dscWrap.offsetWidth;
        this.imgRatio = this.dscWrap.offsetWidth ? (360 / this.dscWrap.offsetWidth) : 1;
        this.dscBigImg = this.warp.getElementsByClassName("JDJRV-bigimg")[0];
        this.dscResult = this.warp.getElementsByClassName("JDJRV-dsc-result")[0];
        this.dscWrapImgWrap = this.warp.getElementsByClassName("JDJRV-img-panel")[0];
        if (!this.dscWrapImgWrap.getElementsByClassName) {
            this.ge(this.dscWrapImgWrap)
        }
        this.refreshBtn = this.dscWrapImgWrap.getElementsByClassName("JDJRV-question-refresh")[0];
        this.dscBigImg.style.height = 190 / (360 / this.dscWrap.offsetWidth) + "px";
        this.questionLable = this.warp.getElementsByClassName("JDJRV-question-lable")[0];
        this.vi();
        this.bd()
    },
    ip: function() {
        if (!this.warp.getElementsByClassName) {
            this.ge(this.warp)
        }
        this.picClickWrap = this.warp.getElementsByClassName("JDJRV-pic-click")[0];
        this.width = this.picClickWrap.offsetWidth;
        this.imgRatio = this.picClickWrap.offsetWidth ? (500 / this.picClickWrap.offsetWidth) : 1;
        this.picClickBigImg = this.warp.getElementsByClassName("JDJRV-bigimg")[0];
        this.picClickSmallImg = this.warp.getElementsByClassName("JDJRV-smallimg")[0];
        this.picClickResult = this.warp.getElementsByClassName("JDJRV-pic-click-result")[0];
        this.picClickImgWrap = this.warp.getElementsByClassName("JDJRV-img-panel")[0];
        if (!this.picClickImgWrap.getElementsByClassName) {
            this.ge(this.picClickImgWrap)
        }
        this.refreshBtn = this.picClickImgWrap.getElementsByClassName("JDJRV-question-refresh")[0];
        this.picClickBigImg.style.height = 333 / (640 / this.picClickWrap.offsetWidth) + "px";
        this.questionLable = this.warp.getElementsByClassName("JDJRV-question-lable")[0];
        this.operWrap = this.warp.getElementsByClassName("JDJRV-oper")[0];
        this.operSeqs = this.warp.getElementsByClassName("JDJRV-seq");
        this.vi();
        this.bp()
    },
    be: function() {
        var e = this;
        if (e.params.product == "click-popup") {
            e.closeBtn.onclick = function() {
                e.warp.style.display = "none"
            }
        }
        if (e.params.product == "click-suspend") {
            e.closeBtn.onclick = function() {
                e.suspendSlideWarp.style.display = "none"
            }
        }
        if (e.params.product == "click-bind-suspend") {
            e.closeBtn.onclick = function() {
                e.warp.style.display = "none"
            }
        }
        if (e.params.product == "popup") {
            e.clickWarp.onclick = function() {
                e.warp.style.display = "block";
                e.rs()
            }
            ;
            e.closeBtn.onclick = function() {
                e.warp.style.display = "none"
            }
        }
        if (e.params.product == "bind") {
            if (e.params.eventListener == false || e.params.eventListener == "false") {
                e.verify = function() {
                    e.warp.style.display = "block";
                    e.rs()
                }
            } else {
                document.getElementById(e.params.id).onclick = function() {
                    e.warp.style.display = "block";
                    e.rs()
                }
            }
            e.closeBtn.onclick = function() {
                e.warp.style.display = "none"
            }
        }
        e.slideBtn.onmousedown = d;
        e.slideBtn.ontouchstart = d;
        e.slideSmallImg.onmousedown = d;
        e.slideSmallImg.ontouchstart = d;
        function d(i) {
            if (e.passValidate) {
                return
            }
            e.isDraging = true;
            var h = i || event;
            if (document.all) {
                window.event.returnValue = false;
                window.event.cancelBubble = true
            } else {
                h.preventDefault();
                h.stopPropagation();
                h.returnValue = false
            }
            if (h.touches) {
                h = h.touches[0]
            }
            e.disX = h.clientX;
            e.slideGreenBar.style.display = "block";
            e.mousePos = [];
            e.mousePos.push([e.gl(e.slideBtn).toFixed(0), e.gt(e.slideBtn).toFixed(0), new Date().getTime()]);
            e.mousePos.push([h.clientX.toFixed(0), h.clientY.toFixed(0), new Date().getTime()]);
            document.onmousemove = g;
            document.ontouchmove = g;
            document.onmouseup = f;
            document.ontouchend = f;
            function g(m) {
                var k = m || event;
                if (document.all) {
                    window.event.returnValue = false;
                    window.event.cancelBubble = true
                } else {
                    k.preventDefault();
                    k.stopPropagation();
                    k.returnValue = false
                }
                if (k.touches) {
                    k = k.touches[0]
                }
                var l = k.clientX - e.disX + 40;
                var n = k.clientX - e.disX;
                var j = k.clientX - e.disX;
                if (j < 0) {
                    j = 0
                } else {
                    if (j > e.width - (50 / e.imgRatio)) {
                        j = e.width - (50 / e.imgRatio)
                    }
                }
                if (n < 0) {
                    n = 0
                } else {
                    if (n > e.width - 40) {
                        n = e.width - 40
                    }
                }
                if (l < 44) {
                    l = 44
                } else {
                    if (l > e.width) {
                        l = e.width
                    }
                }
                e.mousePos.push([k.clientX.toFixed(0), k.clientY.toFixed(0), new Date().getTime()]);
                e.slideBtn.style.left = n + "px";
                e.slideSmallImg.style.left = j + "px";
                e.slideGreenBar.style.width = l + "px";
                return false
            }
            function f(k) {
                var j = k || event;
                if (j.changedTouches) {
                    j = j.changedTouches[0]
                }
                e.isDraging = false;
                e.mousePos.push([j.clientX.toFixed(0), j.clientY.toFixed(0), new Date().getTime()]);
                document.onmousemove = null;
                document.ontouchmove = null;
                document.onmouseup = null;
                document.ontouchend = null;
                if (e.mousePos.length <= 3) {
                    e.slideGreenBar.style.display = "none";
                    e.slideText.setAttribute("class", "JDJRV-slide-inner JDJRV-slide-text");
                    e.slideText.setAttribute("className", "JDJRV-slide-inner JDJRV-slide-text");
                    return
                }
                e.sb()
            }
        }
        if (this.params.product == "float") {
            var c = false;
            var b = false;
            this.slideImgWrap.onmouseover = function() {
                c = true
            }
            ;
            this.slideImgWrap.onmouseout = function() {
                c = false;
                e.slideTimer = setTimeout(function() {
                    if (c || b) {
                        return
                    }
                    e.slideImgWrap.setAttribute("class", "JDJRV-img-panel JDJRV-float");
                    e.slideImgWrap.setAttribute("className", "JDJRV-img-panel JDJRV-float ")
                }, 300)
            }
            ;
            this.slideBar.onmouseover = function() {
                b = true;
                if (e.passValidate || e.isDraging) {
                    return
                }
                clearTimeout(e.slideTimer);
                e.slideImgWrap.setAttribute("class", "JDJRV-img-panel JDJRV-float JDJRV-float-hover");
                e.slideImgWrap.setAttribute("className", "JDJRV-img-panel JDJRV-float JDJRV-float-hover")
            }
            ;
            this.slideBar.onmouseout = function() {
                b = false;
                if (e.isDraging) {
                    return
                }
                e.slideTimer = setTimeout(function() {
                    if (c) {
                        return
                    }
                    e.slideImgWrap.setAttribute("class", "JDJRV-img-panel JDJRV-float");
                    e.slideImgWrap.setAttribute("className", "JDJRV-img-panel JDJRV-float ")
                }, 300)
            }
        }
        this.refreshBtn.onclick = function() {
            if (e.passValidate || e.isDraging) {
                return
            }
            e.vi();
            if (e.params.refreshCallback) {
                e.callback({
                    getSuccess: function() {
                        return "2"
                    },
                    getMessage: function() {
                        return "refresh"
                    },
                    getValidate: function() {
                        return ""
                    }
                })
            }
        }
        ;
        var a = 0;
        window.onresize = function() {
            e.rs()
        }
    },
    bd: function() {
        var c = this;
        if (c.params.product == "i-dsc") {
            c.closeBtn.onclick = function() {
                c.warp.style.display = "none"
            }
        }
        document.onmousemove = a;
        document.ontouchmove = a;
        c.dscBigImg.onmousedown = b;
        function a(e) {
            var d = e || event;
            if (document.all) {
                window.event.returnValue = false;
                window.event.cancelBubble = true
            } else {
                d.preventDefault();
                d.stopPropagation();
                d.returnValue = false
            }
            if (d.touches) {
                d = d.touches[0]
            }
            c.mousePos.push([d.clientX.toFixed(0), d.clientY.toFixed(0), new Date().getTime()]);
            return false
        }
        function b(f) {
            var e = f || event;
            if (e.changedTouches) {
                e = e.changedTouches[0]
            }
            c.isDraging = false;
            c.mousePos.push([e.clientX.toFixed(0), e.clientY.toFixed(0), new Date().getTime()]);
            c.mousePos.push([c.gl(c.dscBigImg).toFixed(0), c.gt(c.dscBigImg).toFixed(0), new Date().getTime()]);
            var d = e.offsetX || (e.clientX - c.dscBigImg.getBoundingClientRect().left);
            var g = e.offsetY || (e.clientY - c.dscBigImg.getBoundingClientRect().top);
            c.mousePos.push([d.toFixed(0), g.toFixed(0), new Date().getTime()]);
            c.mousePos.push([0, 0, new Date().getTime()]);
            document.onmousemove = null;
            document.ontouchmove = null;
            c.dscBigImg.onmousedown = null;
            c.sb()
        }
        this.refreshBtn.onclick = function() {
            if (c.passValidate || c.isDraging) {
                return
            }
            c.vi();
            if (c.params.refreshCallback) {
                c.callback({
                    getSuccess: function() {
                        return "2"
                    },
                    getMessage: function() {
                        return "refresh"
                    },
                    getValidate: function() {
                        return ""
                    }
                })
            }
        }
        ;
        window.onresize = function() {
            c.rs()
        }
    },
    bp: function() {
        var d = this;
        if (d.params.product == "i-pic-click") {
            d.closeBtn.onclick = function() {
                d.warp.style.display = "none"
            }
        }
        d.picClickBigImg.onmousedown = c;
        function c(h) {
            var f = h || event;
            if (f.changedTouches) {
                f = f.changedTouches[0]
            }
            d.isDraging = false;
            var e = f.offsetX || (f.clientX - d.dscBigImg.getBoundingClientRect().left);
            var i = f.offsetY || (f.clientY - d.dscBigImg.getBoundingClientRect().top);
            d.mousePos.push([e.toFixed(0), i.toFixed(0), new Date().getTime()]);
            var g = d.operSeqs[d.mousePos.length - 1];
            g.style.top = (i - 13) + "px";
            g.style.left = (e - 13) + "px";
            g.style.display = "block";
            if (d.mousePos.length == (d.operLimit || 4)) {
                d.picClickBigImg.onmousedown = null;
                d.sb()
            }
        }
        for (var b = 0; b < d.operSeqs.length; b++) {
            var a = d.operSeqs[b];
            a.onmousedown = function() {
                var f = this.getAttribute("data-i") * 1;
                d.mousePos = d.mousePos.slice(0, f - 1);
                for (var e = d.operSeqs.length; e > f - 1; e--) {
                    d.operSeqs[e - 1].style.display = "none"
                }
            }
        }
        this.refreshBtn.onclick = function() {
            if (d.passValidate || d.isDraging) {
                return
            }
            d.mousePos = new Array();
            for (var e = 0; e < d.operSeqs.length; e++) {
                d.operSeqs[e].style.display = "none"
            }
            d.vi();
            if (d.params.refreshCallback) {
                d.callback({
                    getSuccess: function() {
                        return "2"
                    },
                    getMessage: function() {
                        return "refresh"
                    },
                    getValidate: function() {
                        return ""
                    }
                })
            }
        }
        ;
        window.onresize = function() {
            d.rs()
        }
    },
    it: function() {
        var a = this;
        if (a.params.getInstance) {
            a.params.getInstance(a)
        }
    },
    rs: function() {
        var d = this;
        if (d.y) {
            d.width = d.slideWrap.offsetWidth;
            var b = d.imgRatio;
            d.imgRatio = d.slideWrap.offsetWidth ? (360 / d.slideWrap.offsetWidth) : 0;
            d.slideSmallImg.style.top = d.y / d.imgRatio + "px";
            d.slideSmallImg.style.width = 50 / d.imgRatio + "px";
            d.slideBigImg.style.height = 140 / (360 / d.slideWrap.offsetWidth) + "px";
            d.slideSmallImg.style.left = d.slideSmallImg.offsetLeft * b / d.imgRatio + "px"
        }
        if (d.params.product == "bind" || d.params.product == "popup" || d.params.product == "click-popup") {
            d.popContent.style.marginLeft = d.popContent.offsetWidth < 360 ? (document.body.clientWidth * (-0.45) + "px") : (d.popContent.offsetWidth / 2 * -1 + "px")
        }
        if (d.params.product == "click-bind-suspend" && d.slideWrap) {
            var a = 672
            var c = 372;
            c -= 140 / (360 / d.slideWrap.offsetWidth) + 120;
            d.warp.style.top = typeof (d.params.top) != "undefined" ? d.params.top : (c + "px");
            d.warp.style.left = a + "px"
        }
        if (d.params.product == "i-dsc" && d.dscWrap) {
            var a = 672
            var c = 372;
            c -= 190 / (360 / d.dscWrap.offsetWidth) + 70;
            d.warp.style.top = typeof (d.params.top) != "undefined" ? d.params.top : (c + "px");
            d.warp.style.left = a + "px";
            d.width = d.dscWrap.offsetWidth
        }
        if (d.params.product == "i-pic-click" && d.picClickWrap) {
            var a = 672
            var c = 372;
            c -= 333 / (640 / d.picClickWrap.offsetWidth) + 70;
            d.warp.style.top = typeof (d.params.top) != "undefined" ? d.params.top : (c + "px");
            d.warp.style.left = a + "px";
            d.width = d.picClickWrap.offsetWidth
        }
    },
    rv: function() {
        var a = this;
        setTimeout(function() {
            a.slideBtn.setAttribute("class", "JDJRV-slide-inner JDJRV-slide-btn JRJRV-animate-el");
            a.slideBtn.setAttribute("className", "JDJRV-slide-inner JDJRV-slide-btn JRJRV-animate-el");
            a.slideGreenBar.setAttribute("class", "JDJRV-slide-inner JDJRV-slide-bar JRJRV-animate-el");
            a.slideGreenBar.setAttribute("className", "JDJRV-slide-inner JDJRV-slide-bar JRJRV-animate-el");
            a.slideWrap.setAttribute("class", "JDJRV-slide");
            a.slideWrap.setAttribute("className", "JDJRV-slide");
            a.slideBtn.style.left = "0px";
            a.slideGreenBar.style.width = "0";
            a.slideText.setAttribute("class", "JDJRV-slide-inner JDJRV-slide-text");
            a.slideText.setAttribute("className", "JDJRV-slide-inner JDJRV-slide-text");
            setTimeout(function() {
                a.slideBtn.setAttribute("class", "JDJRV-slide-inner JDJRV-slide-btn");
                a.slideBtn.setAttribute("className", "JDJRV-slide-inner JDJRV-slide-btn");
                a.slideGreenBar.setAttribute("class", "JDJRV-slide-inner JDJRV-slide-bar");
                a.slideGreenBar.setAttribute("className", "JDJRV-slide-inner JDJRV-slide-bar")
            }, 400)
        }, 600)
    },
    vi: function() {
        var a = this;
        a.jp(a.apiServer + "/slide/g.html", {
            appId: a.params.appId,
            scene: a.params.scene,
            product: a.params.product,
            e: a.ei(),
            lang: a.lang ? a.lang : "zh_CN"
        }, "callback", function(b) {
            if (a.params.product != "click" && a.params.product != "click-bind" && a.params.product != "suspend" && a.params.product != "bind-suspend" && a.params.product != "dsc" && a.params.product != "i-dsc" && a.params.product != "pic-click" && a.params.product != "i-pic-click") {
                a.slideBigImg.innerHTML = '<img src="' + a.is(b.static_servers, b.bg) + '">';
                a.slideSmallImg.innerHTML = '<img src="' + a.is(b.static_servers, b.patch) + '">';
                a.y = b.y;
                a.slideSmallImg.style.top = b.y / a.imgRatio + "px";
                a.slideSmallImg.style.width = 50 / a.imgRatio + "px";
                a.slideSmallImg.style.left = 0 + "px"
            } else {
                if (a.params.product == "dsc" || a.params.product == "i-dsc") {
                    a.dscBigImg.innerHTML = '<img src="' + a.is(b.static_servers, b.bg) + '">';
                    a.questionLable.innerHTML = b.desc
                } else {
                    if (a.params.product == "pic-click" || a.params.product == "i-pic-click") {
                        a.picClickBigImg.innerHTML = '<img src="' + a.is(b.static_servers, b.bg) + '">';
                        a.questionLable.innerHTML = b.desc + '<img src="' + a.is(b.static_servers, b.cp) + '">';
                        a.operLimit = b.n;
                        a.picClickResult.style.bottom = "-30px"
                    }
                }
            }
            a.validateID = b.challenge;
            a.o = b.o;
            setTimeout(function() {
                a.rs()
            }, 60);
            setTimeout(function() {
                a.rs()
            }, 1000)
        })
    },
    sb: function() {
        var h = this;
        var g;
        if (h.params.product == "click" || h.params.product == "click-bind" || h.params.product == "suspend" || h.params.product == "bind-suspend") {
            g = h.clickProductData;
            var a = g.length;
            if (a > 300) {
                g = h.clickProductData.slice(a - 300, a)
            }
        } else {
            if (h.params.product == "dsc" || h.params.product == "i-dsc") {
                g = h.mousePos;
                var a = g.length;
                if (a > 300) {
                    g = h.mousePos.slice(a - 300, a)
                }
            } else {
                g = h.mousePos
            }
        }
        var f = "";
        if (h.o) {
            try {
                var b = h.gi(h.o);
                if (b) {
                    f = encodeURIComponent(b.value)
                }
            } catch (c) {}
        }
        h.jp(h.apiServer + "/slide/s.html", {
            d: h.gc(g),
            c: h.validateID,
            w: h.width ? h.width.toFixed(0) : 0,
            appId: h.params.appId,
            scene: h.params.scene,
            product: h.params.product,
            e: h.ei(),
            s: h.si(),
            o: f,
            lang: h.lang ? h.lang : "zh_CN"
        }, "callback", function(k) {
            if (h.params.product == "click" || h.params.product == "click-bind" || h.params.product == "suspend" || h.params.product == "bind-suspend") {
                if (k.success == 0) {
                    if (h.params.product == "suspend") {
                        h.params.product = "click-suspend"
                    } else {
                        if (h.params.product == "bind-suspend") {
                            if (k.nextVerify == "DSC_VERIFY") {
                                h.params.product = "i-dsc"
                            } else {
                                if (k.nextVerify == "PIC_CLICK_VERIFY") {
                                    h.params.product = "i-pic-click"
                                } else {
                                    h.params.product = "click-bind-suspend"
                                }
                            }
                        } else {
                            h.params.product = "click-popup"
                        }
                    }
                    h.ih();
                    h.warp.style.display = "block";
                    setTimeout(function() {
                        h.rs()
                    }, 60);
                    setTimeout(function() {
                        h.rs()
                    }, 1000)
                } else {
                    h.cs()
                }
            } else {
                if (h.params.product == "dsc" || h.params.product == "i-dsc") {
                    var e = h.mousePos[h.mousePos.length - 1];
                    var d = h.mousePos[h.mousePos.length - 2];
                    h.dscResult.style.top = (d[1] - e[1] - 20) + "px";
                    h.dscResult.style.left = (d[0] - e[0] - 20) + "px";
                    h.dscResult.style.display = "block";
                    if (k.success == 0) {
                        h.dscResult.setAttribute("class", "JDJRV-dsc-result JDJRV-dsc-result-err");
                        h.dscResult.setAttribute("className", "JDJRV-dsc-result JDJRV-dsc-result-err");
                        if (h.params.product == "i-dsc") {
                            h.params.product = k.nextVerify == "SLIDE_VERIFY" ? "click-bind-suspend" : "i-dsc"
                        }
                        setTimeout(function() {
                            if (h.params.product == "i-dsc") {
                                h.dscResult.style.display = "none";
                                h.vi();
                                h.bd();
                                h.rs()
                            } else {
                                h.ih();
                                h.warp.style.display = "block";
                                h.rs()
                            }
                        }, 500)
                    } else {
                        h.dscResult.setAttribute("class", "JDJRV-dsc-result JDJRV-dsc-result-succ");
                        h.dscResult.setAttribute("className", "JDJRV-dsc-result JDJRV-dsc-result-succ");
                        h.refreshBtn.style.display = "none";
                        if (h.params.product == "i-dsc") {
                            setTimeout(function() {
                                h.warp.style.display = "none"
                            }, 800)
                        }
                    }
                } else {
                    if (h.params.product == "pic-click" || h.params.product == "i-pic-click") {
                        h.picClickResult.style.display = "block";
                        if (k.success == 0) {
                            h.picClickResult.setAttribute("class", "JDJRV-pic-click-result JDJRV-pic-click-result-err");
                            h.picClickResult.setAttribute("className", "JDJRV-pic-click-result JDJRV-pic-click-result-err");
                            h.picClickResult.innerHTML = "验证失败，请重试";
                            setTimeout(function() {
                                h.picClickResult.style.bottom = "0px"
                            }, 10);
                            h.mousePos = new Array();
                            for (var j = 0; j < h.operSeqs.length; j++) {
                                h.operSeqs[j].style.display = "none"
                            }
                            if (h.params.product == "i-pic-click") {
                                h.params.product = k.nextVerify == "SLIDE_VERIFY" ? "click-bind-suspend" : "i-pic-click"
                            }
                            setTimeout(function() {
                                if (h.params.product == "i-pic-click") {
                                    h.picClickResult.style.display = "none";
                                    h.vi();
                                    h.bp();
                                    h.rs()
                                } else {
                                    h.ih();
                                    h.warp.style.display = "block";
                                    h.rs()
                                }
                            }, 1000)
                        } else {
                            h.picClickResult.setAttribute("class", "JDJRV-pic-click-result JDJRV-pic-click-result-succ");
                            h.picClickResult.setAttribute("className", "JDJRV-pic-click-result JDJRV-pic-click-result-succ");
                            h.picClickResult.innerHTML = "验证成功";
                            h.picClickResult.style.bottom = "0px";
                            h.refreshBtn.style.display = "none";
                            for (var j = 0; j < h.operSeqs.length; j++) {
                                h.operSeqs[j].onmousedown = null
                            }
                            if (h.params.product == "i-pic-click") {
                                setTimeout(function() {
                                    h.warp.style.display = "none"
                                }, 800)
                            }
                        }
                    } else {
                        if (k.success == 0) {
                            h.slideWrap.setAttribute("class", "JDJRV-slide JDJRV-slide-err");
                            h.slideWrap.setAttribute("className", "JDJRV-slide JDJRV-slide-err");
                            if (h.params.product == "click-bind-suspend" && k.nextVerify == "DSC_VERIFY") {
                                h.params.product = k.nextVerify == "DSC_VERIFY" ? "i-dsc" : "click-bind-suspend";
                                setTimeout(function() {
                                    h.ih();
                                    h.warp.style.display = "block"
                                }, 500)
                            } else {
                                setTimeout(function() {
                                    h.vi()
                                }, 500);
                                h.rv()
                            }
                        } else {
                            h.passValidate = true;
                            h.slideWrap.setAttribute("class", "JDJRV-slide JDJRV-slide-succ");
                            h.slideWrap.setAttribute("className", "JDJRV-slide JDJRV-slide-succ");
                            h.slideGreenBar.style.width = "100%";
                            h.slideGreenBarCenter.innerHTML = h.params.successMess ? h.params.successMess : h.i18nParams["default-slide-success"];
                            h.refreshBtn.style.display = "none";
                            if (h.params.product == "float") {
                                h.slideTimer = setTimeout(function() {
                                    h.slideImgWrap.setAttribute("class", "JDJRV-img-panel JDJRV-float");
                                    h.slideImgWrap.setAttribute("className", "JDJRV-img-panel JDJRV-float")
                                }, 300)
                            }
                            if (h.params.product == "bind" || h.params.product == "popup" || h.params.product == "click-popup" || h.params.product == "click-bind-suspend") {
                                setTimeout(function() {
                                    h.warp.style.display = "none"
                                }, 800)
                            }
                            if (h.params.product == "popup" || h.params.product == "click-popup" || h.params.product == "click-suspend") {
                                h.cs()
                            }
                        }
                    }
                }
            }
            h.sc(k)
        }, function() {
            if (h.params.product == "click" || h.params.product == "click-bind") {
                h.params.product = "click-popup";
                h.ih();
                h.warp.style.display = "block";
                setTimeout(function() {
                    h.rs()
                }, 50)
            } else {
                if (h.params.product == "dsc") {
                    h.dscResult.setAttribute("class", "JDJRV-dsc-result JDJRV-dsc-result-err");
                    h.dscResult.setAttribute("className", "JDJRV-dsc-result JDJRV-dsc-result-err");
                    setTimeout(function() {
                        h.ih()
                    }, 500)
                } else {
                    h.slideWrap.setAttribute("class", "JDJRV-slide JDJRV-slide-err");
                    h.slideWrap.setAttribute("className", "JDJRV-slide JDJRV-slide-err");
                    setTimeout(function() {
                        h.vi()
                    }, 500);
                    h.rv()
                }
            }
        })
    },
    sc: function(b) {
        var c = this;
        var a = {};
        a.getSuccess = function() {
            return b.success
        }
        ;
        a.getMessage = function() {
            return b.message
        }
        ;
        a.getValidate = function() {
            return ""
        }
        ;
        if (b.success == 0) {
            if (c.params.failCallback) {
                c.callback(a)
            }
        } else {
            a.getValidate = function() {
                return b.validate
            }
            ;
            c.callback(a)
        }
    },
    cs: function() {
        var a = this;
        if (a.clickContent) {
            if (a.params.product == "suspend") {
                a.clickContent.setAttribute("class", "JDJRV-suspend-click JDJRV-suspend-click-success");
                a.clickContent.setAttribute("className", "JDJRV-suspend-click JDJRV-suspend-click-success");
                a.clickText.innerHTML = a.params.successMess ? a.params.successMess : a.i18nParams["default-suspend-success"]
            } else {
                if (a.params.product == "click-suspend") {
                    a.clickContent.setAttribute("class", "JDJRV-suspend-click JDJRV-suspend-click-success");
                    a.clickContent.setAttribute("className", "JDJRV-suspend-click JDJRV-suspend-click-success");
                    a.clickText.innerHTML = a.params.successMess ? a.params.successMess : a.i18nParams["default-suspend-success"];
                    a.suspendSlideWarp.style.display = "none"
                } else {
                    a.clickContent.setAttribute("class", "JDJRV-click-warp JDJRV-click-success");
                    a.clickContent.setAttribute("className", "JDJRV-click-warp JDJRV-click-success");
                    a.clickImg.src = this.protocol + (a.lang && a.lang != "zh_CN" ? "//static.joybuy.com/risk-cdn/iv/images/slide-succ.png" : "//ivs.jd.com/slide/i/slide-succ.png");
                    a.clickText.innerHTML = a.params.successMess ? a.params.successMess : a.i18nParams["default-suspend-success"]
                }
            }
        }
        a.clickResult = true
    },
    is: function(b, a) {
        return ((a.lastIndexOf(".png") > 0 || a.lastIndexOf(".jpg") > 0 || a.lastIndexOf(".webp") > 0) ? (this.protocol + b) : "data:image/png;base64,") + a
    },
    jp: function(b, h, l, m, k) {
        var d = "jsonp_" + Math.random();
        d = d.replace(".", "");
        window[d] = function(i) {
            clearTimeout(c);
            window[d] = null;
            f.removeChild(e);
            m(i)
        }
        ;
        var c = setTimeout(function() {
            window[d] = null;
            f.removeChild(e);
            k && k()
        }, 5000);
        h[l] = d;
        var j = [];
        for (var g in h) {
            j.push(g + "=" + h[g])
        }
        var a = b + "?" + j.join("&");
        var e = document.createElement("script");
        e.src = a;
        e.type = "text/javascript";
        var f = document.getElementsByTagName("head")[0];
        f.appendChild(e)
    },
    aj: function(a) {
        a = a || {};
        a.type = (a.type || "GET").toUpperCase();
        a.dataType = a.dataType || "json";
        var c = this.fp(a.data);
        if (window.XMLHttpRequest) {
            var b = new XMLHttpRequest()
        } else {
            var b = new ActiveXObject("Microsoft.XMLHTTP")
        }
        b.onreadystatechange = function() {
            if (b.readyState == 4) {
                var d = b.status;
                if (d >= 200 && d < 300) {
                    a.success && a.success(b.responseText, b.responseXML)
                } else {
                    a.fail && a.fail(d)
                }
            }
        }
        ;
        if (a.type == "GET") {
            b.open("GET", a.url + "?" + c, true);
            b.send(null)
        } else {
            if (a.type == "POST") {
                b.open("POST", a.url, true);
                b.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                b.send(c)
            }
        }
    },
    fp: function(c) {
        var a = [];
        for (var b in c) {
            a.push(encodeURIComponent(b) + "=" + encodeURIComponent(c[b]))
        }
        a.push(("v=" + Math.random()).replace(".", ""));
        return a.join("&")
    },
    st: function(d) {
        var c = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-~".split("")
          , b = c.length
          , e = +d
          , a = [];
        do {
            mod = e % b;
            e = (e - mod) / b;
            a.unshift(c[mod])
        } while (e);return a.join("")
    },
    pi: function(a, b) {
        return (Array(b).join(0) + a).slice(-b)
    },
    pm: function(d, c, b) {
        var f = this;
        var e = f.st(Math.abs(d));
        var a = "";
        if (!b) {
            a += (d > 0 ? "1" : "0")
        }
        a += f.pi(e, c);
        return a
    },
    gc: function(c) {
        var g = this;
        var b = new Array();
        for (var e = 0; e < c.length; e++) {
            if (e == 0) {
                b.push(g.pm(c[e][0] < 262143 ? c[e][0] : 262143, 3, true));
                b.push(g.pm(c[e][1] < 16777215 ? c[e][1] : 16777215, 4, true));
                b.push(g.pm(c[e][2] < 4398046511103 ? c[e][2] : 4398046511103, 7, true))
            } else {
                var a = c[e][0] - c[e - 1][0];
                var f = c[e][1] - c[e - 1][1];
                var d = c[e][2] - c[e - 1][2];
                b.push(g.pm(a < 4095 ? a : 4095, 2, false));
                b.push(g.pm(f < 4095 ? f : 4095, 2, false));
                b.push(g.pm(d < 16777215 ? d : 16777215, 4, true))
            }
        }
        return b.join("")
    },
    ei: function() {
        var a = "";
        try {
            a = getJdEid().eid
        } catch (b) {}
        try {
            if (a == "") {
                getJdEid(function(d, e, c) {
                    a = d
                })
            }
        } catch (b) {}
        return a
    },
    si: function() {
        var b = "";
        try {
            if ("undefined" != typeof _jdtdmap_sessionId) {
                b = _jdtdmap_sessionId
            }
        } catch (a) {
            console.error("sessionId err;")
        }
        return b
    },
    gl: function(d) {
        var b = d;
        var c = 0;
        var f = 0;
        if (document.getElementById || document.all) {
            do {
                f += d.offsetLeft - d.scrollLeft;
                c += d.offsetTop - d.scrollTop;
                d = d.offsetParent;
                b = b.parentNode;
                while (b != d) {
                    f -= b.scrollLeft;
                    c -= b.scrollTop;
                    b = b.parentNode
                }
            } while (d.offsetParent)
        } else {
            if (document.layers) {
                c += d.y;
                f += d.x
            }
        }
        if (document.compatMode == "BackCompat") {
            var a = document.body.scrollLeft
        } else {
            var a = document.documentElement.scrollLeft
        }
        return f - a
    },
    gt: function(c) {
        var a = c;
        var b = 0;
        var f = 0;
        if (document.getElementById || document.all) {
            do {
                f += c.offsetLeft - c.scrollLeft;
                b += c.offsetTop - c.scrollTop;
                c = c.offsetParent;
                a = a.parentNode;
                while (a != c) {
                    f -= a.scrollLeft;
                    b -= a.scrollTop;
                    a = a.parentNode
                }
            } while (c.offsetParent)
        } else {
            if (document.layers) {
                b += c.y;
                f += c.x
            }
        }
        if (document.compatMode == "BackCompat") {
            var d = document.body.scrollTop
        } else {
            var d = document.documentElement.scrollTop
        }
        return b - d
    }
};

let a = {id: "loginsubmit", appId: "1604ebb2287", scene: "login", product: "click-bind-suspend", width: "100%"}

function b(){}



//jd = new JDJRValidate(a, b)

//let ret = jd.gc([["200", "300", 1585650157430],["200", "300", 1585650157430]])

//gc.call(JDJRValidate,[])

//console.log(ret)
let arr = [["200", "300", 1585650157430], ["200", "300", 1585650157430]];
function gc(c) {
        var g = this;
        var b = new Array();
        for (var e = 0; e < c.length; e++) {
            if (e == 0) {
                b.push(pm(c[e][0] < 262143 ? c[e][0] : 262143, 3, true));
                b.push(pm(c[e][1] < 16777215 ? c[e][1] : 16777215, 4, true));
                b.push(pm(c[e][2] < 4398046511103 ? c[e][2] : 4398046511103, 7, true))
            } else {
                var a = c[e][0] - c[e - 1][0];
                var f = c[e][1] - c[e - 1][1];
                var d = c[e][2] - c[e - 1][2];
                b.push(pm(a < 4095 ? a : 4095, 2, false));
                b.push(pm(f < 4095 ? f : 4095, 2, false));
                b.push(pm(d < 16777215 ? d : 16777215, 4, true))
            }
        }
        return b.join("")
    }

         function pi(a, b) {
        return (Array(b).join(0) + a).slice(-b)
    }

    function pm(d, c, b) {

        var e = st(Math.abs(d));
        var a = "";
        if (!b) {
            a += (d > 0 ? "1" : "0")
        }
        a += pi(e, c);
        return a
    }

    function st(d) {
        var c = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-~".split("")
          , b = c.length
          , e = +d
          , a = [];
        do {
            mod = e % b;
            e = (e - mod) / b;
            a.unshift(c[mod])
        } while (e);return a.join("")
    }

console.log(gc(arr))


