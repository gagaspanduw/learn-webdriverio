const { assert } = require('chai');
const internetPage = require('../pageobjects/internet.page.js');
const loginData = require('../../data/logindata.js')

describe("Intercting with elements", function () {
    it("Get text for element", async () => {
        await browser.url('/');
        // await LoginPage.open();
        // await waitForDisplayed($('//*[@id="page-footer"]'))
        let text = await $('//*[@id="content"]/ul/li[11]/a');
        console.log(await text);
        await internetPage.clickOnLinkAsync();
        // let firstlink = await $('ul li:nth-child(1) a');
        // firstlink.click();
        // await $('h3').waitForDisplayed()
        let url = await browser.getUrl()
        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'+`${url}`)
        await expect(url).equals('https://the-internet.herokuapp.com/abtest')
    });
    it("should get Text", async () => {
        await browser.url('/')
        await expect(await internetPage.getSpecificElementTextAsync(1)).equals('A/B Testing')
    })
    it("should click checkbox", async () => {
        await internetPage.clickLinkAsync(6)
        await internetPage.clickCheckboxAsync(1)
        await expect(await internetPage.checkboxes(1).isSelected()).equals(true)

    })
    it("should unchek checkbox", async () => {
        await internetPage.clickCheckboxAsync(1)
        await expect(await internetPage.checkboxes(1).isSelected()).equals(false)
    })
    it('should enter username', async () => {
        await browser.url(`${browser.options.baseUrl}/login`)
        await internetPage.enterUsernameAsync(loginData.userName)
        assert.equal(await internetPage.username.getValue(), loginData.userName)
    })
    it('should enter password', async () => {
        await browser.url(`${browser.options.baseUrl}/login`)
        await internetPage.enterPasswordAsync(loginData.Password)
        assert.equal(await internetPage.password.getValue(), loginData.Password)
    })
    it('should clear value', async () => {
        await internetPage.username.click()
        await internetPage.username.clearValue()
        assert.equal(await internetPage.username.getValue(), '')
    })
});
// describe('Test element actions', function () {
//     it('should click element', () => {
//         browser.url('http://the-internet.herokuapp.com/')
//         internetPage.clickOnLink()
//         let url = browser.getUrl()
//         expect(url).equals('http://the-internet.herokuapp.com/')
//         console.log(url)
//     })
//     // it('should get Text', () => {
//     //     browser.url('/')
//     //     expect(internetPage.getSpecificElementText(1)).equals('A/B Testing')
//     // })
//     // it('should click checkbox', () => {
//     //     internetPage.clickCheckbox(1)
//     //     expect(internetPage.clickCheckbox(1).isSelected()).equals(true)
//     // })
// })