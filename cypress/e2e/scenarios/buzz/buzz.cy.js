/// <reference types="Cypress" />

const Buzz = require("../../../pages/Buzz/Buzz");
const Login_Page = require("../../../pages/Login/Login_Page");

describe("Check Buzz Function", () => {
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
    cy.wait(5);
  });

  it("TC_01 - View Buzz pages", () => {
    cy.viewport(1280, 900);
    Buzz.menuBuzz();
    Buzz.title("Launching Soon");
    cy.wait(2);
  });
});
