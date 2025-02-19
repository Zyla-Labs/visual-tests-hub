import '@percy/cypress';
describe('Testing visual de add a new API', () => {
    
    beforeEach(() => {
        cy.visit('/');
        cy.login('martin@zylalabs.com', 'zyla3690');
    });

    it('Debe tomar captura del primer step de add new API y el segundo', () => {
        const apiIcon = 'add-api-icon.png'

        cy.visit('/v2/api/create');
        cy.wait(2000);
        cy.percySnapshotIfAllowed('Add API empty fields');
        cy.get('[data-cy="api-name"]').type('New API Name for a lot of endpoints');
        cy.wait(1000);
        cy.get('[data-cy="api-short-description"]').type('A short description of this api is not a very good way to describe it');
        cy.get('[data-cy="api-icon"]').attachFile(apiIcon);
        cy.get('[data-cy="api-long-description"]').type("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make");
        cy.get('[data-cy="api-select-category"]').click().type('{downarrow}{enter}');
        cy.get('[data-cy="add-tags"]').type('tagsito').type('{enter}');
        cy.get('[data-cy="url"]').type('https://www.zylalabs.com');
        cy.wait(1000);
        cy.percySnapshotIfAllowed('Add API completed fields');
    });

    it('Debe tomar captura de la screen de endpoints', () => {
        
    });

    it('Debe tomar captura de la screen de plans', () => {
        cy.visit('/api');
        cy.get('[data-cy="status-api-my-apis"]').select('Live');
        cy.get('#row_api_4210 > :nth-child(6) > .input-group > .rounded.text-decoration-none').click();
        cy.get('.progressBar > :nth-child(3) > a').click();
        cy.wait(1000);
        cy.percySnapshotIfAllowed('Plans Screen');
    });

    it('Debe tomar captura de la screen de edit plan', () => {
        cy.visit('/api');
        cy.get('[data-cy="status-api-my-apis"]').select('Live');
        cy.get('#row_api_4210 > :nth-child(6) > .input-group > .rounded.text-decoration-none').click();
        cy.get('.progressBar > :nth-child(3) > a').click();
        cy.get('#row_api_31468 > [align="left"] > .btn').click();
        cy.wait(1000);
        cy.percySnapshotIfAllowed('Edit Plan Screen');
    });

    it('Debe tomar captura de la screen de add plan', () => {
        cy.visit('/api');
        cy.get('[data-cy="status-api-my-apis"]').select('Live');
        cy.get('#row_api_4210 > :nth-child(6) > .input-group > .rounded.text-decoration-none').click();
        cy.get('.progressBar > :nth-child(3) > a').click();
        cy.get('.align-items-center > .btn').click();
        cy.wait(1000);
        cy.percySnapshotIfAllowed('Add Plan Screen');
    });

    it('Debe tomar captura de la screen de FAQs', () => {
        cy.visit('/api');
        cy.get('[data-cy="status-api-my-apis"]').select('Live');
        cy.get('#row_api_4210 > :nth-child(6) > .input-group > .rounded.text-decoration-none').click();
        cy.get('.progressBar > :nth-child(4) > a').click();
        cy.wait(1000);
        cy.percySnapshotIfAllowed('FAQs screen');
    });

    it('Debe tomar captura de la screen de Add FAQ', () => {
        cy.visit('/api');
        cy.get('[data-cy="status-api-my-apis"]').select('Live');
        cy.get('#row_api_4210 > :nth-child(6) > .input-group > .rounded.text-decoration-none').click();
        cy.get('.progressBar > :nth-child(4) > a').click();
        cy.get('[href="https://zylalabs.com/v2/api/faqs/create?api_id=4210"]').click();
        cy.wait(1000);
        cy.percySnapshotIfAllowed('Add FAQ screen');
    });

    it('Debe tomar captura de la screen de Preview', () => {
        cy.visit('/api');
        cy.get('[data-cy="status-api-my-apis"]').select('Live');
        cy.get('#row_api_4210 > :nth-child(6) > .input-group > .rounded.text-decoration-none').click();
        cy.wait(1000);
        cy.percySnapshotIfAllowed('Preview Screen') 
    });

});