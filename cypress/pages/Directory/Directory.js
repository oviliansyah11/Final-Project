class Directory {
  elements = {
    menuDirectory: () => cy.get(":nth-child(9) > .oxd-main-menu-item"),
    tableData: () => cy.get(".orangehrm-container"),
  };

  menuDirectory() {
    this.elements.menuDirectory().click();
  }

  tableData() {
    this.elements.tableData().should("be.visible");
  }
}

module.exports = new Directory();
