class Home {
    constructor() {
        this.elements = {
            btnTranferencia: () => cy.get('#btn-TRANSFERÊNCIA'),
            btnExtrato: () => cy.get('#btn-EXTRATO')
        }
    }

    btnTranferencia() {
        this.elements.btnTranferencia().click()
    }

    btnExtrato() {
        this.elements.btnExtrato().click()
    }
}

export const homePage = new Home()