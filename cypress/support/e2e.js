import './commands'
import '@shelex/cypress-allure-plugin'

beforeEach(() => {
    cy.visit('/')
})