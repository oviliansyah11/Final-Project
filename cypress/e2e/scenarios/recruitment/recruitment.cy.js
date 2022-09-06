/// <reference types="Cypress" />

const Login_Page = require("../../../pages/Login/Login_Page");
const Recruitment = require("../../../pages/Recruitment/Recruitment");
import { faker } from "@faker-js/faker";
faker.locale = "id_ID";

describe("Check Recruitment Function", () => {
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

  it("Add candidate without filling any data", () => {
    cy.viewport(1280, 900);
    Recruitment.menuRecruitment();
    Recruitment.btnAdd();
    Recruitment.btnSave();
    Recruitment.reqMessage("Required");
  });

  it("Add Candidate with valid data", () => {
    cy.viewport(1280, 900);
    Recruitment.menuRecruitment();
    Recruitment.btnAdd();
    Recruitment.firstName(faker.name.firstName());
    Recruitment.lastName(faker.name.lastName());
    Recruitment.email(faker.internet.email());
    Recruitment.btnSave();
    Recruitment.successMessage("Successfully Saved");
  });
});
