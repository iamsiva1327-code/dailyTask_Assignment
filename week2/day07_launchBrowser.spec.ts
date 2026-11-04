import test from 'playwright/test';
import { chromium } from 'playwright';

test('Launch Browser Test', async ({ page }) => {
  // Navigate to a sample website

  //create a browser
  //let browser = await chromium.launch();

   //create a context for the browser
  //let context = await browser.newContext();

    //create a page for the context
    //let pages = await context.newPage();

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.waitForTimeout(2000); // Wait for 2 seconds to ensure the page loads completely
});
