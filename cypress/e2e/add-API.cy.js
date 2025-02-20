import '@percy/cypress';
describe('Testing visual de add a new API', () => {
    
    beforeEach(() => {
        cy.visit('/');
        cy.login('martin@zylalabs.com', 'zyla3690');
    });

    it('Debe tomar captura del primer step de add new API y el segundo', () => {
        cy.visit('/v2/api/create');
        cy.wait(2000);
        cy.percySnapshotIfAllowed('Add API empty fields');
        cy.get('[data-cy="api-name"]').type('New API Name for a lot of endpoints');
        cy.wait(1000);
        cy.get('[data-cy="api-short-description"]').type('A short description of this api is not a very good way to describe it');
        cy.get('[data-cy="api-select-category"]').click().type('{downarrow}{enter}');
        cy.get('[data-cy="add-tags"]').type('tagsito').type('{enter}');
        cy.get('[data-cy="url"]').type('https://www.zylalabs.com');
        cy.wait(1000);
        cy.percySnapshot('Add API completed fields');
    });

    it('Debe tomar captura de la screen de endpoints', () => {
        cy.visit('/api');
        cy.get('[data-cy="Search-api-my-apis"]').type("Site Traffic {enter}");
        cy.get('#row_api_29 > [style="text-align:left;"]').click();
        cy.get('[data-cy="step-edit-endpoints"]').click();
        cy.percySnapshot('Add API Endpoints');
        cy.get('[data-cy="add-new-endpoint"]').click();
        cy.percySnapshot('Add API add endppoint');
    });

    it('Debe tomar captura de la screen de plans', () => {
        cy.visit('/api');
        cy.get('[data-cy="Search-api-my-apis"]').type("Site Traffic {enter}");
        cy.get('#row_api_29 > [style="text-align:left;"]').click();
        cy.percySnapshot('Plans Screen');
        cy.get('.align-items-center > .btn').click();
        cy.percySnapshot('Add Plan Screen')
    });
    it('Debe tomar captura de la screen de FAQs', () => {
        cy.visit('/api');
        cy.get('[data-cy="Search-api-my-apis"]').type("Site Traffic {enter}");
        cy.get('#row_api_29 > [style="text-align:left;"]').click();
        cy.get('[data-cy="step-edit-faqs"]').click();
        cy.wait(1000);
        cy.percySnapshot('FAQs screen');
        cy.get('[href="https://zylalabs.com/v2/api/faqs/create?api_id=4210"]').click();
        cy.percySnapshot('Add FAQ screen');
    });

    it('Debe tomar captura de la screen de Preview', () => {
        cy.visit('/api');
        cy.get('[data-cy="status-api-my-apis"]').select('Live');
        cy.wait(2000);
        cy.get('#row_api_4210 > :nth-child(6) > .input-group > .rounded.text-decoration-none').click();
        cy.wait(2000);
        cy.percySnapshot('Preview Screen') 
    });

});