class CadastroUsuario {
    constructor() {
        this.elements = {
            btnRegistrar: () => cy.get('.ihdmxA'),
            inputEmail: () => cy.get(':nth-child(2) > .input__default'),
            inputNome: () => cy.get(':nth-child(3) > .input__default'),
            inputSenha: () => cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default'),
            inputConfirmarSenha: () => cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default'),
            btnCadastrar: () => cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0'),
            checkCriarSaldo: () => cy.get('#toggleAddBalance'),
            modalText: () => cy.get('#modalText'),
            btnCloseModal: () => cy.get('#btnCloseModal')
        }
    }

    btnRegistrar() {
        this.elements.btnRegistrar().click()
    }

    preencherFormulario(email, nome, senha, confirmSenha) {
        this.elements.inputEmail().type(email, { force: true })
        this.elements.inputNome().type(nome, { force: true })
        this.elements.inputSenha().type(senha, { force: true })
        this.elements.inputConfirmarSenha().type(confirmSenha, { force: true })
    }

    checkCriarSaldo() {
        this.elements.checkCriarSaldo().click()
    }

    btnCadastrar() {
        this.elements.btnCadastrar().click({ force: true })
    }

    validarModalText(texto) {
        this.elements.modalText().should('contain.text', texto)
        this.elements.btnCloseModal().click({ force: true })
    }
}

export const cadastroUsuario = new CadastroUsuario()