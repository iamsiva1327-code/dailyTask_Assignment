    import test from "@playwright/test";

test("Test the alert using switch case", async ({ page }) => {
    await page.goto("https://leafground.com/alert.xhtml");

    page.on("dialog", async (dialog) => {
        switch (dialog.type()) {
            case "alert":
                await dialog.accept();
                break;
            case "confirm":
                await dialog.dismiss();
                break;
            case "prompt":
                await dialog.accept("Playwright");
                break;
        }
    });

    await page.locator("//h5[text()=' Alert (Simple Dialog)']/following-sibling::button").click();
    await page.locator("//h5[text()=' Alert (Confirm Dialog)']/following-sibling::button").click();
    await page.locator("//h5[text()=' Alert (Prompt Dialog)']/following-sibling::button").click();
});