const { assert } = require("chai");
const internetPage = require("../pageobjects/internet.page");

describe('Switch Window', function(){
    it('should switch to the next window', async () =>{
        await browser.url(`${browser.options.baseUrl}windows`)
        await internetPage.clickHereLinkAsync()
        await browser.switchWindow(`${browser.options.baseUrl}windows/new`)
        assert.equal(true, await internetPage.h3Header.isExisting())
        assert.equal(true, await internetPage.h3Header.isDisplayed())
        assert.equal('New Window', await internetPage.h3Header.getText())
    })
})