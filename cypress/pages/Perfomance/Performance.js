class Performance {
  elements = {
    menuPerformance: () => cy.get(":nth-child(7) > .oxd-main-menu-item"),
    menuEmployeeTrackers: () =>
      cy.get('ul[data-v-a54b5984=""] > :nth-child(4)'),
    tableData: () => cy.get(".orangehrm-container"),
    btnView: () =>
      cy.get(
        ":nth-child(1) > .oxd-table-row > :nth-child(5) > .oxd-table-cell-actions > .oxd-button"
      ),
    trackerLogs: () => cy.get(".orangehrm-header-container > .oxd-text"),
  };
  menuPerformance() {
    this.elements.menuPerformance().click();
  }
  menuEmployeeTrackers() {
    this.elements.menuEmployeeTrackers().click();
  }
  tableData() {
    this.elements.tableData().should("be.visible").contains("Trackers");
  }
  btnView() {
    this.elements.btnView().click();
  }
  trackerLogs() {
    this.elements.trackerLogs().should("be.visible").contains("Tracker Logs");
  }
}

module.exports = new Performance();
