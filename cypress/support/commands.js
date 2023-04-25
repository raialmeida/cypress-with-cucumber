Cypress.Commands.add('login', (email, senha) => {
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type(email)
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type(senha)
    cy.get('.otUnI').click()
})

Cypress.Commands.add('cadastro', (email, senha) => {
    cy.get('.ihdmxA').click()
    cy.get(':nth-child(2) > .input__default').clear({ force: true }).type(email, { force: true })
    cy.get(':nth-child(3) > .input__default').clear({ force: true }).type('Teste', { force: true })
    cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').clear({ force: true }).type(senha, { force: true })
    cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').clear({ force: true }).type(senha, { force: true })
    cy.get('#toggleAddBalance').click({ force: true })
    cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({ force: true })
    cy.get('#toggleAddBalance').click({ force: true })
    cy.get('#modalText').invoke('text').then((text) => {
        const regex = /(\d{3})-(\d{1})/
        const match = regex.exec(text)
        const conta = match[1]
        const digito = match[2]
        Cypress.env('conta', conta)
        Cypress.env('digito', digito)
    })
    cy.get('#btnCloseModal').click({ force: true })
})