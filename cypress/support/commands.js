import { navigateToHomePage } from "./commands_functions";
import "cypress-iframe";

Cypress.Commands.add("navigateToHomePage", () => {
  navigateToHomePage();
});

Cypress.Commands.add("getiFrame", () => {
  return cy
    .get(".aut-iframe")
    .its("0.contentDocument.body")
    .should("not.be.undefined");
});
