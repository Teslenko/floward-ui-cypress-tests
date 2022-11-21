import { HomePage } from "./pages/HomePage";

/**
 * This page houses supporting functions for the Cypress commands.js file. This is in place to keep that file clean and
 * readable. Page objects and other imports should be kept to this file. This should make it
 */
const homePage = new HomePage();

let env = Cypress.env("ENV");
export function navigateToHomePage() {
  cy.visit(env);
  homePage.getIconLogo().should("be.visible");
}
