import test, { expect } from "@playwright/test"

test('handle frames', async({page})=>
{
    //Navigate the page to URL
    await page.goto("https://leafground.com/frame.xhtml");

    //Inside frame

    const singleframe=page.frameLocator("[src='default.xhtml']");//single frame
    const button=singleframe.getByRole("button", {name:"Click Me"})// button inside frame
    await button.click();//click the button
    await expect(singleframe.getByRole("button", {name:'Hurray! You Clicked Me.'})).toBeVisible();
    
    //Nested frame
    const nestframe=page.frameLocator("[src='page.xhtml']")// outer html frame
    const nestframe1=nestframe.frameLocator("[src='framebutton.xhtml']"); // inner html frame
    await nestframe1.getByRole("button",{name:"Click Me"}).click(); //button inside the nested frame
    await expect(nestframe1.getByRole("button", {name:'Hurray! You Clicked Me.'})).toBeVisible();
    

})