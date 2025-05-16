import { BasePage } from "./basePage";
export class SelectablePage extends BasePage{
    static get url(){
        return "/selectable/";
    }
    static get gridButton(){
        return cy.get("a#demo-tab-grid");
    }
    static numberButton(number){
        return cy.get("div#gridContainer").contains(number);
    }
    static checkIfHighlighted(number){
        return cy.get('[class="list-group-item active list-group-item-action"]').should("contain", number);
    }
    static checkIfNotHighlighted(number){
        return cy.get('[class="list-group-item list-group-item-action"]').should("contain", number);
    }
  }