class MyInfo {
  elements = {
    menuMyInfo: () => cy.get(":nth-child(6) > .oxd-main-menu-item"),
    employeeName: () => cy.get(".orangehrm-edit-employee-name > .oxd-text"),
    personalDetails: () =>
      cy.get(
        ".orangehrm-edit-employee-content > :nth-child(1) > .oxd-text--h6"
      ),
    inputNickname: () =>
      cy.get(
        ":nth-child(1) > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input"
      ),
    btnSave: () =>
      cy.get(":nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button"),
    successMessage: () => cy.get(".oxd-toast"),
  };
  menuMyInfo() {
    this.elements.menuMyInfo().click();
  }
  employeeName() {
    this.elements.employeeName().should("be.visible").should("not.be.null");
  }

  personalDetails(details) {
    this.elements.personalDetails().should("be.visible").contains(details);
  }
  inputNickname(nickname) {
    this.elements.inputNickname().clear();
    this.elements.inputNickname().type(nickname);
  }
  btnSave() {
    this.elements.btnSave().click();
  }

  successMessage(message) {
    this.elements.successMessage().contains(message);
  }
}

module.exports = new MyInfo();
