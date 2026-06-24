describe('Formulario de contacto - campo telefono', () => {
    it('Campo telefono con valor minimo', () => {
        cy.visit('https://automationintesting.online/')
        cy.get(':nth-child(5) > .nav-link').contains('Contact').click();

        cy.fixture('valor-minimo-datos').then((contactData) => {
            cy.get('[data-testid="ContactName"]').type(contactData.name);
            cy.get('[data-testid="ContactEmail"]').type(contactData.email);
            cy.get('[data-testid="ContactPhone"]').type(contactData.telefono);
            cy.get('[data-testid="ContactSubject"]').type(contactData.asunto);
            cy.get('[data-testid="ContactDescription"]').type(contactData.mensaje);
        });
        cy.get('.d-grid > .btn').click();
    })
})
