import { faker } from "@faker-js/faker";
import LoginPage from "../../pages/LoginPage";

describe("Check Login Function", () => {
  beforeEach(() => {
    const url = Cypress.env("baseUrl");
    cy.visit(url);
  });

  it("Visit Login Page", () => {
    cy.title().should("eq", "Swag Labs");
    cy.contains("Login");
  });

  it("Contains Username, Password and Login Button", () => {
    // check username
    const username = LoginPage.elements.usernameInput();
    username.should("be.visible");
    username.should("have.attr", "type", "text");
    username.should("have.attr", "placeholder", "Username");

    // check password
    const password = LoginPage.elements.passwordInput();
    password.should("be.visible");
    password.should("have.attr", "type", "password");
    password.should("have.attr", "placeholder", "Password");

    // check login button
    const login = LoginPage.elements.loginBtn();
    login.should("be.visible");
    login.should("have.attr", "type", "submit");
    login.should("have.attr", "value", "Login");
  });

  it("Do Login with null value", () => {
    const login = LoginPage.elements.loginBtn();
    login.click();

    LoginPage.elements
      .errorMessage()
      .should("have.text", "Epic sadface: Username is required");
  });

  it("Do Login with wrong value", () => {
    LoginPage.typeUsername(faker.name.firstName());
    LoginPage.typePassword(faker.phone.imei());
    LoginPage.clickLogin();

    LoginPage.elements
      .errorMessage()
      .should(
        "be.visible",
        "Epic sadface: Username and password do not match any user in this service"
      );
  });

  it("Do Login with correct value", () => {
    LoginPage.typeUsername("standard_user");
    LoginPage.typePassword("secret_sauce");
    LoginPage.clickLogin();

    cy.contains("Products");
  });
});
