const puppeteer = require("puppeteer");
const { iPhone } =  puppeteer;




// (async () => {
//   const browser = await puppeteer.launch({
//     headless:false
//   });
//   //   const context = await browser.createIncognitoBrowserContext()
//   const page = await browser.newPage();

// //   await page.authenticate({'username':'Tarun' ,  'password':'Tarun@123'})
 
//   await page.goto("https://www.flipkart.com/search?q=r&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off");
// //   console.log(page.browser())

// //   console.log(page.browserContext())

//     //  await page.emulate(iPhone);
// //   await page.screenshot({ path: "example.png", fullPage: true });

// //   await page.pdf({ path : 'example.pdf' , format : "A4"})
  
// //   console.log(browser.isConnected());

// //   console.log(await browser.version())

// //   console.log(page.browser())

//     const title =  await page.evaluate(() =>  document.title);
//     console.log(title)  

// //   const allPage = await browser.pages();

// //   console.log(allPage.length);
//      // get the amount of divs on the page


//     //  await page.setViewport({width: 1366, height: 768});

//     //  await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36');


// //     const divCount = await page.$$eval('div', divs => divs.length);
// //     console.log(divCount)
   
// //    console.log(await page.content())
// //    console.log(await page.cookies())


    
//   await browser.close();
// })();





(async () => {
  const browser = await puppeteer.launch();
  console.log(await browser.version())
  console.log(await browser.userAgent())
  console.log(await browser.browserContexts())
  console.log(await browser.isConnected())
  console.log(await browser.createIncognitoBrowserContext())
  const page = await browser.newPage();
  // await page.emulate(iPhone)
  console.log(await page.content())
  console.log(await page.cookies())
  await page.goto('https://example.com');
  
  await page.screenshot({path: 'screenshot.png' , fullPage : true});
  await page.pdf({format :"A4",path : "screenshot.pdf"})
  await browser.close();
})();