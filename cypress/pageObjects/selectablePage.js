import { BasePage } from "./basePage";
export class SelectablePage extends BasePage{
    static get url(){
        return "https://demoqa.com/selectable";
    }

    static gridButton() {
        return cy.get("a#demo-tab-grid");
    }

    static gridNumber(number) {
        return cy.get("div#gridContainer").should("contain", number);
    }

    static checkIfHighlighted(number) {
        return cy.get('[class = "list-group-item active list-group-item-action"]').should("contain", number);
    }

    static checkIfNotHighlighted(number) {
        return cy.get('[class = "list-group-item list-group-item-action"]').should("contain", number);
    }
}