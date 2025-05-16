# Cypress Ticket Booking Automation

This project automates a train ticket search on the (https://www.cp.pt/passageiros/en/buy-tickets) using **Cypress** and the **Page Object Model (POM)** structure.

## Features

- Selects route: **Lagos → Porto - Campanha**
- Chooses:
  - Departure date: 3 days from today
  - Return date: 5 days from today
- Submits the form and navigates to results
- Clicks "Cancel" to return to the form
- Validates that original form inputs are retained

## Project Structure

```
├── cypress/
│   ├── e2e/
│   │   └── searchTickets.spec.js       # Main Cypress test
│   ├── pages/
│   │   ├── BuyTicketsPage.js           # Page object for search form
│   │   └── ResultsPage.js              # Page object for results page
```

##  How to Run

1. Open terminal in the root project folder:

```
cd cypressAssignment
npm install
npx cypress open
```

2. Choose:
   - **E2E Testing**
   - **None** for framework
   - Pick a browser (e.g., Chrome)

3. In the Cypress window, click on:
   ```
   searchTickets.spec.js
   ```

This will launch and run the automated test.
