class Dashboard {
  elements = {
    menuDashboard: () => cy.get(":nth-child(8) > .oxd-main-menu-item"),
    title: () => cy.get(".oxd-text--h4"),
  };

  menuDashboard() {
    this.elements.menuDashboard().click();
  }

  title(title) {
    this.elements.title().should("be.visible").contains(title);
  }
}

module.exports = new Dashboard();
