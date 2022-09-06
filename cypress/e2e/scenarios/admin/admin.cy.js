/// <reference types="Cypress" />
const Admin = require("../../../pages/Admin/Admin");
const Login_Page = require("../../../pages/Login/Login_Page");
import { faker } from "@faker-js/faker";
faker.locale = "id_ID";

describe("Check Admin Function", () => {
  beforeEach(function () {
    const url = Cypress.env("baseUrl");
    cy.visit(url);

    Login_Page.enterUsername("Admin");
    Login_Page.enterPassword("admin123");
    Login_Page.clickLogin();
    cy.wait(2);
  });

  it("TC_01 - Add user without filling any data", () => {
    Admin.clickAdmin();
    Admin.btnAdd();
    cy.wait(2);
    Admin.btnSave();

    Admin.errMessage();
  });

  it("TC_02 - Add users 'Admin' with valid data", () => {
    Admin.clickAdmin();
    Admin.btnAdd();
    cy.wait(2);

    const username = "ab" + faker.name.firstName();
    Admin.inputUsername(username);
    Admin.roleAdmin();
    Admin.statusEnabled();
    Admin.inputEmployee("john");
    const password = faker.internet.password(5, true, /[A-Z]/) + "I11!";
    cy.log(password);
    Admin.inputPassword(password);
    Admin.confirmPassword(password);
    cy.wait(2);
    Admin.btnSave();
    Admin.successMessage("Successfully Saved");
  });

  it("TC_03 - Add users 'Admin' with invalid password", () => {
    Admin.clickAdmin();
    Admin.btnAdd();
    cy.wait(2);

    const username = "ab" + faker.name.firstName();
    Admin.inputUsername(username);
    Admin.roleAdmin();
    Admin.statusEnabled();
    Admin.inputEmployee("john");
    const password = faker.internet.password(10, true, /[A-Z]/);
    cy.log(password);
    Admin.inputPassword(password);
    Admin.confirmPassword(password);
    cy.wait(2);
    Admin.btnSave();
    const err = cy.get(".oxd-input-group > .oxd-text");
    err
      .should("be.visible")
      .contains(
        "Your password must contain a lower-case letter, an upper-case letter, a digit and a special character. Try a different password"
      );
  });

  it("TC_04 - Add users 'Admin' with existing 'Username'", () => {
    Admin.clickAdmin();
    Admin.btnAdd();
    cy.wait(2);

    Admin.roleAdmin();
    Admin.statusEnabled();
    Admin.inputEmployee("john");
    const password = faker.internet.password(5, true, /[A-Z]/) + "I11!";
    cy.log(password);
    Admin.inputPassword(password);
    Admin.confirmPassword(password);
    Admin.inputUsername("Admin");
    cy.wait(2);
    Admin.btnSave();
    const err = cy.get(":nth-child(4) > .oxd-input-group > .oxd-text");
    err.should("be.visible").contains("Already exists");
  });
});
