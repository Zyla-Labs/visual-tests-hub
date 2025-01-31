import '@percy/cypress';
describe('Test visuales dentro de My APIs', () => {
    
    beforeEach(() => {
        cy.visit('/');
        cy.login('martin@zylalabs.com', 'zyla3690');
        cy.visit('/api');
    });

    it('Debe tomar captura de la talba de My APIs', () => {
        cy.wait(2000);
        cy.percySnapshot('My APIs Table');
    });


    it('Debe tomar captura de las APIs filtradas por texto', () => {
        //Steps
        cy.visit('/api');
        cy.get('[data-cy="Search-api-my-apis"]').type('site traffic').type('{enter}')
        cy.wait(2000);
        cy.percySnapshot('My APIs filtered by text');
    });


    it('Debe tomar captura de las APIs filtradas por live', () => {
        //Steps
        cy.visit('/api');
        cy.get('[data-cy="status-api-my-apis"]').select('Live').type('{enter}')
        cy.wait(2000);
        cy.percySnapshot('Live APIs');
    });

    it('Debe tomar captura de las APIs filtradas por pending', () => {
        //Steps
        cy.visit('/api');
        cy.get('[data-cy="status-api-my-apis"]').select('Pending Approval').type('{enter}')
        cy.wait(2000);
        cy.percySnapshot('Pending APIs');
    });

    it('Debe tomar captura de las APIs filtradas por deleted', () => {
        //Steps
        cy.visit('/api');
        cy.get('[data-cy="status-api-my-apis"]').select('Deleted').type('{enter}')
        cy.wait(2000);
        cy.percySnapshot('Deleted APIs');
    });

    it('Debe tomar captura del no results state', () => {
        cy.wait(2000);
        cy.get('[data-cy="Search-api-my-apis"]').type('aca no tiene que haber resultados').type('{enter}')
        cy.wait(2000);
        cy.percySnapshot('No results state My APIs');
    });
});