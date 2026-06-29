describe('Suite de Pruebas', () => {

    beforeEach(() => {
        cy.visit('https://automationintesting.online/');
    });

    describe('Reserva de habitación', () => {
        // Usamos .skip para que figure en el reporte como "salteado" hasta que se arregle el bug
        it.skip('Flujo de reserva - Happy Path (Bug Reportado: Pantallazo negro al reservar)', () => {
            cy.get('#rooms > .container').should('be.visible');
            cy.get(':nth-child(1) > .card > .card-footer > .btn').click();
            cy.get('#doReservation').click();

            cy.fixture('datosContacto').then((contactData) => {
                cy.get('[name="firstname"]').type(contactData.name);
                cy.get('[name="lastname"]').type('Perez');
                cy.get('[name="email"]').type(contactData.email);
                cy.get('[name="phone"]').type(contactData.telefono);

                cy.get('.btn.btn-primary.w-100.mb-3').click();

                cy.contains('Reserva exitosa').should('be.visible');
            });
        });

    });

    describe('Reserva de habitación sin datos', () => {
        it('Flujo de reserva', () => {
            cy.get('#rooms > .container').should('be.visible');
            cy.get(':nth-child(1) > .card > .card-footer > .btn').click()
            cy.get('#doReservation').click()
            cy.get('.btn-primary').click()
            cy.get('.alert').should('be.visible');
            cy.url().should('include', 'reservation');
        })
    });


    // Sección de contacto
    describe('Formulario de contacto', () => {
        it('Formulario de contacto con datos validos', () => {
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
    });

});

