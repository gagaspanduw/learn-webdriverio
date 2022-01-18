const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const internetPage = require('../pageobjects/internet.page.js');

describe("My Login application", () => {
    it("should login with valid credentials", async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!')
        console.log($("//*[@id='page-footer']").getText())
    })
    it("Get text for element", async () => {
        await browser.url('/');
        // await LoginPage.open();
        // await waitForDisplayed($('//*[@id="page-footer"]'))
        let text = $('//*[@id="content"]/ul/li[11]/a');
        console.log(text);
        await text.click();
    });
    it("Get text for element", async () => {
        await browser.url('/')
        let text = $("//*[@id='page-footer']")
        console.log(text)
        await internetPage.getLiText()
        await internetPage.getSpecificElementText(3)
    })
});


