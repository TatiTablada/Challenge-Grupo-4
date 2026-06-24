// Esta prueba abre el sitio y reserva la habitación que dice "Single"

describe('Reservar la habitación Single', () => {

  it('Buscar Single en Our Rooms y hacer clic en Book now', () => {

    cy.visit('https://automationintesting.online/'); // Abrimos la página principal

    cy.contains('Our Rooms')               // Buscamos el texto "Our Rooms"
      .scrollIntoView();                   // Bajamos la pantalla hasta esa parte

    cy.contains('.room-card', 'Single')    // Buscamos la habitación que dice "Single"
      .contains('Book now')                // Buscamos el botón "Book now" de esa habitación
      .click();                            // Hacemos clic en el botón

  });

});
