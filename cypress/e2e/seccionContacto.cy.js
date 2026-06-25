describe('Suite de pruebas para la sección de contacto', () => {
    beforeEach(() => {
        cy.visit('https://automationintesting.online/')
        cy.get(':nth-child(5) > .nav-link').contains('Contact').click();
    });
    describe('Formulario de contacto', () => {

        it('Formulario de contacto con datos inválidos', () => {

            cy.fixture('datosInvalidosContacto').then((contactData) => {
                cy.get('[data-testid="ContactName"]').type(contactData.name);
                cy.get('[data-testid="ContactEmail"]').type(contactData.email);
                cy.get('[data-testid="ContactPhone"]').type(contactData.telefono);
                cy.get('[data-testid="ContactSubject"]').type(contactData.asunto);
                cy.get('[data-testid="ContactDescription"]').type(contactData.mensaje);
            });
            cy.get('.d-grid > .btn').click();
            cy.get('.alert.alert-danger').should('be.visible');
            cy.get('.alert.alert-danger').should('contain', 'Subject must be between 5 and 100 characters.');
            cy.get('.alert.alert-danger').should('contain', 'Phone must be between 11 and 21 characters.');
            cy.get('.alert.alert-danger').should('contain', 'Message must be between 20 and 2000 characters.');
            cy.get('.alert.alert-danger').should('contain', 'must be a well-formed email address');
        })
    })


    describe('Formulario de contacto - Validaciones del campo teléfono', () => {

        const escenarios = [
            { testName: 'Campo telefono con valor minimo', fixture: 'valor-minimo-datos' },
            { testName: 'Campo telefono con valor maximo', fixture: 'valor-maximo-datos' }
        ];

        escenarios.forEach((escenario) => {
            it(escenario.testName, () => {
                cy.completarFormularioContacto(escenario.fixture);
                cy.get('.alert.alert-danger').should('be.visible').and('contain', 'Phone must be between 11 and 21 characters.');
            });
        });

    })
})
