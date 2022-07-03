/// <reference types='Cypress'/>

import SDETMainPage from '../../support/pageobjects/sdet-main-page.js'

describe('Test Suite for field validations', function () {


    this.beforeEach(function () {
        cy.fixture('example').then((data) => {
            this.data = data;
        })
        // launch url
        cy.visit(Cypress.env('url'))

    });

    it('Validate From field', function () {
        // create object of SDETMainPage to call get functions
        var mainPage = new SDETMainPage();
        mainPage.getActiveTab().click();
        // blank field check
        mainPage.getFromField().clear();
        mainPage.getOverrideBtn().click();
        mainPage.getErrorMsgFromField().should('have.text', this.data.emptyValueErrMsg);
        // invalid string value check
        mainPage.getFromField().clear();
        mainPage.getFromField().type('abc');
        mainPage.getErrorMsgFromField().should('include.text', this.data.minValueInvalidValueErrMsg);
        // enter out of range value -1
        mainPage.getFromField().clear();
        mainPage.getFromField().type('-1');
        mainPage.getErrorMsgFromField().should('have.text', this.data.fromOutOfRangeValueErrMsg);

        // no error mssg when vlaid value entered
        // enter valid From field
        mainPage.getFromField().clear()
        mainPage.getFromField().type('1');
        mainPage.getOverrideBtn().click();
        mainPage.getErrorMsgFromField().should('not.be.visible');

    });


    it('Validate To field', function () {
        // create object of SDETMainPage to call get functions
        var mainPage = new SDETMainPage();
        mainPage.getActiveTab().click();
        // enter valid From field
        mainPage.getFromField().type('1');
        // blank field check
        mainPage.getToField().clear();
        mainPage.getOverrideBtn().click();
        mainPage.getErrorMsgTOField().should('have.text', this.data.emptyValueErrMsg);
        // invalid string value check
        mainPage.getToField().clear();
        mainPage.getToField().type('abc');
        mainPage.getErrorMsgTOField().should('include.text', this.data.maxValueInvalidValueErrMssg);
        // enter out of range value -1
        mainPage.getToField().clear();
        mainPage.getToField().type('-1');
        mainPage.getOverrideBtn().click();
        mainPage.getErrorMsgTOField().should('have.text', this.data.toOutOfRangeValueErrMsg);
        // no error mssg when vlaid value entered
        // enter valid TO field
        mainPage.getToField().clear()
        mainPage.getToField().click();
        mainPage.getToField().type('10');
        mainPage.getOverrideBtn().click();
        mainPage.getErrorMsgTOField().should('not.be.visible');

    });


    it('Validate DropDown field', function () {
        // create object of SDETMainPage to call get functions
        var mainPage = new SDETMainPage();
        // navigate to active tab
        mainPage.getActiveTab().click();
        // validate initial value is '' blank
        mainPage.getSimpleDropDown().should('have.value', '');

        // validate select value can't be blank ''
        mainPage.getFromField().type('1');
        mainPage.getToField().type('3');
        mainPage.getOverrideBtn().click();
        mainPage.getDropDownErrMssg().should('have.text', this.data.dropDownErrMssg);

        // validate dropDown values
        mainPage.getSimpleDropDown().click();
        mainPage.getDropDownValuesBox().find('li').each(($el, index, $list) => {
            expect($el.text()).to.equal(this.data.dropDownvalues[index]);
        })

        // select option dropdown
        mainPage.getOptionDropDown(this.data.selectValue).click()
        mainPage.getOverrideBtn().click();
        mainPage.getSuccessMssgHeader().should('have.text', this.data.successSubmissionMsg);
    })

    it('Validate Start time', function () {
        // create object of SDETMainPage to call get functions
        var mainPage = new SDETMainPage();

        // get Start Time Value

        // get current date time
        var d = new Date,
            currentDate = [d.getMonth() + 1,
            d.getDate(),
            d.getFullYear(), d.getHours(), d.getMinutes()].join('');

        mainPage.getStartTime().invoke('val').then((startDate) => {
            startDate = startDate.replaceAll('/', '');
            startDate = startDate.replaceAll(' ', '');
            startDate = startDate.replaceAll(':', '');

            // expect start date is greater than current date
            expect(parseInt(currentDate)).is.lessThan(parseInt(startDate));


        })
    });

    it('Validate To time should be after Start', function () {
        // create object of SDETMainPage to call get functions
        var mainPage = new SDETMainPage();

        mainPage.getStartTime().invoke('val').then((startDate) => {
            //get start Date in numbers
            startDate = startDate.replaceAll('/', '');
            startDate = startDate.replaceAll(' ', '');
            startDate = startDate.replaceAll(':', '');

            //get start End in numbers
            mainPage.getEndTime().invoke('val').then((endDate) => {
                endDate = endDate.replaceAll('/', '');
                endDate = endDate.replaceAll(' ', '');
                endDate = endDate.replaceAll(':', '');

                // expect End date is greater than Start date
                expect(parseInt(startDate)).is.lessThan(parseInt(endDate));

            })
        })
    })

});
