describe('Admin Rooms', () => {
 
  beforeEach(() => {
    // Login al panel de admin
    cy.visit('https://automationintesting.online/admin')
    cy.get('#username').type('admin')
    cy.get('#password').type('password')
    cy.get('button[type=submit]').click()
 
    // Esperar a que cargue el panel admin antes de seguir
    cy.contains('Rooms').click()
    cy.get('#roomName').should('be.visible') // confirma que el form de rooms ya renderizó
  })
 
  // ADMIN-001: Crear habitación con datos válidos desde el admin
  it('Crear habitación con datos válidos', () => {
  cy.get('#roomName').clear().type('403')
  cy.get('#type').select('Single')
  cy.get('#accessible').select('true')
  cy.get('#roomPrice').clear().type('80')
  cy.get('#wifiCheckbox').check()
  cy.contains('button', 'Create').click()

  cy.contains('403').should('be.visible')
  cy.contains('Single').should('be.visible')
  cy.contains('80').should('be.visible')
})
 
  // ADMIN-002: Crear habitación sin completar campos obligatorios
  it('No crea habitación si faltan campos obligatorios', () => {
    cy.get('#roomName').clear()
    cy.get('#roomPrice').clear()
    // no tildar ningún amenity
    cy.contains('button', 'Create').click()
 
    cy.contains('Failed to create room').should('be.visible')
    cy.contains('665').should('not.exist')
  })
 
  // ADMIN-003: Crear habitación con precio en cero
  it('Rechaza la creación con precio en cero', () => {
    cy.get('#roomName').type('404')
    cy.get('#type').select('Single')
    cy.get('#roomPrice').clear().type('0')
    cy.contains('button', 'Create').click()

    cy.contains('must be greater than or equal to 1').should('be.visible')
    // Si el sistema muestra un mensaje específico de error, agregar acá el cy.contains correspondiente.
    // Si NO muestra ningún mensaje, este test documenta un bug (falta de feedback al usuario).
  })
 

  // ADMIN-004: Crear habitación con precio en negativo
  it('Rechaza la creación con precio en negativo', () => {
    cy.get('#roomName').type('404')
    cy.get('#type').select('Single')
    cy.get('#roomPrice').clear().type('-200')
    cy.contains('button', 'Create').click()

    cy.contains('must be greater than or equal to 1').should('be.visible')

  })

  // ADMIN-005: Crear habitación con precio extremadamente alto
  it('Rechaza la creación con precio extremadamente alto', () => {
    cy.get('#roomName').type('405')
    cy.get('#type').select('Double')
    cy.get('#roomPrice').clear().type('999999999')
    cy.contains('button', 'Create').click()
 
    cy.contains('must be less than or equal to 999').should('be.visible')
    cy.contains('405').should('not.exist')
 
  })

})