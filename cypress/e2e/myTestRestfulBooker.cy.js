describe('Barra de Navegacion', () => {
    beforeEach(() => {
        cy.visit('https://automationintesting.online/')
    })

    it('Redireccionar al usuario al inicio', () => {
        cy.get('#navbarNav').contains('Rooms').click();
        cy.contains('h2', 'Our Rooms').should('be.visible');
        cy.get('.navbar-brand').should('have.text', 'Shady Meadows B&B').click()
        cy.contains('Welcome to Shady Meadows B&B').should('be.visible');

    })
    it('Dirigir al usuario a la seccion Rooms', () => {
        cy.get('#navbarNav').contains('Rooms').click();
        cy.contains('h2', 'Our Rooms').should('be.visible');
        cy.contains('Double').should('be.visible');
    })
    it('Dirigir al usuario a la seccion Booking', () => {
        cy.get('#navbarNav').contains('Booking').click();
        cy.contains('h3', 'Check Availability & Book Your Stay').should('be.visible');
    })

})

// Sección de contacto
describe('Formulario de contacto', () => {
    it('Formulario de contacto con datos validos', () => {
        cy.visit('https://automationintesting.online/')
        cy.get(':nth-child(5) > .nav-link').contains('Contact').click();

        cy.fixture('datosContacto').then((contactData) => {
            cy.get('[data-testid="ContactName"]').type(contactData.name);
            cy.get('[data-testid="ContactEmail"]').type(contactData.email);
            cy.get('[data-testid="ContactPhone"]').type(contactData.telefono);
            cy.get('[data-testid="ContactSubject"]').type(contactData.asunto);
            cy.get('[data-testid="ContactDescription"]').type(contactData.mensaje);
        });
        cy.get('.d-grid > .btn').click();
        cy.get('.col-lg-8 > .card > .card-body').should('be.visible');
        cy.get('.col-lg-8 > .card > .card-body').should('contain', 'Thanks for getting in touch Juana!');
        cy.get('.col-lg-8 > .card > .card-body').should('contain', 'We\'ll get back to you about');
        cy.get('.col-lg-8 > .card > .card-body').should('contain', 'Prueba de formulario de contacto');
        cy.get('.col-lg-8 > .card > .card-body').should('contain', 'as soon as possible.');

    })
})
