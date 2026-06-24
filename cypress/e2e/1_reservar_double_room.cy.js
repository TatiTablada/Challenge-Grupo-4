// Esta prueba abre el sitio, reserva una habitación Doble y revisa el precio

describe('Reservar una habitación Doble y ver el precio', () => {

  it('Reservar Double Room y completar el formulario', () => {

    cy.visit('https://automationintesting.online/'); // Abrimos la página principal

    cy.contains('Rooms').click();          // Hacemos clic en "Rooms" del menú de arriba

    cy.contains('.room-card', 'Double')    // Buscamos la habitación que dice "Double"
      .contains('Book now')                // Buscamos el botón "Book now" de esa habitación
      .click();                            // Hacemos clic en el botón

    cy.contains('.rbc-button-link', '26')  // Buscamos el día 26 en el calendario
      .click();                            // Hacemos clic en el día 26

    cy.contains('.rbc-button-link', '30')  // Buscamos el día 30 en el calendario
      .click();                            // Hacemos clic en el día 30

    cy.contains('Price Summary')           // Buscamos el texto "Price Summary" (resumen del precio)
      .should('be.visible');               // Comprobamos que se vea en la pantalla

    cy.contains('Total')                   // Buscamos el texto "Total"
      .should('be.visible');               // Comprobamos que se vea en la pantalla

    cy.get('#doReservation')               // Buscamos el botón "Reserve Now"
      .click();                            // Hacemos clic para que aparezca el formulario

    cy.get('input.room-firstname')         // Buscamos el campo de nombre
      .type('Juan');                       // Escribimos "Juan"

    cy.get('input.room-lastname')          // Buscamos el campo de apellido
      .type('Perez');                      // Escribimos "Perez"

    cy.get('input.room-email')             // Buscamos el campo de correo
      .type('juan.perez@example.com');     // Escribimos un correo

    cy.get('input.room-phone')             // Buscamos el campo de teléfono
      .type('12345678901');                // Escribimos un número de teléfono

    cy.contains('button', 'Reserve Now')   // Buscamos otra vez el botón "Reserve Now"
      .click();                            // Hacemos clic para enviar la reserva

    cy.get('.alert-danger')                // Buscamos si aparece algún mensaje de error
      .should('not.exist');                // Comprobamos que NO haya ningún error

  });

});
