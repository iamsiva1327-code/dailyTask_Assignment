import {test, expect} from "@playwright/test"

test('create lead from leaftaps', async({page})=>
{
    //Navigate the URL
    await page.goto("https://leaftaps.com/opentaps/control/main");

    //Enter the username and verify
    const userName=await page.getByRole('textbox', {name:'Username'});
    await expect(userName).toBeEnabled();  // pre condition check
    await userName.fill("demosalesmanager");

    //Enter teh password and verify
    const password=await page.getByRole('textbox',{name:'Password'});
    await expect(password).toBeEnabled();// pre condition check
    await password.fill("crmsfa");
    
    //click the login button
    const loginButton=await page.getByRole('button', {name:'Login'});
    await expect(loginButton).toBeVisible(); // pre condition check
    await loginButton.click();

    //click the logo
    const logo=await page.getByRole('link', {name:'CRM/SFA'});
    await expect(logo).toBeVisible(); // pre condition check
    await logo.click();

    //verify the page title
    const homePageTitle=await expect(page).toHaveTitle("My Home | opentaps CRM");
    console.log(homePageTitle);

    await page.context().storageState({path:"ssData/login_leaftaps.json"});

})