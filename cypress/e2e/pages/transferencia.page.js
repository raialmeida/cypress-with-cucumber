class Transferencia {
    constructor() {
        this.elements = {
            inputConta: () => cy.get('input[type*="accountNumber"]'),
            inputDigito: () => cy.get('input[type*="digit"]'),
            inputValor: () => cy.get('input[type*="transferValue"]'),
            inputDescricao: () => cy.get('input[type*="description"]'),
            btnTransferir: () => cy.get('button[type*="submit"]')

        }
    }

    preencherDadosConta(conta, digito, valor, descrição) {
        this.elements.inputConta().type(conta)
        this.elements.inputDigito().type(digito)
        this.elements.inputValor().type(valor)
        this.elements.inputDescricao().type(descrição)
    }

    btnTransferir() {
        this.elements.btnTransferir().click()
    }
}

export const transferencia = new Transferencia()