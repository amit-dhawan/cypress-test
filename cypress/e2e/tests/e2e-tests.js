/// <reference types='Cypress'/>

import SDETMainPage from '../../support/pageobjects/sdet-main-page.js'
import TomorrowTab from '../../support/pageobjects/sdet-tomorrow-page.js'

describe('E2E Test Suite', function () {


    this.beforeEach(function () {
        cy.fixture('example').then((data) => {
            this.data = data;
        })
        // launch url
        cy.visit(Cypress.env('url'))

    });

    it('User is able to add Asset in active tab - Happy Path', function () {
        const activePage = new SDETMainPage();

        // select option dropdown
        activePage.getSimpleDropDown().click();
        activePage.getOptionDropDown(this.data.selectValue).click();
        activePage.getFromField().type('10');
        activePage.getToField().type('100');
        activePage.getOverrideBtn().click();
        activePage.getSuccessMssgHeader().should('have.text', this.data.successSubmissionMsg);
        activePage.getAddedAsset1().should('have.text', this.data.selectValue);

    });

    it('User able to submit OFFER only flow - Happy path', function () {
        const activePage = new SDETMainPage();
        const tomorrowPage = new TomorrowTab();
        // click on tomorrow tab
        activePage.getTomorrowTab().click();
        activePage.getTomorrowTab().should('have.attr', 'aria-selected', 'true');
        // user sleect drop down value
        // select option dropdown
        activePage.getSimpleDropDown().click();
        activePage.getOptionDropDown(this.data.selectValue).click()
        tomorrowPage.getOfferField().type('2');
        tomorrowPage.getOfferPrice().type('5');
        tomorrowPage.getOfferUnDo().type('1');
        tomorrowPage.getAddBtn().click();

    });

    it('User able to submit BID only flow - Happy path', function () {
        const activePage = new SDETMainPage();
        const tomorrowPage = new TomorrowTab();
        // click on tomorrow tab
        activePage.getTomorrowTab().click();
        activePage.getTomorrowTab().should('have.attr', 'aria-selected', 'true');
        // user sleect drop down value
        // select option dropdown
        activePage.getSimpleDropDown().click();
        activePage.getOptionDropDown(this.data.selectValue).click()
        tomorrowPage.getBidField().type('-2');
        tomorrowPage.getBidPrice().type('5');
        tomorrowPage.getBidUndo().type('10');
        tomorrowPage.getAddBtn().click();

    });


});