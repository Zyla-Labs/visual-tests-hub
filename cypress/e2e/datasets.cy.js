import '@percy/cypress';
describe('Testing visual de datasets', () => {
    
    beforeEach(() => {
        cy.visit('/')
        cy.login('agustind@zylalabs.com', Cypress.env('loginPass'));
        cy.visit('/datasets');
    });

    it('Debe tomar captura de la home de datasets', () => {
        cy.wait(3000);
        cy.percySnapshotIfAllowed('Datasets screen');
    });

    it('Debe tomar captura dela screen de un dataset', () => {
        cy.get(':nth-child(1) > .single_jobs > .jobs_left').click();
        cy.wait(2000);
        cy.percySnapshotIfAllowed('Dataset Item screen');
    });
});