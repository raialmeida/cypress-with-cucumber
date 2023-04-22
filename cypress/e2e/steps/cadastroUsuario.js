const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor")
import { faker } from '@faker-js/faker'
import { cadastroUsuario } from "../pages/cadastroUsuario"

Given(/^que esteja na página de cadastro de usuário$/, () => {
    cadastroUsuario.btnRegistrar()
})

When(/^preencho as informações de cadastro$/, () => {
    cadastroUsuario.preencherFormulario(faker.internet.email(), faker.name.fullName(), '123456', '123456')
    cadastroUsuario.btnCadastrar()
})

Then(/^deve exibir a mensagem de usuário cadastrado$/, () => {
    cadastroUsuario.validarModalText('foi criada com sucesso')
})