describe("Sección Rooms", () => {
  beforeEach(() => {
    cy.visit("https://automationintesting.online/");
  });

  describe("Reservas (inicio de la pagina)", () => {
    // RESERVAS-012

    it('Click en "Book now" en las habitaciones - Double', () => {
      // Paso 1: Hace scroll hacia abajo y verifica que la sección de habitaciones sea visible
      cy.scrollTo(0, 1200);
      cy.get("#rooms > .container").should("be.visible");

      // Paso 2: Busca la segunda habitación ("Double") y hace click en su botón de reserva
      cy.get(":nth-child(2) > .card > .card-footer > .btn").click();

      // Paso 3: Valida que se abra el detalle de la habitación "Double Room" y cargue el formulario
      cy.get(".breadcrumb").should("be.visible").and("contain", "Double Room");
      cy.get(".col-lg-8").should("be.visible");
      cy.get(".shadow > :nth-child(1)").should("be.visible");
    });

    //RESERVA-008:
    it('Debe desplegar la sección de "Check Availability & Book Your Stay" al hacer click en "Book now" en la sección principal', () => {
      // 2. Click en "Book Now" en la sección principal (hero banner)
      cy.contains("Book Now").should("be.visible").click();

      // El resultado esperado es:
      // El sistema debe mostrar/desplegar el formulario de "Check Availability & Book Your Stay"
      cy.contains("Check Availability & Book Your Stay").should("be.visible");

      // Validamos que se muestren los campos del formulario de disponibilidad
      cy.contains("Check In").should("be.visible");
      cy.contains("Check Out").should("be.visible");
      cy.get("button").contains("Check Availability").should("be.visible");
    });

    //RESERVA-009:
    it("Debe filtrar las habitaciones disponibles durante las fechas seleccionadas", () => {
      // 2. Click en "Booking" en la barra de navegación (esto hace scroll hasta la sección de reserva)
      cy.get("a").contains("Booking").should("be.visible").click();

      // 3. Ingresar una fecha de ingreso y una fecha de salida
      // Ubicamos los inputs usando los labels correspondientes
      cy.contains("Check In").parent().find("input").clear().type("20/07/2026");

      // Al hacer click o escribir en el primer input, se puede abrir el datepicker.
      // Escribimos en el segundo input
      cy.contains("Check Out")
        .parent()
        .find("input")
        .clear()
        .type("25/07/2026");

      // Hacemos click en el título para cerrar cualquier datepicker que haya quedado abierto
      cy.contains("Check Availability & Book Your Stay").click();

      // 4. Click en "Check Availability"
      cy.get("button")
        .contains("Check Availability")
        .should("be.visible")
        .click();

      // El resultado esperado es:
      // El sistema debe filtrar las habitaciones disponibles durante las fechas seleccionadas.
      // Verificamos que se muestre al menos una habitación (representada por el botón "Book now").
      cy.contains("a.btn-primary", "Book now").should("be.visible");
    });
  });

  describe('Reserva - "Book now"', () => {
    it('Verificar funcionalidad del botón "Book now"', () => {
      cy.scrollTo("bottom");
      cy.get(".section-divider").contains("Our Rooms");
      cy.get(":nth-child(3) > .card > .card-footer > .btn").click();
    });
  });
});
