# Proyecto de Automatización de Pruebas con Cypress - Grupo 4

Este repositorio contiene la suite de pruebas automatizadas desarrollada para el **Challenge de QA Automation**. El objetivo del proyecto es asegurar la calidad y el correcto funcionamiento de los componentes clave de la aplicación web a través de pruebas de regresión y validaciones de interfaz de usuario.

---

## 👥 Integrantes del Equipo
*   **Micaela Martinez** micaelamartinez934@gmail.com 
*   **Tatiana Tablada** tatitablada14@gmail.com
*   **Julian Sanguineti** Juliangel2003@gmail.com
*   **Gerardo Lauro Romero** gerardolauroromero@gmail.com
*   **Dario b** Dariodev18@gmail.com
*   **Ariel Monfardini** ariel.monfardini@gmail.com

---

## 🛠️ Tecnologías y Herramientas Utilizadas
*   **Lenguaje de Programación:** JavaScript
*   **Framework de Testing:** [Cypress](https://www.cypress.io/)
*   **Control de Versiones:** Git & GitHub 

---


## 📂 Estructura del Proyecto

El proyecto mantiene una estructura organizada basada en las buenas prácticas de Cypress, separando la lógica de los tests, los comandos personalizados y los datos de prueba:

```text
Challenge-Grupo-4/
├── cypress/
│   ├── e2e/
│   │   ├── 1_reservar_double_room.cy.js    # Flujo de reserva para Habitación Doble
│   │   ├── 2_elegir_fecha.cy.js            # Validación y selección de fechas en el calendario
│   │   ├── 3_probar_mapa.cy.js             # Verificación visual y funcional del mapa de ubicación
│   │   ├── 4_reservar_single_room.cy.js    # Flujo de reserva para Habitación Simple
│   │   ├── AdminRooms.cy.js                # Pruebas del panel de administración de habitaciones
│   │   ├── bookNowSuite.cy.js              # Flujo de reserva rápido para la Suite
│   │   ├── contactoDatosInvalidos.cy.js    # Validación de alertas en el Formulario de Contacto
│   │   ├── reservasInicio.cy.js            # Verificaciones generales en la pantalla de inicio
│   │   ├── telefonoValorMaximo.cy.js       # Prueba de límite: Máximo de caracteres en teléfono
│   │   └── telefonoValorMinimo.cy.js       # Prueba de límite: Mínimo de caracteres en teléfono
│   │
│   ├── fixtures/
│   │   ├── datosContacto.json              # Datos válidos para el flujo feliz de contacto
│   │   ├── datosInvalidosContacto.json     # Datos con errores para pruebas negativas de contacto
│   │   ├── valor-maximo-datos.json         # Valores límite máximos para pruebas de frontera
│   │   └── valor-minimo-datos.json         # Valores límite mínimos para pruebas de frontera
│   │
│   └── support/
│       ├── commands.js                     # Custom Commands creados (ej: cy.llenarFormularioContacto)
│       └── e2e.js                          # Configuración global de soporte de Cypress
│
├── cypress.config.js                       # Configuración general del framework
├── package.json                            # Dependencias y scripts del proyecto
└── README.md                               # Documentación principal del repositorio

---

## Link de Google sheets y Trello 

[Google Sheets](https://docs.google.com/spreadsheets/d/1LnOtUhC2tWMmot4iqeZeBLTe_nUSgTDci1K1j0dh5xI/edit?usp=sharing)

[Trello](https://trello.com/invite/b/6a2dc802dc1e629a09f70b27/ATTI5107023d5f1d8940af2ad3fc6520a330611CA783/reporte-de-bugs-grupo-4)

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