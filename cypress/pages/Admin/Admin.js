class Admin {
  elements = {
    admin: () => cy.get(":nth-child(1) > .oxd-main-menu-item"),
    btnAdd: () => cy.get(".bi-plus"),
    btnSave: () => cy.get(".oxd-button--secondary"),
    errMessage: () => cy.get(".oxd-input-field-error-message"),
    roleAdmin: () =>
      cy
        .get(
          ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
        )
        .click(),
    statusEnabled: () =>
      cy
        .get(
          ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
        )
        .click(),
    inputEmployee: () => cy.get(".oxd-autocomplete-text-input > input"),
    inputUsername: () =>
      cy.get(":nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input"),
    inputPassword: () =>
      cy.get(
        ".user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input"
      ),
    confirmPassword: () =>
      cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"),
    successMessage: () => cy.get(".oxd-toast-container"),
  };

  clickAdmin() {
    this.elements.admin().click();
  }

  btnAdd() {
    this.elements.btnAdd().click();
  }

  btnSave() {
    this.elements.btnSave().click();
  }

  errMessage() {
    this.elements.errMessage().should("be.visible").contains("Required");
  }

  roleAdmin() {
    this.elements.roleAdmin();
    cy.get(".oxd-select-dropdown > :nth-child(2)").click();
  }

  statusEnabled() {
    this.elements.statusEnabled();
    cy.get(".oxd-select-dropdown > :nth-child(2)").click();
  }

  inputEmployee(employeeName) {
    this.elements.inputEmployee().type(employeeName);
    cy.wait(2);
    cy.get(".oxd-autocomplete-option > span").click();
  }

  inputUsername(username) {
    this.elements.inputUsername().type(username);
  }

  inputPassword(password) {
    this.elements.inputPassword().type(password);
  }

  confirmPassword(password) {
    this.elements.confirmPassword().type(password);
  }

  successMessage(message) {
    this.elements.successMessage().contains(message);
  }
}

module.exports = new Admin();
