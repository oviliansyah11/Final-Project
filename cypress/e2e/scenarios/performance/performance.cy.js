/// <reference types="Cypress" />

const Login_Page = require("../../../pages/Login/Login_Page");
import { faker } from "@faker-js/faker";
import Performance from "../../../pages/Perfomance/Performance";

describe("Check Performance Function", () => {
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

  it("TC_01 - View Employee Performance Trackers", () => {
    cy.viewport(1280, 900);
    Performance.menuPerformance();
    Performance.menuEmployeeTrackers();
    Performance.tableData();
    cy.wait(2);
  });

  it("TC_02 - View Employee Performance Trackers", () => {
    cy.viewport(1280, 900);
    Performance.menuPerformance();
    Performance.menuEmployeeTrackers();
    cy.wait(2);
    Performance.tableData();
    Performance.btnView();
    Performance.trackerLogs();
  });
});
