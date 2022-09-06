class Leave {
  elements = {
    menuLeave: () => cy.get(":nth-child(3) > .oxd-main-menu-item"),
    tableData: () => cy.get(".orangehrm-container"),
    btnOther: () =>
      cy.get(
        ':nth-child(1) > .oxd-table-row > [style="flex: 1 1 20%;"] > .oxd-table-cell-actions > .oxd-table-dropdown > .oxd-icon-button > .oxd-icon'
      ),
    btnAddComment: () => cy.get(".oxd-dropdown-menu > :nth-child(1)"),
    cardSheet: () => cy.get(".oxd-sheet"),
    txtArea: () => cy.get(".oxd-textarea"),
    btnSave: () =>
      cy.get(
        ".oxd-sheet > .oxd-form > .oxd-form-actions > .oxd-button--secondary"
      ),
    successMessage: () => cy.get(".oxd-toast"),
  };

  clickMenuLeave() {
    this.elements.menuLeave().click();
  }

  tableData() {
    this.elements.tableData().should("be.visible").contains("Pending Approval");
  }

  btnOther() {
    this.elements.btnOther().click({ force: true });
  }

  btnAddComment() {
    this.elements.btnAddComment().click({ force: true });
  }

  cardSheet() {
    cy.wait(2);
    this.elements
      .cardSheet()
      .should("be.visible")
      .contains("Leave Request Comments");
  }

  txtArea(comment) {
    this.elements.txtArea().type(comment);
  }

  btnSave() {
    this.elements.btnSave().click();
  }

  successMessage(message) {
    this.elements.successMessage().contains(message);
  }
}

module.exports = new Leave();
