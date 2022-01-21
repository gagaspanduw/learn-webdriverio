const { assert } = require("chai");
const internetPage = require("../pageobjects/internet.page");

describe('Wait for enabled', () => {
    it('should wait for the input field to be enabled', async () =>{
        await browser.url(`${browser.options.baseUrl}dynamic_controls`)
        await internetPage.clickEnableButtonAsync()
        await internetPage.inputEnabledField.waitForEnabled(4000)
        assert.equal(true, await internetPage.inputEnabledField.isEnabled())
        await browser.pause(4000)
    })
    it('should wait for the input field to be disabled', async () =>{
        await internetPage.clickEnableButtonAsync()
        await internetPage.inputEnabledField.waitForEnabled({ reverse: true }, 4000)
        assert.equal(false, await internetPage.inputEnabledField.isEnabled())
    })
})