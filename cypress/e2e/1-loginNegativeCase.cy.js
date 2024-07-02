/// <reference types = "Cypress" />

describe("SIGN IN", () => {
    beforeEach(() => {
      cy.viewport(1200, 800);
      cy.visit(Cypress.env("baseUrl"));
      cy.get('[href="/try/cloud/signup?bundle=jira-software"]').first().click();
      cy.contains("Log in").click();
    });
  
    it("0. Can access sign in page", () => {
      // Check the sign in page wording existance
      cy.get('[data-testid="header-suffix"]')
        .should("exist")
        .and("have.text", "Log in to continue");
  
      // Check the sign in with google button existance
      cy.get('button[id="google-auth-button"]').should("exist");
  
      // Check the sign in with Microsoft button existance
      cy.get('button[id="microsoft-auth-button"]').should("exist");
  
      // Check the sign in with Apple button existance
      cy.get('button[id="apple-auth-button"]').should("exist");
  
      // Check the sign in with Slack button existance
      cy.get('button[id="slack-auth-button"]').should("exist");
    });
  
    it("1. Can't sign in with empty email", () => {
      cy.get('button[id="login-submit"]').click();
  
      // Check that user can't continue with empty email
      cy.get('[id="username-uid2-error"]').should("exist");
    });
  
    it("2. Can't sign in with empty password", () => {
      // Input email
      cy.get('input[id="username"]').type("risna@mailinator.com");
      cy.get('button[id="login-submit"]').click();
      cy.wait(2000);
  
      // Submit with empty password
      cy.get('button[id="login-submit"]').click();
      cy.get('[id="password-error"]').should("exist");
    });
  
    it("3. Can't sign in with incorrect password", () => {
      // Input email
      cy.get('input[id="username"]').type("risna@mailinator.com");
      cy.get('button[id="login-submit"]').click();
      cy.wait(2000);
  
      // Input password
      cy.get('input[data-testid="password"]').type("hvsdfisdfgiergf");
      cy.get('button[id="login-submit"]').click();
      cy.wait(1000);
      cy.get('[data-testid="form-error"]').should("exist");
      cy.wait(1000)
    });
  });
  