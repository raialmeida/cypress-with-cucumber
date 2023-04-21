const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor")
import { faker } from '@faker-js/faker'
import { cadastroUsuario } from "../pages/cadastroUsuario"

Given(/^que esteja na pagina de cadastro de usuario$/, () => {
    cadastroUsuario.btnRegistrar()
})

When(/^preenho os informção de cadastro$/, () => {
    cadastroUsuario.preencherFormulario(faker.internet.email(), faker.name.fullName(), '123456', '123456')
    cadastroUsuario.btnCadastrar()
})

Then(/^deve exibir a msg de usuario cadastrada$/, () => {
    cadastroUsuario.validarModalText('foi criada com sucesso')
})