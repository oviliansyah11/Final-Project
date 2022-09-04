import inventoryPage from "../../pages/InventoryPage";
import LoginPage from "../../pages/LoginPage";

describe("Check Products Function", () => {
  beforeEach(() => {
    const url = Cypress.env("baseUrl");
    cy.visit(url);
    LoginPage.typeUsername("standard_user");
    LoginPage.typePassword("secret_sauce");
    LoginPage.clickLogin();
  });

  it("Contains Products, Cart and List Products", () => {
    inventoryPage.title;
    const cart = inventoryPage.elements.cart();
    cart.should("be.visible");
    inventoryPage.listInventory;
  });

  it("Add single product to cart", () => {
    inventoryPage.addToCartBackpack();

    const cart = inventoryPage.elements.cart();
    cart.should("be.visible");
    cart.should("have.text", "1");

    inventoryPage.removeFromCartBackpack();
  });

  it("Add multiple product to cart", () => {
    inventoryPage.addToCartBackpack();
    inventoryPage.addToCartBikeLight();

    const cart = inventoryPage.elements.cart();
    cart.should("be.visible");
    cart.should("have.text", "2");

    inventoryPage.removeFromCartBackpack();
    inventoryPage.removeFromCartBikeLight();
  });
});
