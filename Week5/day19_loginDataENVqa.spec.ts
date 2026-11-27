import test from "@playwright/test"


test('login with env files', async({page})=>
{
    //configuration was done by config.ts file for env.qa
    await page.goto("/");

    //UserName fetched from .env.qa file
    await page.getByRole('textbox', { name: 'USERNAME' }).fill(process.env.USER_NAME!);

    //fetched from .env.qa file
    await page.getByRole('textbox', { name: 'PASSWORD' }).fill(process.env.PASSWORD!);
    await page.getByRole('button', { name: 'Login' }).click();
    //await page.getByRole('link', { name: 'CRM/SFA' }).click();
})
