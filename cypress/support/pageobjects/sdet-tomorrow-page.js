/// <reference types='Cypress'/>


class TomorrowTab {

    getAddBtn() {
        return cy.contains('ADD OVERRIDE');
    }
    getOfferField() {

        return cy.get('#offer');
    }

    getOfferPrice() {
        return cy.get('#offer_price');
    }

    getOfferUnDo() {
        return cy.get('#offer_undo');
    }

    getBidField() {
        return cy.get('#bid');
    }

    getBidPrice() {
        return cy.get('#bid_price');
    }

    getBidUndo() {
        return cy.get('#bid_undo');
    }


}

export default TomorrowTab;