const { assert } = require("chai");
const internetPage = require("../pageobjects/internet.page");

describe('WebdriverIO API Actions', function (){
    it('should hover on figure', async () => {
        await browser.url(`${browser.options.baseUrl}/hovers`)
        await internetPage.hoverOnFigureAsync(3)
        assert.equal("name: user1", await internetPage.getHoverDetailsTextAsync(3))
    })
    it('should hover on figure 2', async () => {
        await browser.url(`${browser.options.baseUrl}/hovers`)
        await internetPage.hoverOnFigureAsync(4)
        assert.equal("name: user2", await internetPage.getHoverDetailsTextAsync(4))
    })
    it('should hover on figure 3', async () => {
        await browser.url(`${browser.options.baseUrl}/hovers`)
        await internetPage.hoverOnFigureAsync(5)
        assert.equal("name: user3", await internetPage.getHoverDetailsTextAsync(5))
    })
    it('should send keyboard value', async () => {
        browser.url(`${browser.options.baseUrl}/key_presses`)
        await internetPage.clickTargetAsync()
        await internetPage.sendKeysToTargetAsync("Backspace")
        assert.equal(await internetPage.getResultTextAsync(), 'You entered: BACK_SPACE')
    })
    it('should send keyboard value tab', async () => {
        browser.url(`${browser.options.baseUrl}/key_presses`)
        await internetPage.clickTargetAsync()
        await internetPage.sendKeysToTargetAsync("Tab")
        assert.equal(await internetPage.getResultTextAsync(), 'You entered: TAB')
    })
    it('should send keyboard value shift', async () => {
        browser.url(`${browser.options.baseUrl}/key_presses`)
        await internetPage.clickTargetAsync()
        await internetPage.sendKeysToTargetAsync("Shift")
        assert.equal(await internetPage.getResultTextAsync(), 'You entered: SHIFT')
    })
})