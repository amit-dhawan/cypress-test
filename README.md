# cypress-test
Cypress Tests assignment

# Pre Req
- node v16.15.1 installed on machine
- SDET Test app is up and running at - http://localhost:3000/

# Run Tests using below command
- From cypress root directory run below command (to install all required packages for cypress test framework)
npm install 

- There are 2 spech files
    - activeTab-field-validations-tests.js
    - e2e-tests.js

- Run  bellow command to run all the test  in  spec file 
- command -> npm run cy:run -- --spec "{relative_path_of_Spec_file}"
- To run a field validations spec file -->> <code>npm run cy:run -- --spec ".\cypress\e2e\tests\activeTab-field-validations-tests.js"</code>

- The execution will run in headless mode, if you want to invoke the browser and see the execution run below:
 <code>npm run cy:run -- --browser chrome --headed--spec ".\cypress\e2e\tests\activeTab-field-validations-tests.js"</code>
