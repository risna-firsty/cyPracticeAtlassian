/// <reference types = "Cypress" />

describe("CAN'T LOGIN MENU", () => {
    beforeEach(() => {
      cy.viewport(1200, 800);
      cy.visit(Cypress.env("baseUrl"));
      cy.get('[href="/try/cloud/signup?bundle=jira-software"]').first().click();
      cy.contains("Log in").click();
      cy.get('[id="resetPassword"]').click();
    });
  
    it("a. Can access 'Can't login page'", () => {
      // Check if user can access "Can't login" page
      cy.get('[data-testid="header-suffix"]')
        .should("exist")
        .and("have.text", "Can't log in?");
      cy.get('[id="form-reset-password-email"]').should("exist");
    });
  
    it("b. Can't send recovery email with empty email", () => {
      cy.get('button[id="reset-password-email-submit"]').click();
  
      // Check if user can't send email with empty email
      cy.get('div[class="css-16aevhh"]').should("exist");
    });
  
    it("c. Can't send recovery email with unregistered email", () => {
      cy.get('input[id="email"]').type("risna@mailinator.com");
      cy.get('button[id="reset-password-email-submit"]').click();
      cy.wait(2000);
      cy.get('section[data-testid="redirect-from-resetPassword-error"]')
        .should("exist")
        .and("have.text", "We can't find an account for that email address.");
      cy.wait(1000)
    });
  });
  