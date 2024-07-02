/// <reference types = "Cypress" />

describe("HOMEPAGE", () => {
  beforeEach(() => {
    cy.viewport(1200, 800);
    cy.visit(Cypress.env("baseUrl"));
  });

  it("a. Should check if each main dropdown menu exists", () => {
    cy.get('[aria-label="Products"]')
      .should("exist")
      .and("have.text", "Products"); // Check Products // Check menu
    cy.get('[aria-label="Teams"]').should("exist").and("have.text", "Teams"); // Check Teams // Check menu
    cy.get('[aria-label="Why Atlassian?"]')
      .should("exist")
      .and("have.text", "Why Atlassian?"); // Check 'Why Atlassian?' // Check menu
    cy.get('[aria-label="Resources"]')
      .should("exist")
      .and("have.text", "Resources"); // Check Resources menu
  });

  it("b. Should check if each menu item under Get started button exists", () => {
    cy.get('[id="tab:tabs:0:0"]').should("exist").and("have.text", "Software"); // Check Software option
    cy.get('[id="tab:tabs:0:1"]')
      .should("exist")
      .and("have.text", "Product management"); // Check Product management option
    cy.get('[id="tab:tabs:0:2"]').should("exist").and("have.text", "Marketing"); // Check Marketing option
    cy.get('[id="tab:tabs:0:3"]')
      .should("exist")
      .and("have.text", "Project management"); // Check Project management option
    cy.get('[id="tab:tabs:0:4"]').should("exist").and("have.text", "Design"); // Check Design option
    cy.get('[id="tab:tabs:0:5"]').should("exist").and("have.text", "IT"); // Check IT option
  });

  it("c. Should check if the menu item under Get started has exactly 6 items ", () => {
    cy.get(
      '[class="_1e0c1txw _16jlidpf _1o9zidpf _i0dl1wug _80omtlke _19itglyw _bfhk1j28 _uiztglyw"]'
    ).should("have.length", 6);
  });

  it('d. Should check if the "Empower everyone, on every team" section has more than 4 tabs', () => {
    cy.get(
      '[class="_1e0c1txw _16jlidpf _1o9zidpf _i0dl1wug _80omtlke _19itglyw _bfhk1j28 _uiztglyw round-tab"]'
    )
      .its("length")
      .should("be.gt", 4);
    cy.wait(1000)
  });
});
