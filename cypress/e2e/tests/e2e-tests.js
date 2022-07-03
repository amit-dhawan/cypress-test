/// <reference types='Cypress'/>

import SDETMainPage from '../../support/pageobjects/sdet-main-page.js'
import TomorrowTab from '../../support/pageobjects/sdet-tomorrow-page.js'

describe('E2E Test Suite', function () {


    this.beforeAll(function () {
        cy.fixture('example').then((data) => {
            this.data = data;
        })
        // launch url
        cy.visit(Cypress.env('url'))

    });

    it('User able to submit OFFER flow - Happy path', function () {
        const activePage = new SDETMainPage();
        const tomorrowPage = new TomorrowTab();
        // click on tomorrow tab
        activePage.getActiveTab().click();
        // user sleect drop down value
        // select option dropdown
        activePage.getSimpleDropDown().click();
        activePage.getOptionDropDown(this.data.selectValue).click()

        tomorrowPage.getAddBtn().click();


    });

});