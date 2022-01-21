const { assert } = require("chai");
const internetPage = require("../pageobjects/internet.page");

describe('Dropdown menu', function(){
    it('should select option 1', async () => {
        await browser.url(`${browser.options.baseUrl}dropdown`)
        await internetPage.clickDropdownMenuAsync()
        await internetPage.clickDropdownMenuOption1Async()
        assert.equal(true, await internetPage.dropdownMenuOption1.isSelected())
    })
    it('should select option 2', async () => {
        await internetPage.clickDropdownMenuAsync()
        await internetPage.clickDropdownMenuOption2Async()
        assert.equal(true, await internetPage.dropdownMenuOption2.isSelected())
    })
})