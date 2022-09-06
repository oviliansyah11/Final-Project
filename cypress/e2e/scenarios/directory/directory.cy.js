/// <reference types="Cypress" />

const Directory = require("../../../pages/Directory/Directory");
const Login_Page = require("../../../pages/Login/Login_Page");

describe("Check Directory Function", () => {
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

  it("View Directory Pages", () => {
    cy.viewport(1280, 900);
    Directory.menuDirectory();
    cy.wait(2);
    Directory.tableData();
  });
});
