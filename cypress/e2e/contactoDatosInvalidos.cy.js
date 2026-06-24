describe('Contacto - Datos inválidos', () => {

    it('Formulario de contacto con datos inválidos', () => {
        cy.visit('https://automationintesting.online/')
        cy.get(':nth-child(5) > .nav-link').contains('Contact').click();

        cy.fixture('datosInvalidosContacto').then((contactData) => {
            cy.get('[data-testid="ContactName"]').type(contactData.name);
            cy.get('[data-testid="ContactEmail"]').type(contactData.email);
            cy.get('[data-testid="ContactPhone"]').type(contactData.telefono);
            cy.get('[data-testid="ContactSubject"]').type(contactData.asunto);
            cy.get('[data-testid="ContactDescription"]').type(contactData.mensaje);
        });
        cy.get('.d-grid > .btn').click();
    })
})
