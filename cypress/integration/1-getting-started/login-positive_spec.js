/// <reference types="cypress" />
require('cypress-xpath')
context('Window', () => {
    beforeEach(() => {
      cy.visit('https://staging-app.virtualcombine.com/')
    })
    it('Click on Sign IN', () => {
        //Clicking on Sign in button
        cy.get('.welcome-btn').click()
    
//Entering the username and passowrd

        cy.xpath('//*[@id="forms.login.username"]').type("thomas.himanshu@ithands.biz");
        cy.xpath('//*[@id="forms.login.password"]').type('Rubi@123');
          
        cy.get('.welcome-btn').click();
      })
})
  