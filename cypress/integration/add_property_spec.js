import { isProperty } from "babel-types";


describe('Add property page', function(){
  it('adds property and sees it on properties page', function() {
    cy.visit('http://localhost:3000/property/new');
    cy.request('POST', '/properties', {
      propertyName: 'House',
      propertyDetails: 'Another great place',
      propertyPrice: '£28 a night'
    });
    cy.contains('Submit').click()
    cy.contains('Another great place');
  });
});
