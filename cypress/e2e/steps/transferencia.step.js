import { homePage } from '../pages/home.page'
import { transferencia } from '../pages/transferencia.page'
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given(/^que estela na tela de transfêrencia$/, () => {
    homePage.btnTranferencia()
})

When(/^faço a tranferencia no valor de "([^"]*)"$/, (valor) => {
    transferencia.preencherDadosConta(Cypress.env('conta'), Cypress.env('digito'), valor, 'teste')
    transferencia.btnTransferir()
})

Then(/^deve subtrair do saldo da conta$/, () => {

})

Then(/^não deve realizar a transfêrencia informando saldo insuficiente$/, () => {

})