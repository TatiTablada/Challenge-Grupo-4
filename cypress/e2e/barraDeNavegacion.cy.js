describe("Barra de Navegacion", () => {
  beforeEach(() => {
    cy.visit("https://automationintesting.online/");
  });

  // NAVBAR-001, NAVBAR-002, NAVBAR-003

  it("Redireccionar al usuario al inicio", () => {
    cy.get("#navbarNav").contains("Rooms").click();
    cy.contains("h2", "Our Rooms").should("be.visible");
    cy.get(".navbar-brand").should("have.text", "Shady Meadows B&B").click();
    cy.contains("Welcome to Shady Meadows B&B").should("be.visible");
  });

  it("Dirigir al usuario a la seccion Rooms", () => {
    cy.get("#navbarNav").contains("Rooms").click();
    cy.contains("h2", "Our Rooms").should("be.visible");
    cy.contains("Double").should("be.visible");
  });

  it("Dirigir al usuario a la seccion Booking", () => {
    cy.get("#navbarNav").contains("Booking").click();
    cy.contains("h3", "Check Availability & Book Your Stay").should(
      "be.visible",
    );
  });

  // NAVBAR-005, NAVBAR-006

  it("Dirigir al usuario a la seccion Location", () => {
    cy.get("#navbarNav").contains("Location").click();
    cy.url().should("include", "#location");
    cy.get("#location").should("be.visible");
  });

  it("Dirigir al usuario a la seccion Contact", () => {
    cy.get("#navbarNav").contains("Contact").click();
    cy.url().should("include", "#contact");
    cy.get("#contact").should("be.visible");
  });

  // NAVBAR-007
  it("Debe redirigir al usuario al formulario de inicio de sesión del Admin", () => {
    // Localizar y hacer clic en el enlace "Admin" del navbar
    cy.contains(".nav-link", "Admin").should("be.visible").click();

    // El resultado esperado es:
    // El sistema debe redirigir al usuario al formulario de inicio de sesión del Admin.
    cy.url().should("include", "https://automationintesting.online/admin");

    // Validamos que los elementos esenciales del formulario estén visibles
    cy.get("#username").should("be.visible");
    cy.get("#password").should("be.visible");
    cy.get("#doLogin").should("be.visible");
  });
});
