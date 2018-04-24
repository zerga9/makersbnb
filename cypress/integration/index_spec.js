describe('My First Test', function() {
  it('Does not do much!', function() {
    expect(true).to.equal(true)
  })
})

describe('Landing page', function() {
  it('contains welcome message', function() {
    cy.visit('http://localhost:3000')
    cy.contains('Welcome to Makers BnB')
  })
})
