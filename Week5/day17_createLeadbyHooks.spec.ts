import {test, expect} from "@playwright/test"

test.use({storageState:"ssData/login_leaftaps.json"})

test('create the lead', async({page})=>
{
    await page.goto("https://leaftaps.com/crmsfa/control/myHomeMain");
    await page.getByText('Leads', {exact: true}).click();
    await page.getByRole('link', {name:'Create Lead'}).click();
    await page.locator('#createLeadForm_companyName').fill('TestLeaf');

    //Enter the company name
    const companyName=await page.locator("#createLeadForm_companyName")
    await companyName.fill("Testleaf Solutions");

    //Enter the first name
    const firstName=await page.locator("#createLeadForm_firstName");
    await firstName.fill("Sivarama");


    //Enter Last name
    const lastName=await page.locator("#createLeadForm_lastName")
    await lastName.fill("Krishnan");
    

    //Select the source
    const selectSource=await page.locator("#createLeadForm_dataSourceId");
    await selectSource.click();
    await selectSource.selectOption("Partner");

    //Select Marketing campaign
    const selectMarcamp=await page.locator("#createLeadForm_marketingCampaignId");
    await selectMarcamp.click();
    await selectMarcamp.selectOption("Automobile");
    
})