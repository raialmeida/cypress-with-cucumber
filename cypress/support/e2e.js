import './commands'
import '@shelex/cypress-allure-plugin'

beforeEach({ tags: '@cadastro' }, () => {
    cy.visit('/')
    cy.cadastro('almeidateste@hotmail.com', '741852')
    cy.cadastro('almeidateste2@hotmail.com', '741852')
})

beforeEach(() => {
    cy.login('almeidateste@hotmail.com', '741852')
})