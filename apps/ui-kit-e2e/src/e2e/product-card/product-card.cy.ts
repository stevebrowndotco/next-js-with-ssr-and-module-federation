describe('ui-kit: ProductCard component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=productcard--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ProductCard!');
    });
});
