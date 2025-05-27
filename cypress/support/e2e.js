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
import '@percy/cypress';

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