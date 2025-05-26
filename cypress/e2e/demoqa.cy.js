const { SelectablePage } = require("../pageObjects/selectablePage");

describe('demoqa scenarios', () => {
  // beforeEach(() => {
  //   cy.visit('https://demoqa.com/selectable');
  // });

   it('grid scenario', () => {
    SelectablePage.visit();
    SelectablePage.gridButton.click();

    // c. Click - “Two”, “Four”, “Six”, “Eight”
    SelectablePage.gridNumber("Two").click();
    SelectablePage.gridNumber("Four").click();
    SelectablePage.gridNumber("Six").click();
    SelectablePage.gridNumber("Eight").click();

    // d. Validate that “Two”, “Four”, “Six”, “Eight” are highlighted
    SelectablePage.checkIfHighlighted("Two");
    SelectablePage.checkIfHighlighted("Four");
    SelectablePage.checkIfHighlighted("Six");
    SelectablePage.checkIfHighlighted("Eight");

    // e. Validate that “One”, “Three”, “Five”, “Seven”, “Nine” are not highlighted
    SelectablePage.checkIfNotHighlighted("Two");
    SelectablePage.checkIfNotHighlighted("Four");
    SelectablePage.checkIfNotHighlighted("Six");
    SelectablePage.checkIfNotHighlighted("Eight");
   })
})

