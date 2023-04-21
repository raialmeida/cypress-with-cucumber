class CadastroUsuario {
    elements = {
        btnRegistrar: () => cy.get('.ihdmxA'),
        inputEmail: () => cy.get(''),
        inputNome: () => cy.get(''),
        InputSenha: () => cy.get(''),
        InputConfirmarSenha: () => cy.get(''),
        btnCadastrar: () => cy.get(''),
        checkCriarSaldo: () => cy.get(''),
    }

    btnRegistrar() {
        this.elements.btnRegistrar().click();
    }
}

export const cadastroUsuario = new CadastroUsuario()