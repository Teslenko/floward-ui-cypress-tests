import { StringHelper } from "../../e2e/uiTest/helpers/StringHelper";

const stringHelper = new StringHelper();

export class CartPage {
  constructor() {
    this._selectors = {
      closeButton: '[data-testid="TestId__CloseBtn"]',
      fillPayment: '[data-testid="TestId__CardMessage"]',
      continueToAddressButton: '.fui-fixed > [data-testid="TestId__Button"]',
      productNameOnCart: '[data-testid="TestId__CartItemName"]',
    };
  }
  getFillThePayment() {
    return cy.get(this._selectors.fillPayment);
  }

  getProductNameOnCart() {
    return cy.get(this._selectors.productNameOnCart);
  }

  getContinueToAddressButton() {
    return cy.get(this._selectors.continueToAddressButton);
  }

  getCloseButton() {
    return cy.get(this._selectors.closeButton).should("be.visible").click();
  }

  checkSuccessfulAddToCart() {
    return this.getFillThePayment().should("be.visible");
  }

  getTextProductNameOnCart() {
    const pom = {};
    return this.getProductNameOnCart()
      .invoke("text")
      .then((text) => {
        stringHelper.getText(text);
        cy.wrap(text).as("productNameOnCart");
        cy.get("@productNameOnCart").then((productNameOnCart) => {
          pom.text = productNameOnCart.toString();
          cy.log(text).then((text) => {
            return text;
          });
        });
      });
  }

  compareTextProductNamesOnCartSection(productName, productNameOnCart) {
    return cy.get(productName).then((productName) => {
      cy.get(productNameOnCart).then((productNameOnCart) => {
        cy.log(productName);
        cy.log(productNameOnCart);
        expect(productName).equal(productNameOnCart);
      });
    });
  }
}
