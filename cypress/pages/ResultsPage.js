class ResultsPage {
  
 clickCancel() {
  cy.origin('https://venda.cp.pt', () => {
    cy.get('input[type="submit"][value="X Cancel"]').click();
  });
}

}

export default ResultsPage
