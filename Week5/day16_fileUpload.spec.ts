import{test, expect} from "@playwright/test"
import path from "path"

test('upload input files', async({page})=>
{
    await page.goto("https://demoqa.com/upload-download");
    
    page.getByRole('button',{name:"Choose File"}).setInputFiles(path.join(__dirname,"../../uploadFile/Testleaf.png"));

    await page.waitForTimeout(3000);

})

test('test file to dowload action', async({page})=>
{
     await page.goto("https://demoqa.com/upload-download");

    const fileDownloadPromise=page.waitForEvent("download")
    
    //download button element should be clicked
    await page.getByRole('button', {name:"Download"}).click();

    const fileDown=await fileDownloadPromise;

    fileDown.saveAs(path.join('__dirname',`../../uploadFile/${fileDown.suggestedFilename()}`));

    await page.waitForTimeout(5000);

})

test("upload file without input type",async({page})=>{

    await page.goto("https://blazorise.com/docs/components/file-picker");

    const fileChooser=page.waitForEvent("filechooser");

    page.locator("//span[text()='Choose files']").first().click();

    const fileChooserPromise= await fileChooser;

    await fileChooserPromise.setFiles(path.join('__dirname',"../../uploadFile/sampleFile.jpeg"));

   await page.waitForTimeout(8000);

})