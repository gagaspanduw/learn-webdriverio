const { assert } = require("chai");
const internetPage = require("../pageobjects/internet.page");

describe('Drag and Drop', function(){
    it.skip('should drag column A to column B', async () =>{
        await browser.url(`${browser.options.baseUrl}drag_and_drop`)
        await internetPage.dragColumnAToColumnBAsync()
        assert.equal('A', await internetPage.columnBHeader.getText())
    })
    it('should drag and drop', async () =>{
        await browser.url('https://crossbrowsertesting.github.io/drag-and-drop.html')
        await internetPage.dragDraggableToDroppableAsync()
        await browser.pause(5000)
        assert.equal('Dropped!', await internetPage.droppableParagraph.getText())
    })
})