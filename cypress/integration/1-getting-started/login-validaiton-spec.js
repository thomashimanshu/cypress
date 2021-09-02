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

        cy.xpath('//*[@id="forms.login.username"]').type("thomas.himanshu").clear();
       
        cy.xpath('//*[@id="root"]/div/div[4]/div[2]/div[5]/div[2]/div/form/div[1]/div/span[1]').contains('This field must be at least 1 characters long');

        cy.xpath('//*[@id="root"]/div/div[4]/div[2]/div[5]/div[2]/div/form/div[1]/div/span[2]').contains('This field is required');

        cy.xpath('//*[@id="forms.login.password"]').type('Rubi@123').clear();

        cy.xpath('//*[@id="root"]/div/div[4]/div[2]/div[5]/div[2]/div/form/div[2]/div/span').contains('This field is required');
       
       cy.wait(1000);
        cy.xpath('//*[@id="forms.login.username"]').type("thomas.himanshu@ithands.biz");
        cy.xpath('//*[@id="forms.login.password"]').type('Rubi@123');
        
          
        cy.get('.welcome-btn').click();
      })
})
  