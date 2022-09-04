class InventoryPage {
  elements = {
    title: () => cy.get(".title"),
    cart: () => cy.get(".shopping_cart_link"),
    listInventory: () => cy.get(".inventory_list"),
    addToCartBackpack: () =>
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
    removeFromCartBackpack: () =>
      cy.get('[data-test="remove-sauce-labs-backpack"]'),
    addToCartBikeLigh: () =>
      cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]'),
    removeFromCartBikeLight: () =>
      cy.get('[data-test="remove-sauce-labs-bike-light"]'),
  };

  title() {
    this.elements.title().should("be.visible");
    this.elements.title().should("have.text", "Products");
  }

  listInventory() {
    this.elements.listInventory().should("be.visible");
  }

  addToCartBackpack() {
    this.elements.addToCartBackpack().should("be.visible");
    this.elements.addToCartBackpack().should("have.text", "Add to cart");
    this.elements.addToCartBackpack().click();
  }

  removeFromCartBackpack() {
    this.elements.removeFromCartBackpack().should("be.visible");
    this.elements.removeFromCartBackpack().should("have.text", "Remove");
    this.elements.removeFromCartBackpack().click();
  }
  addToCartBikeLight() {
    this.elements.addToCartBikeLigh().should("be.visible");
    this.elements.addToCartBikeLigh().should("have.text", "Add to cart");
    this.elements.addToCartBikeLigh().click();
  }

  removeFromCartBikeLight() {
    this.elements.removeFromCartBikeLight().should("be.visible");
    this.elements.removeFromCartBikeLight().should("have.text", "Remove");
    this.elements.removeFromCartBikeLight().click();
  }
}

module.exports = new InventoryPage();
