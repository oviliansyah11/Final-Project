class Maintenance {
  elements = {
    menuMaintenance: () => cy.get(":nth-child(10) > .oxd-main-menu-item"),
    cardAccess: () => cy.get(".orangehrm-card-container"),
    username: () =>
      cy.get(":nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-input"),
    password: () =>
      cy.get(":nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-input"),
  };

  menuMaintenance() {
    this.elements.menuMaintenance().click();
  }

  cardAccess() {
    this.elements
      .cardAccess()
      .should("be.visible")
      .contains("Administrator Access");
  }
  username() {
    this.elements.username().should("be.visible").should("have.value", "Admin");
  }
  password() {
    this.elements.password().should("be.visible");
  }
}

module.exports = new Maintenance();
