class Transferencia {
    constructor() {
        this.elements = {
            inputConta: () => cy.get('input[type*="accountNumber"]'),
            inputDigito: () => cy.get('input[type*="digit"]'),
            inputValor: () => cy.get('input[type*="transferValue"]'),
            inputDescricao: () => cy.get('input[type*="description"]'),
            btnTransferir: () => cy.get('button[type*="submit"]'),
            btnVoltar: () => cy.get('#btnBack'),
            saldoConta: () => cy.get('#textBalance > span'),
            saldoExtrato: () => cy.get('#textBalanceAvailable')
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

    btnVoltar() {
        this.elements.btnVoltar().click()
    }

    validarSaldo(valor) {
        this.elements.saldoConta().invoke('text').then((text) => {
            const valorAtual = text.replace(/\s/g, '')
            expect(valorAtual).to.equal(valor)
        })
    }

    validarSaldoExtrato(valor) {
        this.elements.saldoExtrato().invoke('text').then((text) => {
            const valorAtual = text.replace(/\s/g, '')
            expect(valorAtual).to.equal(valor)
        })
    }
}

export const transferencia = new Transferencia()