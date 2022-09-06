/// <reference types="Cypress" />

const Login_Page = require("../../../pages/Login/Login_Page");
const Maintenance = require("../../../pages/Maintenance/Maintenance");

describe("Check Maintenance Function", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
  beforeEach(function () {
    const url = Cypress.env("baseUrl");
    cy.visit(url);

    Login_Page.enterUsername("Admin");
    Login_Page.enterPassword("admin123");
    Login_Page.clickLogin();
    cy.wait(2);
  });

  it("View Maintenance Pages", () => {
    cy.viewport(1280, 900);
    Maintenance.menuMaintenance();
    cy.wait(2);
    Maintenance.cardAccess();
    Maintenance.username();
    Maintenance.password();
  });
});
