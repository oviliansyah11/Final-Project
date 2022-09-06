/// <reference types="Cypress" />
const Login_Page = require("../../../pages/Login/Login_Page");
const Leave = require("../../../pages/Leave/Leave");
import { faker } from "@faker-js/faker";
faker.locale = "id_ID";

describe("Check Leave Function", () => {
  beforeEach(function () {
    const url = Cypress.env("baseUrl");
    cy.visit(url);

    Login_Page.enterUsername("Admin");
    Login_Page.enterPassword("admin123");
    Login_Page.clickLogin();
    cy.wait(2);
  });

  it("Add Comment for requests", () => {
    cy.viewport(1280, 900);
    Leave.clickMenuLeave();
    cy.wait(2);
    Leave.tableData();
    Leave.btnOther();
    Leave.btnAddComment();
    Leave.cardSheet();
    Leave.txtArea(faker.lorem.paragraph());
    Leave.btnSave();
    cy.wait(2);
    Leave.successMessage("Successfully Saved");
  });
});
