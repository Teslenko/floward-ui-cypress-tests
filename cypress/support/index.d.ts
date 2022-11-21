// in cypress/support/index.d.ts
// load type definitions that come with Cypress module
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    navigateToHomePage(): Chainable;

    /**
     * Gets the iFrame located at "#iframe", validates it is not empty and returns the content.
     */
    getiFrame(): Chainable<Element>;
  }
}
