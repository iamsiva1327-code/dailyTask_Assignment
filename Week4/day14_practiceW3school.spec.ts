import {test, expect} from "@playwright/test"

test('handling simple alert', async({page})=>
{
    //Navigate the page to URL
    await page.goto ("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");

    //Handle the alert using W3school
    page.on("dialog", async(dialog)=>
    {
       await page.getByRole('button', {name:"Try it"}).click();
       dialog.accept();
       await expect(page.locator("//p[text()='You pressed OK!']")).toBeVisible();
       
        

    })
    
})