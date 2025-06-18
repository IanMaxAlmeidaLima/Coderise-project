describe('Websites login and registration functionality testing', () => {
  it('Logging in with correct credentials', () => {
    cy.visit('home.html')

    cy.get('#iniciar').click()

    cy.get('#login > a > button > figure > img').click()
  })

   it('SingingUp with valid credentials', () => {
    cy.visit('home.html')

    cy.get('#iniciar').click()

    cy.get('#cadastro > a > button > figure > img').click()
  })

  it('Searching for accessibilities', () => {
    cy.visit('home.html')

    cy.get('#hamburger_btn').click()

    cy.get('#opcoes').should('be.visible')

    cy.get('#acess').click()

    cy.get('[vw-access-button]').should('be.visible')
  })

  it('Searching for suport number', () => {
    cy.visit('home.html')

    cy.get('#hamburger_btn').click()

    cy.get('#opcoes').should('be.visible')

    cy.get('#suporte').click()

    cy.on('window:alert', (str) => {
      expect(str).to.exist
    })
    
  })
  it('Searching for privacy politics', () => {
    cy.visit('home.html')

    cy.get('#hamburger_btn').click()

    cy.get('#opcoes').should('be.visible')

    cy.get('#politica').click()

    cy.visit('politicas.html')
  })

  it('Opening website social medias', () => {
    cy.visit('home.html')

    cy.get('#redes').should('be.visible')

    cy.get('#instagram').click()

    cy.visit('https://www.instagram.com/')
  })
})