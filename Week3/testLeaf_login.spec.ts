import test from 'playwright/test';

test('login test', async ({ page }) => {
    await page.goto("https://leaftaps.com/opentaps/control/main");
    await page.getByRole('textbox',{name:'username'}).fill('Demosalesmanager');
    await page.getByRole('textbox',{name:'password'}).fill('crmsfa');
    await page.getByRole('button',{name:'Login'}).click();
    
})