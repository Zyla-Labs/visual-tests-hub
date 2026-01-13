// ***********************************************************
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
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import '../support/commands';
import '@percy/cypress';

// Add header to cy.visit() calls
Cypress.Commands.overwrite('visit', (originalFn, url, options = {}) => {
  // Validar que url existe y es un string
  if (!url || typeof url !== 'string') {
    return originalFn(url, options);
  }
  
  // Asegurarse de que options existe y tiene headers
  if (!options) {
    options = {};
  }
  if (!options.headers) {
    options.headers = {};
  }
  options.headers['zyla-cypress-test'] = 'true';
  return originalFn(url, options);
});

// Interceptar todas las requests HTTP para agregar headers
// Se configura en cada suite antes de que se ejecuten los tests
beforeEach(() => {
  cy.intercept('**', (req) => {
    // Asegurarse de que req y req.headers existen antes de modificarlos
    if (req && req.headers && typeof req.headers === 'object') {
      req.headers['zyla-cypress-test'] = 'true';
    }
  });
});

Cypress.on('uncaught:exception', (err) => {
    // Ignora errores de AOS
    if (err.message.includes('AOS is not defined')) {
      return false;
    }
    if (
      err.message.includes("Cannot read properties of null (reading 'tagName')") ||
      err.message.includes("Cannot read properties of undefined (reading 'replaceAll')")
    ) {
      // Retorna false para prevenir que Cypress falle la prueba
      return false;
    }
    // Ignora errores de jQuery si no afecta la funcionalidad
    if (err.message.includes('$ is not defined')) {
      return false;
    }
    if (err.message.includes('Cannot read properties of null (reading \'addEventListener\')')) {
        return false;
    }
    // Ignorar errores de selectize
    if (err.message.includes('selectize is not a function')) {
      return false;
  }
    // Ignora errores que contienen 'niceSelect is not a function'
    if (err.message.includes('niceSelect')) {
      return false;
    }
  });