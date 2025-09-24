import '@percy/cypress';
describe('Test visuales dentro de subscriptions', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login('martin@zylalabs.com', 'zyla3692');
        cy.visit('/subscriptions');
    });


    it('Debe tomar captura de la talba de subscriptions', () => {
        cy.wait(2000);
        cy.percySnapshot('Subscriptions Table');
    });
    it('Debe tomar captura de la tabla filtrada por texto', () => {
        //Steps
        cy.visit('/subscriptions');
        cy.get('[data-cy="Search-api-subscriptions"]').type('Fuel India API').type('{Enter}');
        cy.wait(2000);
        cy.percySnapshot('Subscriptions filtered by text');
    });
    
    it('Debe tomar captura de la tabla filtrada por active', () => {
        //Steps
        cy.visit('/subscriptions');
        cy.get('[data-cy="status-api-subscriptions"]').select('Active').type('{enter}');
        cy.wait(2000);
        cy.percySnapshot('Active Subsriptions')
    });

    it('Debe filtrar por status Canceled en subscriptions', () => {
        //Steps
        cy.visit('/subscriptions');
        cy.get('[data-cy="status-api-subscriptions"]').select('Canceled').type('{enter}');
        cy.wait(2000);
        cy.percySnapshot('Canceled Subscriptions');
    });

    it('Debe tomar captura del no results state', () => {
        //Steps
        cy.visit('/subscriptions');
        cy.get('[data-cy="Search-api-subscriptions"]').type('aca no tiene que haber resultados').type('{Enter}');
        cy.wait(2000);
        cy.percySnapshot('No results state subscriptions');
    });

});