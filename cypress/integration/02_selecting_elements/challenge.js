/// <reference types="cypress" />

// ⚠️ you can change "it" to "it.only" to run a single test
// challenge #1: select the square using class, circle using id, triangle, atribute and heading using text a nadpis pomocou textu
it('class, id, attr', { baseUrl: null }, () => {

  cy.visit('./mini-apps/shapes.html');

})

// challenge #2: in this example, try to select a specific element by chaining off pre-written .get() command
it('cypress commands for traversing and filtering elements', { baseUrl: null }, () => {

  cy.visit('./mini-apps/rainbow.html');

  // select red element using .first() command
  cy.get('li')

  // select violet element using .last() command
  cy.get('li')

  // select yellow element using .eq() command
  cy.get('li')

  // select blue element using .next() command
  cy.get('.green')

  // select yellow element using .prev() command
  cy.get('.green')

  // filter out primary colors using .filter() command. all these colors have the class "primary"
  cy.get('li')

  // filter out secondary colors using .not() command. all these colors DON’T have the class "primary"
  cy.get('li')

  // select green element using .find() command
  cy.get('.list')

  // select the whole list (with the class "list") using .parent() command
  cy.get('.violet')

  // 💯 extra credit challenge: go to docs.cypress.io and find .contains() command. 
  // try to find a way of selecting the "blue" element, but without changing the 'e'
  // parameter in the code below
  cy.contains('e')

});