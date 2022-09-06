class Time {
  elements = {
    menuTime: () => cy.get(":nth-child(4) > .oxd-main-menu-item"),
    tableData: () => cy.get(".orangehrm-container"),
    btnView: () =>
      cy.get(
        ':nth-child(1) > .oxd-table-row > [style="flex: 1 1 20%;"] > .oxd-table-cell-actions > .oxd-button'
      ),
    titleTimesheet: () =>
      cy.get(".orangehrm-timesheet-header--title > .oxd-text"),
  };
  menuTime() {
    this.elements.menuTime().click();
  }
  tableData() {
    this.elements.tableData().should("be.visible").contains("View");
  }
  btnView() {
    this.elements.btnView().click({ force: true });
  }
  titleTimesheet() {
    this.elements
      .titleTimesheet()
      .should("be.visible")
      .contains("Timesheet for");
  }
}

module.exports = new Time();
