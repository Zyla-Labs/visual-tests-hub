import '@percy/cypress';
describe('Test visuales dentro de payments received', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login('martin@zylalabs.com', 'zyla3692');
    });

    it('Debe tomar captura de la tabla de paymets received', () => {
        //Steps
        cy.visit('/api');
        cy.wait(2000);
        cy.get('[data-cy="payments-received-btn"]').click();
        cy.percySnapshot('Payments Received Table');
    });

    //pending filtros para cuando funcionen correctamente
});