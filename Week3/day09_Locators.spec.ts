import test from "@playwright/test";

test("Test to verify Create Lead function", async({page})=>{

//load the url
await page.goto("https://leaftaps.com/opentaps/control/main");

await page.getByRole('textbox', { name: 'USERNAME' }).fill('demosalesmanager');
await page.getByRole('textbox', { name: 'PASSWORD' }).fill('crmsfa');
await page.getByRole('button', { name: 'Login' }).click();
await page.getByRole('link', { name: 'CRM/SFA' }).click();
await page.getByText('Leads', {exact: true}).click();
//await page.getByRole('link', { name: 'Create Lead' }).click();
await page.getByText('Create Lead').click();
await page.locator('#createLeadForm_companyName').fill('TestLeaf');
await page.locator('#createLeadForm_firstName').type('Sivaram');
await page.locator('#createLeadForm_lastName').type('krishnan');
await page.locator('.smallSubmit').click();

page.getByRole




//click the create lead button
//await page.locator('[name="submitButton"]').click();

//add the wait
await page.waitForTimeout(5000);

})