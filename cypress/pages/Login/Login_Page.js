class LoginPage {
  enterUsername(username) {
    cy.get('[name="username"]').type(username);
  }

  enterPassword(password) {
    cy.get('[name="password"]').type(password);
  }

  clickLogin() {
    cy.get(".oxd-button").click();
  }
}

module.exports = new LoginPage();
