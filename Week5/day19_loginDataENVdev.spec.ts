import test from "@playwright/test"

import dotenv from "dotenv"

//this should fetch the data from env file
dotenv.config();

test('login with env files', async({page})=>
{
    //Base URl fetched from .env.dev file
    await page.goto(process.env.BASE_URL!);

    //UserName fetched from .env.dev file
    await page.getByRole('textbox', { name: 'USERNAME' }).fill(process.env.USER_NAME!);

    //Password fetched from .env.dev file
    await page.getByRole('textbox', { name: 'PASSWORD' }).fill(process.env.PASSWORD!);
    await page.getByRole('button', { name: 'Login' }).click();
    //await page.getByRole('link', { name: 'CRM/SFA' }).click();
})
