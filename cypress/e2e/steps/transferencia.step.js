import { homePage } from '../pages/home.page'
import { transferencia } from '../pages/transferencia.page'
import { Given, When, Then, Before } from '@badeball/cypress-cucumber-preprocessor'

Before({ tags: '@cadastro_conta' }, () => {
    cy.cadastro('almeidateste@hotmail.com', '741852')
    cy.cadastro('almeidateste2@hotmail.com', '741852')
    cy.login('almeidateste@hotmail.com', '741852')
})

Given(/^que estela na tela de transfêrencia$/, () => {
    homePage.btnTranferencia()
})

When(/^faço a tranferencia no valor de "([^"]*)"$/, (valor) => {
    transferencia.preencherDadosConta(Cypress.env('conta'), Cypress.env('digito'), valor, 'teste')
    transferencia.btnTransferir()
})

Then(/^deve subtrair do saldo da conta$/, () => {
    cy.validarTextoModal('Transferencia realizada com sucesso')
    transferencia.btnVoltar()
    transferencia.validarSaldo('R$900,00')
    homePage.btnExtrato()
    transferencia.validarSaldoExtrato('R$900,00')
})

Then(/^não deve realizar a transfêrencia informando saldo insuficiente$/, () => {
    cy.validarTextoModal('Você não tem saldo suficiente para essa transação')
})