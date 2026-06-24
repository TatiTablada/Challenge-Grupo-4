describe('Reserva', () => {

    it('Seccion reserva - "Book now"', () => {
        cy.visit('https://automationintesting.online/')

        cy.scrollTo('bottom')
        cy.get('.section-divider').contains('Our Rooms')
        cy.get(':nth-child(3) > .card > .card-footer > .btn').click()

    });
})
