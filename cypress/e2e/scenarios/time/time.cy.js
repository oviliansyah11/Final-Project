/// <reference types="Cypress" />

const Login_Page = require("../../../pages/Login/Login_Page");
const Time = require("../../../pages/Time/Time");

describe("Check Time Function", () => {
  beforeEach(function () {
    const url = Cypress.env("baseUrl");
    cy.visit(url);

    Login_Page.enterUsername("Admin");
    Login_Page.enterPassword("admin123");
    Login_Page.clickLogin();
    cy.wait(2);
  });

  it("View details Timesheets", () => {
    cy.viewport(1280, 900);
    Time.menuTime();
    Time.tableData();
    Time.btnView();
    Time.titleTimesheet();
  });
});
