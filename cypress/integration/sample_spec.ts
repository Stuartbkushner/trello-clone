describe('My First Test', () => {
  it('Just there to make a test', () => {
    expect(true).to.equal(true)
  })
})

describe('Second Test', () => {
  it('Visits the app', () => {
    cy.visit('/');
  });
});
