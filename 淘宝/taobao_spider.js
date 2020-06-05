const puppeteer = require('../../../node_modules/puppeteer');
let url = "https://list.tmall.com/search_product.htm?q=%D0%A1%C3%D710&type=p&vmarket=&spm=875.7931836%2FB.a2227oh.d100&from=mallfp..pc_1_searchbutton"
// let url = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&tn=baidu&wd=%E5%B0%8F%E7%B1%B3&oq=puppeteer%25E7%2588%25AC%25E8%2599%25AB&rsv_pq=bead0872001206af&rsv_t=aaddXITKs7YDa9dwzADLC%2BaCqHeVNFHrZu9jIq%2BppZL5da11VrGwSz%2BK2E0&rqlang=cn&rsv_enter=1&rsv_dl=tb&inputT=3336&rsv_sug3=108&rsv_sug1=55&rsv_sug7=100&rsv_sug2=0&rsv_sug4=3336"

async function main (){
    let browser = await puppeteer.launch({
        headless: false,
        devtools: true,
        defaultViewport: null
    
    
    })
    let page = await browser.newPage()
    await page.goto(url, { waitUntil: "networkidle0" })
    
    console.log("进入详情页");
    try{
        let list = await page.evaluate(()=>{
            let priceData = []
            let goodsList = document.querySelectorAll(".product-iWrap .productPrice em") 
            // let goodsList = document.querySelectorAll(".t") 
            goodsList.forEach(el=>{
                priceData.push(el.innerText)
            })
             return priceData
         })
         console.log(list)
    }catch{
        browser.close()
    }
    
}
main()