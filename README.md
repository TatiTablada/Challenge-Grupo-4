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