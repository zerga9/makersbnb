import { isProperty } from "babel-types";

describe('My First Test', function() {
  it('Does not do much!', function() {
    expect(true).to.equal(true);
  });
});

describe('Landing page', function() {
  it('contains welcome message', function() {
    cy.visit('http://localhost:3000');
    cy.contains('Welcome to Makers BnB');
  });
});

describe('Add property page', function(){
  it('redirects to properties page after adding property', function() {
    cy.visit('http://localhost:3000/property/new');
    cy.request('POST', '/properties', {
      propertyName: 'House',
      propertyDetails: 'Nice place',
      propertyPrice: '£20 a night'
    });
  });
});

// describe('Add property page', function(){
//   it('adds property and sees it on properties page', function() {
//     cy.visit('http://localhost:3000/property/new');
//     cy.request('POST', '/properties', {
//       propertyName: 'House',
//       propertyDetails: 'Nice place',
//       propertyPrice: '£20 a night'
//     });
//     cy.contains('Nice place');
//   });
// });


// adding Property

// seeing it on page

// check all routes






