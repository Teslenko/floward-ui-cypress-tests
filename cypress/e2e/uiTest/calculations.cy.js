import { StringHelper } from "./helpers/StringHelper";
import { CalculationsPage } from "../../support/pages/CalculationsPage";

const stringHelper = new StringHelper();
const calculationsPage = new CalculationsPage();

describe("Calculations", () => {
  before(() => {
    cy.visit("https://pfts.ua/");
  });

  it("AQA-02 - Given number is factorial of any number?", () => {
    calculationsPage.getGovernmentBonds().should("be.visible");
    stringHelper.getTextFromSelector(
      calculationsPage._selectors.indexObligationSelector
    );
    cy.get("@nameText").then((nameText) => {
      cy.log(nameText);
      calculationsPage.isFactorial(nameText);
      calculationsPage.isFactorial("24");
      calculationsPage.isFactorial("120");
      calculationsPage.isFactorial("12");
      calculationsPage.isFactorial("720");
    });
  });
});
