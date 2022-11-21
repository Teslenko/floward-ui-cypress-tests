import { HomePage } from "../../support/pages/HomePage";
import { CartPage } from "../../support/pages/CartPage";

const homePage = new HomePage();
const cartPage = new CartPage();

describe("Floward UI", () => {
  before(() => {
    cy.navigateToHomePage();
  });

  it("AQA-01 - Flower - Add product to cart", () => {
    homePage.getIconLogo().should("be.visible");
    homePage.clickHandTiedCategories();
    homePage.getProductPage().should("be.visible");
    homePage.getTextFirstProductName();
    homePage.HoverToAddToCartSection();
    homePage.clickAddToCart();
    cartPage.getCloseButton();
    cartPage.checkSuccessfulAddToCart();
    cartPage.getContinueToAddressButton().should("exist");
    cartPage.getTextProductNameOnCart();
    cartPage.compareTextProductNamesOnCartSection(
      "@firstProductName",
      "@productNameOnCart"
    );
  });
});
