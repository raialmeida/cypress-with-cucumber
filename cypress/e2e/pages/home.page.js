class Home {
    constructor() {
        this.elements = {
            btnTranferencia: () => cy.get('#btn-TRANSFERÊNCIA'),
        }
    }

    btnTranferencia() {
        this.elements.btnTranferencia().click()
    }
}

export const homePage = new Home()