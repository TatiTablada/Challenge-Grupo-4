describe ('Barra de Navegacion',()=>{
    beforeEach(()=>{
        cy.visit('https://automationintesting.online/')
    })

    // 1-2-3

    it('Redireccionar al usuario al inicio',()=>{
        cy.get('#navbarNav').contains('Rooms').click();
        cy.contains('h2', 'Our Rooms').should('be.visible');
        cy.get('.navbar-brand').should('have.text','Shady Meadows B&B').click()
        cy.contains('Welcome to Shady Meadows B&B').should('be.visible');
        
    })

    it('Dirigir al usuario a la seccion Rooms',()=>{
        cy.get('#navbarNav').contains('Rooms').click();
        cy.contains('h2', 'Our Rooms').should('be.visible');
        cy.contains('Double').should('be.visible');        
    })

    it('Dirigir al usuario a la seccion Booking',()=>{
        cy.get('#navbarNav').contains('Booking').click();
        cy.contains('h3', 'Check Availability & Book Your Stay').should('be.visible');        
    })

    // 4-5-6 (Julian)

    it('Dirigir al usuario a la seccion Amenities [BUG]',()=>{
        cy.contains('Amenities').click();
        cy.url().should('include', '#amenities');
        cy.get('#amenities').should('be.visible');
    })

    it('Dirigir al usuario a la seccion Location',()=>{
        cy.contains('Location').click();
        cy.url().should('include', '#location');
        cy.get('#location').should('be.visible');   
    })

    it('Dirigir al usuario a la seccion Contact',()=>{
        cy.contains('Contact').click();
        cy.url().should('include', '#contact');
        cy.get('#contact').should('be.visible');
    })
})