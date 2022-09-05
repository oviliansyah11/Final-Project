const Login_Page = require("../../../pages/Login/Login_Page");
import { faker } from "@faker-js/faker";
import PIM from "../../../pages/PIM/PIM";
faker.locale = "id_ID";

describe("Check PIM Function", () => {
  beforeEach(function () {
    const url = Cypress.env("baseUrl");
    cy.visit(url);

    Login_Page.enterUsername("Admin");
    Login_Page.enterPassword("admin123");
    Login_Page.clickLogin();
  });

  it("TC_01 - Add Employee without filling any data", () => {
    PIM.btnAdd();
    PIM.btnSave();
    PIM.errMessage();
    cy.wait(2);
  });

  it("TC_02 - Add Employee with valid data", () => {
    PIM.btnAdd();
    PIM.inputFirstName(faker.name.firstName());
    PIM.inputLastName(faker.name.lastName());
    PIM.btnSave();
    PIM.successMessage("Successfully Saved");
  });

  it("TC_03 - Add Employee with valid data and file attachment", () => {
    PIM.btnAdd();
    PIM.inputFirstName(faker.name.firstName());
    PIM.inputLastName(faker.name.lastName());
    PIM.btnImage("valid_pic.jpg");
    cy.wait(3);
    PIM.btnSave();
    PIM.successMessage("Successfully Saved");
  });

  it("TC_04 - Add Employee with valid data and invalid file attachment", () => {
    PIM.btnAdd();
    PIM.inputFirstName(faker.name.firstName());
    PIM.inputLastName(faker.name.lastName());
    PIM.btnImage("invalid_pic.jpg");
    cy.wait(3);
    const errAttachSize = cy.get(".oxd-input-group > .oxd-text");
    errAttachSize.should("be.visible").contains("Attachment Size Exceeded");
  });
});
