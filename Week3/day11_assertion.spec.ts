import {expect, test} from "@playwright/test";

test("Test to verify assertion", async({page})=>{

    await page.goto("https://leaftaps.com/opentaps/control/main");

    await page.getByRole('textbox',{name:'username'}).fill('Demosalesmanager');
    await page.getByRole('textbox',{name:'password'}).fill('crmsfa');
    const loginbutton=await page.getByRole('button',{name:'Login'})
    expect(loginbutton).toBeVisible();
    await loginbutton.click();
    

})