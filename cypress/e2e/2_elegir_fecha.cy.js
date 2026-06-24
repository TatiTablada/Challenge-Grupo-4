// Esta prueba abre el sitio, entra a la sección de habitaciones y elige una fecha

describe('Entrar a Rooms y elegir una fecha', () => {

  it('Ir a Rooms, abrir una habitación y elegir un día', () => {

    cy.visit('https://automationintesting.online/'); // Abrimos la página principal

    cy.contains('Rooms').click();          // Hacemos clic en "Rooms" del menú de arriba

    cy.get('#rooms')                       // Buscamos la sección de habitaciones
      .should('be.visible');               // Comprobamos que se vea en la pantalla

    cy.contains('Book now')                // Buscamos el primer botón "Book now" que aparezca
      .click();                            // Hacemos clic en ese botón

    cy.get('.rbc-button-link')             // Buscamos todos los días del calendario
      .first()                             // Tomamos el primer día que aparece
      .click();                            // Hacemos clic en ese día

  });

});
