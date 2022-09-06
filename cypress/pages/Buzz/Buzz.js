class Buzz {
  elements = {
    menuBuzz: () => cy.get(":nth-child(11) > .oxd-main-menu-item"),
    title: () => cy.get(".oxd-text--h4"),
  };

  menuBuzz() {
    this.elements.menuBuzz().click();
  }

  title(title) {
    this.elements.title().should("be.visible").contains(title);
  }
}

module.exports = new Buzz();
