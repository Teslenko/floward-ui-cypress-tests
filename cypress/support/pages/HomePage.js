import { StringHelper } from "../../e2e/uiTest/helpers/StringHelper";

const stringHelper = new StringHelper();

export class HomePage {
  constructor() {
    this._selectors = {
      iconLogo: '[data-testid="TestId__HeaderLogoAnchor"]',
      productName: '[data-testid="TestId__ProductName"]',
      productPage: '[data-testid="TestId__productCount"]',
      firstProduct: '[data-testid="TestId__ProductImg"]',
      addToCart: '[data-testid="TestId__ProductBtn"]',
      handTiedCategories: "//h6[contains(text(),'Hand-Tied Bouquets')]",
    };
  }

  getProductName() {
    return cy.get(this._selectors.productName);
  }

  getIconLogo() {
    return cy.get(this._selectors.iconLogo);
  }

  getFirstProduct() {
    return cy.get(this._selectors.firstProduct).first();
  }

  getProductPage() {
    return cy.get(this._selectors.productPage);
  }

  xpathHandTiedCategories() {
    return cy.xpath(this._selectors.handTiedCategories);
  }

  clickHandTiedCategories() {
    return this.xpathHandTiedCategories().should("be.visible").click();
  }

  HoverToAddToCartSection() {
    return this.getFirstProduct().realHover();
  }

  clickAddToCart() {
    return cy.contains("Add to cart").click({ force: true });
  }

  getValueFromItem(getItem, itemName) {
    let value;
    const pom = {};
    return getItem
      .first()
      .invoke("text")
      .then((text) => {
        value = /.*/.exec(text);
        cy.wrap(text).as(itemName);
        cy.get(`@${ItemName}`).then((item) => {
          pom.text = item.toString();
          cy.log(text).then((text) => {
            return text;
          });
        });
      });
  }

  getTextFirstProductName() {
    const pom = {};
    return this.getProductName()
      .first()
      .invoke("text")
      .then((text) => {
        stringHelper.getText(text);
        cy.wrap(text).as("firstProductName");
        cy.get("@firstProductName").then((firstProductName) => {
          pom.text = firstProductName.toString();
          cy.log(text).then((text) => {
            return text;
          });
        });
      });
  }
}
