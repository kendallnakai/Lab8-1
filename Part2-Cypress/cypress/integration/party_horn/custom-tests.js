describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  /* My first test */
  it('1) Slider changes when volume input changes', () => {
    // select elements w cy.get() where inside put a str css selector
    cy.get('#volume-number').clear().type('75');
    // selecting now the slider in the same manner which has an id of volume-slide
    // to check the value or attributes of the element, retrieve the element with a 
    // callback function before you can manipulate it
    cy.get('#volume-slider').then($el => { 
      expect($el).to.have.value('75');
    });
  });

  /* My second test */
  it('2) Volume input changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then($el => { 
      expect($el).to.have.value('33');
    });
  });

  /* My third test */
  it('3) Volume input changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound').then($el => { 
      //expect($el).to.have.prop('volume', '0.33');
      expect($el).to.have.prop('volume', 0.33);
    });
  });

  /* Test if the image and sound sources change when you select the party horn radio button */
  it('4) Image and sound sources change when select party horn radio button', () => {
    // image 
    cy.get('#radio-party-horn').click();
    cy.get('#sound-image').then($el => { 
      expect($el).to.have.attr('src', './assets/media/images/party-horn.svg');
    });
    // sound 
    cy.get('#horn-sound').then($el => { 
      expect($el).to.have.attr("src", "./assets/media/audio/party-horn.mp3");
    });
  });

  /* Test if the volume image changes when increasing volumes */

  // level 3
  it('5.00) Volume image changes when increasing volumes', () => {
    cy.get('#volume-number').clear().type('0');
    cy.get('#volume-slider').invoke('val', 100).trigger('input');
    cy.get('#volume-image').then(function($el){
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg');
    });
  });

  // level 2
  it('5.25) Volume image changes when increasing volumes', () => {
    cy.get('#volume-number').clear().type('65');
    cy.get('#volume-slider').invoke('val', 65).trigger('input');
    cy.get('#volume-image').then(function($el){
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
    });
  });

  // level 1
  it('5.50) Volume image changes when increasing volumes', () => {
    cy.get('#volume-number').clear().type('32');
    cy.get('#volume-slider').invoke('val', 32).trigger('input');
    cy.get('#volume-image').then(function($el){
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
    });
  });

  // level 0 
  it('5.75) Volume image changes when increasing volumes', () => {
    cy.get('#volume-number').clear().type('0');
    cy.get('#volume-slider').invoke('val', 0).trigger('input');
    cy.get('#volume-image').then(function($el){
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg');
    });
  });

  /* Test if the honk button is disabled when the textbox input is a empty or a non-number */
  it('6) Honk button is disabled when the textbox input is a empty or a non-number', () => {
    // empty
    cy.get('#volume-number').clear();
    cy.get('#honk-btn').then(($el) => {
      expect($el).to.have.attr('disabled');
    });
    // non-number
    cy.get('#volume-number').clear().type('str');
    cy.get('#honk-btn').then(function($el){
      expect($el).to.have.attr('disabled');
    });
  });

  /* Test if an error is shown when you type a number outside of the given range for the volume textbox input */
  it('7) Error is shown when you type a number outside of the given range for the volume textbox input', () => {
    // less than volume input 
    cy.get('#volume-number').clear().type('-1');
    cy.get('input:invalid').then(($el) => {
      expect($el).to.exist;
    });
    cy.get('#volume-number:invalid').then(($el) => {
      expect($el).to.exist;
    });
    // greater than volume input
    cy.get('#volume-number').clear().type('1000');
    cy.get('input:invalid').then(($el) => {
      expect($el).to.exist;
    });
    cy.get('#volume-number:invalid').then(($el) => {
      expect($el).to.exist;
    });
  });
});