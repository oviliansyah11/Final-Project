/// <reference types="Cypress" />

const Login_Page = require("../../../pages/Login/Login_Page");
import { faker } from "@faker-js/faker";
import MyInfo from "../../../pages/MyInfo/MyInfo";
faker.locale = "id_ID";

describe("Check My Info Function", () => {
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

  it("TC_01 - View Details of Employee", () => {
    cy.viewport(1280, 900);
    MyInfo.menuMyInfo();
    MyInfo.employeeName("Paul Collings");
    MyInfo.personalDetails("Personal Details");
  });

  it("TC_02 - Add Nickname for Employee", () => {
    cy.viewport(1280, 900);
    MyInfo.menuMyInfo();
    MyInfo.employeeName();
    MyInfo.personalDetails("Personal Details");
    MyInfo.inputNickname(faker.name.firstName());
    MyInfo.btnSave();
    MyInfo.successMessage("Successfully Updated");
    cy.wait(2);
  });
});
