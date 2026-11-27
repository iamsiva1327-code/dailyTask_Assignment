import test from "@playwright/test"

import fs from "fs";

import {parse} from "csv-parse/sync";

const csvData=fs.readFileSync("./testData/loginData.csv", "utf-8");

//convert teh data into array
const csvRecords:any=parse(csvData,{columns:true,skip_empty_lines:true})

for(let i=0;i<csvRecords.length;i++)
{
    test(`login test data with csv file ${i+1}`, async({page})=>
    {
        await page.goto(csvRecords[i].url);
        await page.getByRole('textbox', { name: 'USERNAME' }).fill(csvRecords[i].username);
        await page.getByRole('textbox', { name: 'PASSWORD' }).fill(csvRecords[i].password);
        await page.getByRole('button', { name: 'Login' }).click();
    })
}
