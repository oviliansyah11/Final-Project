class PIM {
  elements = {
    btnAdd: () => cy.get(".orangehrm-header-container > .oxd-button"),
    btnSave: () => cy.get(".oxd-button--secondary"),
    btnImage: () => cy.get("input[type=file]"),
    errMessage: () => cy.get(".oxd-input-field-error-message"),
    inputFirstName: () =>
      cy.get(
        ".--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input"
      ),
    inputLastName: () => cy.get(":nth-child(3) > :nth-child(2) > .oxd-input"),
    successMessage: () => cy.get(".oxd-toast-container"),
  };

  btnAdd() {
    this.elements.btnAdd().click();
  }

  btnSave() {
    this.elements.btnSave().click();
  }

  btnImage(image) {
    this.elements.btnImage().selectFile(image, {
      force: true,
    });
  }
  errMessage() {
    this.elements.errMessage().should("be.visible").contains("Required");
  }
  inputFirstName(firstName) {
    this.elements.inputFirstName().type(firstName);
  }

  inputLastName(lastName) {
    this.elements.inputLastName().type(lastName);
  }
  successMessage(message) {
    this.elements.successMessage().should("be.visible").contains(message);
  }
}

module.exports = new PIM();
