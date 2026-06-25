// ***********************************************
// Custom Commands
// ***********************************************

Cypress.Commands.add('completarFormularioContacto', (fixtureName) => {
    cy.fixture(fixtureName).then((contactData) => {
        cy.get('[data-testid="ContactName"]').type(contactData.name);
        cy.get('[data-testid="ContactEmail"]').type(contactData.email);
        cy.get('[data-testid="ContactPhone"]').type(contactData.telefono);
        cy.get('[data-testid="ContactSubject"]').type(contactData.asunto);
        cy.get('[data-testid="ContactDescription"]').type(contactData.mensaje);
    });
    cy.get('.d-grid > .btn').click();
});