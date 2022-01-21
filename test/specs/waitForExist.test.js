const { assert } = require("chai");
const internetPage = require("../pageobjects/internet.page");

describe('Wait for exist', () => {
    it('should wait until the delete button exists', async () =>{
        await browser.url(`${browser.options.baseUrl}add_remove_elements/`)
        await internetPage.clickExampleButtonAsync()
        await internetPage.deleteButton(1).waitForExist()
        assert.equal(true, await internetPage.deleteButton(1).isExisting())
        browser.pause(2000)
    })
    it('should wait for the delete button to not exist', async () => {
        await internetPage.clickDeleteButtonAsync(1)
        await internetPage.deleteButton(1).waitForExist({reverse: true}, 500)
        assert.equal(false, await internetPage.deleteButton(1).isExisting())
        browser.pause(2000)
    })
})