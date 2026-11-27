import {test, expect} from "@playwright/test"

test('windo Handles', async({page, context})=>
{
    //Navigate the page to URL
    await page.goto("https://www.leafground.com/window.xhtml");
    //wait the page event
    const newpagepromise=context.waitForEvent("page");
    //click the check and confirm to open new window
    await page.getByText('Open', {exact:true}).click();
    //wait the event load compeletly
    const newpage=await newpagepromise
    //Enter the email id in the text box on the next window
    await newpage.locator("#email").fill("testleaf@gmail.com");
    //back into the first page
    await page.bringToFront();
    //await page.waitForLoadState();
    await page.waitForTimeout(5000);
    
});