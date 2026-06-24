# Proyecto de Automatización de Pruebas con Cypress - Grupo 4

Este repositorio contiene la suite de pruebas automatizadas desarrollada para el **Challenge de QA Automation**. El objetivo del proyecto es asegurar la calidad y el correcto funcionamiento de los componentes clave de la aplicación web a través de pruebas de regresión y validaciones de interfaz de usuario.

---

## 👥 Integrantes del Equipo
*   **Micaela Martinez**
*   **Tatiana Tablada**
*   **Julian Sanguineti** 
*   **Gerardo Lauro Romero**
*   **Dario b**
*   **Ariel Monfardini**

---

## 🛠️ Tecnologías y Herramientas Utilizadas
*   **Lenguaje de Programación:** JavaScript
*   **Framework de Testing:** [Cypress](https://www.cypress.io/)
*   **Control de Versiones:** Git & GitHub 

---

## 📂 Estructura del Proyecto

El proyecto mantiene una estructura organizada basada en las buenas prácticas de Cypress:

```text
Challenge-Grupo-4/
├── cypress/
│   ├── e2e/
│   │   ├── myTestRestfulBooker.cy.js  # Pruebas automatizadas del Formulario de Contacto
│   │   └── barraDeNavegacion.cy.js # Pruebas de la Barra de Navegación
│   ├── fixtures/
│   │   └── [archivo].json             # Datos de prueba estáticos (Fixtures)
│   └── support/
└── cypress.config.js                  # Configuración global de Cypress

--- 

## Excepciones del Proyecto

// *********************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// *********************

// Import commands.js using ES2015 syntax:
import './commands'

// El sitio bajo prueba (automationintesting.online) es una app Next.js/React
// que lanza errores de hidratación de React (#418/#423, "Minified React error")
// durante el render. Son bugs de la app de terceros, ajenos a nuestros tests,
// pero por defecto Cypress falla el test ante cualquier excepción no capturada
// de la aplicación. Acá los ignoramos para que no rompan el beforeEach.
Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('Minified React error')) {
    return false // evita que Cypress falle el test por este error
  }
  // Cualquier otra excepción sí debe fallar el test
})