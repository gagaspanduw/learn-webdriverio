const { assert } = require("chai");
const internetPage = require("../pageobjects/internet.page");

describe('Javascipt Alerts', () => {
    it('should get text of alerts', async () => {
        await browser.url(`${browser.options.baseUrl}javascript_alerts`)
        await internetPage.clickJavascriptAlertButtonAsync(1)
        await browser.pause(3000)
        assert.equal('I am a JS Alert', await browser.getAlertText())
        console.log(await browser.getAlertText())
    })
    it('should accept alert', async () =>{
        await browser.acceptAlert()
        assert.equal('You successfully clicked an alert', await internetPage.getResultText())
        await browser.pause(3000)
    })
    it('should dismiss alert', async () => {
        await internetPage.clickJavascriptAlertButtonAsync(2)
        await browser.dismissAlert()
        assert.equal('You clicked: Cancel', await internetPage.getResultText())
    })
    it('should send text to the alert', async () => {
        await internetPage.clickJavascriptAlertButtonAsync(3)
        await browser.sendAlertText('This is some text')
        await browser.acceptAlert()
        assert.equal('You entered: This is some text', await internetPage.getResultText())
    })
})