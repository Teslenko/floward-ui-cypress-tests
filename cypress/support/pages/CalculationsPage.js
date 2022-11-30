import { StringHelper } from "../../e2e/uiTest/helpers/StringHelper";

const stringHelper = new StringHelper();

export class CalculationsPage {
  constructor() {
    this._selectors = {
      governmentBonds: "[title='Державні облігації']",
      indexObligationSelector: ".dataRow.odd > td:nth-child(2) span",
    };

    this._data = {
      itsFactorialValue: "Yes, it's a factorial value",
      itsNotFactorialValue: "No, it's not a factorial value",
    };
  }

  getGovernmentBonds() {
    return cy.get(this._selectors.governmentBonds);
  }

  isFactorial(v) {
    var factorial = stringHelper.defineFactorial(v);
    if (factorial == 1) {
      cy.log(this._data.itsFactorialValue);
    } else {
      cy.log(this._data.itsNotFactorialValue);
    }
  }
}
