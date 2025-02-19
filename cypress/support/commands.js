// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
import 'cypress-file-upload';

Cypress.Commands.add('login', (email, password) => {
    cy.get('[data-cy="login-header"]').click();
    cy.get('[data-cy="login-email"]').type(email);
    cy.get('[data-cy="login-password"]').type(password);
    cy.get('[data-cy="login-password"]').click();
    cy.get('[data-cy="login-login-btn"]').click();
})

Cypress.Commands.add('percySnapshotIfAllowed', (name) => {  
    // Verificar tanto la variable de entorno como el navegador
    const browserFamily = process.env.PERCY_BROWSER_FAMILY || '';
    const currentBrowser = Cypress.browser.name.toLowerCase();
    
    cy.log(`Percy Browser Family: ${browserFamily}`);
    cy.log(`Current Browser: ${currentBrowser}`);
    
    if (currentBrowser === 'chrome') {
        try {
            // Forzar que solo se ejecute en Chrome
            cy.percySnapshot(name);
            cy.log(`✅ Percy snapshot tomado en Chrome: ${name}`);
        } catch (error) {
            cy.log(`❌ Error al tomar snapshot: ${error}`);
        }
    } else {
        cy.log(`⛔ Snapshot ignorado en ${currentBrowser}`);
        // Ejecutar un comando vacío para mantener la sincronización
        cy.get('body').then(() => {});
    }
});