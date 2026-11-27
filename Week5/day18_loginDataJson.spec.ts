import test from "@playwright/test"

import loginData from "../testData/loginData.json"

for(let i=0;i<loginData.length;i++)
{

test(`Test to verify create lead function ${i+1}`, async({page})=>
{
    await page.goto(loginData[i].url)
    await page.getByRole('textbox', { name: 'USERNAME' }).fill(loginData[i].username);
    await page.getByRole('textbox', { name: 'PASSWORD' }).fill(loginData[i].password);
    await page.getByRole('button', { name: 'Login' }).click();
})

}