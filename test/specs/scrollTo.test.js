const { assert } = require("chai");
const internetPage = require("../pageobjects/internet.page");

describe('Scroll to Element', function (){
    it('should scroll to the footer', async () =>{
        await browser.url('/')
        await internetPage.pageHeader.waitForDisplayed()
        await browser.pause(5000)
        await internetPage.scrollToPageFooterAsync()
        await browser.pause(5000)
        assert.equal(true, await internetPage.pageFooter.isDisplayedInViewport())
    })
    it('should scroll into view', async () => {
        await browser.url('/')
        await internetPage.pageFooter.scrollIntoView()
        assert.equal(true, await internetPage.pageFooter.isDisplayedInViewport())
        await browser.pause(10000)
    })
})