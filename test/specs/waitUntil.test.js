const { assert } = require("chai");
const internetPage = require("../pageobjects/internet.page");

describe('Wait until', () => {
    it('should wait until the button text changes', async () => {
        await browser.url(`${browser.options.baseUrl}dynamic_controls`)
        await internetPage.clickPageButtonAsync()
        await browser.waitUntil(async () => {
            // const result = await internetPage.pageButton.getText() === 'Add'
            // return result
            return await internetPage.pageButton.getText() === 'Add'
        }, 6000, 'Expect button text to change')
        assert.equal('Add', await internetPage.pageButton.getText())
    })
    it('should wait until the button text changes', async () => {
        await internetPage.clickPageButtonAsync()
        await browser.waitUntil(async () => {
            // const result = await internetPage.pageButton.getText() === 'Add'
            // return result
            return await internetPage.pageButton.getText() === 'Remove'
        }, 6000, 'Expect button text to change')
        assert.equal('Remove', await internetPage.pageButton.getText())
    })
})