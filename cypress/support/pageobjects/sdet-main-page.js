/// <reference types='Cypress'/>

class SDETMainPage {
  // define page webElements

  getActiveTab() {
    return cy.contains('Active');
  }

  getFromField() {
    return cy.get('#minLevel');
  }

  getOverrideBtn() {
    return cy.contains('ADD OVERRIDE');
  }

  getErrorMsgFromField() {
    return cy.get(':nth-child(1) > .MuiGrid-grid-xs-12 > .makeStyles-formInputs-22 > .MuiGrid-container > .MuiGrid-grid-sm-8 > .makeStyles-error-24');
  }

  getErrorMsgTOField() {
    return cy.get(':nth-child(2) > .MuiGrid-grid-xs-12 > .makeStyles-formInputs-22 > .MuiGrid-container > .MuiGrid-grid-sm-8 > .makeStyles-error-24')
  };

  getToField() {
    return cy.get('#maxLevel');
  }

  getSimpleDropDown() {
    return cy.get('#demo-simple-select');
  }

  getDropDownErrMssg() {
    return cy.get('.makeStyles-error-20');
  }

  getDropDownValuesBox() {
    return cy.get('ul[aria-labelledby="demo-simple-select-label"]');
  }

  getopenDropDownBtn() {
    return cy.get('svg[data-testid="ArrowDropDownIcon"]');
  }

  getOptionDropDown(value) {
    return cy.contains(value);
  }

  getSuccessMssgHeader() {
    return cy.get('.MuiAlert-message');
  }
  getStartTime() {
    return cy.get('#mui-5');
  }

  getEndTime() {
    return cy.get('#mui-6');
  }

  getActiveTab() {
    return cy.get('#simple-tab-1');
  }


  getAddedAsset1() {
    return cy.get('th.MuiTableCell-body');
  }

  getAddedStartEndMinMaxLeavel1() {
    return cy.get('td.MuiTableCell-body');
  }

}

export default SDETMainPage;