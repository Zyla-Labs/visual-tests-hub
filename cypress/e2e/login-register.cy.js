import '@percy/cypress';

describe('Testing visual del register, login y home page', () => {
  beforeEach(() => {
    cy.visit('/')
  });
  
  it('Captura la página de inicio', () => {
    cy.wait(1000)
    cy.percySnapshotIfAllowed('Homepage');
  });

  it('Captura la página de api marketplace', () => {
    cy.wait(2000)
    cy.login('agustind@zylalabs.com', Cypress.env('loginPass'));
    cy.visit('api-marketplace');
    cy.percySnapshotIfAllowed('Marketplace');
  });

  it('Captura la página de un item del marketplace', () => {
    cy.login('agu.donnetta+visual@gmail.com', Cypress.env('loginPass'));
    cy.wait(2000)
    cy.visit('/api-marketplace/data/site+traffic+api/29');
    cy.wait(2000);
    cy.percySnapshotIfAllowed('item-view');
    cy.get('[data-cy="pricing"]').click();
    cy.percySnapshotIfAllowed('Pricing');
    cy.get(':nth-child(4) > #faqs').click();
    cy.percySnapshotIfAllowed('FAQs');
    cy.get('#info').click();
    cy.percySnapshotIfAllowed('info');
  });

  it('Captura la página del login', () => {
    cy.get('[data-cy="login-header"]').click();
    cy.percySnapshotIfAllowed('Login')
  });

  it('Captura la página del register', () => {
    cy.get('[data-cy="signup-header"]').click();
    cy.percySnapshotIfAllowed('Register');
  });

  it('Captura el modal de login', () => {
    cy.visit('/api-marketplace/sports/exercise+database+api/392');
    cy.wait(2000)
    cy.percySnapshotIfAllowed('Login Modal');
  });

  it('Captura el modal de register', () => {
    cy.visit('/api-marketplace/sports/exercise+database+api/392');
    cy.wait(2000)
    cy.get('[data-cy="btn-close-login-modal"]').click();
    cy.get('[data-cy="signup-header"]').click();
    cy.wait(2000)
    cy.percySnapshotIfAllowed('Register Modal');
  });

});