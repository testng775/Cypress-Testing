import BuyTicketsPage from '../pages/BuyTicketsPage'
import ResultsPage from '../pages/ResultsPage'

describe('Ticket Booking Test', () => {
  const buyPage = new BuyTicketsPage()
  const resultPage = new ResultsPage()

  beforeEach(() => {
    buyPage.visit()
  })

  it('should submit and cancel booking,keeping input values', () => {
    //Calling the function for the Test Flow
    buyPage.enterOrigin('Lagos')
    buyPage.enterDestination('Porto Campanha')
    buyPage.enterDepartureDate();
    buyPage.enterReturnDate();
    buyPage.clickSubmitButton()
    resultPage.clickCancel()

    // Setting up departure/return date as per requirments.This part is done to get the dates to pass it for verification
    const dateInput = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = date.toLocaleString('en-GB', { month: 'long' }); 
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  };

  const departureDate = new Date();
  departureDate.setDate(departureDate.getDate() + 3);
  const departureDateStr = dateInput(departureDate);

  const returnDate = new Date();
  returnDate.setDate(returnDate.getDate() + 5);
  const returnDateStr = dateInput(returnDate);

  // Verifying if the data is retained after the flight booking is cancelled
  buyPage.getOrigin().should('have.value', 'Lagos')
  buyPage.getDestination().should('have.value', 'Porto Campanha')
  buyPage.getDepartureDate().should('have.value', departureDateStr);
  buyPage.getReturnDate().should('have.value', returnDateStr);
  })
})
