import '@percy/cypress';
describe('Test visuales dentro de subscribers', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login('martin@zylalabs.com', 'zyla3692');
        cy.visit('/api');
        cy.wait(1000)
        cy.get('[data-cy="subscribers-btn"]').click();
    });


    it('Debe tomar captura de la talba de subscribers', () => {
        cy.wait(2000);
        cy.percySnapshot('Subscribers Table');
    });

    it('Debe filtrar por texto en subscribers', () => {
        //Steps
        cy.visit('/api');
        cy.wait(1000)
        cy.get('[data-cy="subscribers-btn"]').click();
        cy.wait(3000)
        cy.get('[data-cy="“Filter-api-subscribers”"]').select('Site Traffic API');
        cy.wait(4000);
        cy.percySnapshot('Subscribers filtered by text');
    });

    it('Debe filtrar por status active en subscribers', () => {
        //Steps
        cy.visit('/api');
        cy.wait(1000)
        cy.get('[data-cy="subscribers-btn"]').click();
        cy.wait(3000)
        cy.get('[data-cy="status-api-subscribers"]').select('Active');
        cy.wait(2000);
        cy.percySnapshot('Active Subscribers');
    });

    it('Debe filtrar por status canceled en subscribers', () => {
        //Steps
        cy.visit('/api');
        cy.wait(3000)
        cy.get('[data-cy="subscribers-btn"]').click();
        cy.wait(4000)
        cy.get('[data-cy="status-api-subscribers"]').select('Canceled');
        cy.wait(10000);
        cy.percySnapshot('Canceled Subscribers');
    });

   /* it('Debe tomar captura del no results state', () => {
        //Steps (esperando el cambio en los filtros)
        cy.visit('/api');
        cy.wait(1000)
        cy.get('[data-cy="subscribers-btn"]').click();
        cy.wait(3000)
        cy.get('[data-cy="“Filter-api-subscribers”"]').select('aca no tiene que haber resultados');
        cy.wait(2000);
        cy.percySnapshot('No results state subscribers');

    });*/
});