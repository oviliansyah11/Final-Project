/// <reference types="Cypress" />

const Dashboard = require("../../../pages/Dashboard/Dashboard");
const Login_Page = require("../../../pages/Login/Login_Page");

describe("Check Dashboard Function", () => {
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

  it("TC_01 - View Dashboard pages", () => {
    cy.viewport(1280, 900);
    Dashboard.menuDashboard();
    Dashboard.title("Launching Soon");
    cy.wait(2);
  });
});
