describe ('Barra de Navegacion',()=>{
    beforeEach(()=>{
        cy.visit('https://automationintesting.online/')
    })

    it('Redireccionar al usuario al inicio',()=>{
        cy.get('#navbarNav').contains('Rooms').click();
        cy.contains('h2', 'Our Rooms').should('be.visible');
        cy.get('.navbar-brand').should('have.text','Shady Meadows B&B').click()
        cy.contains('Welcome to Shady Meadows B&B').should('be.visible');
        
    })

})