// Esta prueba abre el sitio y prueba el mapa que aparece en "Our Location"

describe('Probar el mapa de Our Location', () => {

  it('Hacer zoom y mover el mapa', () => {

    cy.visit('https://automationintesting.online/'); // Abrimos la página principal

    cy.contains('Our Location')            // Buscamos el texto "Our Location"
      .scrollIntoView();                   // Bajamos la pantalla hasta esa parte

    cy.get('.pigeon-overlays')             // Buscamos el mapa
      .parent()                            // Subimos al cuadro completo del mapa
      .as('mapa');                         // Le ponemos el nombre "mapa" para usarlo varias veces

    cy.get('@mapa')                        // Usamos el mapa
      .should('be.visible')                // Comprobamos que se vea en pantalla
      .trigger('wheel', { deltaY: -100 }); // Simulamos girar la rueda del mouse (hacer zoom)

    cy.get('@mapa')                        // Usamos el mapa otra vez
      .trigger('mousedown', { which: 1, pageX: 300, pageY: 300 }) // Apretamos el botón del mouse
      .trigger('mousemove', { which: 1, pageX: 200, pageY: 250 }) // Movemos el mouse para arrastrar
      .trigger('mouseup');                 // Soltamos el botón del mouse

    cy.get('@mapa')                        // Usamos el mapa otra vez
      .trigger('dblclick');                // Hacemos doble clic (otra forma de hacer zoom)

  });

});
