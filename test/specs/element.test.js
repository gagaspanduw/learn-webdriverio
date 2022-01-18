const LoginPage = require('../pageobjects/login.page');

describe("Intercting with elements", async () => {
    it("Get text for element", async () => {
        await browser.url('/');
        // await LoginPage.open();
        // await waitForDisplayed($('//*[@id="page-footer"]'))
        const text = await $('//*[@id="content"]/ul/li[11]/a');
        console.log(await text.getText());
        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        await text.click();
    });
});