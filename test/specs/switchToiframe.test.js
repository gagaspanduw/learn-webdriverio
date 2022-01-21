const { assert } = require("chai");
const internetPage = require("../pageobjects/internet.page");

describe('Switch to iframe', function(){
    it('should switch to iframe', async () =>{
        await browser.url(`${browser.options.baseUrl}iframe`)
        await internetPage.h3Header.waitForDisplayed()
        await internetPage.iframe.waitForDisplayed()
        await browser.switchToFrame(await internetPage.iframe)
        await internetPage.sendTextToBodyAsync('This is the text in the iframe body')
        assert.equal('This is the text in the iframe body', await internetPage.iframeBody.getText())
    })
})