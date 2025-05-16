const { SelectablePage } = require("../pageObjects/SelectablePage");

describe('demoqa scenarios', () => {
   beforeEach(() => {
    cy.visit('https://demoqa.com/selectable');
 });
  it('grid scenario', () => {
    // a. Open https://demoqa.com/selectable
    SelectablePageSelectablePage.visit();

    // b. Click “Grid”
    SelectablePage.gridButton.click();

  // c. Click - “Two”, “Four”, “Six”, “Eight”
    SelectablePage.numberButton("Two").click();
    SelectablePage.numberButton("Four").click();
    SelectablePage.numberButton("Six").click();
    SelectablePage.numberButton("Eight").click();

  // d. Validate that “Two”, “Four”, “Six”, “Eight” are highlighted
    SelectablePage.checkIfHighlighted("Two");
    SelectablePage.checkIfHighlighted("Four");
    SelectablePage.checkIfHighlighted("Six");
    SelectablePage.checkIfHighlighted("Eight");

  // e. Validate that “One”, “Three”, “Five”, “Seven”, “Nine” are not highlighted
    SelectablePage.checkIfNotHighlighted("One");
    SelectablePage.checkIfNotHighlighted("Three");
    SelectablePage.checkIfNotHighlighted("Five");
    SelectablePage.checkIfNotHighlighted("Seven");
    SelectablePage.checkIfNotHighlighted("Nine");
  })
})