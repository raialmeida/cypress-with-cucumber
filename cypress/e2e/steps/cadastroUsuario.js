const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor")

import { cadastroUsuario } from "../pages/cadastroUsuario"

Given(/^que esteja na pagina de cadastro de usuario$/, () => {
    cadastroUsuario.btnRegistrar()
})

When(/^preenho os informção de cadastro$/, () => {
    return true
})

Then(/^deve exibir a msg de usuario cadastrada$/, () => {
    return true
})