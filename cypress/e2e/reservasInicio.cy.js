describe('Sección Rooms', () => {
    beforeEach(() => {
        cy.visit('https://automationintesting.online/')
    });

    describe('Reservas (inicio de la pagina)', () => {

        // RESERVAS-012

        it('Click en "Book now" en las habitaciones - Double', () => {
            // Paso 1: Hace scroll hacia abajo y verifica que la sección de habitaciones sea visible
            cy.scrollTo(0, 1200);
            cy.get('#rooms > .container').should('be.visible')

            // Paso 2: Busca la segunda habitación ("Double") y hace click en su botón de reserva
            cy.get(':nth-child(2) > .card > .card-footer > .btn').click()

            // Paso 3: Valida que se abra el detalle de la habitación "Double Room" y cargue el formulario
            cy.get('.breadcrumb').should('be.visible').and('contain', 'Double Room')
            cy.get('.col-lg-8').should('be.visible')
            cy.get('.shadow > :nth-child(1)').should('be.visible')
        })
    })

    describe('Reserva - "Book now"', () => {

        it('Verificar funcionalidad del botón "Book now"', () => {

            cy.scrollTo('bottom')
            cy.get('.section-divider').contains('Our Rooms')
            cy.get(':nth-child(3) > .card > .card-footer > .btn').click()

        });
    })
})