class BuyTicketsPage {
  visit() {
    cy.visit('https://www.cp.pt/passageiros/en/buy-tickets')
    cy.get('body').then($body => {
      if ($body.find('button:contains("Accept all cookies")').length) {
        cy.contains('Accept all cookies').click()
      }
    })
  }

  enterOrigin(station) {
    cy.get('input[title="From "]').clear().type(station);
    cy.wait(500);
    cy.get('input[title="From "]').type('{downarrow}{enter}'); 

  }

  enterDestination(station) {
    cy.get('#arrival-date').clear().type(station);
   cy.wait(500);
   cy.get('#arrival-date').type('{downarrow}{enter}'); 


  }

 enterDepartureDate() {
  const departDate = new Date();
  departDate.setDate(departDate.getDate() + 3);
  const day = departDate.getDate();

  cy.get('#datepicker-first').click(); 
  cy.get('#datepicker-first_root')     
    .contains('.picker__day', day)
    .click({ force: true });          
}


 enterReturnDate() {
  const returnDate = new Date();
  returnDate.setDate(returnDate.getDate() + 5);
  const day = returnDate.getDate();

  cy.get('#datepicker-second').click(); 
  cy.get('#datepicker-second_root')    
    .contains('.picker__day', day)
    .click({ force: true });
}


  clickSubmitButton() {
  cy.get('input[type="submit"][value="Submit »"]').click();

  }

  getOrigin() {
    return cy.get('input[title="From "]')
  }

  getDestination() {
    return cy.get('#arrival-date')
  }

  getDepartureDate() {
    return cy.get('#datepicker-first')
  }

  getReturnDate() {
    return cy.get('#datepicker-second')
  }
}

export default BuyTicketsPage
