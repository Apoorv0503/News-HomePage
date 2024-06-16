describe('News Homepage Navigation Menu', () => {
  beforeEach(() => {
    // Load the homepage before each test
    cy.visit('index.html'); // Adjust the path to your local file or deployed application
  });

  it('should open menu when menu button is clicked', () => {
    // Click on the menu button to open the navigation menu
    cy.get('#menu-button').click();

    // Assert that the navigation menu has the "open" class
    cy.get('nav').should('have.class', 'open');
  });

  it('should close menu when close button is clicked', () => {
  
    cy.get('#menu-button').click();

    // Click on the close button to close the navigation menu
    cy.get('#menu-close').click();

    // Assert that the navigation menu does not have the "open" class
    cy.get('nav').should('not.have.class', 'open');
  });

  it('should display navigation items correctly on desktop', () => {
    // Set the viewport to a desktop size
    cy.viewport(1280, 720);

    // Assert that the navigation items are visible
    cy.get('.nav-itmes').should('be.visible');
    cy.get('.menu-button button').should('not.be.visible');
  });

  it('should display hamburger menu icon on mobile view', () => {
    // Set the viewport to a mobile size
    cy.viewport(375, 667);

    // Assert that the hamburger menu icon is visible
    cy.get('.menu-button button').should('be.visible');

    // Assert that the navigation items are not visible
    cy.get('.nav-itmes').should('not.be.visible');
  });

  it('should display hero section correctly', () => {
    // Assert that the hero image and text are displayed correctly
    cy.get('.hero-img img').should('be.visible');

    //matching is case sensitive
    cy.get('.main-text').should('contain.text', 'The Bright Future of Web 3.0?');
  });

  it('should display news articles in the right block correctly', () => {
    // Assert that the news articles in the right block are displayed with correct text
    cy.get('.right-block .news1 h3').should('contain.text', 'Hydrogen VS Electric Cars');
    cy.get('.right-block .news2 h3').should('contain.text', 'The Downsides of AI Artistry');
    cy.get('.right-block .news3 h3').should('contain.text', 'Is VC Funding Drying Up?');
  });

  it('should display news cards at the bottom correctly', () => {
    // Assert that the news cards are displayed with correct images and text
    cy.get('.second-section .card').should('have.length', 3);
    cy.get('.second-section .card').eq(0).find('h3').should('contain.text', 'Reviving Retro PCs');
    cy.get('.second-section .card').eq(1).find('h3').should('contain.text', 'Top 10 Laptops of 2022');
    cy.get('.second-section .card').eq(2).find('h3').should('contain.text', 'The Growth of Gaming');
  });
});


describe('Hero Image Responsiveness', () => {
  beforeEach(() => {
    // Load the homepage before each test
    cy.visit('index.html'); // Adjust the path to your local file or deployed application
  });

  it('should display correct hero image for desktop view', () => {
    // Set the viewport to a desktop size
    cy.viewport(1280, 720);

    // Check the hero image source for desktop view
    cy.get('.hero-img picture source[media="(min-width: 1100px)"]')
      .should('have.attr', 'srcset', './assets/images/image-web-3-desktop.jpg');

    // Ensure the img tag is displaying the desktop image
    // cy.get('.hero-img img').should('have.attr', 'src', './assets/images/image-web-3-desktop.jpg');
  });

  it('should display correct hero image for mobile view', () => {
    // Set the viewport to a mobile size
    cy.viewport(375, 667);

    // Check the hero image source for mobile view
    cy.get('.hero-img img').should('have.attr', 'src', './assets/images/image-web-3-mobile.jpg');
  });
});
