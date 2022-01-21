My WebDriverIO learn repository

Require :
* Node JS
* NPM

How to install :
1. Create project folder
2. npm init -y
3. npm install webdriverio (optional add --save-dev)
4. npm install @wdio/cli
5. npx wdio run wdio.conf.js (will create new WebDriverIO config file) *choose settings: local,chromedriver or selenium driver, spec & dot 
6. npm install chai (optional add --save-dev)
7. npm install chai-webdriverio (optional add --save-dev) (use --force if can't install the package)
8. npm install local-runner (optional add --save-dev)
9. Add settings on wdio.conf.js
    *search beforeTest function
    *add script below
    const chai = require('chai')
    const chaiWebdriver = require('chai-webdriverio').default
    
    chai.use(chaiWebdriver(browser))
    
    global.assert = chai.assert
    global.should = chai.should
    global.expect = chai.expect

How to set different environment url:
1. create urls.js
2. add config below in top of wdio.conf.js
    const url = require('./urls.js')
    const ENV = process.env.ENV

    if(!ENV || !['qa', 'dev', 'staging'].includes(ENV)){
        console.log('Please use the following format when running the test script: ENV=qa|dev|staging')
        process.exit()
    }
3. change value baseUrl in wdio.conf.js to url[process.env.ENV],
    

How to run :
To run all test on specs folder
* npx wdio run wdio.conf.js 

To run single test file
* npx wdio run wdio.conf.js --spec {fileName} 

To run test group suites
* npx wdio run wdio.conf.js --suite {suiteSettingName} 

To run with specific environment url
* ENV=qa npx wdio run wdio.conf.js
NB: *need to set env first
    *for windows add npm package, npm install -g win-node-env

NB: if run with npm scripts add -- for --command, ex: npm run test -- --spec
