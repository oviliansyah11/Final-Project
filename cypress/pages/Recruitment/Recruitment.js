class Recruitment {
  elements = {
    menuRecruitment: () => cy.get(":nth-child(5) > .oxd-main-menu-item"),
    btnAdd: () => cy.get(".orangehrm-header-container > .oxd-button"),
    btnSave: () => cy.get(".oxd-button--secondary"),
    reqMessage: () => cy.get(".oxd-input-field-error-message"),
    firstName: () =>
      cy.get(
        ".--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input"
      ),
    lastName: () => cy.get(":nth-child(3) > :nth-child(2) > .oxd-input"),
    email: () =>
      cy.get(
        ":nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input"
      ),
    successMessage: () => cy.get(".oxd-toast-container"),
  };

  menuRecruitment() {
    this.elements.menuRecruitment().click();
  }

  btnAdd() {
    this.elements.btnAdd().click();
  }

  btnSave() {
    this.elements.btnSave().click();
  }

  reqMessage(message) {
    this.elements.reqMessage().contains(message);
  }

  firstName(firstName) {
    this.elements.firstName().type(firstName);
  }
  lastName(lastName) {
    this.elements.lastName().type(lastName);
  }
  email(email) {
    this.elements.email().type(email);
  }
  successMessage(message) {
    this.elements.successMessage().contains(message);
  }
}

module.exports = new Recruitment();
