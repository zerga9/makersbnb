import { isProperty } from "babel-types";

describe('Sign up page', function(){
  it('adds user details and clicks sign me up button', function() {
    cy.visit('http://localhost:3000/users/new');
    cy.request('POST', '/properties', {
      propertyName: 'House',
      propertyDetails: 'Another great place',
      propertyPrice: '£28 a night'
    });
    cy.contains('Submit').click()
    cy.contains('Another great place');
  });
});
