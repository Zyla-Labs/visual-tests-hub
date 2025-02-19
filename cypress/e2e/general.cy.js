import '@percy/cypress';
describe('Testing visual de account', () => {
    
    beforeEach(() => {
        cy.visit('/');
        cy.login('agustind@zylalabs.com', Cypress.env('loginPass'));
        cy.visit('/user-edit-account/51857');
        cy.wait(2000)
    });

    it('Debe tomar captura de la screen de account', () => {
        //Setps
        cy.percySnapshotIfAllowed('Account');
    });

    it('Debe tomar captura del modal de change email', () => {
        //Setps
        cy.get('[data-cy="change-email"]').click();
        cy.wait(1000);
        cy.percySnapshotIfAllowed('Change Email Modal');
    });

    it('Debe tomar captura del modal de delete account', () => {
        //Setps
        cy.get('#delete-account-button').click();
        cy.wait(1000);
        cy.percySnapshot('Delete Account Modal');
    });

    it('Debe tomar captura de la screen de identity verification', () => {
        cy.get(':nth-child(12) > .nav-link').click();
        cy.wait(1000);
        cy.percySnapshot('Identity Verification');
    });

});