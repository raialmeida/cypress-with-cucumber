class CadastroUsuario {
    constructor() {
        this.elements = {
            btnRegistrar: () => cy.get('button:contains("Registrar")'),
            inputEmail: () => cy.get('input[name="email"]'),
            inputNome: () => cy.get('input[name="name"]'),
            inputSenha: () => cy.get('input[name="password"]'),
            inputConfirmarSenha: () => cy.get('input[name="passwordConfirmation"]'),
            btnCadastrar: () => cy.get('button:contains("Cadastrar")'),
            checkCriarSaldo: () => cy.get('#toggleAddBalance'),
            modalText: () => cy.get('#modalText'),
            btnCloseModal: () => cy.get('#btnCloseModal')
        }
    }

    btnRegistrar() {
        this.elements.btnRegistrar().click()
    }

    preencherDadosConta(email, nome, senha, confirmSenha) {
        this.elements.inputEmail().eq(1).type(email, { force: true })
        this.elements.inputNome().type(nome, { force: true })
        this.elements.inputSenha().eq(1).type(senha, { force: true })
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