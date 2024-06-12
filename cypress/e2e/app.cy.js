/// <reference types="cypress" />

describe('app tests', () => {

  it('App Component loads with data', () => {
    cy.visit('http://localhost:4200');
    cy.contains('Name:');
  })

  it('App Component adds data on click', () => {
    cy.visit('http://localhost:4200');
    cy.get('button').click();
    cy.contains('Grouped Items');
    cy.contains('Key: fruit has 2 entries');
  })

  it('(older browser) Grouped Items found', () => {
    cy.visit('http://localhost:4200', {
      onBeforeLoad(win) {
        // delete the methods to simulate older browser
        delete win.Object.prototype.groupBy;
        delete win.Array.prototype.group;
        delete win.Array.prototype.groupToMap; // Safari
      },
    })
    cy.get('button').click();
    cy.contains('Grouped Items');
    cy.contains('Key: vegetables has 1 entry');
  })

})
